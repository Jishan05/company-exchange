"use client";
import React, { useEffect, useState } from "react";
import FileUploader from "./FileUploader";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { BASE_URL } from "@/features/url";

const PostForm = ({ mode = "create", sellerId = null }) => {
  const [loading, setLoading] = useState(mode === "edit");
  const [formData, setFormData] = useState({
    user_id: null,
    mobile: "",
    name: "",
    company: "",
    email: "",
    rocState: "",
    activity: "",
    price: "",
    gst: "",
    compliance: "",
    incorporation: "",
    notes: "",
    tags: [],
    files: [],     // existing filenames from backend
    newFiles: []   // new uploads only
  });

  const [errors, setErrors] = useState({});


  // ---------------------------
  // FETCH DATA IN EDIT MODE
  // ---------------------------
  useEffect(() => {
    if (mode === "edit" && sellerId) {
      fetchSellerData();
    }
  }, [sellerId]);

  const fetchSellerData = async () => {
    try {
      const res = await fetch(`http://72.60.218.40:4048/api/sellers/seller/${sellerId}`);
      const data = await res.json();
      console.log('edit seller data  mk', data);


      if (data.success) {
        const s = data.data;

        setFormData({
          user_id: s.user_id || null,
          mobile: s.mobile || "",
          name: s.name || "",
          company: s.company || "",
          email: s.email || "",
          rocState: s.roc_state || "",
          activity: s.activity || "",
          price: s.price || "",
          gst: s.gst || "",
          compliance: s.compliance || "",
          incorporation: s.incorporation
            ? s.incorporation.substring(0, 10)
            : "",
          notes: s.notes || "",
          tags: Array.isArray(s.tags) ? s.tags : [],
          files: s.documents ? JSON.parse(s.documents) : [], // Parse JSON array
        });

      } else {
        toast.error("Failed to load seller data");
      }
    } catch (err) {
      console.log('edit seller err ', err);
      toast.error("Error loading data");
    }
    setLoading(false);
  };


  // const user = useSelector((state) => state.auth.user);

  // Handle change for input fields
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setFormData((prev) => {
        const tags = checked
          ? [...prev.tags, value]
          : prev.tags.filter((t) => t !== value);
        return { ...prev, tags };
      });
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }

    // clear error when user types
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  // Handle file upload
  const handleFileUpload = (files) => {
    setFormData(prev => ({
      ...prev,
      newFiles: files // only File objects
    }));

  };

  const validate = () => {
    let newErrors = {};

    // Name validation
    if (!formData.name) newErrors.name = "Name is required";

    // Mobile validation
    if (!formData.mobile) {
      newErrors.mobile = "Mobile Number is required";
    } else if (!/^[6-9]\d{9}$/.test(formData.mobile)) {
      newErrors.mobile = "Enter a valid 10-digit mobile number";
    }

    if (!formData.company) newErrors.company = "Company Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.rocState) newErrors.rocState = "Please select ROC State";
    if (!formData.activity) newErrors.activity = "Business Activity required";
    if (!formData.price) newErrors.price = "Expected Price required";
    if (!formData.gst) newErrors.gst = "Select GST status";
    if (!formData.compliance) newErrors.compliance = "Compliance status required";
    if (!formData.incorporation) newErrors.incorporation = "Year of Incorporation required";
    if (!formData.notes) newErrors.notes = "Notes are required";

    return newErrors;
  };


  // Submit form
  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   const newErrors = validate();
  //   if (Object.keys(newErrors).length > 0) {
  //     setErrors(newErrors);
  //     return;
  //   }

  //   setErrors({});
  //   setLoading(true);

  //   const payload = { ...formData };

  //   try {
  //     const endpoint =
  //       mode === "edit"
  //         ? `http://localhost:4048/api/sellers/seller/${sellerId}`
  //         : `http://localhost:4048/api/sellers/create`;

  //     const method = mode === "edit" ? "PUT" : "POST";

  //     const res = await fetch(endpoint, {
  //       method,
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify(payload),
  //     });

  //     const data = await res.json();

  //     if (!res.ok) {
  //       toast.error(data.error || "Action failed!");
  //       return;
  //     }

  //     toast.success(
  //       mode === "edit"
  //         ? "Seller updated successfully!"
  //         : "Seller created successfully!"
  //     );

  //     if (mode === "create") {
  //       setFormData({
  //         mobile: "",
  //         name: "",
  //         company: "",
  //         email: "",
  //         rocState: "",
  //         activity: "",
  //         price: "",
  //         gst: "",
  //         compliance: "",
  //         incorporation: "",
  //         notes: "",
  //         tags: [],
  //         files: [],
  //       });
  //     }
  //   } catch (error) {
  //     toast.error("Something went wrong. Try again.");
  //     console.error(error);
  //   }

  //   setLoading(false);
  // };


  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setLoading(true);

    const formDataObj = new FormData();

    Object.keys(formData).forEach((key) => {
      if (key === "newFiles") {
        formData.newFiles.forEach((file) => {
          formDataObj.append("documents", file);
        });
      } else if (key !== "files") {
        // "files" contains only backend filenames — do NOT send again
        formDataObj.append(key, formData[key]);
      }
    });

    const endpoint =
      mode === "edit"
        ? `http://72.60.218.40:4048/api/sellers/seller/${sellerId}`
        : `http://72.60.218.40:4048/api/sellers/create`;

    const method = mode === "edit" ? "PUT" : "POST";

    const res = await fetch(endpoint, {
      method,
      body: formDataObj,
    });

    const data = await res.json();
    setLoading(false);

    if (!res.ok) return toast.error(data.error || "Failed!");
    toast.success(mode === "edit" ? "Updated!" : "Created!");
  };


  const handleDeleteFile = async (filename) => {
    console.log('handle delete file ', filename);

    if (!confirm(`Delete ${filename}?`)) return;

    try {
      const res = await fetch(
        `http://72.60.218.40:4048/api/sellers/seller/${sellerId}/delete-file`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ filename }),
        }
      );

      const data = await res.json();
      if (data.success) {
        // UI se remove
        setFormData((prev) => ({
          ...prev,
          files: prev.files.filter((f) => f !== filename),
        }));
      } else {
        alert("Delete failed!");
      }
    } catch (err) {
      console.log(err);
    }
  };






  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   // Validate before sending
  //   const newErrors = validate();
  //   if (Object.keys(newErrors).length > 0) {
  //     setErrors(newErrors);
  //     return; // stop submit if errors
  //   }

  //   setErrors({});

  //   const company_data = {
  //     ...formData,
  //   };

  //   console.log('seller post data ', company_data);


  //   try {
  //     const res = await fetch(`http://localhost:4048/api/sellers/create`, {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify(company_data), //d full seller data
  //     });

  //     const data = await res.json();

  //     if (res.ok) {
  //       toast.success("Seller created successfully!");

  //       // clear form after success
  //       setFormData({
  //         mobile: "",
  //         name: "",
  //         company: "",
  //         email: "",
  //         rocState: "",
  //         activity: "",
  //         price: "",
  //         gst: "",
  //         compliance: "",
  //         incorporation: "",
  //         notes: "",
  //         tags: [],
  //         files: [],
  //       });
  //     } else {
  //       toast.error(data.error);
  //       alert(data.error || "Failed to create seller");
  //     }
  //   } catch (error) {
  //     toast.error("Something went wrong. Please try again.");
  //     console.error("❌ Error:", error.message);
  //     alert("Something went wrong. Please try again.");
  //   }
  // };

  return (
    <form className="row x-gap-20 y-gap-20" onSubmit={handleSubmit}>
      {/* Mobile Number */}
      <div className="col-md-6">
        <div className="form-input">
          <input
            type="text"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
          />
          <label>Mobile Number</label>
        </div>
        {errors.mobile && (
          <p style={{ color: "red", fontSize: 12 }}>{errors.mobile}</p>
        )}
      </div>


      {/* Name */}
      <div className="col-md-6">
        <div className="form-input">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <label>Your Name</label>
        </div>
        {errors.name && (
          <p style={{ color: "red", fontSize: 12 }}>{errors.name}</p>
        )}
      </div>

      {/* Company Name */}
      <div className="col-md-6">
        <div className="form-input">
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
          />
          <label>Company Name</label>
        </div>
        {errors.company && (
          <p style={{ color: "red", fontSize: 12 }}>{errors.company}</p>
        )}
      </div>

      {/* Email */}
      <div className="col-md-6">
        <div className="form-input">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <label>Email ID</label>
        </div>
        {errors.email && (
          <p style={{ color: "red", fontSize: 12 }}>{errors.email}</p>
        )}
      </div>

      {/* ROC State */}
      <div className="col-md-6">
        <div
          style={{ height: 68 }}
          className="d-flex align-items-center gap-2 px-3 py-3 rounded border"
        >
          <select
            name="rocState"
            value={formData.rocState}
            onChange={handleChange}
          >
            <option value="">Select ROC State</option>
            <option value="Ahmedabad – Dadra & Nagar Haveli">
              Ahmedabad – Dadra & Nagar Haveli
            </option>
            <option value="Ahmedabad – Daman & Diu">
              Ahmedabad – Daman & Diu
            </option>
            <option value="Bangalore – Karnataka">Bangalore – Karnataka</option>
            <option value="Chandigarh – Chandigarh">
              Chandigarh – Chandigarh
            </option>
            <option value="Chandigarh – Haryana">Chandigarh – Haryana</option>
            <option value="Chandigarh – Himachal Pradesh">
              Chandigarh – Himachal Pradesh
            </option>
            <option value="Chandigarh – Punjab">Chandigarh – Punjab</option>
            <option value="Chennai – Tamil Nadu (except Coimbatore)">
              Chennai – Tamil Nadu (except Coimbatore)
            </option>
            <option value="Chennai – Andaman & Nicobar">
              Chennai – Andaman & Nicobar
            </option>
            <option value="Coimbatore – Tamil Nadu (Coimbatore region)">
              Coimbatore – Tamil Nadu (Coimbatore region)
            </option>
            <option value="Cuttack – Odisha">Cuttack – Odisha</option>
            <option value="Delhi – Delhi">Delhi – Delhi</option>
            <option value="Ernakulam – Kerala">Ernakulam – Kerala</option>
            <option value="Ernakulam – Lakshadweep">
              Ernakulam – Lakshadweep
            </option>
            <option value="Goa – Goa">Goa – Goa</option>
            <option value="Gwalior – Madhya Pradesh">
              Gwalior – Madhya Pradesh
            </option>
            <option value="Gwalior – Chhattisgarh">
              Gwalior – Chhattisgarh
            </option>
            <option value="Hyderabad – Andhra Pradesh">
              Hyderabad – Andhra Pradesh
            </option>
            <option value="Hyderabad – Telangana">Hyderabad – Telangana</option>
            <option value="Jaipur – Rajasthan">Jaipur – Rajasthan</option>
            <option value="Jammu – Jammu & Kashmir">
              Jammu – Jammu & Kashmir
            </option>
            <option value="Jammu – Ladakh">Jammu – Ladakh</option>
            <option value="Kanpur – Uttar Pradesh">
              Kanpur – Uttar Pradesh
            </option>
            <option value="Kanpur – Uttarakhand">Kanpur – Uttarakhand</option>
            <option value="Kolkata – West Bengal">Kolkata – West Bengal</option>
            <option value="Kolkata – Sikkim">Kolkata – Sikkim</option>
            <option value="Mumbai – Maharashtra (Mumbai region)">
              Mumbai – Maharashtra (Mumbai region)
            </option>
            <option value="Pune – Maharashtra (Pune region)">
              Pune – Maharashtra (Pune region)
            </option>
            <option value="Patna – Bihar">Patna – Bihar</option>
            <option value="Patna – Jharkhand">Patna – Jharkhand</option>
            <option value="Shillong – Arunachal Pradesh">
              Shillong – Arunachal Pradesh
            </option>
            <option value="Shillong – Assam">Shillong – Assam</option>
            <option value="Shillong – Manipur">Shillong – Manipur</option>
            <option value="Shillong – Meghalaya">Shillong – Meghalaya</option>
            <option value="Shillong – Mizoram">Shillong – Mizoram</option>
            <option value="Shillong – Nagaland">Shillong – Nagaland</option>
            <option value="Shillong – Tripura">Shillong – Tripura</option>
          </select>
        </div>
        {errors.rocState && (
          <p style={{ color: "red", fontSize: 12 }}>{errors.rocState}</p>
        )}
      </div>

      {/* Business Activity */}
      <div className="col-md-6">
        <div
          style={{ height: 68 }}
          className="d-flex align-items-center gap-2 px-3 py-3 rounded border"
        >
          <select
            name="activity"
            value={formData.activity}
            onChange={handleChange}
          >
            <option value="">Select Business Activity</option>
            <option value="Manufacturing">Manufacturing</option>
            <option value="Information Technology">
              Information Technology
            </option>
            <option value="Trading & Distribution">
              Trading & Distribution
            </option>
            <option value="IT & Software">IT & Software</option>
            <option value="Financial Services">Financial Services</option>
            <option value="Real Estate">Real Estate</option>
            <option value="Infrastructure & Construction">
              Infrastructure & Construction
            </option>
            <option value="Logistics & Warehousing">
              Logistics & Warehousing
            </option>
            <option value="Hospitality, Travel & Tourism">
              Hospitality, Travel & Tourism
            </option>
            <option value="Healthcare & Life Sciences">
              Healthcare & Life Sciences
            </option>
            <option value="Education & Training">Education & Training</option>
            <option value="Energy & Utilities">Energy & Utilities</option>
            <option value="Agriculture & Food Processing">
              Agriculture & Food Processing
            </option>
            <option value="Media, Entertainment & Professional Services">
              Media, Entertainment & Professional Services
            </option>
            <option value="Others">Others</option>
          </select>
        </div>
        {errors.activity && (
          <p style={{ color: "red", fontSize: 12 }}>{errors.activity}</p>
        )}
      </div>

      {/* Expected Price */}
      <div className="col-md-6">
        <div className="form-input">
          <input
            type="text"
            name="price"
            value={formData.price}
            onChange={handleChange}
          />
          <label>Expected Price</label>
        </div>
        {errors.price && (
          <p style={{ color: "red", fontSize: 12 }}>{errors.price}</p>
        )}
      </div>

      {/* GST */}
      <div className="col-md-4">
        <div
          style={{ height: 68 }}
          className="d-flex align-items-center gap-2 px-3 py-3 rounded border"
        >
          <select name="gst" value={formData.gst} onChange={handleChange}>
            <option value="">Select GST</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        {errors.gst && (
          <p style={{ color: "red", fontSize: 12 }}>{errors.gst}</p>
        )}
      </div>

      {/* Compliance */}
      <div className="col-md-4">
        <div
          style={{ height: 68 }}
          className="d-flex align-items-center gap-2 px-3 py-3 rounded border"
        >
          <select
            name="compliance"
            value={formData.compliance}
            onChange={handleChange}
          >
            <option value="">Compliance</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        {errors.compliance && (
          <p style={{ color: "red", fontSize: 12 }}>{errors.compliance}</p>
        )}
      </div>

      {/* Year of Incorporation */}
      <div className="col-md-4">
        <div
          style={{ height: 68 }}
          className="d-flex align-items-center gap-2 px-3 py-3 rounded border"
        >
          <input
            type="date"
            name="incorporation"
            value={formData.incorporation}
            onChange={handleChange}
          />
        </div>
        {errors.incorporation && (
          <p style={{ color: "red", fontSize: 12 }}>{errors.incorporation}</p>
        )}
      </div>

      {/* Notes */}
      <div className="col-12 mt-30">
        <div className="form-input">
          <textarea
            name="notes"
            rows={5}
            value={formData.notes}
            onChange={handleChange}
            style={{ marginTop: 10 }}
          />
          <label>Free Text Notes</label>
        </div>
        {errors.notes && (
          <p style={{ color: "red", fontSize: 12 }}>{errors.notes}</p>
        )}
      </div>

      {/* Tags */}
      <div className="row x-gap-20 y-gap-15 col-12">
        <label className="mb-2 fw-500">Tags:</label>
        <div className="d-flex gap-3 flex-wrap">
          <label
            className="d-flex align-items-center gap-2 px-3 py-2 rounded border"
            style={{ cursor: "pointer", background: "#f9f9f9" }}
          >
            <input
              type="checkbox"
              name="tags"
              value="Docs Ready"
              checked={formData.tags.includes("Docs Ready")}
              onChange={handleChange}
            />
            DocsReady
          </label>

          <label
            className="d-flex align-items-center gap-2 px-3 py-2 rounded border"
            style={{ cursor: "pointer", background: "#f9f9f9" }}
          >
            <input
              type="checkbox"
              name="tags"
              value="Fast Transfer"
              checked={formData.tags.includes("Fast Transfer")}
              onChange={handleChange}
            />
            FastTransfer
          </label>

          <label
            className="d-flex align-items-center gap-2 px-3 py-2 rounded border"
            style={{ cursor: "pointer", background: "#f9f9f9" }}
          >
            <input
              type="checkbox"
              name="tags"
              value="Negotiable"
              checked={formData.tags.includes("Negotiable")}
              onChange={handleChange}
            />
            Negotiable
          </label>
        </div>
      </div>

      {/* Upload Files */}
      <div className="col-12 mt-30">
        <FileUploader onFilesChange={handleFileUpload} />
      </div>

      <div className="col-12 mt-3">
        <label>Uploaded Files:</label>
        <div className="d-flex gap-2 flex-wrap mt-2">
          {/* Existing saved files clickable */}
          {/* {formData.files?.map((file, index) => (
            <a
              key={index}
              href={`http://localhost:4048/uploads/${file}`}
              target="_blank"
              style={{ display: 'block' }}
            >
              📄 {file}
            </a>
          ))} */}

          {formData.files?.map((file, index) => (
            <div key={index} style={{ display: "flex", gap: 6 }}>
              <a
                href={`http://localhost:4048/uploads/${file}`}
                target="_blank"
              >
                📄 {file}
              </a>
              <button
                type="button"
                onClick={() => handleDeleteFile(file)}
                style={{ color: "red", border: "none", background: "transparent" }}
              >
                ❌
              </button>
            </div>
          ))}




          {/* Newly selected file names */}
          {formData.newFiles?.map((file, index) => (
            <div key={index}>
              📌 {file.name}
            </div>
          ))}
        </div>
      </div>


      {/* Submit */}
      <div className="d-inline-block pt-30">
        <button
          type="submit"
          className="button h-50 px-24 -dark-1 bg-blue-1 text-white"
        >
          {loading ? "Submitting..." : mode === "edit" ? "Update Post" : "Create Post"}
        </button>
      </div>
    </form>
  );
};

export default PostForm;

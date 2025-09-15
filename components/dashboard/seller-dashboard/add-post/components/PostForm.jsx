"use client";
import React, { useState } from "react";
import FileUploader from "./FileUploader";
import { useSelector } from "react-redux";

const PostForm = () => {
  const [formData, setFormData] = useState({
    user_id: null,
    mobile: "",
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
    files: [],
  });

  const [errors, setErrors] = useState({});

  const user = useSelector((state) => state.auth.user);

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
    setFormData((prev) => ({ ...prev, files }));
  };

  // Validate required fields
  const validate = () => {
    let newErrors = {};
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
    if (!formData.compliance)
      newErrors.compliance = "Compliance status required";
    if (!formData.incorporation)
      newErrors.incorporation = "Year of Incorporation required";
    if (!formData.notes) newErrors.notes = "Notes are required";
    return newErrors;
  };

  // Submit form
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate before sending
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return; // stop submit if errors
    }

    setErrors({});

    const company_data = {
      ...formData,
      user_id: user.id,
    };

    try {
      const res = await fetch("http://localhost:5000/api/sellers/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(company_data), //d full seller data
      });

      const data = await res.json();

      if (res.ok) {
        alert("✅ Seller created successfully!");
        console.log("Response:", data);

        // show JSON data in alert for testing
        alert(JSON.stringify(data, null, 2));

        // clear form after success
        setFormData({
          mobile: "",
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
          files: [],
        });
      } else {
        console.error("❌ Failed:", data);
        alert(data.error || "Failed to create seller");
      }
    } catch (error) {
      console.error("❌ Error:", error.message);
      alert("Something went wrong. Please try again.");
    }
  };

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
            <option value="ahmedabad-dnh">
              ROC Ahmedabad – Dadra & Nagar Haveli
            </option>
            <option value="ahmedabad-dd">ROC Ahmedabad – Daman & Diu</option>
            <option value="bangalore">ROC Bangalore – Karnataka</option>
            <option value="chandigarh-ch">ROC Chandigarh – Chandigarh</option>
            <option value="chandigarh-hr">ROC Chandigarh – Haryana</option>
            <option value="chandigarh-hp">
              ROC Chandigarh – Himachal Pradesh
            </option>
            <option value="chandigarh-pb">ROC Chandigarh – Punjab</option>
            <option value="chennai-tn">
              ROC Chennai – Tamil Nadu (except Coimbatore region)
            </option>
            <option value="chennai-an">
              ROC Chennai – Andaman & Nicobar Islands
            </option>
            <option value="coimbatore-tn">
              ROC Coimbatore – Tamil Nadu (Coimbatore region)
            </option>
            <option value="cuttack-or">ROC Cuttack – Odisha</option>
            <option value="delhi">ROC Delhi – Delhi</option>
            <option value="ernakulam-kl">ROC Ernakulam – Kerala</option>
            <option value="ernakulam-ld">ROC Ernakulam – Lakshadweep</option>
            <option value="goa">ROC Goa – Goa</option>
            <option value="gwalior-mp">ROC Gwalior – Madhya Pradesh</option>
            <option value="gwalior-cg">ROC Gwalior – Chhattisgarh</option>
            <option value="hyderabad-ap">ROC Hyderabad – Andhra Pradesh</option>
            <option value="hyderabad-ts">ROC Hyderabad – Telangana</option>
            <option value="jaipur-rj">ROC Jaipur – Rajasthan</option>
            <option value="jammu-jk">ROC Jammu – Jammu & Kashmir</option>
            <option value="jammu-ladakh">ROC Jammu – Ladakh</option>
            <option value="kanpur-up">ROC Kanpur – Uttar Pradesh</option>
            <option value="kanpur-uk">ROC Kanpur – Uttarakhand</option>
            <option value="kolkata-wb">ROC Kolkata – West Bengal</option>
            <option value="kolkata-sk">ROC Kolkata – Sikkim</option>
            <option value="mumbai-mum">
              ROC Mumbai – Maharashtra (Mumbai region)
            </option>
            <option value="pune-mh">
              ROC Pune – Maharashtra (Pune region)
            </option>
            <option value="patna-br">ROC Patna – Bihar</option>
            <option value="patna-jh">ROC Patna – Jharkhand</option>
            <option value="shillong-ar">
              ROC Shillong – Arunachal Pradesh
            </option>
            <option value="shillong-as">ROC Shillong – Assam</option>
            <option value="shillong-mn">ROC Shillong – Manipur</option>
            <option value="shillong-ml">ROC Shillong – Meghalaya</option>
            <option value="shillong-mz">ROC Shillong – Mizoram</option>
            <option value="shillong-nl">ROC Shillong – Nagaland</option>
            <option value="shillong-tr">ROC Shillong – Tripura</option>
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
            <option value="manufacturing">Manufacturing</option>
            <option value="it">Information Technology</option>
            <option value="trading">Trading & Distribution</option>
            <option value="software">Information Technology & Software</option>
            <option value="finance">Financial Services</option>
            <option value="real-estate">Real Estate</option>
            <option value="construction">Infrastructure & Construction</option>
            <option value="logistics">Logistics & Warehousing</option>
            <option value="hospitality">Hospitality, Travel & Tourism</option>
            <option value="healthcare">Healthcare & Life Sciences</option>
            <option value="education">Education & Training</option>
            <option value="energy">Energy & Utilities</option>
            <option value="agriculture">Agriculture & Food Processing</option>
            <option value="media">
              Media, Entertainment & Professional Services
            </option>
            <option value="others">Others</option>
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
            <option value="na">NA</option>
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
            <option value="updated">Updated</option>
            <option value="na">NA</option>
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

      {/* Upload */}
      {/* <div className="col-12 mt-30">
        <FileUploader onUpload={handleFileUpload} />
      </div> */}

      {/* Submit */}
      <div className="d-inline-block pt-30">
        <button
          type="submit"
          className="button h-50 px-24 -dark-1 bg-blue-1 text-white"
        >
          Save Changes
        </button>
      </div>
    </form>
  );
};

export default PostForm;

"use client";

import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { BASE_URL } from "@/features/url";

const PostForm = ({ mode = "create", buyerId = null }) => {
  const [loading, setLoading] = useState(mode === "edit");

  const [formData, setFormData] = useState({
    mobile: "",
    name: "",
    email: "",
    rocState: "",
    activity: "",
    budget: "",
    gst: "",
    ageOfCompany: "",
    notes: "",
    tags: [],
  });

  const [errors, setErrors] = useState({});

  // 🚀 Fetch Data in Edit Mode
  useEffect(() => {
    if (mode === "edit" && buyerId) {
      fetchBuyerData();
    }
  }, [buyerId]);

  const fetchBuyerData = async () => {
    try {
      const res = await fetch(`http://72.60.218.40:4048/api/buyers/buyer/${buyerId}`);
      const data = await res.json();
      console.log("Edit buyer data ==> ", data);

      if (data.success) {
        const b = data.data;

        setFormData({
          mobile: b.mobile || "",
          name: b.name || "",
          email: b.email || "",
          rocState: b.roc_state || "",
          activity: b.activity || "",
          budget: b.budget || "",
          gst: b.gst || "",
          ageOfCompany: b.age_of_company || "",
          notes: b.notes || "",
          tags: Array.isArray(b.tags) ? b.tags : [],
        });

      } else {
        toast.error("Failed to fetch buyer data");
      }
    } catch (err) {
      console.error("Fetch buyer error", err);
      toast.error("Error loading buyer data");
    }
    setLoading(false);
  };

  // Handle Input
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

    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  // Validation
  const validate = () => {
    const newErrors = {};

    if (!formData.mobile) newErrors.mobile = "Mobile number is required";
    else if (!/^[6-9]\d{9}$/.test(formData.mobile))
      newErrors.mobile = "Enter valid 10-digit mobile number";

    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.rocState) newErrors.rocState = "Select ROC state";
    if (!formData.activity) newErrors.activity = "Activity required";
    if (!formData.budget) newErrors.budget = "Budget required";
    if (!formData.gst) newErrors.gst = "Select GST";
    if (!formData.ageOfCompany) newErrors.ageOfCompany = "Company age required";
    if (!formData.notes) newErrors.notes = "Notes are required";

    return newErrors;
  };

  // Submit Form
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) return setErrors(newErrors);

    setLoading(true);

    const payload = { ...formData };

    try {
      const endpoint =
        mode === "edit"
          ? `http://72.60.218.40:4048/api/buyers/buyer/${buyerId}`
          : `http://72.60.218.40:4048/api/buyers/create`;

      const method = mode === "edit" ? "PUT" : "POST";

      const res = await fetch(endpoint, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.error || "Failed!");
        return;
      }

      toast.success(
        mode === "edit"
          ? "Buyer updated successfully!"
          : "Buyer created successfully!"
      );

      if (mode === "create") {
        setFormData({
          mobile: "",
          name: "",
          email: "",
          rocState: "",
          activity: "",
          budget: "",
          gst: "",
          ageOfCompany: "",
          notes: "",
          tags: [],
        });
      }
    } catch (err) {
      console.error("Submit error:", err);
      toast.error("Something went wrong!");
    }

    setLoading(false);
  };



  return (
    <form className="row x-gap-20 y-gap-20" onSubmit={handleSubmit}>
      {/* Mobile */}
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
          <label>Name</label>
        </div>
        {errors.name && (
          <p style={{ color: "red", fontSize: 12 }}>{errors.name}</p>
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
            <option value="Coimbatore – Tamil Nadu (Coimbatore)">
              Coimbatore – Tamil Nadu (Coimbatore)
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
            <option value="Mumbai – Maharashtra (Mumbai)">
              Mumbai – Maharashtra (Mumbai)
            </option>
            <option value="Pune – Maharashtra (Pune)">
              Pune – Maharashtra (Pune)
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

      {/* Activity */}
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

      {/* Budget */}
      <div className="col-md-6">
        <div
          style={{ height: 68 }}
          className="d-flex align-items-center gap-2 px-3 py-3 rounded border"
        >
          <select name="budget" value={formData.budget} onChange={handleChange}>
            <option value="">Budget Range</option>
            <option value="15-50k">₹15,000–₹50,000</option>
            <option value="50-100k">₹50,000–₹1,00,000</option>
          </select>
        </div>
        {errors.budget && (
          <p style={{ color: "red", fontSize: 12 }}>{errors.budget}</p>
        )}
      </div>

      {/* GST */}
      <div className="col-md-6">
        <div
          style={{ height: 68 }}
          className="d-flex align-items-center gap-2 px-3 py-3 rounded border"
        >
          <select name="gst" value={formData.gst} onChange={handleChange}>
            <option value="">GST Registered?</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        {errors.gst && (
          <p style={{ color: "red", fontSize: 12 }}>{errors.gst}</p>
        )}
      </div>

      {/* Age of Company */}
      <div className="col-md-6">
        <div
          style={{ height: 68 }}
          className="d-flex align-items-center gap-2 px-3 py-3 rounded border"
        >
          <select
            name="ageOfCompany"
            value={formData.ageOfCompany}
            onChange={handleChange}
          >
            <option value="">Age of Company Preferred</option>
            <option value="<1">Less than 1 year</option>
            <option value="1-3">1–3 years</option>
            <option value="3-5">3–5 years</option>
            <option value="5+">5+ years</option>
          </select>
        </div>
        {errors.ageOfCompany && (
          <p style={{ color: "red", fontSize: 12 }}>{errors.ageOfCompany}</p>
        )}
      </div>

      {/* Notes */}
      <div className="col-12">
        <div className="form-input">
          <textarea
            rows={5}
            name="notes"
            value={formData.notes}
            onChange={handleChange}
          />
          <label>Free Text Notes</label>
        </div>
        {errors.notes && (
          <p style={{ color: "red", fontSize: 12 }}>{errors.notes}</p>
        )}
      </div>

      {/* Tags */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          marginTop: "15px",
        }}
      >
        {/* Immediate Deal */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
            padding: "10px 15px",
            borderRadius: "6px",
            minWidth: "180px",
          }}
        >
          <input
            id="immediate-deal"
            type="checkbox"
            value="Immediate Deal"
            checked={formData.tags.includes("Immediate Deal")}
            onChange={handleChange}
            style={{
              accentColor: "blue",
              width: "18px",
              height: "18px",
            }}
          />
          <label
            htmlFor="immediate-deal"
            style={{ color: "black", marginLeft: "10px", whiteSpace: "nowrap" }}
          >
            Immediate Deal
          </label>
        </div>

        {/* Compliances Done */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
            padding: "10px 15px",
            borderRadius: "6px",
            minWidth: "180px",
          }}
        >
          <input
            id="compliances-done"
            type="checkbox"
            value="Compliances Done"
            checked={formData.tags.includes("Compliances Done")}
            onChange={handleChange}
            style={{
              accentColor: "blue",
              width: "18px",
              height: "18px",
            }}
          />
          <label
            htmlFor="compliances-done"
            style={{ color: "black", marginLeft: "10px", whiteSpace: "nowrap" }}
          >
            Compliances Done
          </label>
        </div>

        {/* Docs Ready */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
            padding: "10px 15px",
            borderRadius: "6px",
            minWidth: "180px",
          }}
        >
          <input
            id="docs-ready"
            type="checkbox"
            value="Docs Ready"
            checked={formData.tags.includes("Docs Ready")}
            onChange={handleChange}
            style={{
              accentColor: "blue",
              width: "18px",
              height: "18px",
            }}
          />
          <label
            htmlFor="docs-ready"
            style={{ color: "black", marginLeft: "10px", whiteSpace: "nowrap" }}
          >
            Docs Ready
          </label>
        </div>
      </div>

      {/* Submit */}
      <div className="col-12 mt-20">
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

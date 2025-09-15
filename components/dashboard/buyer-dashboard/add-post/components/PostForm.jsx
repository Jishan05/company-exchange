"use client";

import React, { useState } from "react";
import { useSelector } from "react-redux";

const PostForm = () => {
  const [formData, setFormData] = useState({
    user_id: null, // attach logged-in user id later
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

  const user = useSelector((state) => state.auth.user);

  // handle input/select
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

  // validate fields
  const validate = () => {
    let newErrors = {};
    if (!formData.mobile) {
      newErrors.mobile = "Mobile number is required";
    } else if (!/^[6-9]\d{9}$/.test(formData.mobile)) {
      newErrors.mobile = "Enter valid 10-digit mobile number";
    }
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.rocState) newErrors.rocState = "ROC state required";
    if (!formData.activity) newErrors.activity = "Activity required";
    if (!formData.budget) newErrors.budget = "Budget required";
    if (!formData.gst) newErrors.gst = "GST selection required";
    if (!formData.ageOfCompany)
      newErrors.ageOfCompany = "Age selection required";
    if (!formData.notes) newErrors.notes = "Notes required";
    return newErrors;
  };

  // submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    const buyer_data = {
      ...formData,
      user_id: user.id,
    };

    try {
      const res = await fetch("http://localhost:5000/api/buyers/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(buyer_data),
      });

      const data = await res.json();

      if (res.ok) {
        alert("✅ Buyer post created successfully!");
        console.log(data);

        setFormData({
          user_id: null,
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
      } else {
        alert(data.error || "Failed to create buyer post");
      }
    } catch (err) {
      console.error("❌ Error:", err);
      alert("Something went wrong!");
    }
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

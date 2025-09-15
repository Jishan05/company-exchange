"use client";
import { useState } from "react";
import Link from "next/link";

const SignUpForm = () => {
  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "",
  });

  const [errors, setErrors] = useState({});

  // handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  // validate form
  const validate = () => {
    let newErrors = {};

    if (!form.fullName.trim()) newErrors.fullName = "Full name is required";

    if (!form.phone) newErrors.phone = "Phone number is required";
    else if (!/^\d{10,}$/.test(form.phone))
      newErrors.phone = "Enter a valid phone number";

    if (!form.password) newErrors.password = "Password is required";
    else if (form.password.length < 6)
      newErrors.password = "Password must be at least 6 characters";

    if (form.password !== form.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match";

    if (!form.role) newErrors.role = "Please select Seller or Buyer";

    return newErrors;
  };

  // handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      console.log("❌ Validation failed:", validationErrors);
      return;
    }

    setErrors({});
    console.log("✅ Form submitted successfully:", form);

    try {
      const response = await fetch("http://localhost:5000/api/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (response.ok) {
        console.log("✅ Registration success:", data);
        alert("User registered successfully!");
      } else {
        console.error("❌ Registration failed:", data);
        alert(data.error || "Something went wrong");
      }
    } catch (error) {
      console.error("❌ API Error:", error);
      alert("Failed to connect to server");
    }
  };

  return (
    <form className="row y-gap-20" onSubmit={handleSubmit}>
      <div className="col-12">
        <h1 className="text-22 fw-500">Create Account</h1>
        <p className="mt-10">
          Already have an account?{" "}
          <Link href="/login" className="text-blue-1">
            Log in
          </Link>
        </p>
      </div>

      {/* Full name */}
      <div className="col-12">
        <div className="form-input">
          <input
            type="text"
            name="fullName"
            value={form.fullName}
            onChange={handleChange}
          />
          <label className="lh-1 text-14 text-light-1">Full Name</label>
        </div>
        {errors.fullName && (
          <p className="text-13" style={{ color: "red" }}>
            {errors.fullName}
          </p>
        )}
      </div>

      {/* Phone */}
      <div className="col-12">
        <div className="form-input">
          <input
            type="text"
            name="phone"
            value={form.phone}
            onChange={handleChange}
          />
          <label className="lh-1 text-14 text-light-1">Phone Number</label>
        </div>
        {errors.phone && (
          <p className=" text-13" style={{ color: "red" }}>
            {errors.phone}
          </p>
        )}
      </div>

      {/* Email */}
      <div className="col-12">
        <div className="form-input">
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
          />
          <label className="lh-1 text-14 text-light-1">Email (Optional)</label>
        </div>
      </div>

      {/* Password */}
      <div className="col-12">
        <div className="form-input">
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
          />
          <label className="lh-1 text-14 text-light-1">Password</label>
        </div>
        {errors.password && (
          <p className=" text-13" style={{ color: "red" }}>
            {errors.password}
          </p>
        )}
      </div>

      {/* Confirm Password */}
      <div className="col-12">
        <div className="form-input">
          <input
            type="password"
            name="confirmPassword"
            value={form.confirmPassword}
            onChange={handleChange}
          />
          <label className="lh-1 text-14 text-light-1">Confirm Password</label>
        </div>
        {errors.confirmPassword && (
          <p className="text-13" style={{ color: "red" }}>
            {errors.confirmPassword}
          </p>
        )}
      </div>

      {/* Role radio */}
      <div className="col-12">
        <label className="text-14 fw-500 mb-10 d-block">Register As</label>
        <div className="d-flex items-center">
          <label className="d-flex items-center mr-10">
            <input
              className="mr-5"
              type="radio"
              name="role"
              value="seller"
              checked={form.role === "seller"}
              onChange={handleChange}
            />
            Seller
          </label>
          <label className="d-flex items-center mr-10">
            <input
              className="mr-5"
              type="radio"
              name="role"
              value="buyer"
              checked={form.role === "buyer"}
              onChange={handleChange}
            />
            Buyer
          </label>
        </div>
        {errors.role && <p className="text-red-500 text-13">{errors.role}</p>}
      </div>

      <div className="col-12">
        <button
          type="submit"
          className="button py-20 -dark-1 bg-blue-1 text-white w-100"
        >
          Sign Up <div className="icon-arrow-top-right ml-15" />
        </button>
      </div>
    </form>
  );
};

export default SignUpForm;

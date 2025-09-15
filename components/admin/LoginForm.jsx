"use client";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "@/features/auth/loginSlice";

const LoginForm = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();

  // Handle input change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Validation
  const validate = () => {
    let errs = {};
    if (!form.email) {
      errs.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      errs.email = "Enter a valid email";
    }

    if (!form.password) {
      errs.password = "Password is required";
    } else if (form.password.length < 6) {
      errs.password = "Password must be at least 6 characters";
    }

    return errs;
  };

  // Handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    console.log("✅ Logging in with:", form);

    try {
      const res = await fetch("http://localhost:5000/api/users/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form), // send { email, password }
      });

      const data = await res.json();

      if (res.ok) {
        const { user, token } = data;
        dispatch(setUser({ user, token }));

        alert(`Login successful! Role: ${user.role}`);

        if (user.role === "admin") {
          window.location.href = "/admin/dashboard";
        } else if (user.role === "seller") {
          window.location.href = "/seller-dashboard/add-post";
        } else if (user.role === "buyer") {
          window.location.href = "/buyer-dashboard/add-post";
        }
      } else {
        alert(data.error || "Invalid email or password");
      }
    } catch (error) {
      console.error("❌ Error:", error.message);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <form className="row y-gap-20" onSubmit={handleSubmit}>
      <div className="col-12">
        <h1 className="text-22 fw-500">Admin Login</h1>
      </div>

      {/* Email */}
      <div className="col-12">
        <div className="form-input">
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <label className="lh-1 text-14 text-light-1">Email</label>
        </div>
        {errors.email && (
          <p style={{ color: "red" }}>{errors.email}</p>
        )}
      </div>

      {/* Password */}
      <div className="col-12">
        <div className="form-input">
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            required
          />
          <label className="lh-1 text-14 text-light-1">Password</label>
        </div>
        {errors.password && (
          <p style={{ color: "red" }}>{errors.password}</p>
        )}
      </div>

      <div className="col-12">
        <button
          type="submit"
          className="button py-20 -dark-1 bg-blue-1 text-white w-100"
        >
          Sign In <div className="icon-arrow-top-right ml-15" />
        </button>
      </div>
    </form>
  );
};

export default LoginForm;

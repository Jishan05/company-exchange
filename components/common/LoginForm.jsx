"use client";
import { useState } from "react";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { setUser } from "@/features/auth/loginSlice";
import { toast } from "react-toastify";

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
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(form.email)
    ) {
      errs.email = "Enter a valid email address";
    }

    if (!form.password) {
      errs.password = "Password is required";
    } else if (form.password.length < 6) {
      errs.password = "Password must be at least 6 characters";
    }

    return errs;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    console.log("🔐 Logging in with:", form);

    try {
      const res = await fetch("http://72.60.218.40:4048/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        mode: "cors",
        credentials: "include",
        body: JSON.stringify({
          email: form.email,
          password: form.password,
        }),
      });

      const data = await res.json().catch(() => ({}));

      console.log("📨 Response Data:", data);

      if (!res.ok) {
        toast.error(data.error || "Login failed");
        return;
      }

      const { user, token } = data;

      dispatch(setUser({ user, token }));
      toast.success("Login successful!");

      if (user.role === "admin") {
        window.location.href = "/admin/dashboard";
      } else {
        window.location.href = "/dashboard";
      }
    } catch (error) {
      console.log("❌ Fetch Error:", error.response || error.message);
      toast.error("Network error. Backend not reachable.");
    }
  };

  return (
    <form className="row y-gap-20" onSubmit={handleSubmit}>
      <div className="col-12">
        <h1 className="text-22 fw-500">Good to See You Again 👋</h1>
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
          <p className="text-red-500 text-13">{errors.email}</p>
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
          <p className="text-red-500 text-13">{errors.password}</p>
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

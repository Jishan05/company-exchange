"use client";
import { useState } from "react";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { setUser } from "@/features/auth/loginSlice";
import { toast } from "react-toastify";
import { BASE_URL } from "@/features/url";

const LoginForm = () => {
  const [form, setForm] = useState({ phone: "", password: "" });
  const [errors, setErrors] = useState({});

  const dispatch = useDispatch();
  // Handle input change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Validation
  const validate = () => {
    let errs = {};
    if (!form.phone) {
      errs.phone = "Phone number is required";
    } else if (!/^[0-9]{10}$/.test(form.phone)) {
      errs.phone = "Enter a valid 10-digit phone number";
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
      const res = await fetch(`http://72.60.218.40:5000/api/users/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          phone: form.phone,
          password: form.password,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        const { user, token } = data;
        dispatch(setUser({ user, token }));
        toast.success("Login successful!");
        if (user.role === "admin") {
          window.location.href = "/admin/dashboard";
        } else if (user.role === "user") {
          window.location.href = "/dashboard";
        } else {
          toast.error("Invalid role");
        }
      } else {
        toast.error(data.error);
      }
    } catch (error) {
      console.error("❌ Error:", error.message);
      toast.error("Something went wrong.");
    }
  };

  return (
    <form className="row y-gap-20" onSubmit={handleSubmit}>
      <div className="col-12">
        <h1 className="text-22 fw-500">Welcome back</h1>
        <p className="mt-10">
          Don&apos;t have an account yet?{" "}
          <Link href="/signup" className="text-blue-1">
            Sign up for free
          </Link>
        </p>
      </div>

      {/* Phone Number */}
      <div className="col-12">
        <div className="form-input">
          <input
            type="text"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            required
          />
          <label className="lh-1 text-14 text-light-1">Phone Number</label>
        </div>
        {errors.phone && (
          <p style={{ color: "red" }} className="text-red-500 text-13">
            {errors.phone}
          </p>
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
          <p style={{ color: "red" }} className="text-red-500 text-13">
            {errors.password}
          </p>
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

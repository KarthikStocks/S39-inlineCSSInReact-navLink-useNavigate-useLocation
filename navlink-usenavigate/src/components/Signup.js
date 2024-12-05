import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";

function Signup() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    age: "",
    email: "",
    password: "",
    mobile: "",
    stockSector: "",
  });

  const [errors, setErrors] = useState({});

  const validateFields = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const mobileRegex = /^[6-9]\d{9}$/;
    const ageRegex = /^(1[89]|[2-9]\d)$/;
    const nameRegex = /^[A-Za-z\s]+$/;

    if (!formData.firstName.trim())
      newErrors.firstName = "First Name is required.";
    else if (!nameRegex.test(formData.firstName))
      newErrors.firstName =
        "First Name should only contain letters and spaces.";

    if (!formData.lastName.trim())
      newErrors.lastName = "Last Name is required.";
    else if (!nameRegex.test(formData.lastName))
      newErrors.lastName = "Last Name should only contain letters and spaces.";

    if (!formData.age || !ageRegex.test(formData.age))
      newErrors.age = "Enter a valid age (18–99).";
    if (!formData.email || !emailRegex.test(formData.email))
      newErrors.email = "Enter a valid email address.";
    if (!formData.password || !passwordRegex.test(formData.password))
      newErrors.password =
        "Password must be at least 8 characters long, including at least one uppercase letter, one lowercase letter, one number, and one special character.";
    if (!formData.mobile || !mobileRegex.test(formData.mobile))
      newErrors.mobile = "Enter a valid 10-digit mobile number.";
    if (!formData.stockSector)
      newErrors.stockSector = "Select a preferred stock sector.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateFields()) {
      console.log("Form submitted successfully:", formData);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  return (
    <div className="container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h2>Stock Market Signup</h2>
        <div className="form-group">
          <label>First Name</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="Enter your first name"
          />
          {errors.firstName && <p className="error">{errors.firstName}</p>}
        </div>
        <div className="form-group">
          <label>Last Name</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Enter your last name"
          />
          {errors.lastName && <p className="error">{errors.lastName}</p>}
        </div>
        <div className="form-group">
          <label>Age</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            placeholder="Enter your age"
          />
          {errors.age && <p className="error">{errors.age}</p>}
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email address"
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Create a strong password"
          />
          {errors.password && <p className="error">{errors.password}</p>}
        </div>
        <div className="form-group">
          <label>Mobile No.</label>
          <input
            type="tel"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            placeholder="Enter your mobile number"
          />
          {errors.mobile && <p className="error">{errors.mobile}</p>}
        </div>
        <div className="form-group">
          <label>Preferred Stock Sector</label>
          <select
            name="stockSector"
            value={formData.stockSector}
            onChange={handleChange}
          >
            <option value="">Select a sector</option>
            <option value="tech">Technology</option>
            <option value="finance">Finance</option>
            <option value="energy">Energy</option>
            <option value="healthcare">Healthcare</option>
            <option value="others">Others</option>
          </select>
          {errors.stockSector && <p className="error">{errors.stockSector}</p>}
        </div>
        <div>
          <button type="submit" className="signup-button">
            Signup
          </button>
        </div>
      </form>
      <div className="redirect-link">
        Already have an account? <Link to="/">Login</Link>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Signup;

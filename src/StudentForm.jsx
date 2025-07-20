import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./StudentForm.css";

// Validation schema
const validationSchema = Yup.object({
  fullName: Yup.string()
    .required("Full Name is required")
    .min(4, "Must be at least 4 characters"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters"),
  grade: Yup.string().required("Grade is required"),
  gender: Yup.string().required("Gender is required"),
});

export default function StudentForm() {
  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      password: "",
      grade: "",
      gender: "",
    },
    validationSchema,
    onSubmit: (values) => {
      alert(`${values.fullName}, your form has been submitted!`);
      console.log("Form Data:", values);
    },
  });

  const { values, errors, touched, handleChange, handleSubmit } = formik;

  return (
    <div className="form-container">
      <h2>Student Registration Form</h2>
      <form onSubmit={handleSubmit}>
        {/* Full Name */}
        <div>
          <label>Full Name:</label>
          <input
            type="text"
            name="fullName"
            value={values.fullName}
            onChange={handleChange}
          />
          {errors.fullName && touched.fullName && <p>{errors.fullName}</p>}
        </div>

        {/* Email */}
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && touched.email && <p>{errors.email}</p>}
        </div>

        {/* Password */}
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && touched.password && <p>{errors.password}</p>}
        </div>

        {/* Grade Dropdown */}
        <div>
          <label>Grade:</label>
          <select name="grade" value={values.grade} onChange={handleChange}>
            <option value="">Select Grade</option>
            <option value="Freshman">Freshman</option>
            <option value="Sophomore">Sophomore</option>
            <option value="Junior">Junior</option>
            <option value="Senior">Senior</option>
          </select>
          {errors.grade && touched.grade && <p>{errors.grade}</p>}
        </div>

        {/* Gender Radio */}
        <div>
          <label>Gender:</label>
          <div className="gender-options">
            <label>
              <input
                type="radio"
                name="gender"
                value="Male"
                checked={values.gender === "Male"}
                onChange={handleChange}
              />{" "}
              Male
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="Female"
                checked={values.gender === "Female"}
                onChange={handleChange}
              />{" "}
              Female
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="Other"
                checked={values.gender === "Other"}
                onChange={handleChange}
              />{" "}
              Other
            </label>
          </div>
          {errors.gender && touched.gender && <p>{errors.gender}</p>}
        </div>

        {/* Submit Button */}
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const formSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(70, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  contact_no: Yup.string()
    .matches(/^[0-9]+$/, "Contact number must be digits only")
    .min(10, "Contact number must be at least 10 digits")
    .max(15, "Contact number cannot exceed 15 digits"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Required"),
  confirm_password: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Required"),
});

const Form = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      contact_no: "",
      password: "",
      confirm_password: "",
    },
    validationSchema: formSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      style={{ maxWidth: "500px", margin: "auto" }}
    >
      <h1 style={{ color: "brown", textAlign: "center" }}>Registration</h1>

      <div className="form-group" style={{ marginBottom: "15px" }}>
        <label htmlFor="name" style={{ display: "block", marginBottom: "5px" }}>
          Name:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          style={{ padding: "8px", width: "100%" }}
          value={formik.values.name}
          placeholder="Enter your name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.name && formik.errors.name ? (
          <div className="error" style={{ color: "red" }}>
            {formik.errors.name}
          </div>
        ) : null}
      </div>

      <div className="form-group" style={{ marginBottom: "15px" }}>
        <label
          htmlFor="email"
          style={{ display: "block", marginBottom: "5px" }}
        >
          Email:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          style={{ padding: "8px", width: "100%" }}
          value={formik.values.email}
          placeholder="Enter your email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.email && formik.errors.email ? (
          <div className="error" style={{ color: "red" }}>
            {formik.errors.email}
          </div>
        ) : null}
      </div>

      <div className="form-group" style={{ marginBottom: "15px" }}>
        <label
          htmlFor="contact_no"
          style={{ display: "block", marginBottom: "5px" }}
        >
          Contact Number:
        </label>
        <input
          type="text"
          id="contact_no"
          name="contact_no"
          style={{ padding: "8px", width: "100%" }}
          value={formik.values.contact_no}
          placeholder="Enter your contact number"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.contact_no && formik.errors.contact_no ? (
          <div className="error" style={{ color: "red" }}>
            {formik.errors.contact_no}
          </div>
        ) : null}
      </div>

      <div className="form-group" style={{ marginBottom: "15px" }}>
        <label
          htmlFor="password"
          style={{ display: "block", marginBottom: "5px" }}
        >
          Password:
        </label>
        <input
          type="password"
          id="password"
          name="password"
          style={{ padding: "9px", width: "100%" }}
          value={formik.values.password}
          placeholder="Enter your password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.password && formik.errors.password ? (
          <div className="error" style={{ color: "red" }}>
            {formik.errors.password}
          </div>
        ) : null}
      </div>

      <div className="form-group" style={{ marginBottom: "15px" }}>
        <label
          htmlFor="confirm_password"
          style={{ display: "block", marginBottom: "5px" }}
        >
          Confirm Password:
        </label>
        <input
          type="password"
          id="confirm_password"
          name="confirm_password"
          style={{ padding: "8px", width: "100%" }}
          value={formik.values.confirm_password}
          placeholder="Confirm your password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.confirm_password && formik.errors.confirm_password ? (
          <div className="error" style={{ color: "red" }}>
            {formik.errors.confirm_password}
          </div>
        ) : null}
      </div>

      <button
        type="submit"
        style={{
          backgroundColor: "blueviolet",
          color: "white",
          padding: "10px 20px",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Submit
      </button>
    </form>
  );
};

export default Form;

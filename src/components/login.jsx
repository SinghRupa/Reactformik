import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

const validationSchema = Yup.object({
  username: Yup.string()
    .required("Username is required")
    .min(3, "Username must be at least 3 characters long"),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters long"),
});

const LoginForm = () => {
  const navigate = useNavigate();

  const handleSubmit = (values) => {
    localStorage.setItem("username", values.username);
    localStorage.setItem("isAuth", "true");
    navigate("/home");
  };

  return (
    <div className="container mt-5">
      <div className="card w-50 p-4">
        <h2>LOGIN FORM</h2>
        <Formik
          initialValues={{ username: "", password: "" }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {() => (
            <Form>
              <div>
                <label className="w-100">USERNAME</label>
                <Field
                  type="text"
                  id="username"
                  name="username"
                  className="form-control"
                  placeholder="Enter your Username"
                />
                <ErrorMessage
                  name="username"
                  component="div"
                  style={{ color: "red", marginTop: "2px" }}
                />
              </div>
              <div>
                <label className="w-100">PASSWORD</label>
                <Field
                  type="password"
                  id="password"
                  name="password"
                  className="form-control"
                  placeholder="Enter your Password"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  style={{ color: "red", marginTop: "2px" }}
                />
              </div>
              <button type="submit" className="btn btn-success w-100 mt-2">
                LOGIN
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default LoginForm;

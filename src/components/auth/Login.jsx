import React from "react";
import "../../styles/auth/auth.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { authLogin } from "../../context/slice/authSlice";
import Loader from "../global/Loader";

const Login = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector((store) => store.auth);
  const { handleChange, handleBlur, errors, values, touched, handleSubmit } =
    useFormik({
      enableReinitialize: true,
      initialValues: {
        login_email: "x3on@gmail.com",
        login_password: "x3on2001",
      },
      validationSchema: Yup.object({
        login_email: Yup.string()
          .email("Enter a valid login_email")
          .required("E-mail is Required"),
        login_password: Yup.string()
          .min(6, "Password should be more than 6 characters")
          .required("Password is required"),
      }),
      onSubmit: (values, action) => {
        const data = {
          email: values.login_email,
          password: values.login_password,
        };
        console.log(data);
        dispatch(authLogin(data));
        action.resetForm();
      },
    });

  if (loading) {
    return <Loader />;
  }

  return (
    <form className="sign-in-form">
      <h2 className="title">Sign in</h2>
      <div
        className={
          Boolean(errors.login_email && touched.login_email)
            ? "input-field error-input"
            : "input-field"
        }
      >
        <i
          className={
            Boolean(errors.login_email && touched.login_email)
              ? "bx bx-envelope error-input"
              : "bx bx-envelope"
          }
        ></i>
        <input
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.login_email}
          className={
            Boolean(errors.login_email && touched.login_email)
              ? "error-input"
              : ""
          }
          name="login_email"
          id="login_email"
          type="text"
          placeholder="E-mail"
        />
        {Boolean(errors.login_email && touched.login_email) && (
          <p className="helper-text">{errors.login_email}</p>
        )}
      </div>
      <div
        style={
          Boolean(errors.login_email && touched.login_email)
            ? { marginTop: "1.5rem", marginBottom: "1.5rem" }
            : { marginBottom: "1.5rem" }
        }
        className={
          Boolean(errors.login_password && touched.login_password)
            ? "input-field error-input"
            : "input-field"
        }
      >
        <i
          className={
            Boolean(errors.login_password && touched.login_password)
              ? "bx bx-lock error-input"
              : "bx bx-lock"
          }
        ></i>
        <input
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.login_password}
          className={
            Boolean(errors.login_password && touched.login_password)
              ? "error-input"
              : ""
          }
          type="password"
          name="login_password"
          id="login_password"
          placeholder="Password"
        />
        {Boolean(errors.login_password && touched.login_password) && (
          <p className="helper-text">{errors.login_password}</p>
        )}
      </div>
      <button onClick={handleSubmit} type="submit" className="btn solid">
        Login
      </button>
      
    </form>
  );
};

export default Login;

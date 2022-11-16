import React, { useEffect, useRef } from "react";
import "../Login/Login.css";
import "./ForgetPassword.css";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LogoWhite from "../../Assets/Svg/LogoWhite.svg";

const ForgetPassword = () => {
  const emailRef = useRef();

  useEffect(() => {
    document.title = "PiggyVest | Dashboard";
    emailRef.current.focus();
  }, []);

  const validate = (values) => {
    const errors = {};

    if (!values.email) {
      errors.email = "Please fill out this field";
    } else if (values.email.length < 10) {
      errors.email = "Must be 10 characters or more";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validate,
    onSubmit: (values, { resetForm }) => {
      setTimeout(() => {
        // alert(JSON.stringify(values, null, 2));
        toast.success(JSON.stringify("Password reset successfully", null, 2), {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        resetForm({ values: "" });
      }, 500);
    },
  });

  return (
    <div className="forgetPage">
      <Link className="header flex" to="/">
        <img src={LogoWhite} alt="" />
      </Link>

      <div className="login flex">
        <div className="formHead flex">
          <h1>Forgot Password</h1>
          <p>Enter your email to reset your password</p>
        </div>

        <form className="flex" onSubmit={formik.handleSubmit}>
          <div className="formGroup flex">
            <label className="label" htmlFor="email">
              Email Address
            </label>
            <input
              onChange={formik.handleChange}
              value={formik.values.email}
              onBlur={formik.handleBlur}
              className="input"
              type="email"
              name="email"
              placeholder="e.g. john@gmail.com"
              required
              ref={emailRef}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="error">{formik.errors.email}</div>
            ) : null}
          </div>

          <button className="button flex" type="submit">
            RESET PASSWORD
          </button>
        </form>
      </div>
      <Link to="/login" className="footLink">
        Back to login
      </Link>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
};

export default ForgetPassword;

// UserRegistration.js
import React, { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Endpoints from "../api/Endpoints";
import { setUser } from "../store/userSlice";
import { useDispatch } from "react-redux";

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  username: Yup.string().required("Required"),
  password: Yup.string()
    .min(6, "Password must be greater then 6 characters")
    .max(8, "Password must be less then 8 characters")
    .required("Required"),
  name: Yup.object().shape({
    firstname: Yup.string().required("Required"),
    lastname: Yup.string().required("Required"),
  }),
  address: Yup.object().shape({
    city: Yup.string(),
    street: Yup.string(),
    number: Yup.number(),
    zipcode: Yup.string(),
    geolocation: Yup.object().shape({
      lat: Yup.string(),
      long: Yup.string(),
    }),
  }),
  phone: Yup.string()
    .required("Phone is Required")
    .length(10, "phone no. must be 10 characters"),
});

const initialValues = {
  email: "",
  username: "",
  password: "",
  name: {
    firstname: "",
    lastname: "",
  },
  address: {
    city: "",
    street: "",
    number: "",
    zipcode: "",
    geolocation: {
      lat: "",
      long: "",
    },
  },
  phone: "",
};

const UserRegistration = () => {
  // hooks
  const [requestResponse, setRequestResponse] = useState({
    textMessage: "",
    alertClass: "",
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (values, { setSubmitting }) => {
    // You can replace this URL with your actual backend registration endpoint
    axios
      .post(Endpoints.REGISTER_USER_URL, values)
      .then(
        (response) => {
          console.log("Registration successful:", response.data.id);

          // Show success message and redirect user to login page
          setRequestResponse({
            textMessage: "Registered Successfully! Please Login.",
            alertClass: " alert alert-success",
          });

          // Save data to localStorage
          const userId = response.data.id;
          const {email, username, password, name, address, phone} = values;

          localStorage.setItem("users", JSON.stringify({userId, email, username, password, name, address, phone}));
          dispatch(setUser({userId, email, username, password, name, address, phone}))

          setTimeout(() => {
            navigate("/login");
          }, 2500);
        },
        (errors) => {
          console.log(errors);
          setRequestResponse({
            textMessage: errors.response.data,
            alertClass: "alert alert-danger",
          });
        }
      )
      .catch((errors) => {
        console.errors("Registration failed:", errors);
      });

  };

  return (
<>
<div className="container-fluid py-2">
<div className="row justify-content-lg-center ">
  <div className="col-md-4 mt-3">
    <div className="wrapper card h-100 rounded-lg p-5 ps-5 pe-5">
      <div className={requestResponse.alertClass} role="alert">
        {requestResponse.textMessage}
      </div>
      <h2 className="text-center">Register</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {(formik) => {
          return (
            <Form>
              {/* Email */}
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <Field
                  type="email"
                  name="email"
                  id="email"
                  className={
                    formik.touched.email && formik.errors.email
                      ? "form-control is-invalid"
                      : "form-control"
                  }
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder="Enter Email"
                />
                <ErrorMessage name="email">
                  {(errorMessage) => (
                    <small className="text-danger">{errorMessage}</small>
                  )}
                </ErrorMessage>
              </div>

              {/* Username */}
              <div className="form-group">
                <label htmlFor="username">User Name</label>
                <Field
                  type="username"
                  name="username"
                  id="username"
                  className={
                    formik.touched.username && formik.errors.username
                      ? "form-control is-invalid"
                      : "form-control"
                  }
                  value={formik.values.username}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder="Enter username"
                />
                <ErrorMessage name="username">
                  {(errorMessage) => (
                    <small className="text-danger">{errorMessage}</small>
                  )}
                </ErrorMessage>
              </div>
              {/* Password */}
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <Field
                  type="password"
                  name="password"
                  id="password"
                  className={
                    formik.touched.password && formik.errors.password
                      ? "form-control is-invalid"
                      : "form-control"
                  }
                  value={formik.values.password}
                  placeholder="Enter Password"
                />
                <ErrorMessage name="password">
                  {(errorMessage) => (
                    <small className="text-danger">{errorMessage}</small>
                  )}
                </ErrorMessage>
              </div>

              {/* Full Name */}

              <div className="form-row">
                {/* First Name */}
                <div className="form-group col-md-6">
                  <label htmlFor="name.firstname">First Name</label>
                  <Field
                    type="text"
                    name="name.firstname"
                    id="name.firstname"
                    className={
                      formik.touched.firstname && formik.errors.firstname
                        ? "form-control is-invalid"
                        : "form-control"
                    }
                    value={formik.values.name.firstname}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    placeholder="Enter First Name"
                  />
                  <ErrorMessage name="name.firstname">
                    {(errorMessage) => (
                      <small className="text-danger">
                        {errorMessage}
                      </small>
                    )}
                  </ErrorMessage>
                </div>

                {/* Last Name */}
                <div className="form-group col-md-6">
                  <label htmlFor="name.lastname">Last Name</label>
                  <Field
                    type="text"
                    name="name.lastname"
                    id="name.lastname"
                    className={
                      formik.touched.lastname && formik.errors.lastname
                        ? "form-control is-invalid"
                        : "form-control"
                    }
                    value={formik.values.name.lastname}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    placeholder="Enter Last Name"
                  />
                  <ErrorMessage name="name.lastname">
                    {(errorMessage) => (
                      <small className="text-danger">
                        {errorMessage}
                      </small>
                    )}
                  </ErrorMessage>
                </div>
              </div>

              {/* Address */}

              <div className="form-row">
                {/* City */}
                <div className="form-group col-md-4">
                  <label htmlFor="address.city">
                    <small>City</small>
                  </label>
                  <Field
                    type="text"
                    name="address.city"
                    id="address.city"
                    className={
                      formik.touched.city && formik.errors.city
                        ? "form-control is-invalid"
                        : "form-control"
                    }
                    value={formik.values.address.city}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    placeholder="Enter city"
                  />
                  <ErrorMessage name="address.city">
                    {(errorMessage) => (
                      <small className="text-danger">
                        {errorMessage}
                      </small>
                    )}
                  </ErrorMessage>
                </div>

                {/* Street */}
                <div className="form-group col-md-4">
                  <label htmlFor="address.street">
                    <small>Street</small>
                  </label>
                  <Field
                    type="text"
                    name="address.street"
                    id="address.street"
                    className={
                      formik.touched.street && formik.errors.street
                        ? "form-control is-invalid"
                        : "form-control"
                    }
                    value={formik.values.address.street}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    placeholder="Enter street"
                  />
                  <ErrorMessage name="address.street">
                    {(errorMessage) => (
                      <small className="text-danger">
                        {errorMessage}
                      </small>
                    )}
                  </ErrorMessage>
                </div>

                {/* Number */}
                <div className="form-group col-md-2">
                  <label htmlFor="address.number">
                    <small>No.</small>
                  </label>
                  <Field
                    type="text"
                    name="address.number"
                    id="address.number"
                    className={
                      formik.touched.number && formik.errors.number
                        ? "form-control is-invalid"
                        : "form-control"
                    }
                    value={formik.values.address.number}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    placeholder="No."
                  />
                  <ErrorMessage name="address.number">
                    {(errorMessage) => (
                      <small className="text-danger">
                        {errorMessage}
                      </small>
                    )}
                  </ErrorMessage>
                </div>

                {/* Zipcode */}
                <div className="form-group col-md-2">
                  <label htmlFor="address.zipcode">
                    <small>Zip</small>
                  </label>
                  <Field
                    type="text"
                    name="address.zipcode"
                    id="address.zipcode"
                    className={
                      formik.touched.zipcode && formik.errors.zipcode
                        ? "form-control is-invalid"
                        : "form-control"
                    }
                    value={formik.values.address.zipcode}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    placeholder="Zip"
                  />
                  <ErrorMessage name="address.zipcode">
                    {(errorMessage) => (
                      <small className="text-danger">
                        {errorMessage}
                      </small>
                    )}
                  </ErrorMessage>
                </div>
              </div>

              {/* Location */}

              <div className="form-row">
                {/* Latitude */}
                <div className="form-group col-md-6">
                  <label htmlFor="address.geolocation.lat">
                    Latitude
                  </label>
                  <Field
                    type="text"
                    name="address.geolocation.lat"
                    id="address.geolocation.lat"
                    className={
                      formik.touched.lat && formik.errors.lat
                        ? "form-control is-invalid"
                        : "form-control"
                    }
                    value={formik.values.address.geolocation.lat}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    placeholder="Enter Latitude"
                  />
                  <ErrorMessage name="address.geolocation.lat">
                    {(errorMessage) => (
                      <small className="text-danger">
                        {errorMessage}
                      </small>
                    )}
                  </ErrorMessage>
                </div>

                {/* Longitude */}
                <div className="form-group col-md-6">
                  <label htmlFor="address.geolocation.long">
                    Longitude
                  </label>
                  <Field
                    type="text"
                    name="address.geolocation.long"
                    id="address.geolocation.long"
                    className={
                      formik.touched.long && formik.errors.long
                        ? "form-control is-invalid"
                        : "form-control"
                    }
                    value={formik.values.address.geolocation.long}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    placeholder="Enter Longitude"
                  />
                  <ErrorMessage name="address.geolocation.long">
                    {(errorMessage) => (
                      <small className="text-danger">
                        {errorMessage}
                      </small>
                    )}
                  </ErrorMessage>
                </div>
              </div>

              {/* Phone */}
              <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <Field
                  type="text"
                  name="phone"
                  id="phone"
                  className={
                    formik.touched.phone && formik.errors.phone
                      ? "form-control is-invalid"
                      : "form-control"
                  }
                  value={formik.values.phone}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder="Enter phone"
                />
                <ErrorMessage name="phone">
                  {(errorMessage) => (
                    <small className="text-danger">{errorMessage}</small>
                  )}
                </ErrorMessage>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                value="Login"
                className="btn btn-primary btn-block"
                id="submit"
                name="submit"
                disabled={!formik.isValid}
              >
                Register
              </button>
            </Form>
          );
        }}
      </Formik>
      <br />
      <p className="text-center">
        Already Registered ? <Link to={"/login"}>click here</Link>
      </p>
    </div>
  </div>
</div>
</div>
</>
  );
};

export default UserRegistration;






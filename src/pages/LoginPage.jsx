import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Endpoints from "../api/Endpoints";
import { useDispatch } from "react-redux";
import { setCredential } from "../store/authSlice";


export default function LoginPage() {
  // hooks

  const dispatch = useDispatch();
  const [requestResponse, setRequestResponse] = useState({
    textMessage: "",
    alertClass: "",
  });
  const navigate = useNavigate();

  const initialValues = {
    username: "",
    password: "",
  };

  const handleSubmit = (values) => {
    axios
      .post(Endpoints.LOGIN_USER_URL, values)
      .then(
        (response) => {
          console.log(response.data);
          setRequestResponse({
            textMessage: "Login Successful ",
            alertClass: "alert alert-success",
          });

          // !localStorage.getItem("token")
          //   ? setLoginStatus(false)
          //   : setLoginStatus(true);

          // if (localStorage.getItem("user")) {
          //   let user = JSON.parse(localStorage.getItem("user"));
          //   setUserName(user.username);
          // }
          const accessToken = response.data.token;
          const user = values.username;

          // localStorage.setItem("token", response.data.token);
          // localStorage.setItem("user", JSON.stringify(values));

          dispatch(setCredential({ user, accessToken }));

          setTimeout(() => {
            navigate("/");
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
      .catch((errors) => console.log(errors));
  };

  const validationSchema = Yup.object({
    username: Yup.string().required("username is required"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters"),
  });

  return (
    <>
      <div className="container-fluid py-2">
        <div className="row justify-content-lg-center ">
          <div className="col-md-4 mt-3">
            <div className="wrapper card h-100 rounded-lg p-5 ps-5 pe-5">
              <div className={requestResponse.alertClass} role="alert">
                {requestResponse.textMessage}
              </div>
              <h2 className="text-center">Login</h2>

              <Formik
                initialValues={initialValues}
                onSubmit={handleSubmit}
                validationSchema={validationSchema}
                validateOnMount
              >
                {(formik) => {
                  return (
                    <Form>
                      <div className="form-group">
                        <label htmlFor="username">username</label>
                        <Field
                          type="text"
                          name="username"
                          id="username"
                          className={
                            formik.touched.username && formik.errors.username
                              ? "form-control is-invalid"
                              : "form-control"
                          }
                          value={formik.values.username}
                          placeholder="Enter username"
                        />
                        <ErrorMessage name="username">
                          {(errorMessage) => (
                            <small className="text-danger">
                              {errorMessage}
                            </small>
                          )}
                        </ErrorMessage>
                      </div>
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
                            <small className="text-danger">
                              {errorMessage}
                            </small>
                          )}
                        </ErrorMessage>
                      </div>
                      <Field
                        type="submit"
                        value="Login"
                        className="btn btn-primary btn-block"
                        id="submit"
                        name="submit"
                        disabled={!formik.isValid}
                      />
                    </Form>
                  );
                }}
              </Formik>
              <br />
              <p className="text-center">
                New User ? <Link to={"/register"}>Click here</Link>
              </p>
              <br />
              <p>Hint : username: "mor_2314", password: "83r5^_"</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

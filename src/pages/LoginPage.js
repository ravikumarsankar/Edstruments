import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";


const LoginPage = ({setLoggedIn}) => {




  const handleSubmit = (values) => {
    localStorage.setItem("session", JSON.stringify(values));
   setLoggedIn(true)

  };

  const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    password: Yup.string().required("Password is required"),
  });

  return (
    <div className="login-container">
      <h1>LOGIN</h1>
      <Formik
        initialValues={{ username: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form>
            <div className="login-form">
            <div className="login-subContainer">
              <label className="login-label">USERNAME</label>
              <Field name="username" type="text" className='invoice-fields' />
              <ErrorMessage name="username" component="div"  />
            </div>

            <div className="login-subContainer">
              <label className="login-label">PASSWORD</label>
              <Field name="password" type="password" className='invoice-fields' />
              <ErrorMessage name="password" component="div" />
            </div>

            <button className='login-btn' type="submit">LOGIN</button>
            </div>
           
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginPage;
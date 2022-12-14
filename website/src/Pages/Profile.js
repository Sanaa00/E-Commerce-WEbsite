import React, { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { Switch } from "@mui/material";

function Profile() {
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);
  const toggletheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  const initialValues = {
    name: "",
    email: "",
    password: "",
  };
  // onsubmit function to print data
  // const onSubmit = (values) => {
  //   console.log(values);
  // };
  // sending data to api
  const onSubmit = (values) => {
    axios.post(`https://62dc35604438813a2613372b.mockapi.io/api/hotels/Users`, {
      name: values.name,
      email: values.email,
      password: values.password,
    });
    console.log(values);
  };
  const validationSchema = Yup.object({
    name: Yup.string().required("required"),
    email: Yup.string().email("dubara").required("required"),
    password: Yup.string().required("required"),
  });
  // const sendFormData = () => {
  //   axios.post(`https://62dc35604438813a2613372b.mockapi.io/api/hotels/Users`, {
  //     name: initialValues.name,
  //     email: initialValues.email,
  //     password: initialValues.password,
  //   });
  // };
  return (
    <div className="text-gray-900 dark:text-gray-50">
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Form className="bg-gray-50 dark:bg-gray-800">
          label
          <label htmlFor="name">name</label>
          <Field
            name="name"
            id="name"
            type="text"
            className="border-4 border-green-500"
          />
          <ErrorMessage name="name" />
          <label htmlFor="email">email</label>
          <Field
            name="email"
            id="email"
            type="text"
            className="border-4 border-green-500"
          />
          <ErrorMessage name="email" />
          <label htmlFor="password">passsword</label>
          <Field
            name="password"
            id="password"
            type="text"
            className="border-4 border-green-500"
          />
          <ErrorMessage name="password" /> <button type="submit">submit</button>
        </Form>
      </Formik>
      <Switch onChange={toggletheme} />
      {/* <button
        onClick={toggletheme}
        className="p-4 bg-gray-500 dark:bg-gray-900"
      >
        theme
      </button> */}
      {/* <div className="grid grid-cols-2 justify-center items-center font-DM ">
        <div className="grid justify-center items-center font-bold text-8xl text-zard  bg-no-repeat bg-cover bg-right h-screen w-full object-fit bg-[url('https://images.unsplash.com/photo-1625798368138-38fb1cbb807b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80')]">
          Welcome
        </div>
        <div className="grid grid-cols-1 justify-center items-center text-gray-700">
          <div className="flex justify-center text-4xl font-bold">
            Create your account
          </div>
          <div className="flex justify-center mt-10">
            <form className="grid grid-cols-1 ">
              <label htmlFor="name " className="text-2xl">
                Name:
              </label>
              <input
                id="name"
                placeholder="Enter your name "
                className="border-b-4 border-zard w-96 mt-1 focus:outline-none  hover:border-opacity-70 hover:scale-105"
              ></input>
              <label htmlFor="email" className="mt-8 text-2xl">
                Email Address:{" "}
              </label>
              <input
                id="email"
                placeholder="Enter your email "
                className="border-b-4 border-zard w-96  mt-1 focus:outline-none hover:border-opacity-70 hover:scale-105"
              ></input>
              <label htmlFor="password" className="mt-8 text-2xl">
                Password:{" "}
              </label>
              <input
                id="password"
                placeholder="Enter your password "
                className="border-b-4 border-zard w-96  mt-1 focus:outline-none  hover:border-opacity-70 hover:scale-105"
              ></input>
              <div className="flex justify-between items-center px-10 text-xl mt-10 ">
                <button className="w-32 bg-zard rounded-2xl shadow-sm hover:bg-opacity-70 hover:scale-105">
                  Signin
                </button>
                <button className="w-32 bg-zard rounded-2xl shadow-sm hover:bg-opacity-70 hover:scale-105">
                  Sign up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default Profile;

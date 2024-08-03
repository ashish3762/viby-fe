import React, { useState } from "react";
import { Button, Input, Space } from "antd";
import { signUp } from "../api/ApiService";
import Header from "../sections/Header";

export default function SignUp() {
  const [signUpFormInput, setsignUpFormInput] = useState({});

  const handleChange = (event) => {
    setsignUpFormInput({
      ...signUpFormInput,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async () => {
    console.log(signUpFormInput);
    const data = await signUp(
      signUpFormInput.firstName,
      signUpFormInput.lastName,
      signUpFormInput.email,
      signUpFormInput.password
    );
    console.log(data);
  };

  return (
    <div>
      <Header></Header>
      <div className="text-3xl my-10 text-center">CREATE ACCOUNT</div>
      <div className="flex justify-center w-full mt-10">
        <form style={{ width: "400px" }}>
          <div>
            <Input
              placeholder="First Name"
              name="firstName"
              value={signUpFormInput.firstName}
              onChange={handleChange}
              style={{ width: "100%" }}
              className="mb-5"
            />
          </div>
          <div>
            <Input
              placeholder="Last Name"
              name="lastName"
              value={signUpFormInput.lastName}
              onChange={handleChange}
              style={{ width: "100%" }}
              className="mb-5"
            />
          </div>
          <div>
            <Input
              placeholder="Email"
              name="email"
              value={signUpFormInput.email}
              onChange={handleChange}
              style={{ width: "100%" }}
              className="mb-5"
            />
          </div>
          <div>
            <Space
              direction="vertical"
              style={{ width: "100%" }}
              className="mb-10"
            >
              <Input.Password
                placeholder="Password"
                name="password"
                value={signUpFormInput.password}
                onChange={handleChange}
              />
            </Space>
          </div>
          <div>
            <Button style={{ width: "100%" }} onClick={handleSubmit}>
              Sign Up
            </Button>
          </div>
          <div className="mt-5 text-center">
            <span>Already have an account?</span>
            <a href="/login" className="ml-2">
              <u>Sign In</u>
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}

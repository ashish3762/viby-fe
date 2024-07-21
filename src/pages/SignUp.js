import React, { useState } from "react";
import logo from "../assets/viby-logo.png";
import { Button, Input, Space } from "antd";
import { signUp } from "../api/auth";

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
      signUpFormInput.username,
      signUpFormInput.email,
      signUpFormInput.password
    );
    console.log(data);
  };

  return (
    <div>
      <div className="flex justify-center pt-10">
        <img src={logo} alt="logo" />
      </div>
      <div className="flex justify-center w-full">
        <form style={{ width: "400px" }}>
          <div>
            <Input
              placeholder="Username"
              name="username"
              value={signUpFormInput.username}
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
            <Button ghost style={{ width: "100%" }} onClick={handleSubmit}>
              Sign Up
            </Button>
          </div>
          <div className="mt-5 text-center">
            <span>Already have an account?</span>
            <a href="/sign-in" className="ml-2">
              <u>Sign In</u>
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}

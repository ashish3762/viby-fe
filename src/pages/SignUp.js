import React, { useState } from "react";
import logo from "../assets/viby-logo.png";
import { Button, Input, Space } from "antd";

export default function SignUp() {
  const [signUpFormInput, setsignUpFormInput] = useState({});

  const handleChange = (event) => {
    setsignUpFormInput({
      ...signUpFormInput,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(signUpFormInput);
  };

  return (
    <div>
      <div className="flex justify-center pt-10">
        <img src={logo} alt="logo" />
      </div>
      <div className="flex justify-center w-full">
        <form onSubmit={handleSubmit} style={{ width: "400px" }}>
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
            <Button ghost style={{ width: "100%" }}>
              Sign Up
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
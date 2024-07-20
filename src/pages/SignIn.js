import React, { useState } from "react";
import logo from "../assets/viby-logo.png";
import { Button, Input, Space } from "antd";
import { signIn } from "../api/auth";

export default function SignIn() {
  const [signInFormInput, setsignInFormInput] = useState({});

  const handleChange = (event) => {
    setsignInFormInput({
      ...signInFormInput,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(signInFormInput);
    const data = await signIn(signInFormInput.username, signInFormInput.password);
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
              value={signInFormInput.username}
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
                value={signInFormInput.password}
                onChange={handleChange}
              />
            </Space>
          </div>
          <div>
            <Button ghost style={{ width: "100%" }} onClick={handleSubmit}>
              Sign In
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

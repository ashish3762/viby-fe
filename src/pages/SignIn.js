import React, { useState } from "react";
import { Button, Input, Space } from "antd";
import { signIn } from "../api/ApiService";
import { useNavigate } from "react-router-dom";
import Header from "../sections/Header";

export default function SignIn() {
  const navigate = useNavigate();
  const [signInFormInput, setsignInFormInput] = useState({});

  const handleChange = (event) => {
    setsignInFormInput({
      ...signInFormInput,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async () => {
    console.log(signInFormInput);
    const data = await signIn(signInFormInput.email, signInFormInput.password);
    console.log(data);
    if (data.success) {
      localStorage.setItem("token", data.token);
      navigate("/");
    }
  };

  return (
    <div>
      <Header></Header>
      <div className="text-3xl my-10 text-center">ACCOUNT LOGIN</div>
      <div className="flex justify-center w-full mt-10">
        <form style={{ width: "400px" }}>
          <div>
            <Input
              placeholder="Email Address"
              name="email"
              value={signInFormInput.email}
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
            <Button style={{ width: "100%" }} onClick={handleSubmit}>
              Sign In
            </Button>
          </div>
          <div className="mt-5 text-center">
            <span>Don't have an account yet?</span>
            <a href="/register" className="ml-2">
              <u>Sign Up</u>
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}

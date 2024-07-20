import React from "react";
import { HomeOutlined, UserOutlined, SettingOutlined } from "@ant-design/icons";
import logo from "../assets/viby-logo.png";

export default function SideBar() {
  return (
    <div className="h-full w-1/5 border-r border-gray-800 p-3 fixed">
      <div className="mb-5 flex justify-center">
        <img src={logo} alt="logo" className="w-4/5" />
      </div>
      <div>
        <div className="p-3 flex items-center">
          <span className="mr-2">
            <HomeOutlined />
          </span>
          <span>Home</span>
        </div>
        <div className="p-3 flex items-center">
          <span className="mr-2">
            <UserOutlined />
          </span>
          <span>Profile</span>
        </div>
        <div className="p-3 flex items-center">
          <span className="mr-2">
            <SettingOutlined />
          </span>
          <span>Settings</span>
        </div>
      </div>
    </div>
  );
}

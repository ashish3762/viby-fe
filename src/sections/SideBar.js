import React from "react";
import {
  HomeOutlined,
  UserOutlined,
  SettingOutlined,
  PoweroffOutlined,
} from "@ant-design/icons";
import logo from "../assets/viby-logo.png";
import { useNavigate } from "react-router-dom";

export default function SideBar() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/sign-in");
  }

  return (
    <div className="h-full w-1/5 border-r border-gray-800 p-3 fixed flex flex-col">
      <div className="mb-5 flex justify-center">
        <img src={logo} alt="logo" className="w-4/5" />
      </div>
      <div className="grow">
        <div className="sidebar-menu-item p-3 flex items-center">
          <span className="mr-2">
            <HomeOutlined />
          </span>
          <span>Home</span>
        </div>
        <div className="sidebar-menu-item p-3 flex items-center">
          <span className="mr-2">
            <UserOutlined />
          </span>
          <span>Profile</span>
        </div>
        <div className="sidebar-menu-item p-3 flex items-center">
          <span className="mr-2">
            <SettingOutlined />
          </span>
          <span>Settings</span>
        </div>
      </div>
      <div>
        <div className="sidebar-menu-item p-3 flex items-center" onClick={logout}>
          <span className="mr-2">
            <PoweroffOutlined />
          </span>
          <span>Logout</span>
        </div>
      </div>
    </div>
  );
}

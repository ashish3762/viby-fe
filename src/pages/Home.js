import React, { useEffect } from "react";
import SideBar from "../sections/SideBar";
import Main from "../sections/Main";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/sign-in");
    }
  }, [navigate]);

  return (
    <div className="h-screen flex">
      <SideBar></SideBar>
      <Main></Main>
    </div>
  );
}

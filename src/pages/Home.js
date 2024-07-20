import React from "react";
import SideBar from "../sections/SideBar";
import Main from "../sections/Main";

export default function Home() {
  return (
    <div className="h-screen flex">
      <SideBar></SideBar>
      <Main></Main>
    </div>
  );
}

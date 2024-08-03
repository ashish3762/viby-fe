import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Subscription from "./pages/Subscription";
import Goods from "./pages/Goods";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/subscription" element={<Subscription />} />
        <Route path="/goods" element={<Goods />} />
      </Routes>
    </>
  );
}

export default App;

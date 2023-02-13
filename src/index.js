import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Login from "./Login";
import SignIn from "./SignIn";
import Film from "./Film";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Detail from "./components/Detail";
import { BrowserRouter, Route, Routes, Link, NavLink } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <div>
      <Header />
    </div>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/SignIn" element={<SignIn />} />
      <Route path="/Films" element={<Film />} />
    </Routes>
    <div>
      <Footer />
    </div>
  </BrowserRouter>
);

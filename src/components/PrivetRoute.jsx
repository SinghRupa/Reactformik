import React, { useEffect } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const PrivateRoute = () => {
  const navigate = useNavigate();
  const idno = localStorage.getItem("username");

  useEffect(() => {
    if (!idno) {
      navigate("/login");
    }
  }, [idno, navigate]); //dependency

  return idno ? (
    <>
      <Navbar />
      <Outlet />
    </>
  ) : null;
};

export default PrivateRoute;

import React, { useEffect } from "react";
import axios from "axios";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import Auth from "../../../hoc/auth";

const LandingPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("/api/hello").then((res) => {
      console.log(res);
    });
  }, []);

  const onLogoutHandler = () => {
    axios.get(`/api/user/logout`).then(
      res=> {
        if(res.data.success) {
          navigate("/login");
        } else {
          alert("Logout Fail")
        }
      }
    );
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100%",
      }}
    >
      <h2>시작 페이지</h2>
      <Button onClick={onLogoutHandler}>Logout</Button>
    </div>
  );
};

export default Auth(LandingPage,null);

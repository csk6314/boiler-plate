import React, { useState } from "react";
import {Form,Input,Button} from 'antd';
import { useDispatch } from "react-redux";
import { loginUser } from "../../../_action/user_action";
import {useNavigate} from 'react-router-dom';
import Auth from "../../../hoc/auth";
const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [Email,setEmail] = useState("");
  const [Password,setPassword] = useState("");

  const onEmailHandler = (e) => {
    setEmail(e.currentTarget.value);
  }
  const onPasswordHandler = (e) => {
    setPassword(e.currentTarget.value);
  }

  const onSubmitHandler =(e) => {

    let body = {
      email:Email,
      password:Password
    }
    dispatch(loginUser(body))
    .then(res=> {
      if(res.payload.loginSuccess) {
        navigate('/');
      } else {
        alert("eerror");
      }
    });
  }

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
      <Form style={{display:"flex",flexDirection:"column"}}
        onFinish={onSubmitHandler}
      >
        <Form.Item>
        <label>Email</label>
        <Input type="email" value={Email} onChange={onEmailHandler} />
        </Form.Item>
        <Form.Item>
        <label>Password</label>
        <Input type="password" value={Password} onChange={onPasswordHandler}/>
        </Form.Item>
        <br/>
        <Button htmlType="submit">
          login
        </Button>
      </Form>
    </div>
  );
};

export default Auth(LoginPage,false);

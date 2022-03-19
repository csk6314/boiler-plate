import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerUser } from '../../../_action/user_action';
import { useNavigate } from 'react-router-dom';
import { Button,Input,Form } from 'antd';
import Auth from '../../../hoc/auth';

const RegisterPage = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [Email,setEmail] = useState("");
  const [Name,setName]= useState("");
  const [Password,setPassword] = useState("");
  const [ConfirmPassword,setConfirmPassword] = useState("");

  const onEmailHandler = (e) => {
    setEmail(e.currentTarget.value);
  }
  const onNameHandler = (e) => {
    setName(e.currentTarget.value);
  }
  const onPasswordHandler = (e) => {
    setPassword(e.currentTarget.value);
  }
  const onConfirmPasswordHandler = (e) => {
    setConfirmPassword(e.currentTarget.value);
  }

  const onSubmitHandler =(e) => {
   //e.preventDefault();

    if(Password !== ConfirmPassword) {
      return alert('비밀번호와 비밀번호 확인값이 일치하지 않습니다.');
    }

    let body = {
      email:Email,
      name:Name,
      password:Password
    }

    dispatch(registerUser(body))
    .then(res=> {
        if(res.payload.success) {
          navigate("/login");
        } else {
          alert("fail.");
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
        <label>Email</label>
        <Input type="email" value={Email} onChange={onEmailHandler} />

        <label>Name</label>
        <Input type="text" value={Name} onChange={onNameHandler} />

        <label>Password</label>
        <Input type="password" value={Password} onChange={onPasswordHandler} />

        <label>Confirm Password</label>
        <Input type="password" value={ConfirmPassword} onChange={onConfirmPasswordHandler}/>

        <br/>
        <Button htmlType='submit'>
          register
        </Button>
      </Form>
    </div>
  );
}

export default Auth(RegisterPage,false);
import React, { useState } from "react";
import * as _ from "./style";
import { Link, useNavigate } from "react-router-dom";
import { signup } from "../../api";

export const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailValid, setEmailValid] = useState(true);
  const [passwordValid, setPasswordValid] = useState(true);
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    setEmailValid(value.includes("@"));
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    setPasswordValid(value.length >= 8);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (emailValid && passwordValid) {
      try {
        const response = await signup(email, password);
        console.log('회원가입에 성공하셨습니다.',response.data);
        navigate("/signin")
      } catch (error) {
        console.log('회원가입에 실패하셨습니다.',error);
      }
    }
  };
  return (
    <div>
      <_.AuthForm onSubmit={handleSubmit}>
        <h1>회원 가입을 해주세요.</h1>
        <_.AuthInput
          type="email"
          value={email}
          data-testid="email-input"
          onChange={handleEmailChange}
          placeholder="이메일을 입력해 주세요!"
        />
        {!emailValid ? (
          <p style={{ color: "red", margin: 0 }}>
            {" "}
            '@' 를 포함하여 입력하세요.
          </p>
        ) : (
          <p> '@' 를 포함하여 입력하세요.</p>
        )}
        <_.AuthInput
          type="password"
          value={password}
          data-testid="password-input"
          onChange={handlePasswordChange}
          placeholder="비밀번호를 입력해 주세요!"
        />
        {!passwordValid ? (
          <p style={{ color: "red", margin: 0 }}> 8자리 이상 입력하세요.</p>
        ) : (
          <p> 8자리 이상 입력하세요.</p>
        )}
        <button
          data-testid="signup-button"
          disabled={!emailValid || !passwordValid}
        >
          회원 가입
        </button>
        <br />
        <br />
        이미 가입되어있는가?<Link to="/signin">로그인하러 가기</Link>
      </_.AuthForm>
    </div>
  );
};

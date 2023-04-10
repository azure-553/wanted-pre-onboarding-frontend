import React, { useState } from "react";
import * as _ from "./style";
import { Link } from "react-router-dom";

export const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailValid, setEmailValid] = useState(true);
  const [passwordlValid, setPasswordValid] = useState(true);

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

  const handleSubmit = () => {
    // TODO : 회원가입 처리 로직 구현
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
        {!passwordlValid ? (
          <p style={{ color: "red", margin: 0 }}> 8자리 이상 입력하세요.</p>
        ) : (
          <p> 8자리 이상 입력하세요.</p>
        )}
        <button
          data-testid="signup-button"
          disabled={!emailValid || !passwordlValid}
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

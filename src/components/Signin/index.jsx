import React, { useState } from "react";
import * as S from "../Signup/style";
import { Link, useNavigate } from "react-router-dom";
import {signin} from "../../api";

export const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailValid, setEmaiValid] = useState(true);
  const [passwordlValid, setPasswordValid] = useState(true);

  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    setEmaiValid(value.includes("@"));
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    setPasswordValid(value.length >= 8);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (emailValid && passwordlValid) {
      try {
        const {token, data} = await signin(email, password);
        // console.log(data);
        localStorage.setItem('token',token);
        localStorage.setItem('user_data', JSON.stringify(data));
        console.log('로그인에 성공했습니다.',data);
        navigate("/")
      } catch (error) {
        console.log('로그인에 실패했습니다.',error);
      }
    }
  };
  return (
    <div>
      <S.AuthForm onSubmit={handleSubmit}>
        <h1>로그인을 해주세요.</h1>
        <S.AuthInput
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
        <S.AuthInput
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
          로그인
        </button>
        <br />
        <br />
        아직 회원이 아닌가?<Link to="/signup">회원가입하러 가기</Link>
      </S.AuthForm>
    </div>
  );
};

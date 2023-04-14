import React, { useState } from "react";
import * as _ from "../../common/AuthStyle";
import { Link, useNavigate } from "react-router-dom";
import { signin } from "../../api";

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
        const { token } = await signin(email, password);
        localStorage.setItem("token", token);
        navigate("/todo");
      } catch (error) {
        console.log("로그인에 실패했습니다.", error);
      }
    }
  };
  return (
    <_.AuthWrap>
      <_.AuthForm onSubmit={handleSubmit}>
        <h1>로그인을 해주세요.</h1>
        <_.AuthInput
          type="email"
          value={email}
          data-testid="email-input"
          onChange={handleEmailChange}
          placeholder="이메일을 입력해 주세요!"
        />
        {!emailValid ? (
          <_.WarnMsg color="red">
            {" "}
            '@' 를 포함하여 입력하세요.
          </_.WarnMsg>
        ) : (
          <_.WarnMsg> '@' 를 포함하여 입력하세요.</_.WarnMsg>
        )}
        <_.AuthInput
          type="password"
          value={password}
          data-testid="password-input"
          onChange={handlePasswordChange}
          placeholder="비밀번호를 입력해 주세요!"
        />
        {!passwordlValid ? (
          <_.WarnMsg color="red"> 8자리 이상 입력하세요.</_.WarnMsg>
        ) : (
          <_.WarnMsg> 8자리 이상 입력하세요.</_.WarnMsg>
        )}
        <_.AuthBtn
          data-testid="signin-button"
          disabled={!emailValid || !passwordlValid}
        >
          로그인
        </_.AuthBtn>
        <br />
        <br />
        아직 회원이 아니십니까?<Link to="/signup"> 회원가입하러 가기</Link>
      </_.AuthForm>
    </_.AuthWrap>
  );
};

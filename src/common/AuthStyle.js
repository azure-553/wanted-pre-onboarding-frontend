import styled from "styled-components";

export const AuthWrap = styled.div`
    width: 600px;
    height: 800px;

    margin: 0 auto;
    padding-top: 100px;
`;

export const AuthForm = styled.form`
    width: 100%;
    height: 500px;

    padding: 60px 120px;

    background-color: #fbfbfb;
    box-shadow: 4px 4px 10px 4px rgba(0, 0, 0, 0.25);
`;


export const AuthInput = styled.input`
    padding: 10px;

    width: 350px;
    height: 45px;

    outline: none;
    border: 1px solid lightgray;
    border-radius: 6px;
`;

export const WarnMsg = styled.p`
    margin-bottom: 10px;
    color: ${props => props.color || '#333'};
`;

export const AuthBtn = styled.button`
    margin: 0 auto;
    width: 350px;
`
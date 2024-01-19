import React from 'react';
import styled from "styled-components";

const HeaderDiv = styled.div`
    display: flex;
    align-items: center;
`;

const HeaderText = styled.div`
    color: #000000;
    font-family: 'Aldrich', sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 15.65px;
    user-select: none;

    margin-right: 10px;
    cursor: pointer;
`;

function KakaoButton({type}) {   
    const Rest_api_key='97b37b5bc03aa1e4b911652ec5cfe221'
    const redirect_uri = 'http://localhost:8080/auth'
    const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${Rest_api_key}&redirect_uri=${redirect_uri}&response_type=code`
    
    const handleLogin = ()=>{
        window.location.href = kakaoURL
    }

    return(
        <>
        {type == "header" ? <HeaderDiv onClick={handleLogin}><HeaderText>로그인</HeaderText></HeaderDiv> : <button onClick={handleLogin}>카카오 로그인</button>}
        </>
    )
}

export default KakaoButton;
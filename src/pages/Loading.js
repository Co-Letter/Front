import React, { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    height: 100vh;
    min-height: 100vh;
    background: #78B3FF;
    margin: 0px;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const LogoImg = styled.img`
    width: 286px;
`;

const Logo = styled.div`
    color: #ffffff;
    font-family: 'Aldrich', sans-serif;
    font-size: 40px;
    font-weight: 400;
    line-height: 53.79px;
`;

const Subtitle = styled.div`
    color: #ffffff;
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 20px;
    font-weight: 400;
    line-height: 37.5px;
`;

const Description = styled.div`
    color: #000000;
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 15x;
    font-weight: 400;
    line-height: 37.5px;
`;

function Loading() {
    const navigate = useNavigate();
    
    useEffect(() => {
        navigate("/");
    }, []);

    return (
        <Container>
            <LogoImg src="/assets/logo.svg" alt="" />
            <Logo>co-letter</Logo>
            <Subtitle>세상을 잇는 우리들의 롤링페이퍼</Subtitle>
            <Description>잠시후 이동합니다...</Description>
        </Container>
    );
  }
  
  export default Loading;
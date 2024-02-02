import React from 'react';
import styled from "styled-components";
import { useDispatch } from "react-redux";

const HeaderDiv = styled.div`
    display: flex;
    align-items: center;
`;

const HeaderText = styled.div`
    color: #000000;
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 18px;
    font-weight: 400;
    line-height: 15.65px;
    user-select: none;

    margin-right: 10px;
    cursor: pointer;

    @media screen and (max-width: 1280px) {
        font-size: 14px;
    }
`;

function KakaoButton() {   
    const dispatch = useDispatch();

    const handleLogin = () => {
        const popup = true;
        dispatch({ type: 'store/SET_POPUP_STATE', popup })
    }

    return(
        <>
        <HeaderDiv onClick={handleLogin}><HeaderText>로그인</HeaderText></HeaderDiv>
        </>
    )
}

export default KakaoButton;
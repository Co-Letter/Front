import React from 'react';
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import KakaoButton from "./button"

const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: rgba(68, 68, 68, 0.27);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10;
`;

const ModalDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 630px;
    height: 630px;
    border-radius: 10px;
    background: #ffffff;
`;

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
    align-self: flex-end;
    color: #000000;
    font-size: 30px;

    padding: 20px;

    cursor: pointer;
`;

const Description = styled.div`
    text-align: center;

    color: #000000;
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 32px;
    line-height: 43.58px;

    padding: 90px;
`;

const Button = styled.img`
    align-self: center;

    width: 417px;

    margin-top: 60px;
    cursor: pointer;
`

function KakaoModal() {       
    const dispatch = useDispatch();

    const handleClose = () => {
        const popup = false;
        dispatch({ type: 'store/SET_POPUP_STATE', popup });
    }    

    const Rest_api_key='97b37b5bc03aa1e4b911652ec5cfe221'
    const redirect_uri = 'http://localhost:8080/auth'
    const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${Rest_api_key}&redirect_uri=${redirect_uri}&response_type=code`

    const handleClick = () => {
        window.location.href = kakaoURL
    }

    return(
        <Container>
            <ModalDiv>
                <StyledFontAwesomeIcon onClick={handleClose} icon={faXmark} />
                <Description>간편하게 로그인하고<br/>소중한 편지를 남겨보세요.</Description>
                <Button src='./assets/kakao_login.png' onClick={handleClick}></Button>
            </ModalDiv>
        </Container>
    )
}

export default KakaoModal;
import React, { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";
import HeaderMenu from "./HeaderMenu";
import { useSelector, useDispatch } from "react-redux";
import user from '../services/user'
import KakaoButton from "./kakao/button"

const Background = styled.div`
    width: 100%;
    height: 90px;
    background: rgba(255, 255, 255, 0.5);

    display: flex;
    justify-content: center;
`;

const Container = styled.div`
    min-width: 1280px;
    
    display: flex;
    justify-content: space-between;

    @media screen and (max-width: 1280px) {
        min-width: 300px;
        width: 100%;
        font-size: 36px;
        letter-spacing: 0.35px;
        line-height: 28px;
    }
`

const LogoDiv = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
`;

const LogoImg = styled.img`
    width: 71px;
    height: 71px;
`;

const Logo = styled.div`
    color: #000000;
    font-family: 'Aldrich', sans-serif;
    font-size: 22px;
    font-weight: 400;
    line-height: 21.52px;

    @media screen and (max-width: 1280px) {
        font-size: 18px;
    }
`;

const ProfileDiv = styled.div`
    display: flex;
    align-items: center;
`;

const NickName = styled.div`
    color: #000000;
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 15.65px;

    @media screen and (max-width: 1280px) {
        font-size: 14px;
    }
`;

function Header() {
    const data = useSelector((state) => state.user);
    const dispatch = useDispatch();
    useEffect(() => {
        const fetchData = async () => {
            try {
                if (data.login) {
                    const profile = await user.getProfile(data.accessToken);
                    const userData = profile.result;
                    dispatch({ type: 'user/SET_USER_DATA', userData });
                }
            } catch (error) {
                console.error("Error fetching profile:", error);
            }
        };
    
        fetchData();
    }, []);

    const navigate = useNavigate();
    const handleLogoClick = () => {
        navigate("/");
    };

    return (
        <Background>
            <Container>
                <LogoDiv onClick={handleLogoClick}>
                    <LogoImg src="/assets/logo.svg" alt="" />
                    <Logo>co-letter</Logo>
                </LogoDiv>
                {data.login? 
                <ProfileDiv>
                    <NickName>{data.data.memberNickName} 님</NickName>                    
                    <HeaderMenu imgUrl={data.data.memberProfileImage}></HeaderMenu>
                </ProfileDiv>
                :
                <KakaoButton></KakaoButton>}
            </Container>
        </Background>
    );
};

export default Header;
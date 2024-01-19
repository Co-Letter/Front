import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";
import KakaoButton from "./kakao/button"
import user from '../services/user'

const Background = styled.div`
    width: 100%;
    height: 90px;
    background: rgba(255, 255, 255, 0.5);

    display: flex;
    justify-content: center;
`;

const Container = styled.div`
    width: 1280px;
    
    display: flex;
    justify-content: space-between;
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
`;

const ProfileDiv = styled.div`
    display: flex;
    align-items: center;
`;

const NickName = styled.div`
    color: #000000;
    font-family: 'Aldrich', sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 15.65px;
    user-select: none;
`;

const ProfileImg = styled.img`
    width: 38px;
    height: 38px;
    border-radius: 50%;

    margin-left: 10px;
    margin-right: 10px;
    cursor: pointer;
`;

const Header = () => {
    const [profile, setProfile] = useState([]);

    const login = localStorage.getItem('login');
    useEffect(() => {
        return async () => {
            if (login) {
                const profile = await user.getProfile();
                setProfile(profile.result);
            }
        }

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
                {localStorage.getItem("login")? 
                <ProfileDiv>
                    <NickName>{profile.memberNickName} 님</NickName>
                    <ProfileImg src={profile.memberProfileImage}></ProfileImg>
                </ProfileDiv>: 
                <KakaoButton type="header"></KakaoButton>}
            </Container>
        </Background>
    );
};

export default Header;
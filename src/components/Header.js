import React, { useEffect } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
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

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  color: black;
  font-size: 40px;

  cursor: pointer;

  margin: 25px 10px 0px 0px;
`;

const Header = () => {
    useEffect(() => {
        return async () => {
            const login = localStorage.getItem('login');

            if (login) {
                const profile = await user.getProfile();
                console.log(profile);
            }
        }

    }, []);

    return (
        <Background>
            <Container>
                <LogoDiv>
                    <LogoImg src="/assets/logo.svg" alt="" />
                    <Logo>co-letter</Logo>
                </LogoDiv>
                {localStorage.getItem("login")? <StyledFontAwesomeIcon icon={faBars} />: <KakaoButton></KakaoButton>}
            </Container>
        </Background>
    );
};

export default Header;
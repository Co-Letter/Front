import React from 'react';
import styled from "styled-components";
import { useSelector } from "react-redux";
import Header from "../components/Header"
import MainMenu from "../components/MainMenu"
import KakaoModal from "../components/kakao/modal"

const Container = styled.div`
    width: 100%;
    height: 100vh;
    min-height: 100vh;
    background: #A2C4F1;
    margin: 0px;

    @media screen and (max-width: 1280px) {
        height: 100%;
    }
`;

function Home() {  
    const data = useSelector((state) => state.store);

    return (
        <>
        { data.popup? <KakaoModal /> : <></>}
        <Container>
            <Header />
            <MainMenu />
        </Container>
        </>
    );
  }
  
  export default Home;
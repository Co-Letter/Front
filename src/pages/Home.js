import React from 'react';
import styled from "styled-components";
import Header from "../components/Header"

const Container = styled.div`
    width: 100%;
    height: 100vh;
    min-height: 100vh;
    background: #A2C4F1;
    margin: 0px;
`;

function Home() {  
    return (
        <Container>
            <Header />
        </Container>
    );
  }
  
  export default Home;
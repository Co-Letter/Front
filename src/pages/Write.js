import React from 'react';
import styled from "styled-components";
import Header from "../components/Header"
import MailboxWrite from '../components/MailboxWrite';

const Container = styled.div`
    width: 100%;
    height: 100vh;
    min-height: 100vh;
    background: #A2C4F1;
    margin: 0px;
`;

function Write() {  
    return (
        <Container>
            <Header />
            <MailboxWrite />
        </Container>
    );
  }
  
  export default Write;
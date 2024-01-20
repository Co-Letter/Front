import React from 'react';
import styled from "styled-components";
import Header from "../components/Header"
import MailboxContent from "../components/MailboxContent"

const Container = styled.div`
    width: 100%;
    height: 100vh;
    min-height: 100vh;
    background: #A2C4F1;
    margin: 0px;
`;

function Mailbox() {  
    return (
        <Container>
            <Header />
            <MailboxContent />
        </Container>
    );
  }
  
  export default Mailbox;
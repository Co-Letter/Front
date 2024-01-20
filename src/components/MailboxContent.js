import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShareNodes, faPenToSquare } from '@fortawesome/free-solid-svg-icons'

const MainWrapper = styled.div`
    display: flex;
    justify-content: center;
`;

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;

    padding: 100px 0px 0px 0px;
`;

const Title = styled.input`
    min-width: calc(1148px - 20px);
    height: calc(80px - 20px);
    font-size: 32px;

    padding: 10px;
    
    border: 0px;
    border-radius: 10px;
`

const ButtonContainer = styled.div`
    width: 55px;
    height: 55px;
    background-color: white;
    border-radius: 50%;
`

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
    color: #000000;
    font-size: 30px;

    margin-top: 12px;
    margin-left: 13px;
`;

const ContentBox = styled.div`
    margin-top: 20px;

    width: 1280px;
    height: calc(100vh - 290px);
    background-color: white;
    
    border-radius: 10px 10px 0px 0px;
`

function MailboxContent() {
    return(
        <div>
        <MainWrapper>
            <Wrapper>
                <Title></Title>
                <ButtonContainer>
                <StyledFontAwesomeIcon icon={faShareNodes} />
                </ButtonContainer>
                <ButtonContainer>
                <StyledFontAwesomeIcon icon={faPenToSquare} />
                </ButtonContainer>
            </Wrapper>
        </MainWrapper>
        
        <MainWrapper>
            <ContentBox />
        </MainWrapper>
        </div>
    )
}

export default MailboxContent;
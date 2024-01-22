import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
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
    min-width: calc(1148px - 40px);
    height: calc(80px - 40px);
    font-size: 32px;

    padding: 20px;
    border: 0px;
    border-radius: 10px;

    color: #333333;
    font-family: 'Noto Sans KR', sans-serif;
    
    &:focus {
        outline: none;
    }
`

const ButtonContainer = styled.div`
    width: 55px;
    height: 55px;
    background-color: white;
    border-radius: 50%;

    cursor: pointer;
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
    const url = window.location.href;
    const navigate = useNavigate();
    const handleShare = () => {
        navigator.clipboard.writeText(url)
            .then(() => {
                window.alert('공유 링크 복사 성공');
            })
            .catch((error) => {
                console.error('Failed to copy text to clipboard:', error);
            });
    }

    const handleWrite = () => {
        const parts = url.split('/');
        const id = parts[parts.length - 1];
        navigate(`/write/${id}`);
    }

    return(
        <div>
        <MainWrapper>
            <Wrapper>
                <Title placeholder="편지함 제목을 입력해주세요."></Title>
                <ButtonContainer>
                <StyledFontAwesomeIcon icon={faShareNodes} onClick={handleShare} />
                </ButtonContainer>
                <ButtonContainer>
                <StyledFontAwesomeIcon icon={faPenToSquare} onClick={handleWrite} />
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
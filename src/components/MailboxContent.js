import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShareNodes, faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import PostIt from "./PostIt";

import post from "../services/post"

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

    @media screen and (max-width: 1280px) {
        width: 100%;
        margin-left: 30px;
        margin-right: 30px;
        padding: 70px 0px 0px 0px;
    }
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

    @media screen and (max-width: 1280px) {
        width: 100%;
        min-width: auto;
        height: 30px;
        padding: 10px;

        color: #333333;
        font-size: 16px;
        font-family: 'Noto Sans KR', sans-serif;
    }
`;

const ButtonContainer = styled.div`
    width: 55px;
    height: 55px;
    background-color: white;
    border-radius: 50%;

    cursor: pointer;

    @media screen and (max-width: 1280px) {
        min-width: 36px;
        max-width: 36px;
        height: 36px;
    }
`

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
    color: #000000;
    font-size: 30px;

    margin-top: 12px;
    margin-left: 13px;

    @media screen and (max-width: 1280px) {
        font-size: 19px;

        margin-top: 8px;
        margin-left: 8px;
    }
`;

const ContentBox = styled.div`
    margin-top: 20px;

    width: 1280px;
    height: calc(100vh - 290px);
    background-color: white;
    
    border-radius: 10px 10px 0px 0px;

    overflow-x: hidden;
    overflow-y: auto;

    @media screen and (max-width: 1280px) {
        font-size: 19px;
        margin: 30px;
        margin-top: 10px;
        margin-bottom: 0px;
        height: calc(100vh - 220px);
    }
`

const ContentRow = styled.div`
    display: flex;
`

const CountBox = styled.div`
    margin-top: 20px;
    margin-right: 25px;
    text-align: right;

    color: #000000;
    font-family: 'Aldrich', sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
`

function MailboxContent() {
    const [count, setCount] = useState(0);
    const [contents, setContents] = useState([]);
    const data = useSelector((state) => state.user);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const parts = url.split('/');
                const id = parts[parts.length - 1];
                const result = await post.getMail(data.accessToken, id);
                setContents(result);
                const countResult = await post.countMail(data.accessToken, id);
                setCount(countResult);
            } catch (error) {
                console.error("Effor fetching mailbox:", error);
            }
        };

        fetchData();
    }, []);

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
                <ButtonContainer onClick={handleShare}>
                <StyledFontAwesomeIcon icon={faShareNodes} />
                </ButtonContainer>
                <ButtonContainer onClick={handleWrite}>
                <StyledFontAwesomeIcon icon={faPenToSquare} />
                </ButtonContainer>
            </Wrapper>
        </MainWrapper>
        
        <MainWrapper>
            <ContentBox>
                <CountBox>총 {count}개의 메시지</CountBox>
                {contents !== undefined && contents.length > 0 && (
                    <>
                        {window.innerWidth > 1280 ? (
                            contents.reduce((rows, content, index) => {
                                if (index % 3 === 0) {
                                    rows.push([content]);
                                } else {
                                    rows[rows.length - 1].push(content);
                                }
                                return rows;
                            }, []).map((rowContents, rowIndex) => (
                                <ContentRow key={rowIndex}>
                                    {rowContents.map((content, contentIndex) => (
                                        <PostIt key={contentIndex} data={content} />
                                    ))}
                                </ContentRow>
                            ))
                        ) : (
                            contents.map((content, rowIndex) => (
                                <ContentRow key={rowIndex}>
                                    <PostIt key={rowIndex} data={content} />
                                </ContentRow>
                            ))
                        )}
                    </>
                )}
            </ContentBox>
        </MainWrapper>
        </div>
    )
}

export default MailboxContent;
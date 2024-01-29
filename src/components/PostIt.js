import React from 'react';
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 370px;
    height: 370px;

    background-color: #D2E5F3;
    background: linear-gradient(45deg, transparent 21px, #D2E5F3 0);

    margin: auto;
    margin-top: 20px;
    margin-bottom: 20px;
`;

const WriteBox = styled.div`
    width: calc(330px - 40px);
    height: calc(280px - 40px);
    background-color: transparent;

    color: #000000;
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 16px;
    line-height: 24px;

    padding: 20px;
    margin: auto;
    margin-top: 20px;
    margin-bottom: 0px;

    border: none;
    resize: none;

    overflow-x: hidden;
    overflow-y: auto;
`;

const PostItDesign = styled.div`
    margin-top: 10px;
    width: 30px;
    height: 30px;
    background-color: #000000;
    background: linear-gradient(45deg, transparent 21px, #8fa5b5 0);
`; 

const NickNameBox = styled.div`
    margin-top: 10px;
    margin-right: 20px;
`;

const NickNameText = styled.div`
    text-align: right;
    color: #000000;
    font-family: 'Aldrich', sans-serif;
    font-size: 16px;
    line-height: 24px
`;

function PostIt({data}) {  
    return (
        <Container>
            <WriteBox>
                {data.content}
            </WriteBox>
                        
            <NickNameBox>
                <NickNameText>
                    From. {data.writer}
                </NickNameText>
            </NickNameBox>

            <PostItDesign></PostItDesign>
        </Container>
    );
  }
  
  export default PostIt;
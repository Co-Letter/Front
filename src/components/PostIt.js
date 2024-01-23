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
    margin-top: 50px;
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

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
    color: #000000;
    font-size: 20px;

    margin-top: 2px;
    margin-left: 40px;

    cursor: pointer;
`;

const NickNameBox = styled.div`
    display: flex;
    justify-content: space-between;
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
    const handleDelete = () => {
        console.log("delete click!");
    };

    return (
        <Container>
            <WriteBox>ㅎㅇㅎㅇ
                나랑 닭발 먹기로 했는데 왜 연락 안해?
                왜 플젝 시작해서 나랑 안 놀아죠?
                왜 나 물음표 살인마 만들어?
                어? 이거 보면 당장 연락해.
                루피 병따개 샀으니까 이걸로 맥주도 따
                소맥 마실까? 연맥 마실까?
                어쨌든 연락해 ㅡㅡㅎㅇㅎㅇ
                나랑 닭발 먹기로 했는데 왜 연락 안해?
                왜 플젝 시작해서 나랑 안 놀아죠?
                왜 나 물음표 살인마 만들어?
                어? 이거 보면 당장 연락해.
                루피 병따개 샀으니까 이걸로 맥주도 따
                소맥 마실까? 연맥 마실까?
                어쨌든 연락해 ㅡㅡㅎㅇㅎㅇ
                나랑 닭발 먹기로 했는데 왜 연락 안해?
                왜 플젝 시작해서 나랑 안 놀아죠?
                왜 나 물음표 살인마 만들어?
                어? 이거 보면 당장 연락해.
                루피 병따개 샀으니까 이걸로 맥주도 따
                소맥 마실까? 연맥 마실까?
                어쨌든 연락해 ㅡㅡ
            </WriteBox>
            {/* <WriteBox>{data.content}</WriteBox> */}
                        
            {/* <NickNameBox>
                <NickNameText>
                    From. {data.data.memberNickName}
                </NickNameText>
            </NickNameBox> */}
            
                        
            <NickNameBox>
                <StyledFontAwesomeIcon icon={faTrash} onClick={handleDelete} />
                <NickNameText>
                    From. 새침한불그스름한얼룩말
                </NickNameText>
            </NickNameBox>

            <PostItDesign></PostItDesign>
        </Container>
    );
  }
  
  export default PostIt;
import React from "react";
import { useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";
import styled from "styled-components";
import KakaoButton from "./kakao/button"

const MainWrapper = styled.div`
    display: flex;
    justify-content: center;
`;

const Wrapper = styled.div`
    min-width: 1280px;

    display: flex;
    justify-content: space-between;

    padding: 100px 0px 0px 0px;
`;

const WrapperInner = styled.div`
    background: #ffffff;
    width: calc(630px - 80px);
    height: calc(730px - 10px);
    border-radius: 10px;
    position: flex;
    padding: 70px 40px 10px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    .subtitle {
        color: #000000;
        font-family: 'Noto Sans KR', sans-serif;
        font-size: 18px;
        font-weight: 400;
        line-height: 24.52px;
        margin: 0px;
    }

    .title {
        color: #000000;
        font-family: 'Noto Sans KR', sans-serif;
        font-size: 60px;
        font-weight: 700;
        line-height: 81.72px;
        margin: 0px;
        margin-bottom: 40px;
    }

    .description {
        color: #000000;
        font-family: 'Noto Sans KR', sans-serif;
        font-size: 22px;
        font-weight: 400;
        line-height: 29.96px;
        margin: 0px;
        margin-bottom: 40px;
    }

    .imageDiv {
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        margin: 0 auto;
    }

    .image {
        max-height: 460px;
    }

    .btn {
        color: #000000;
        font-family: 'Noto Sans KR', sans-serif;
        font-size: 18px;
        font-weight: 400;
        line-height: 24.52px;
        text-align: right;
        cursor: pointer;
    }
`;

function MainMenu() {  
    const navigate = useNavigate();
    const handleCoLetter = () => {
        if (data.login) {
            navigate('/mailbox');
        }
        else {
            KakaoButton({type: "mainMenu"});
        }
    }; 

    const handleDoLetter = () => {
        window.alert("준비중입니다.");
    };

    const data = useSelector((state) => state.user);

    return(
        <MainWrapper>
          <Wrapper>
            <WrapperInner>
                <div className="subtitle">너와 나를 연결하는 메시지</div>
                <div className="title">Co-Letter</div>
                <div className="description">소중한 사람에게 전하고 싶은 메시지를 남겨보세요.</div>
                <div className="imageDiv">
                <img src="assets/CoLetter_image.png" alt="CoLetter Image" className="image"/>
                </div>
                <div className="btn" onClick={handleCoLetter}>{data.login?(<span>내 편지함 보기&nbsp;&nbsp;&nbsp;&gt;</span>):(<span>내 편지함 만들기&nbsp;&nbsp;&nbsp;&gt;</span>)}</div>
            </WrapperInner>
            
            <WrapperInner>
                <div className="subtitle">모두를 연결하는 메시지</div>
                <div className="title">Do-Letter</div>
                <div className="description">당신이 남긴 메시지가 누군가에겐 희망이 됩니다.</div>                
                <div className="imageDiv">
                <img src="assets/DoLetter_image.png" alt="Do-Letter Image" className="image"/>
                </div>
                <div className="btn" onClick={handleDoLetter}>희망의 메시지 전하기&nbsp;&nbsp;&nbsp;&gt;</div>
            </WrapperInner>
        </Wrapper>
      </MainWrapper>
    )
}

export default MainMenu;
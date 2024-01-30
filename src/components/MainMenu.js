import React from "react";
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

const MainWrapper = styled.div`
    display: flex;
    justify-content: center;

    @media screen and (max-width: 1280px) {
        display: flex;
        justify-content: center;
    }
`;

const Wrapper = styled.div`
    min-width: 1280px;

    display: flex;
    justify-content: space-between;

    padding: 100px 0px 0px 0px;

    @media screen and (max-width: 1280px) {
        padding: 50px 0px 0px 0px;

        flex-direction: column;
        margin: 10px;
        width: 100%;
        min-width: 300px;
    }
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

    @media screen and (max-width: 1280px) {
        width: calc(100% - 60px);
        height: calc(300px - 10px);
        font-size: 36px;
        letter-spacing: 0.35px;
        line-height: 28px;
        padding: 20px 10px 10px;
        margin: 20px;

        .subtitle {
            color: #000000;
            font-family: 'Noto Sans KR', sans-serif;
            font-size: 12px;
            font-weight: 400;
            line-height: 16.34px;
            margin: 0px;
        }
    
        .title {
            color: #000000;
            font-family: 'Noto Sans KR', sans-serif;
            font-size: 35px;
            font-weight: 700;
            line-height: 47.67px;
            margin: 0px;
            margin-bottom: 10px;
        }
    
        .description {
            color: #000000;
            font-family: 'Noto Sans KR', sans-serif;
            font-size: 14px;
            font-weight: 400;
            line-height: 19.07px;
            margin: 0px;
            margin-bottom: 20px;
        }
    
        .imageDiv {
            display: flex;
            align-items: left;
            justify-content: left;
            text-align: center;
            margin: 0 auto;
        }
    
        .image {
            max-height: 125px;
        }
    
        .btn {
            display: flex;
            align-items: center;
            justify-content: center;

            background-color: #78B3FF;
            width: 180px;
            height: 35px; 
            border-radius: 50px;
            margin-left: auto;

            color: #ffffff;
            font-family: 'Noto Sans KR', sans-serif;
            font-size: 15px;
            font-weight: 400;
            line-height: 20.43px;
            cursor: pointer;
        }
    }
`;

function MainMenu() {  
    const data = useSelector((state) => state.user);
    const dispatch = useDispatch();

    const navigate = useNavigate();
    const handleCoLetter = () => {
        if (data.login) {
            const id = data.data.memberId;
            navigate(`/mailbox/${id}`);
        }
        else {
            const popup = true;
            dispatch({ type: 'store/SET_POPUP_STATE', popup });
        }
    }; 

    const handleDoLetter = () => {
        window.alert("준비중입니다.");
    };

    return(
        <MainWrapper>
          <Wrapper>
            <WrapperInner>
                <div className="subtitle">너와 나를 연결하는 메시지</div>
                <div className="title">Co-Letter</div>
                <div className="description">소중한 사람에게 전하고 싶은 메시지를 남겨보세요.</div>
                <div className="imageDiv">
                <img src="assets/CoLetter_image.png" alt="co-letter" className="image"/>
                </div>
                <div className="btn" onClick={handleCoLetter}>{data.login?(<span>내 편지함 보기&nbsp;&nbsp;&nbsp;&gt;</span>):(<span>내 편지함 만들기&nbsp;&nbsp;&nbsp;&gt;</span>)}</div>
            </WrapperInner>
            
            <WrapperInner>
                <div className="subtitle">모두를 연결하는 메시지</div>
                <div className="title">Do-Letter</div>
                <div className="description">당신이 남긴 메시지가 누군가에겐 희망이 됩니다.</div>                
                <div className="imageDiv">
                <img src="assets/DoLetter_image.png" alt="do-letter" className="image"/>
                </div>
                <div className="btn" onClick={handleDoLetter}>희망의 메시지 전하기&nbsp;&nbsp;&nbsp;&gt;</div>
            </WrapperInner>
        </Wrapper>
      </MainWrapper>
    )
}

export default MainMenu;
import React, { useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import Switch from "react-switch";

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

const ContentBox = styled.div`
    width: 1280px;
    height: 750px;
    background-color: white;
    
    border-radius: 10px;
`

const ColorPicker = styled.div`
    margin: auto;
    margin-top: 50px;
    width: 370px;
    height: 50px;
`

const ColorSelector = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: ${props => (props.color === props.$background ? '3px solid #222222' : '1px solid #757575')};
    
    background-color: ${props => props.color || '#ffffff'};

    margin-left: 10px;
    margin-right: 10px;
    cursor: pointer;
`;

const PostIt = styled.div`
    display: flex;
    flex-direction: column;
    width: 370px;
    height: 370px;

    background-color: ${props => props.$background || '#D2E5F3'};
    box-shadow: 10px 10px 15px 2px rgba(0, 0, 0, 0.20);

    margin: auto;
    margin-top: 50px;
`;

const CountBox = styled.div`
    margin-top: 10px;
    margin-right: 10px;
`; 

const CountText = styled.div`
    text-align: right;
    color: #666666;
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 12px;
    line-height: 24px
`; 

const WriteBox = styled.textarea`
    width: calc(350px - 20px);
    height: calc(300px - 20px);
    background-color: transparent;

    color: #000000;
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 16px;
    line-height: 24px;

    padding: 10px;
    margin: auto;
    margin-top: 0px;
    margin-bottom: 0px;

    border: none;
    resize: none;

    &:focus {
        outline: none;
    }
`;

const NickNameBox = styled.div`
    margin-top: 10px;
    margin-right: 10px;
`;

const NickNameText = styled.div`
    text-align: right;
    color: #222222;
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 14px;
    line-height: 19.07px
`;

const SecretDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 370px;
    height: 50px;

    background-color: #d8d8d8;
    border-radius: 50px;

    margin: auto;
    margin-top: 30px;
`;

const SecretText = styled.div`
    color: #666666;
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 16px;
    line-height: 21.79px;

    margin: 20px;
`;

const SecretButton = styled.label`
    margin-right: 10px;

    width: 56px;
    height: 28px;

    border-radius: 50px;
    border: 1px solid #666666;
`;

const SubmitButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 370px;
    height: 70px;
    cursor: pointer;

    background-color: #ffffff;
    border: 1px solid #000000;
    border-radius: 15px;

    margin: auto;
    margin-top: 30px;
`;

const SubmitText = styled.div`
    text-align: center;
    color: #222222;
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 24px;
    line-height:32.69px
`;

function MailboxWrite() {
    const [background, setBackground] = useState("#D2E5F3");
    const handleColorPick = (event) => {
        setBackground(event.target.getAttribute('color'));
    }

    const [checked, setChecked] = useState(false);
    const handleChange = () => {
      setChecked((current) => !current);
    };

    const [count, setCount] = useState(0);
    const [content, setContent] = useState("");

    const writeText = (value) => {
        setContent(value);
        setCount(value.length);
    }

    const data = useSelector((state) => state.user);

    return(
        <div>
        <MainWrapper>
            <Wrapper>
                <ContentBox>
                    <ColorPicker> 
                        <Swiper
                            modules={[Pagination, Scrollbar, A11y]}
                            spaceBetween={10}
                            slidesPerView={4.5}
                            loop={true}
                            pagination={{ clickable: true }}
                            scrollbar={{ draggable: true }}
                        >
                            <SwiperSlide>
                                <ColorSelector onClick={handleColorPick} color="#D2E5F3" $background={background}></ColorSelector>
                            </SwiperSlide>
                            <SwiperSlide>
                                <ColorSelector onClick={handleColorPick} color="#D9E9F8" $background={background}></ColorSelector>
                            </SwiperSlide>
                            <SwiperSlide>
                                <ColorSelector onClick={handleColorPick} color="#E1FBE1" $background={background}></ColorSelector>
                            </SwiperSlide>
                            <SwiperSlide>
                                <ColorSelector onClick={handleColorPick} color="#E8EEF8" $background={background}></ColorSelector>
                            </SwiperSlide>
                            <SwiperSlide>
                                <ColorSelector onClick={handleColorPick} color="#F4F1F3" $background={background}></ColorSelector>
                            </SwiperSlide>
                            <SwiperSlide>
                                <ColorSelector onClick={handleColorPick} color="#F4F3D5" $background={background}></ColorSelector>
                            </SwiperSlide>
                            <SwiperSlide>
                                <ColorSelector onClick={handleColorPick} color="#F5FBD9" $background={background}></ColorSelector>
                            </SwiperSlide>
                            <SwiperSlide>
                                <ColorSelector onClick={handleColorPick} color="#F8EAE5" $background={background}></ColorSelector>
                            </SwiperSlide>
                            <SwiperSlide>
                                <ColorSelector onClick={handleColorPick} color="#FFD9D1" $background={background}></ColorSelector>
                            </SwiperSlide>
                        </Swiper>
                    </ColorPicker>
               
                    <PostIt $background={background}>
                        <CountBox>
                            <CountText>
                            {count}/230
                            </CountText>
                        </CountBox>
                        <WriteBox placeholder="편지를 작성해주세요." spellCheck="false" value={content} maxLength={230} onChange={(event) => writeText(event.target.value)}></WriteBox>
                        
                        <NickNameBox>
                            <NickNameText>
                                From. {data.data.memberNickName}
                            </NickNameText>
                        </NickNameBox>
                    </PostIt>

                    <SecretDiv>
                        <SecretText>편지함 주인만 읽기</SecretText>
                        <SecretButton>
                            <Switch
                                onChange={handleChange}
                                checked={checked}
                                activeBoxShadow="0px 0px 0px 0px rgba(0, 0, 0, 0)"
                                offColor="#B0B0B0"
                                onColor="#B0B0B0"
                                offHandleColor="#666666"
                                onHandleColor="#666666"
                                uncheckedIcon={<div></div>}
                                checkedIcon={<div></div>}
                            />
                        </SecretButton>
                    </SecretDiv>
                    <SubmitButton><SubmitText>편지 쓰기</SubmitText></SubmitButton>
                </ContentBox>
            </Wrapper>
        </MainWrapper>
        </div>
    )
}

export default MailboxWrite;
import React from 'react';

const KakaoButton = ()=>
{   
    const Rest_api_key='97b37b5bc03aa1e4b911652ec5cfe221'
    const redirect_uri = 'http://localhost:8080/auth'
    const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${Rest_api_key}&redirect_uri=${redirect_uri}&response_type=code`
    
    const handleLogin = ()=>{
        window.location.href = kakaoURL
    }

    return(
        <button onClick={handleLogin}>카카오 로그인</button>
    )
}

export default KakaoButton;
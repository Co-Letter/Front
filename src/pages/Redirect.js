import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import auth from '../services/auth'

const LoginHandler = () => {
  const navigate = useNavigate();
  const code = new URL(window.location.href).searchParams.get("code");

  useEffect(() => {
    const kakaoLogin = async () => {
      try {
        if (code) {
          const user = await auth.login(code);
  
          localStorage.setItem('accessToken', user.accessToken);
          localStorage.setItem('refreshToken', user.refreshToken);
          localStorage.setItem('login', user.accessToken? true: false);
  
          navigate("/");
        }
      } catch (error) {
        console.error(error);
      }
    };

    kakaoLogin();
  }, [code]);

  return (
    <div className="LoginHandeler">
      <div className="notice">
        <p>로그인 중입니다.</p>
        <p>잠시만 기다려주세요.</p>
        <div className="spinner"></div>
      </div>
    </div>
  );
};

export default LoginHandler;
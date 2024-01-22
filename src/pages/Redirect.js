import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import auth from '../services/auth'

const LoginHandler = () => {
  const navigate = useNavigate();
  const code = new URL(window.location.href).searchParams.get("code");

  const dispatch = useDispatch();

  useEffect(() => {
    const kakaoLogin = async () => {
      try {
        if (code) {
          const userToken = await auth.login(code);
          dispatch({ type: 'user/SET_USER_TOKEN', userToken });

          navigate("/");
        }
      } catch (error) {
        console.error(error);
      }
    };

    kakaoLogin();
  }, [code, dispatch, navigate]);

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
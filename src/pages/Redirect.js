import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import auth from '../services/auth'
import user from '../services/user'

import Loading from './Loading'

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

          const profile = await user.getProfile(userToken.accessToken);
          const userData = profile.result;
          dispatch({ type: 'user/SET_USER_DATA', userData });
          
          const popup = false;
          dispatch({ type: 'store/SET_POPUP_STATE', popup });

          navigate("/");
        }
      } catch (error) {
        console.error(error);
      }
    };

    kakaoLogin();
  }, [code, dispatch, navigate]);

  return (
    <Loading></Loading>
  );
};

export default LoginHandler;
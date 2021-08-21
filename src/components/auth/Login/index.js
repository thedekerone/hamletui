import { useMutation, useQuery } from "@apollo/client";
import React, { useRef, useState } from "react";
import { connect } from "react-redux";
import { loginUser } from "../../../actions";
import {
  authenticateUserWithPassword,
  GET_ALL_SOUNDS,
  GET_CURRENT_USER,
} from "../../../querys/querys";
import { getLocalData, setLocalData } from "../../../util";
import { LoginContainer, LoginModal, Overlay } from "./styles";

export const LoginUI = ({ show = false, setIsShowing, onLogin }) => {
  const email = useRef();
  const password = useRef();
  const [signin] = useMutation(authenticateUserWithPassword, {
    refetchQueries: [GET_CURRENT_USER],
  });

  const handleLogin = async () => {
    const res = await signin({
      variables: {
        email: email.current.value,
        password: password.current.value,
      },
    });

    console.log(res.data.authenticateUserWithPassword.item);
    onLogin(res.data.authenticateUserWithPassword.item);

    setLocalData("user", res.data.authenticateUserWithPassword.item);

    setIsShowing(false);
  };

  return (
    <LoginModal show={show}>
      <LoginContainer>
        <h2>Login</h2>
        <div>
          <label>
            Correo electronico <br />
            <input ref={email} type='text' placeholder='email' />
          </label>
        </div>
        <div>
          <label>
            Contraseña <br />
            <input ref={password} type='text' placeholder='password' />
          </label>
        </div>
        <button onClick={() => handleLogin()}>Login</button>
      </LoginContainer>
      <Overlay></Overlay>
    </LoginModal>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    onClickLike: (id) => {
      dispatch(toggleLike(id));
    },
    onTogglePlay: (id) => {
      dispatch(togglePlay(id));
    },
    onLogin: (data) => {
      dispatch(loginUser(data));
    },
  };
};

export const Login = connect(
  (state) => ({
    sounds: state.sounds.favoriteSounds,
    config: state.audioConfig,
  }),
  mapDispatchToProps
)(LoginUI);

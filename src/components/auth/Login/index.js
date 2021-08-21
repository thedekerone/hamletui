import { useMutation, useQuery } from "@apollo/client";
import React, { useRef, useState } from "react";
import { connect } from "react-redux";
import {
  authenticateUserWithPassword,
  GET_ALL_SOUNDS,
  GET_CURRENT_USER,
} from "../../../querys/querys";
import { getLocalData, setLocalData } from "../../../util";
import { LoginContainer, LoginModal, Overlay } from "./styles";

export const LoginUI = ({ show = false, setIsShowing }) => {
  const email = useRef();
  const password = useRef();
  const [signin] = useMutation(authenticateUserWithPassword, {
    refetchQueries: [
      {
        query: GET_CURRENT_USER,
        variables: {
          id: "60af0c9f351c033080892cfc",
        },
      },
    ],
  });

  const handleLogin = async () => {
    const res = await signin({
      variables: {
        email: email.current.value,
        password: password.current.value,
      },
    });

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
  };
};

export const Login = connect(
  (state) => ({
    sounds: state.sounds.favoriteSounds,
    config: state.audioConfig,
  }),
  mapDispatchToProps
)(LoginUI);

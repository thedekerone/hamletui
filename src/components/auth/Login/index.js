import { useMutation, useQuery } from "@apollo/client";
import React, { useRef } from "react";
import { connect } from "react-redux";
import { authenticateUserWithPassword } from "../../../querys/querys";
import { LoginContainer, LoginModal, Overlay } from "./styles";

export const LoginUI = ({ show = false }) => {
  const email = useRef();
  const password = useRef();
  //   const { loading, error, data } = useMutation(
  //     authenticateUserWithPassword(email.current.value, password.config.value)
  //   );

  const handleLogin = () => {
    console.log(email.current.value);
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

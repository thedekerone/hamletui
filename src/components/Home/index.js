import React, { useContext, useEffect, useMemo } from "react";
import { loadData } from "../../actions";
import { Layout } from "../Layout";
import { connect } from "react-redux";
import { AllSounds, LikedSounds } from "../LikedSounds";
import { useMutation, useQuery } from "@apollo/client";

import { Title } from "./styles";
import {
  allSounds,
  authenticateUserWithPassword,
  favoriteSounds,
  getAuthenticatedUser,
} from "../../querys/querys";
import { formatSounds } from "../../util";
import { AudioManagerContext } from "../../Audio/components/AudioManager";

export const HomeLayout = ({ userId, onLoad, onTogglePlay }) => {
  const { audio } = useContext(AudioManagerContext);

  useEffect(() => {
    audio.addEventListener("ended", () => {
      onTogglePlay("");
    });
    return audio.removeEventListener("ended", () => {
      onTogglePlay("");
    });
  }, []);

  return (
    <Layout>
      <Title>Mis audios</Title>
      <LikedSounds></LikedSounds>
      <Title>Todos los audios</Title>
      <AllSounds></AllSounds>
    </Layout>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    onLoad: (allSounds, favoriteSounds) => {
      dispatch(loadData(allSounds, favoriteSounds));
    },
    onTogglePlay: (id) => {
      dispatch(togglePlay(id));
    },
  };
};

export const Home = connect(
  (state) => ({ userId: state.user.id }),
  mapDispatchToProps
)(HomeLayout);

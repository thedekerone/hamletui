import React, { useContext, useEffect, useMemo } from "react";
import { loadData, togglePlay } from "../../actions";
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
  GET_ALL_SOUNDS,
  GET_CURRENT_USER,
} from "../../querys/querys";
import { formatSounds, formatUser } from "../../util";
import { AudioManagerContext } from "../../Audio/components/AudioManager";

export const HomeLayout = ({ userId, onLoad, onTogglePlay }) => {
  const { audio } = useContext(AudioManagerContext);

  const { loading, error, data } = useQuery(GET_CURRENT_USER, {
    variables: {
      id: localStorage.getItem("userId"),
    },
  });
  const allSounds = useQuery(GET_ALL_SOUNDS, {
    variables: {
      first: 40,
      skip: 0,
    },
  });

  function setFavoriteSounds() {
    if (data) {
      onLoad([], formatSounds(data.User.favoriteSounds, true));
    }
  }

  function setAllSounds() {
    if (allSounds.data) {
      onLoad(
        formatSounds(
          allSounds.data.allSounds,
          false,
          localStorage.getItem("userId")
        ),
        []
      );
    }
  }

  useEffect(() => {
    audio.addEventListener("ended", () => {
      onTogglePlay("");
    });
    return audio.removeEventListener("ended", () => {
      onTogglePlay("");
    });
  }, []);

  useEffect(() => {
    setFavoriteSounds();
    setAllSounds();
  }, [data, allSounds]);

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

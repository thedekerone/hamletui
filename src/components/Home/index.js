import React, { useContext, useEffect, useMemo, useState } from "react";
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
import { formatSounds, formatUser, getLocalData } from "../../util";
import { AudioManagerContext } from "../../Audio/components/AudioManager";

export const HomeLayout = ({ userId, onLoad, onTogglePlay, username }) => {
  const { audio } = useContext(AudioManagerContext);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const { loading, error, data } = useQuery(GET_CURRENT_USER, {
    variables: {
      id: userId || getLocalData("user"),
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
        formatSounds(allSounds.data.allSounds, false, getLocalData("user")?.id),
        []
      );
    }
  }

  useEffect(() => {
    console.log("dasas");
    setIsLoggedIn(getLocalData("user") !== null);
    console.log(getLocalData("user"));
  }, [isLoggedIn, data, error]);

  useEffect(() => {
    audio.addEventListener("ended", () => {
      onTogglePlay("");
    });
    return audio.removeEventListener("ended", () => {
      onTogglePlay("");
    });
  }, [audio, onTogglePlay]);

  useEffect(() => {
    console.log("refetching");
    setFavoriteSounds();
    setAllSounds();
  }, [data, allSounds]);

  return (
    <Layout>
      {isLoggedIn && <Title>Mis audios</Title>}

      {isLoggedIn && <LikedSounds></LikedSounds>}
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
  (state) => ({ userId: state.user.id, username: state.user.username }),
  mapDispatchToProps
)(HomeLayout);

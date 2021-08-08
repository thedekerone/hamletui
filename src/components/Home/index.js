import React, { useEffect } from "react";
import { loadData } from "../../actions";
import { Layout } from "../Layout";
import { connect } from "react-redux";
import { AllSounds, LikedSounds } from "../LikedSounds";
import { useQuery } from "@apollo/client";

import { Title } from "./styles";
import { allSounds, favoriteSounds } from "../../querys/querys";
import { formatSounds } from "../../util";

export const HomeLayout = ({ onLoad }) => {
  const { loading, error, data } = useQuery(favoriteSounds());
  const favorite = useQuery(allSounds(10, 0));

  useEffect(() => {
    if (data && favorite) {
      onLoad(
        formatSounds(favorite.data.allSounds, true),
        formatSounds(data.allSounds, true)
      );
    }
  }, [data, favorite, onLoad]);

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
  };
};

export const Home = connect(
  (state) => ({ sounds: state.sounds.favoriteSounds }),
  mapDispatchToProps
)(HomeLayout);

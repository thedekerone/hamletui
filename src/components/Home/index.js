import React from "react";
import { Layout } from "../Layout";
import { LikedSounds } from "../LikedSounds";

import { Title } from "./styles";

export const Home = () => {
  return (
    <Layout>
      <Title>Mis audios</Title>
      <LikedSounds></LikedSounds>
    </Layout>
  );
};

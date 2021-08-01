import React from "react";
import { Layout } from "../Layout";
import { Sound } from "../Sound";
import { SoundContainer, Title } from "./styles";

export const Home = () => {
  return (
    <Layout>
      <Title>Mis audios</Title>
      <SoundContainer>
        <Sound></Sound>
      </SoundContainer>
      <SoundContainer>
        <Sound></Sound>
      </SoundContainer>
      <SoundContainer>
        <Sound></Sound>
      </SoundContainer>
      <SoundContainer>
        <Sound></Sound>
      </SoundContainer>
    </Layout>
  );
};

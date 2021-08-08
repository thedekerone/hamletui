import React, { Fragment } from "react";
import { Sound } from "../Sound";
import { SoundContainer } from "./styles";

export const SoundList = ({ sounds, onClickLike, onTogglePlay }) => {
  console.log(sounds);
  return (
    <Fragment>
      {sounds.map((sound) => (
        <SoundContainer key={sound.title}>
          <Sound
            onClickLike={onClickLike}
            onTogglePlay={onTogglePlay}
            options={sound}
          ></Sound>
        </SoundContainer>
      ))}
    </Fragment>
  );
};

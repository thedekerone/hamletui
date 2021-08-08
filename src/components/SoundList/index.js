import React, { Fragment } from "react";
import { Sound } from "../Sound";
import { SoundContainer } from "./styles";

export const SoundList = ({ sounds, config, onClickLike, onTogglePlay }) => {
  return (
    <Fragment>
      {sounds.map((sound) => (
        <SoundContainer key={sound.title}>
          <Sound
            config={config}
            onClickLike={onClickLike}
            onTogglePlay={onTogglePlay}
            options={sound}
          ></Sound>
        </SoundContainer>
      ))}
    </Fragment>
  );
};

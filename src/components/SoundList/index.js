import React, { Fragment } from "react";
import { Sound } from "../Sound";
import { Grid, SoundContainer } from "./styles";

export const SoundList = ({ sounds, config, onClickLike, onTogglePlay }) => {
  return (
    <Fragment>
      <Grid>
        {sounds.map((sound) => (
          <SoundContainer key={sound.id}>
            <Sound
              config={config}
              onClickLike={onClickLike}
              onTogglePlay={onTogglePlay}
              options={sound}
            ></Sound>
          </SoundContainer>
        ))}
      </Grid>
    </Fragment>
  );
};

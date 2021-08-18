import React from "react";
import { Sound } from "../Sound";
import { connect } from "react-redux";
import { SoundList } from "../SoundList";
import { toggleLike, togglePlay } from "../../actions";


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

export const LikedSounds = connect(
  (state) => ({
    sounds: state.sounds.favoriteSounds,
    config: state.audioConfig,
  }),
  mapDispatchToProps
)(SoundList);

export const AllSounds = connect(
  (state) => ({ sounds: state.sounds.allSounds, config: state.audioConfig }),
  mapDispatchToProps
)(SoundList);

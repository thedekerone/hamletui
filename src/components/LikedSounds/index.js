import React from "react";
import { Sound } from "../Sound";
import { connect } from "react-redux";
import { SoundList } from "../SoundList";
import { toggleLike, togglePlay } from "../../actions";

console.log(toggleLike(1));

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
  (state) => ({ sounds: state.sounds.favoriteSounds }),
  mapDispatchToProps
)(SoundList);

export const AllSounds = connect(
  (state) => ({ sounds: state.sounds.allSounds }),
  mapDispatchToProps
)(SoundList);

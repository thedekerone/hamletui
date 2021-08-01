import React from "react";
import { Sound } from "../Sound";
import { connect } from "react-redux";
import { SoundList } from "../SoundList";
import { likeSound, togglePlay } from "../../actions";

const mapStateToProps = (state) => {
  return {
    sounds: state.sounds.likedSounds,
  };
};

console.log(likeSound(1));

const mapDispatchToProps = (dispatch) => {
  return {
    onClickLike: (id) => {
      dispatch(likeSound(id));
    },
    onTogglePlay: (id) => {
      dispatch(togglePlay(id));
    },
  };
};

export const LikedSounds = connect(
  mapStateToProps,
  mapDispatchToProps
)(SoundList);

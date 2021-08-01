import { combineReducers } from "redux";
import { LIKE_SOUND, TOGGLE_PLAY } from "../actions";

function user(state = {}, action) {
  return state;
}

function togglePlayPipe(soundList, id) {
  return soundList.map((sound) =>
    sound.id === id
      ? { ...sound, isPlaying: !sound.isPlaying }
      : { ...sound, isPlaying: false }
  );
}

function sounds(state = { allSounds: [], likedSounds: [] }, action) {
  console.log(state);
  switch (action.type) {
    case LIKE_SOUND:
      return {
        allSounds: state.allSounds.map((sound) =>
          sound.id === action.id
            ? {
                ...sound,
                hasLike: !sound.hasLike,
              }
            : sound
        ),
        likedSounds: state.likedSounds.filter(
          (sound) => sound.id !== action.id
        ),
      };

    case TOGGLE_PLAY:
      return {
        allSounds: togglePlayPipe(state.allSounds, action.id),
        likedSounds: togglePlayPipe(state.likedSounds, action.id),
      };

    default:
      return state;
  }
}

const todoApp = combineReducers({
  user,
  sounds,
});

export default todoApp;

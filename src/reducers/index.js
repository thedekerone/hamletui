import { combineReducers } from "redux";
import { TOGGLE_LIKE, TOGGLE_PLAY, LOAD_DATA, LOGIN, LOGOUT } from "../actions";

// extra functions - no reducers (change directory later)

// end extra functions - no reducers (change directory later)

const findById = (soundList, id) => soundList.find((sound) => sound.id === id);

function user(state = {}, action) {
  switch (action.type) {
    case LOGIN:
      return {
        id: action.data.id,
        username: action.data.name,
      };
    case LOGOUT:
      return {
        id: 0,
        username: "sample",
      };

    default:
      return state;
  }
}

// allSounds and favoriteSounds reducers work together to reduce the number of lines in the code

function sounds(state = { allSounds: [], favoriteSounds: [] }, action) {
  switch (action.type) {
    case TOGGLE_LIKE:
      return {
        allSounds: state.allSounds.map((sound) =>
          sound.id === action.id
            ? {
                ...sound,
                hasLike: !sound.hasLike,
              }
            : sound
        ),
        favoriteSounds: findById(state.favoriteSounds, action.id)
          ? state.favoriteSounds.filter((sound) => sound.id !== action.id)
          : [
              ...state.favoriteSounds,
              {
                ...findById(state.allSounds, action.id),
                hasLike: true,
              },
            ],
      };

    case LOAD_DATA:
      return {
        allSounds:
          action.data.allSounds.length > 0
            ? action.data.allSounds
            : state.allSounds,
        favoriteSounds:
          action.data.favoriteSounds.length > 0
            ? action.data.favoriteSounds
            : state.favoriteSounds,
      };

    default:
      return state;
  }
}

function audioConfig(state = {}, action) {
  switch (action.type) {
    case TOGGLE_PLAY:
      return {
        ...state,
        isPlaying: action.id === state.current ? !state.isPlaying : true,
        current: action.id,
      };

    default:
      return state;
  }
}

const todoApp = combineReducers({
  user,
  sounds,
  audioConfig,
});

export default todoApp;

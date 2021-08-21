/*
 * tipos de acciones
 */

export const TOGGLE_LIKE = "TOGGLE_LIKE";
export const TOGGLE_PLAY = "TOGGLE_PLAY";
export const SET_VISIBILITY_FILTER = "SET_VISIBILITY_FILTER";
export const LOAD_DATA = "LOAD_DATA";
export const LOGIN = "LOGIN";

export function toggleLike(id) {
  return { type: TOGGLE_LIKE, id };
}

export function togglePlay(id) {
  return { type: TOGGLE_PLAY, id };
}
export function loadData(allSounds = [], favoriteSounds = []) {
  return {
    type: LOAD_DATA,
    data: { favoriteSounds: favoriteSounds, allSounds: allSounds },
  };
}

export function setVisibilityFilter(filter) {
  return { type: SET_VISIBILITY_FILTER, filter };
}

export function loginUser(data) {
  return { type: LOGIN, data };
}

/*
 * otras constantes
 */

export const defaultState = {
  user: {
    id: 0,
    username: "Guest",
    token: "",
    avatar:
      "https://www.pngitem.com/pimgs/m/80-800194_transparent-users-icon-png-flat-user-icon-png.png",
  },
  sounds: {
    allSounds: [],
    favoriteSounds: [],
  },
  audioConfig: {
    isPlaying: false,
    current: "",
    volume: 1,
  },
};

/*
 * creadores de acciones
 */

/*
 * tipos de acciones
 */

export const LIKE_SOUND = "LIKE_SOUND";
export const TOGGLE_PLAY = "TOGGLE_PLAY";
export const SET_VISIBILITY_FILTER = "SET_VISIBILITY_FILTER";

/*
 * otras constantes
 */

export const defaultState = {
  user: {
    id: 1,
    username: "Thedekerone",
    avatar:
      "https://www.pngitem.com/pimgs/m/80-800194_transparent-users-icon-png-flat-user-icon-png.png",
  },
  sounds: {
    allSounds: [
      {
        title: "Esta cargando mi daga",
        src: "https://hamul-clone.s3.amazonaws.com/sounds/60c3f597dfdec3001cf50e89-ta+cargando+mi+daga.mp3",
        createdBy: "usuario_1",
        id: "dsaxfq2werdfq3f",
        isPlaying: false,
        hasLike: true,
      },
      {
        title: "Esta cargando mi daga 1",
        src: "https://hamul-clone.s3.amazonaws.com/sounds/60c3f597dfdec3001cf50e89-ta+cargando+mi+daga.mp3",
        createdBy: "usuario_1",
        id: "y45yhw4y34ser",
        isPlaying: false,
        hasLike: true,
      },
      {
        title: "Esta cargando mi daga 2",
        src: "https://hamul-clone.s3.amazonaws.com/sounds/60c3f597dfdec3001cf50e89-ta+cargando+mi+daga.mp3",
        createdBy: "usuario_1",
        id: "y2t345yg4etrhe5",
        isPlaying: false,
        hasLike: false,
      },
    ],
    likedSounds: [
      {
        title: "Esta cargando mi daga",
        src: "https://hamul-clone.s3.amazonaws.com/sounds/60c3f597dfdec3001cf50e89-ta+cargando+mi+daga.mp3",
        createdBy: "usuario_1",
        id: "dsaxfq2werdfq3f",
        isPlaying: false,
        hasLike: true,
      },
      {
        title: "Esta cargando mi daga 1",
        src: "https://hamul-clone.s3.amazonaws.com/sounds/60c3f597dfdec3001cf50e89-ta+cargando+mi+daga.mp3",
        createdBy: "usuario_1",
        id: "y45yhw4y34ser",
        isPlaying: false,
        hasLike: true,
      },
    ],
  },
};

/*
 * creadores de acciones
 */

export function likeSound(id) {
  return { type: LIKE_SOUND, id };
}

export function togglePlay(id) {
  return { type: TOGGLE_PLAY, id };
}

export function setVisibilityFilter(filter) {
  return { type: SET_VISIBILITY_FILTER, filter };
}

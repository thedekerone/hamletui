/*
 * tipos de acciones
 */

export const ADD_TODO = "ADD_TODO";
export const COMPLETE_TODO = "COMPLETE_TODO";
export const SET_VISIBILITY_FILTER = "SET_VISIBILITY_FILTER";

/*
 * otras constantes
 */

export const VisibilityFilters = {
  SHOW_ALL: "SHOW_ALL",
  SHOW_COMPLETED: "SHOW_COMPLETED",
  SHOW_ACTIVE: "SHOW_ACTIVE",
};

export const defaultState = {
  user: {
    id: 1,
    username: "Thedekerone",
    avatar:
      "https://www.pngitem.com/pimgs/m/80-800194_transparent-users-icon-png-flat-user-icon-png.png",
  },
  sounds: [
    {
      title: "Esta cargando mi daga",
      src: "https://hamul-clone.s3.amazonaws.com/sounds/60c3f597dfdec3001cf50e89-ta+cargando+mi+daga.mp3",
      createdBy: "usuario_1",
      id: "dsaxfq2werdfq3f",
      hasLike: true,
    },
    {
      title: "Esta cargando mi daga 1",
      src: "https://hamul-clone.s3.amazonaws.com/sounds/60c3f597dfdec3001cf50e89-ta+cargando+mi+daga.mp3",
      createdBy: "usuario_1",
      id: "y45yhw4y34ser",
      hasLike: false,
    },
    {
      title: "Esta cargando mi daga 2",
      src: "https://hamul-clone.s3.amazonaws.com/sounds/60c3f597dfdec3001cf50e89-ta+cargando+mi+daga.mp3",
      createdBy: "usuario_1",
      id: "y2t345yg4etrhe5",
      hasLike: false,
    },
  ],
};

/*
 * creadores de acciones
 */

export function addTodo(text) {
  return { type: ADD_TODO, text };
}

export function completeTodo(index) {
  return { type: COMPLETE_TODO, index };
}

export function setVisibilityFilter(filter) {
  return { type: SET_VISIBILITY_FILTER, filter };
}

import { combineReducers } from "redux";
import {
  ADD_TODO,
  COMPLETE_TODO,
  defaultState,
  SET_VISIBILITY_FILTER,
  VisibilityFilters,
} from "../actions";

console.log(VisibilityFilters);

const { SHOW_ALL } = VisibilityFilters;

function user(state = {}, action) {
  return state;
}

function sounds(state = [], action) {
  return state;
}

const todoApp = combineReducers({ user, sounds });

export default todoApp;

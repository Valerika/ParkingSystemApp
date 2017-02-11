import { ADD_AUTO, DELETE_AUTO, COUNT_FREE } from '../constants/ActionTypes';

export function addAuto(type_auto) {
  return {
    type: ADD_AUTO,
    payload: type_auto
  }
}

export function deleteAuto(type_auto) {
  return {
    type: DELETE_AUTO,
    payload: type_auto
  }
}

export function countFree() {
  return {
    type: COUNT_FREE,
  }
}

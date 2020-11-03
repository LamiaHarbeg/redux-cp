import {
    ADD_TASK,
    DELETE_TASK,
    CHECK_TASK,
    EDIT_TASK
  } from "../Constants/ActionsTypes.js";
  
  export const addItem = (payload) => {
    return {
      type: ADD_TASK,
      payload,
    };
  };
  export const deleteItem = (payload) => {
    return {
      type: DELETE_TASK,
      payload,
    };
  };
  export const completeItem = (payload) => {
    return {
      type: CHECK_TASK,
      payload,
    };
  };
  export const editItem = (payload) => {
    return {
      type: EDIT_TASK,
      payload,
    };
  };
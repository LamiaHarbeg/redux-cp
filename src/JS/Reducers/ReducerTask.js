import {
    ADD_TASK,
    DELETE_TASK,
    CHECK_TASK,
    EDIT_TASK
  } from "../Constants/ActionsTypes.js";
  
  const intialState = [];
  
  const reducerTask = (state = intialState, action) => {
    switch (action.type) {
      case ADD_TASK:
        return [...state, action.payload];
      case DELETE_TASK:
        return state.filter((el) => el.id !== action.payload);
      case CHECK_TASK:
        return state.map((el) =>
          el.id === action.payload ? { ...el, isDone: !el.isDone } : el
        );
      case EDIT_TASK:
        return state.map((el) =>
          el.id === action.payload.id ? { ...el, description: action.payload.description } : el
        );
  
      default:
        return state;
    }
  };
  
  export default reducerTask;
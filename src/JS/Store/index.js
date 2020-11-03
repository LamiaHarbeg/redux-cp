import { createStore } from "redux";
import ReducerTask from "../Reducers/ReducerTask";

const store = createStore(
  ReducerTask,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
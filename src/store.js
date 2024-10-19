import { createStore } from "redux";
import countReducer from "./services/reducers/counterReducer";

const store = createStore(countReducer);

export default store;
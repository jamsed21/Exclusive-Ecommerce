import { createStore } from "redux";
import rootReducers from "./action";

const store = createStore(rootReducers);

export default store;
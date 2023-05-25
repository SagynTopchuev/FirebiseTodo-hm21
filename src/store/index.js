import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { reducer } from "./actions/reducer";

const rootReducer = combineReducers({
  reducer: reducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));

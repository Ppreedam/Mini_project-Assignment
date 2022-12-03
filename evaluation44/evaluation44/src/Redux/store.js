// NOTE: use this store variable to create a store.
import reducer from "./reducer"
import thunk from "redux-thunk"
import { applyMiddleware, legacy_createStore } from "redux";

 const store = legacy_createStore(reducer,applyMiddleware(thunk))

 export default store;
// NOTE: Do not remove this code,its used for calculating your score, if removed it will give you zero marks
if (window.Cypress) {
  window.store = store;
}

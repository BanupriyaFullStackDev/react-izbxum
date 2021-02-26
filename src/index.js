import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";

import App from "./Base/App";
// Selectors
const VADIVELU_COMEDY = "Vadivelu_comedy";
const GOUNDAMANI_COMEDY = "Goundamani_comedy";

// Actions
const VadiveluComedyAction = () => ({ type: VADIVELU_COMEDY });
const GoundamaniComedyAction = () => ({ type: GOUNDAMANI_COMEDY });
// Reducer
const ReducerAction = (state, action) => {
  switch (action.type) {
    case VADIVELU_COMEDY:
      return (state = "Kadupethurar my lord");
    case GOUNDAMANI_COMEDY:
      return (state = "Arasiyal ah ithellam satharanamapa");
    default:
      return (state = "No Comedy Selected");
  }
};
// Store
const store = createStore(ReducerAction);
store.subscribe(() => {
  console.log(store.getState());
});
store.dispatch(VadiveluComedyAction());
function Layout() {
  return <div />;
}
ReactDOM.render(<Layout />, document.getElementById("root"));

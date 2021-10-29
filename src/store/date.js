import { createStore } from "redux";

const initialState = {
  isClicked: false,
  date: { month: "", day: "", date: "" },
};

const dateReducer = (state = initialState, action) => {
  if (action.type === "click") {
    return { isClicked: true, date: action.payload };
  }
  if (action.type === "close") {
    return { state, isClicked: false };
  }
  return state;
};

const store = createStore(dateReducer);

export default store;

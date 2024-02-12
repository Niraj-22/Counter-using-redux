import { createStore } from "redux";

const INITIAL_VALUE = {
  counter: 0,
  privacy: false,
};

const counterReducer = (store = INITIAL_VALUE, action) => {
  console.log("Action received : ", action);
  let newState = store;
  if (action.type === "INCREMENT") {
    newState = { ...store, counter: store.counter + 1 };
  } else if (action.type === "DECREMENT") {
    newState = { ...store, counter: store.counter - 1 };
  } else if (action.type === "ADD") {
    newState = {
      ...store,
      counter: store.counter + Number(action.payload.num),
    };
  } else if (action.type === "SUB") {
    newState = {
      ...store,
      counter: store.counter - Number(action.payload.num),
    };
  } else if (action.type === "TOGGLE") {
    newState = { ...store, privacy: !store.privacy };
  }
  return newState;
};

const counterStore = createStore(counterReducer);

export default counterStore;

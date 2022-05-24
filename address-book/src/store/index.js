import { createStore } from "redux";

// Initial state
const initialState = {
  addressBookList: [
    {
      name: "Andrea",
      surname: "Cicala",
      phone: 32020211,
    },
  ],
  value: 0,
  pippo: {
    pluto: {
      name: "Sempre io!",
    },
  },
};

// Reducer
const generic = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, value: (state.value += 1) };
    case "INCREMENT10":
      return { ...state, value: state.value + action.payload };
    case "DECREMENT":
      return { ...state, value: (state.value -= 1) };
    // case "INCREMENTXN":
    //   return { ...state, value: state.value + parseInt(action.payload) };
    case "ADD_CONTACT":
      return {
        ...state,
        addressBookList: [...state.addressBookList, action.payload],
      };
    // case "DELETE_CONTACT":
    //   return { ...state, addressBookList: []}
    default:
      return state;
  }
};

// Store
const store = createStore(generic, initialState);

export default store;

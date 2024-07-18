import { createContext, useReducer } from "react";

const AppReducer = (state, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return {
        ...state,
        expenses: [...state.expenses, action.payload],
      };
    case "DELETE_EXPENSE":
      return {
        ...state,
        expenses: state.expenses.filter(
          (expense) => expense.id !== action.payload
        ),
      };


    case "SET_BUDGET":
      return {
        ...state,
        budget: action.payload,
      };
    case "ADD_SAVED":
      return {
        ...state,
        saved: [...state.saved, action.payload],
      };

      case "DELETE_SAVED":
      return {
        ...state,
        saved: state.saved.filter(
          (saved) => saved.id !== action.payload
        ),
      };


    default:
      return state;
  }
};
const initialState = {
  budget: 85,
  expenses: [
    { id: 12, name: "Challah", cost: 3.99 },
    { id: 13, name: "Kale", cost: 5.02 },
    { id: 14, name: "Papaya", cost: 2.99 },
    { id: 15, name: "Parmesan", cost: 5.5 },
    { id: 16, name: "Dog Treats", cost: 7.5 },
  ],
  saved: [
    { id: 12, name: "bananas", cost: 1.99 },
    { id: 13, name: "spinach", cost: 3.02 },
    { id: 14, name: "Boo", cost: 49.99 },
    { id: 15, name: "Gouda", cost: 6.5 },
  ],
};

export const AppContext = createContext();

export const AppProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <AppContext.Provider
      value={{
        budget: state.budget,
        expenses: state.expenses,
        saved: state.saved,
        dispatch,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

import { createContext, useReducer } from "react";

export const DUMMY_EXPENSES = [
    {
        id: "e1",
        description: "A pair of shoes",
        amount: 72.70,
        date: new Date("2025-04-08")
    },
    {
        id: "e2",
        description: "Monitor for work",
        amount: 299.00,
        date: new Date("2025-04-09")
    },
    {
        id: "e3",
        description: "A pair of trousers",
        amount: 53.99,
        date: new Date("2025-04-02")
    },
    {
        id: "e4",
        description: "Comics",
        amount: 23.08,
        date: new Date("2025-04-07")
    },
    {
        id: "e5",
        description: "Fruit",
        amount: 6.74,
        date: new Date("2025-04-06")
    },
    {
        id: "e6",
        description: "Groceries",
        amount: 34.29,
        date: new Date("2025-04-10")
    },
    {
        id: "e7",
        description: "Clothes",
        amount: 47.53,
        date: new Date("2025-04-13")
    },
    {
        id: "e8",
        description: "Bread",
        amount: 3.35,
        date: new Date("2025-04-14")
    },
]

export const ExpensesContext = createContext({
  expenses: [],
  addExpense: ({ description, amount, date }) => {},
  deleteExpense: (id) => {},
  updateExpense: (id, { description, amount, date }) => {},
});

function expensesReducer(state, action) {
  switch (action.type) {
    case "ADD":
      const id = new Date().toString() + Math.random().toString();
      return [{ ...action.payload, id: id }, ...state];
    case "UPDATE":
      const updatableExpenseIndex = state.findIndex(
        (expense) => expense.id === action.payload.id
      );
      const updatableExpense = state[updatableExpenseIndex];
      const udpatedItem = { ...updatableExpense, ...action.payload.data };
      const updatedExpenses = [...state];
      updatedExpenses[updatableExpenseIndex] = udpatedItem
      return updatedExpenses;
    case "DELETE":
      return state.filter((expense) => expense.id !== action.payload);
    default:
      return state;
  }
}

function ExpensesContextProvider({ children }) {
    const [expensesState, dispatch] = useReducer(expensesReducer, DUMMY_EXPENSES);

    function addExpense(expenseData) {
        dispatch({ type: "ADD", payload: expenseData });
    }

    function deleteExpense(id) {
        dispatch({ type: "DELETE", payload: id})
    }

    function updateExpense(id, expenseData) {
        dispatch({ type: "UPDATE", payload: { id: id, data: expenseData }});
    }

    const value = {
        expenses: expensesState,
        addExpense: addExpense,
        updateExpense: updateExpense,
        deleteExpense: deleteExpense,
    };

    return <ExpensesContext.Provider value={value}>{children}</ExpensesContext.Provider>;
}

export default ExpensesContextProvider;
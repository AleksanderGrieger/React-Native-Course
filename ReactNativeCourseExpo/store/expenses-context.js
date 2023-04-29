import {createContext, useReducer} from "react";

const DUMMY_EXPENSES = [
    {
        id: 'e1',
        description: 'A pair of shoes',
        amount: 59.99,
        date: new Date('2022-12-13')
    },
    {
        id: 'e2',
        description: 'A pair of trousers',
        amount: 19.99,
        date: new Date('2022-10-13')
    },
    {
        id: 'e3',
        description: 'Magic Trackpad',
        amount: 100.5,
        date: new Date('2023-04-05')
    },
    {
        id: 'e4',
        description: 'Magic Keyboard',
        amount: 75.85,
        date: new Date('2023-04-26')
    },
    {
        id: 'e5',
        description: 'Book',
        amount: 15.85,
        date: new Date('2023-04-30')
    },
    {
        id: 'e6',
        description: 'A pair of trousers',
        amount: 19.99,
        date: new Date('2023-04-25')
    },
    {
        id: 'e7',
        description: 'Magic Trackpad',
        amount: 100.5,
        date: new Date('2023-04-29')
    },
    {
        id: 'e8',
        description: 'Magic Keyboard',
        amount: 75.85,
        date: new Date('2023-04-26')
    },
    {
        id: 'e9',
        description: 'Book',
        amount: 15.85,
        date: new Date('2023-04-28')
    },
]

export const ExpensesContext = createContext({
    expenses: [],
    addExpense: ({description, amount, date}) => {
    },
    deleteExpense: (id) => {
    },
    updateExpense: (id, {description, amount, date}) => {
    },
})

const expensesReducer = (state, action) => {
    switch (action.type) {
        case 'ADD':
            const id = new Date().toString() + Math.random().toString();
            return [{...action.payload, id: id}, ...state];
        case 'UPDATE':
            const updatableExpenseIndex = state.findIndex(
                (expense) => expense.id === action.payload.id
            )
            const updatableExpense = state[updatableExpenseIndex];
            const updatedItem = {...updatableExpense, ...action.payload.data};
            const updatedExpenses = [...state];
            updatedExpenses[updatableExpenseIndex] = updatedItem;
            return updatedExpenses;
        case 'DELETE':
            return state.filter((expense) => expense.id !== action.payload)
        default:
            return state;
    }
}

const ExpensesContextProvider = ({children}) => {
    const [expensesState, dispatch] = useReducer(expensesReducer, DUMMY_EXPENSES);

    const addExpense = (expenseData) => {
        dispatch({type: 'ADD', payload: expenseData})
    }

    const deleteExpense = (id) => {
        dispatch({type: 'DELETE', payload: id})
    }

    const updateExpense = (id, expenseData) => {
        dispatch({type: 'UPDATE', payload: {id: id, data: expenseData}})
    }

    const value = {
        expenses: expensesState,
        addExpense: addExpense,
        updateExpense: updateExpense,
        deleteExpense: deleteExpense,
    }

    return <ExpensesContext.Provider value={value}>{children}</ExpensesContext.Provider>
}

export default ExpensesContextProvider;

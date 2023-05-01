import axios from "axios";

const BACKED_URL = 'https://react-native-course-6f63d-default-rtdb.firebaseio.com'

export const storeExpenses = async (expenseData) => {
    const response = await axios.post(
        BACKED_URL + '/expenses.json',
        expenseData
    );

    return response.data.name;
}

export const fetchExpenses = async () => {
    const response = await axios.get(BACKED_URL + '/expenses.json');

    const expenses = [];

    for (const key in response.data) {
        const expenseObj = {
            id: key,
            amount: response.data[key].amount,
            date: new Date(response.data[key].date),
            description: response.data[key].description,
        }
        expenses.push(expenseObj);
    }

    return expenses;
}

export const updateExpense = (id, expenseData) => {
    return axios.put(BACKED_URL + `/expenses/${id}.json`, expenseData)
}

export const deleteExpense = (id) => {
    return axios.delete(BACKED_URL + `/expenses/${id}.json`)
}

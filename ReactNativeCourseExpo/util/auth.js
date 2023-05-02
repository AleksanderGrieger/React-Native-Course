import axios from "axios";

const API_KEY = 'AIzaSyDt8Nlf4c14_ZVdxiRZlIW0O_-Wpx7VQ1c';

const authenticate = async (mode, email, password) => {
    const url = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`
    const response = await axios.post(url,
        {
            email: email,
            password: password,
            returnSecureToken: true,
        })

    return response.data.idToken;
    // const token = response.data
}

export const createUser = (email, password) => {
    return authenticate('signUp', email, password);
}

export const loginUser = (email, password) => {
    return authenticate('signInWithPassword', email, password);
}

import axios from "axios";

const authAxios = axios.create({
    baseURL: 'https://www.pre-onboarding-selection-task.shop/auth'
});

export const signup = (email, password) => {
    return authAxios.post('/signup', {email, password})
};

export const signin = (email, password) => {
    return authAxios.post('/signin',{email, password});
}


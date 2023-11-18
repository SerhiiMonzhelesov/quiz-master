import axios from 'axios';

export const instance = axios.create({
    baseURL: 'https://quiz-backend-vq56.onrender.com/api',
});

export const setToken = token => {
    instance.defaults.headers.Authorization = `Bearer ${token}`;
};

export const clearToken = () => {
    instance.defaults.headers.Authorization = '';
};

export async function currentUser() {
    const { data } = await instance.get('/auth/current');
    return data;
}

export async function getUserStats() {
    // {avatar, name, password, email}
    const { data } = await instance.get('/auth/stats');
    return data;
}

export async function registerUser(userData) {
    // {name, email, password}
    const { data } = await instance.post('/auth/register', userData);
    setToken(data.token);
    return data;
}

export async function loginUser(userData) {
        //  {email, password}
    const { data } = await instance.post('/auth/login', userData);
    setToken(data.token);
    return data;
}

export async function logOutUser() {
    const { data } = await instance.post('/auth/logout');
    clearToken();
    return data;
}

export async function updateUser(userData) {
    // {avatar, name, password, email}
    const { data } = await instance.patch('/users/update-user', userData);
    return data;
}








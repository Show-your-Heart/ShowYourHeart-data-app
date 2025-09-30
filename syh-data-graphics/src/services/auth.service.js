import authHeader from "../utils/auth-header";
import { httpClient } from '../utils/http-client';



export const login = (data) => httpClient.post('/token', data , {headers: authHeader(true)});

export const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("access_token");
}

export const getTokens = () => JSON.parse(localStorage.getItem("access_token"));
export const isLoggedIn = () => !!JSON.parse(localStorage.getItem('access_token'))

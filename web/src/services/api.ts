import axios, { Axios, AxiosError } from "axios";
import { parseCookies } from 'nookies';
import { AuthTokenError } from "./errors/AuthTokenError";
import { signOut } from "../contexts/AuthContext";

export function setupAPIClient(ctx = undefined) {
    let cookies = parseCookies(ctx);

    const api = axios.create({
        baseURL: 'http://localhost:8000',
        headers: {
            Authorization: `Bearer ${cookies['@pizzaWorld.token']}`
        }
    })

    api.interceptors.response.use(response => {
        return response;    
    },(error: AxiosError) => {
        if(error.response.status === 401){
            //qualquer erro 401
            if(typeof window !== undefined){
                // chama a funcao para deslogar o usuario
                signOut();
            } else {
                return Promise.reject(new AuthTokenError())
            }
        }
        return Promise.reject(error);
    })
    return api;
}
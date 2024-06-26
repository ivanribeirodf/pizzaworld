import { createContext, ReactNode, useState } from "react";
import { destroyCookie, setCookie, parseCookies } from 'nookies';
import Router from "next/router";
import { api } from "../services/apiClients";

type AuthContextData = {
    user: UserProps;
    isAuthenticated: boolean;
    signIn: (credentials: SignInProps) => Promise<void>;
    signOut: () => void;
}

type UserProps = {
    id: string;
    name: string;
    email: string;
}

type SignInProps = {
    email: string;
    password: string;
}

type AuthProviderProps = {
    children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextData)

export function signOut(){
    try{
        destroyCookie(undefined, '@pizzaWorld.token')
        Router.push('/')
    }catch{
        console.log('Erro ao deslogar!')
    }
}

export function AuthProvider({ children }: AuthProviderProps){
    const [ user, setUser] = useState<UserProps>()
    const isAuthenticated = !!user;

    async function signIn({ email, password }: SignInProps){
       try{
        const response = await api.post('/login',{
            email,
            password
        })
        const {id, name, token} = response.data

        setCookie(undefined, '@pizzaWorld.token', token,{
            maxAge: 60 * 60 * 24 * 30,
            path:"/"
        })

        setUser({
            id,
            name,
            email,
        })
        //Passar o token para próximas requisiçoes
        api.defaults.headers['Authorization'] = `Bearer ${token}`

        //Redirecionar para dashboard
        Router.push('/dashboard')

       } catch(err) {
        console.log("erro", err)
       }

    }

    return(
        <AuthContext.Provider value={{user, isAuthenticated, signIn, signOut }}>
            {children}
        </AuthContext.Provider>
    )
}

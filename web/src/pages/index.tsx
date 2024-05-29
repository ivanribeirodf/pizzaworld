import {FormEvent, useContext, useState} from 'react'
import Head from "next/head"
import Image from "next/image"
import styles from '../../styles/home.module.scss'

import logoImg from '../../public/logoT.png'

import { Input } from "../components/ui/Input"
import { Button } from "../components/ui/Button"

import { AuthContext } from '../contexts/AuthContext'

import Link from "next/link"

export default function Home() {
  const { signIn } = useContext(AuthContext)

  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');

  const [ loading, setLoading ] = useState(false);

  async function handleLogin(event: FormEvent){
    event.preventDefault();

    let data = {
      email,
      password
    }

    await signIn(data)
   }
   
  return (
    <>
    <Head>
      <title>Pizza World - Login</title>
    </Head>
    <div className={ styles.containerCenter }>
        <Image  src={logoImg} alt="Logo" />
        
        <div className={styles.login}>
          <form onSubmit={ handleLogin }>
            <Input 
              placeholder="Digite seu email" 
              type="text"
              value={email} 
              onChange={ (e) => setEmail(e.target.value)}
            />
            <Input 
              placeholder="Sua senha" 
              type="password"
              value={password} 
              onChange={ (e) => setPassword(e.target.value)}
            />
            <Button type="submit" loading={false}>Acessar</Button>
          </form>
          <Link className={styles.text} href="/signup">
            Não possui uma conta? Cadastre-e
          </Link>

        </div>
    </div>
    </>
  )
}

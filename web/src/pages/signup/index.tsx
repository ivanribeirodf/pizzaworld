import Head from "next/head"
import Image from "next/image"
import styles from '../../../styles/home.module.scss'

import logoImg from '../../../public/logoT.png'

import { Input } from "../../components/ui/Input"
import { Button } from "../../components/ui/Button"

import Link from "next/link"

export default function Home() {
  return (
    <>
    <Head>
      <title>Pizza World - Login</title>
    </Head>
    <div className={ styles.containerCenter }>
        <Image  src={logoImg} alt="Logo" />
        
        <div className={styles.login}>
          <h1>Criando sua conta</h1>
          <form>
            <Input placeholder="Digite seu nome" type="text" />
            <Input placeholder="Digite seu email" type="text"/>
            <Input placeholder="Sua senha" type="password"/>
            <Button type="submit" loading={false}>Cadastrar</Button>
          </form>
          <Link className={styles.text} href="/">
            Já possui uma conta? Faça login!
          </Link>

        </div>
    </div>
    </>
  )
}

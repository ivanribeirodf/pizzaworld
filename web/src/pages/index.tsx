import Head from "next/head"
import Image from "next/image"
import styles from '../../styles/home.module.scss'

import logoImg from '../../public/logoT.png'

import { Input } from "../components/ui/Input"
import { Button } from "../components/ui/Button"

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
          <form>
            <Input placeholder="Digite seu email" type="text" />
            <Input placeholder="Sua senha" type="password"/>
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

import Head from "next/head"
import Image from "next/image"
import logoImg from '../../public/logoT.png'
import styles from '../../styles/home.module.scss'

import { Input } from "../components/ui/Input"
export default function Home() {
  return (
    <>
    <Head>
      <title>Pizza World - Login</title>
    </Head>
    <div className={styles.containerCenter}>
        <Image src={logoImg} alt="Logo" />
        <div>
          <form>
            <Input placeholder="Digite seu email" type="text"/>
            <Input placeholder="Sua senha" type="password"/>
          </form>
        </div>
    </div>
    </>
  )
}

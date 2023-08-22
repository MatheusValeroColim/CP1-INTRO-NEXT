"use client"

import MyCard from "./components/card"
import MyButton from './components/button'
import MyTitle from './components/title'
import MySubTitle from './components/subtitle'
import MyText from "./components/text";

export default function Home() {
  return (
    <main className="bg-white">
      <MyTitle name="Road Assist"/>
      <MySubTitle name="Deseja se cadastrar?"/>
      <MyText text="Ao se cadastrar você tem acesso á todos os serviços Road Assist"/>
      <MyButton name="Cadastrar-se"/>
    </main>
  )
}

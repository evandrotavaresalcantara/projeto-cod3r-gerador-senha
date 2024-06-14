'use client'
import opcoes from "@/data/OpcoesCaracteres"
import { useState } from "react"

export default function Home() {
  const [tamanho, setTamanho] = useState<number>(8)
  const [tiposCaracteres, setTiposCaracteres] = useState(opcoes)

  const manipulaMudanca = (indice: number) => {
    const aux = [...tiposCaracteres]
    aux[indice].valor = !aux[indice].valor
    setTiposCaracteres([...aux])
  }


  return (
    <main className="flex flex-col items-center justify-center h-full">
      <h1 className="text-4xl text-gray-200 mb-4 text-center font-bold">Gerador de Senhas</h1>
      <div className="w-3/12 bg-slate-700 text-gray-200 rounded-md p-8">
        <div className="flex flex-col gap-3 text-2xl ">
          <label className="flex justify-between">
            <span>Tamanho da Senha:</span>
            <span className="text-blue-500">{tamanho}</span>
          </label>
          <input type="range" min={3} max={30} value={tamanho} onChange={(e) => setTamanho(+e.target.value)} />

          <div className="flex text-xl gap-2">
            <input type="checkbox" checked={tiposCaracteres[0].valor}
              onChange={() => manipulaMudanca(0)}
            />
            <label>{tiposCaracteres[0].nome}</label>
          </div>
          <div className="flex text-xl gap-2">
            <input type="checkbox" checked={tiposCaracteres[1].valor}
              onChange={() => {
                const aux = [...tiposCaracteres]
                aux[1].valor = !aux[1].valor
                setTiposCaracteres(aux)
              }}
            />
            <label>{tiposCaracteres[1].nome}</label>
          </div>

        </div>
      </div>

    </main>
  )
}

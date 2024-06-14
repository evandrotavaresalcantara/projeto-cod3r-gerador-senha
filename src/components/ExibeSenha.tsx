import { IconCopy } from "@tabler/icons-react"
import { useState } from "react"

interface ExibeSenhaProps {
    senha: string
}

export default function (props: ExibeSenhaProps) {
    console.log('componente ExibeSenha')
    const [mostrarAviso, setMostrarAviso] = useState(false)

    const copiar = () => {
        navigator.clipboard.writeText(props.senha)
        setMostrarAviso(true)
        setTimeout(()=>{
            setMostrarAviso(false)
        },3000)
    }

    return (
        <div className="mt-3">
            {props.senha.trim() !== "" ? (
                <>
                    <span className="font-bold">Senha Gerada:</span>
                    <div className={`
                            flex justify-between
                            p-2 border bg-gray-100 rounded text-slate-800
                            `}>
                        {props.senha}
                        <IconCopy className="hover:text-blue-500 cursor-pointer" onClick={copiar} />
                    </div>
                </>
            ) : ""}
            {mostrarAviso && <p className="mt-2 text-blue-500 text-center text-md">Senha copiada paa área de transferência</p>}
        </div>
    )
}
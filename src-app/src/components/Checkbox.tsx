interface CheckBoxProps {
    id: string
    texto: string
    selecionado: boolean
    manipulaMudanca: () => void
}

export default function Checkbox(props: CheckBoxProps) {
    const id = `checkbox-${props.id}`

    return (
        <div className="flex text-xl gap-2">
            <input
                type="checkbox"
                checked={props.selecionado}
                onChange={props.manipulaMudanca}
                id={id}
            />
            <label htmlFor={id}>{props.texto}</label>
        </div>
    )
}
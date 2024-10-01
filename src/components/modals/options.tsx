import stylesOption from "../../styles/options.module.scss";

interface HandleOptions {
    handleOptions: (id: number) => void;
    tarefaId: number;
    tarefaTitle: string;
}

export default function Options({
    handleOptions,
    tarefaId,
    tarefaTitle,
}: HandleOptions) {
    return (
        <div className={stylesOption.modal_overlay}>
            <div
                className={stylesOption.modal_content}
                onClick={(e) => e.stopPropagation()}
                key={tarefaId}
            >
                <h4>{tarefaTitle} selecionada</h4>
                <ul>
                    <li>Editar</li>
                    <li>Excluir</li>
                    <li onClick={() => handleOptions(tarefaId)}>Cancelar</li>
                </ul>
            </div>
        </div>
    );
}

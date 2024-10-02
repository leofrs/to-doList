import stylesModal from "../../styles/modal.module.scss";

interface ModalDel {
    isVisible: boolean;
    handleExcluir: () => void;
}

export default function ExcluirTarefa({ isVisible, handleExcluir }: ModalDel) {
    if (!isVisible) return null;
    return (
        <div className={stylesModal.modal_overlay}>
            <div className={stylesModal.modal_content}>
                <h1>Excluir Tarefa</h1>
                <p>Tem certeza que deseja excluir a tarefa</p>

                <div>
                    <button type="button" title="excluir">
                        Excluir
                    </button>
                    <button
                        type="button"
                        title="cancelar"
                        onClick={() => handleExcluir()}
                    >
                        Cancelar
                    </button>
                </div>
            </div>
        </div>
    );
}

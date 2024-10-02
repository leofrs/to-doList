import TarefasHook from "../../hooks/tarefas";
import stylesModal from "../../styles/modal.module.scss";
import FormAddTarefa from "../forms/formAdd";

interface ModalAdd {
    isVisible: boolean;
    handleClose: () => void;
}

const AdicionarTarefa = ({ isVisible, handleClose }: ModalAdd) => {
    if (!isVisible) return null;
    const { handleRefreshTasks } = TarefasHook();

    return (
        <div className={stylesModal.modal_overlay} onClick={handleClose}>
            <div
                className={stylesModal.modal_content}
                onClick={(e) => e.stopPropagation()}
            >
                <h2>Adicionar Tarefa</h2>
                <div className={stylesModal.btn}>
                    <FormAddTarefa
                        handleClose={handleClose}
                        refreshTasks={handleRefreshTasks}
                    />
                </div>
            </div>
        </div>
    );
};

export default AdicionarTarefa;

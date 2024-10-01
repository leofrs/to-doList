import TarefasHook from "../../hooks/tarefas";
import styles from "../../styles/modalAdd.module.scss";
import FormAddTarefa from "../forms/formAddTarefa";

interface ModalAdd {
    isVisible: boolean;
    handleClose: () => void;
}

const AdicionarTarefa = ({ isVisible, handleClose }: ModalAdd) => {
    if (!isVisible) return null;
    const { handleRefreshTasks } = TarefasHook();

    return (
        <div className={styles.modal_overlay} onClick={handleClose}>
            <div
                className={styles.modal_content}
                onClick={(e) => e.stopPropagation()}
            >
                <h2>Adicionar Tarefa</h2>
                <div className={styles.btn}>
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

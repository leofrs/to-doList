import styles from "../../styles/modalAdd.module.scss";
import FormAddTarefa from "../forms/formAddTarefa";

interface ModalAdd {
    isVisible: boolean;
    handleClose: () => void;
}

const AdicionarTarefa = ({ isVisible, handleClose }: ModalAdd) => {
    if (!isVisible) return null;

    return (
        <div className={styles.modal_overlay} onClick={handleClose}>
            <div
                className={styles.modal_content}
                onClick={(e) => e.stopPropagation()}
            >
                <h2>Adicionar Tarefa</h2>
                <div className={styles.btn}>
                    <FormAddTarefa handleClose={handleClose} />
                </div>
            </div>
        </div>
    );
};

export default AdicionarTarefa;

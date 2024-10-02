import stylesModal from "../../styles/modal.module.scss";
import { TarefaEdit } from "../../@types/tarefa";

interface ModalEdit {
    isVisible: boolean;
    tarefa: TarefaEdit;
    handleAtualizar: () => void;
}

const EditarTarefa = ({ tarefa, handleAtualizar, isVisible }: ModalEdit) => {
    if (!isVisible) return null;

    const { title, description, date } = tarefa;

    return (
        <div className={stylesModal.modal_overlay}>
            <div className={stylesModal.modal_content}>
                <h2>Atualizar Tarefa</h2>
                <input
                    type="text"
                    value={title}
                    // onChange={(e) => setTitle(e.target.value)}
                    placeholder="Título"
                    readOnly={true}
                />
                <textarea
                    value={description}
                    // onChange={(e) => setDescription(e.target.value)}
                    placeholder="Descrição"
                    readOnly={true}
                />
                <input
                    title="date"
                    type="text"
                    value={date}
                    readOnly={true}
                    // onChange={(e) => setDate(e.target.value)}
                />
                <button type="button">Atualizar</button>
                <button type="button" onClick={() => handleAtualizar()}>
                    Cancelar
                </button>
            </div>
        </div>
    );
};

export default EditarTarefa;

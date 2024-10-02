import ModalsHook from "../../hooks/modals";
import stylesContent from "../../styles/content.module.scss";

import TarefasHook from "../../hooks/tarefas";

import { MdDeleteOutline } from "react-icons/md";
import { MdModeEdit } from "react-icons/md";
import EditarTarefa from "../modals/editartarefa";
import { TarefaEdit } from "../../@types/tarefa";
import ExcluirTarefa from "../modals/excluirTarefa";

export default function AFazer() {
    const { handleAtualizar, atualizarIsOpen, excluirIsOpen, handleExcluir } =
        ModalsHook();
    const {
        tarefas,
        loading,
        ShowTarefas,
        handleFazendo,
        handleFeita,
        setSelectedTarefa,
        selectedTarefa,
    } = TarefasHook();

    const tarefasAFazer = tarefas.filter((tarefa) => tarefa.aFazer === true);

    ShowTarefas();

    const handleEditClick = (tarefa: TarefaEdit) => {
        setSelectedTarefa(tarefa);
        handleAtualizar();
    };

    const handleDelClick = () => {
        handleExcluir();
    };

    return (
        <div className={stylesContent.content_cards}>
            {loading ? (
                <div>
                    <p>Carregando tarefas...</p>
                </div>
            ) : tarefasAFazer.length > 0 ? (
                tarefasAFazer.map((tarefa) => {
                    const { id, title, description, date } = tarefa;
                    return (
                        <div key={id} className={stylesContent.content_title}>
                            <div className={stylesContent.title}>
                                <h6>{title}</h6>
                                <div className={stylesContent.btnTitle}>
                                    <ul>
                                        <li
                                            onClick={() =>
                                                handleEditClick(tarefa)
                                            }
                                        >
                                            <MdModeEdit size={24} />
                                        </li>
                                        <li onClick={() => handleDelClick()}>
                                            <MdDeleteOutline size={24} />
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <p>{description}</p>

                            <span>{date}</span>

                            <div>
                                <span
                                    className={stylesContent.handleBTN}
                                    onClick={() =>
                                        handleFazendo(id, {
                                            title,
                                            description,
                                            aFazer: false,
                                            fazendo: true,
                                            feito: false,
                                        })
                                    }
                                >
                                    Marcar como fazendo
                                </span>
                                <span
                                    className={stylesContent.handleBTN}
                                    onClick={() =>
                                        handleFeita(id, {
                                            title,
                                            description,
                                            aFazer: false,
                                            fazendo: false,
                                            feito: true,
                                        })
                                    }
                                >
                                    Marcar como feita
                                </span>
                            </div>
                        </div>
                    );
                })
            ) : (
                <div>
                    <p>Nenhuma tarefa à fazer</p>
                </div>
            )}

            {selectedTarefa && (
                <EditarTarefa
                    isVisible={atualizarIsOpen}
                    tarefa={selectedTarefa}
                    handleAtualizar={handleAtualizar}
                />
            )}

            {excluirIsOpen && (
                <ExcluirTarefa
                    isVisible={excluirIsOpen}
                    handleExcluir={handleExcluir}
                />
            )}
        </div>
    );
}

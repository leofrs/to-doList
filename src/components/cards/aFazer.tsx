import ModalsHook from "../../hooks/modals";
import stylesContent from "../../styles/content.module.scss";
import { BsThreeDotsVertical } from "react-icons/bs";
import Options from "../modals/options";

import TarefasHook from "../../hooks/tarefas";

export default function AFazer() {
    const { optionIsOpen, handleOptions, tarefaId } = ModalsHook();
    const { tarefas, loading, ShowTarefas } = TarefasHook();

    const tarefasAFazer = tarefas.filter((tarefa) => tarefa.aFazer === true);

    ShowTarefas();

    return (
        <div className={stylesContent.content_cards}>
            {loading ? (
                <div>
                    <p>Carregando tarefas...</p>
                </div>
            ) : tarefasAFazer.length > 0 ? (
                tarefasAFazer.map((tarefa) => (
                    <div
                        key={tarefa.id}
                        className={stylesContent.content_title}
                    >
                        <div>
                            <h6>{tarefa.title}</h6>
                            <button
                                type="button"
                                title="details"
                                onClick={() => handleOptions(tarefa.id)}
                            >
                                <BsThreeDotsVertical />
                            </button>
                            {optionIsOpen && tarefaId === tarefa.id ? (
                                <Options
                                    handleOptions={handleOptions}
                                    tarefaId={tarefa.id}
                                    tarefaTitle={tarefa.title}
                                />
                            ) : null}
                        </div>
                        <p>{tarefa.description}</p>
                        <span>{tarefa.date}</span>
                    </div>
                ))
            ) : (
                <div>
                    <p>Nenhuma tarefa à fazer</p>
                </div>
            )}
        </div>
    );
}

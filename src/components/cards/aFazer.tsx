import ModalsHook from "../../hooks/modals";
import stylesContent from "../../styles/content.module.scss";
import { BsThreeDotsVertical } from "react-icons/bs";
import Options from "../modals/options";

import TarefasHook from "../../hooks/tarefas";

export default function AFazer() {
    const { optionIsOpen, handleOptions, tarefaId } = ModalsHook();
    const { tarefas, loading, ShowTarefas, handleFazendo, handleFeita } =
        TarefasHook();

    const tarefasAFazer = tarefas.filter((tarefa) => tarefa.aFazer === true);

    ShowTarefas();

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
                            <div>
                                <h6>{title}</h6>
                                <button
                                    type="button"
                                    title="details"
                                    onClick={() => handleOptions(id)}
                                >
                                    <BsThreeDotsVertical />
                                </button>
                                {optionIsOpen && tarefaId === id ? (
                                    <Options
                                        handleOptions={handleOptions}
                                        tarefaId={id}
                                        tarefaTitle={title}
                                    />
                                ) : null}
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
        </div>
    );
}

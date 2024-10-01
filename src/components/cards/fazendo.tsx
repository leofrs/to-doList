import ModalsHook from "../../hooks/modals";
import stylesContent from "../../styles/content.module.scss";
import { BsThreeDotsVertical } from "react-icons/bs";
import Options from "../modals/options";

import TarefasHook from "../../hooks/tarefas";

export default function Fazendo() {
    const { optionIsOpen, handleOptions, tarefaId } = ModalsHook();
    const { tarefas, loading, ShowTarefas, handleAFazer, handleFeita } =
        TarefasHook();

    const tarefasFazendo = tarefas.filter((tarefa) => tarefa.fazendo === true);

    ShowTarefas();

    return (
        <div className={stylesContent.content_cards}>
            {loading ? (
                <div>
                    <p>Carregando tarefas...</p>
                </div>
            ) : tarefasFazendo.length > 0 ? (
                tarefasFazendo.map((tarefa) => {
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
                                        handleAFazer(id, {
                                            title,
                                            description,
                                            aFazer: true,
                                            fazendo: false,
                                            feito: false,
                                        })
                                    }
                                >
                                    Marcar como para fazer
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
                    <p>Nenhuma tarefa sendo feita</p>
                </div>
            )}
        </div>
    );
}

import { tarefas } from "../../db/tarefas";
import ModalsHook from "../../hooks/modals";
import stylesContent from "../../styles/content.module.scss";
import { BsThreeDotsVertical } from "react-icons/bs";
import Options from "../modals/options";

export default function Fazendo() {
    const tarefasAFazer = tarefas.filter((tarefa) => tarefa.aFazer);
    const { optionIsOpen, handleOptions, tarefaId } = ModalsHook();
    return (
        <div className={stylesContent.content_cards}>
            {tarefasAFazer.length > 0 ? (
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
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Doloribus, dolor eveniet excepturi nesciunt
                            aliquid aspernatur quas modi ea!
                        </p>
                        <span>30/09/2024</span>
                    </div>
                ))
            ) : (
                <div>
                    <p>Nenhuma tarefa sendo feita</p>
                </div>
            )}
        </div>
    );
}

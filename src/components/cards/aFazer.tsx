import { useEffect, useState } from "react";
import ModalsHook from "../../hooks/modals";
import stylesContent from "../../styles/content.module.scss";
import { BsThreeDotsVertical } from "react-icons/bs";
import Options from "../modals/options";
import { FetchTasks } from "../../api/tasks";

export interface Tarefa {
    id: number;
    title: string;
    description: string;
    date: string;
}

export default function Fazendo() {
    const { optionIsOpen, handleOptions, tarefaId } = ModalsHook();
    const [tarefasAFazer, setTarefasAFazer] = useState<Tarefa[]>([]);

    useEffect(() => {
        const getTasks = async () => {
            const fetchTasks = new FetchTasks();
            const tasks = await fetchTasks.getAll();
            setTarefasAFazer(tasks);
        };

        getTasks();
    }, []);

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

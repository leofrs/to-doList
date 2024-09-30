import { tarefas } from "../../db/tarefas";
import stylesContent from "../../styles/content.module.scss";
import { BsThreeDotsVertical } from "react-icons/bs";

export default function Feito() {
    const tarefasFeitas = tarefas.filter((tarefa) => tarefa.feito);

    return (
        <>
            {tarefasFeitas.length > 0 ? (
                tarefasFeitas.map((tarefa) => (
                    <div
                        key={tarefa.id}
                        className={stylesContent.content_title}
                    >
                        <div>
                            <h6>{tarefa.title}</h6>
                            <button
                                type="button"
                                title="details"
                                onClick={() => alert("Clicado")}
                            >
                                <BsThreeDotsVertical />
                            </button>
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
                    <p>Nenhuma tarefa concluida</p>
                </div>
            )}
        </>
    );
}

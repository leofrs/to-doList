import ModalsHook from "../hooks/modals";
import stylesHeader from "../styles/header.module.scss";

export default function HeaderComponent() {
    const { handleAdd } = ModalsHook();
    return (
        <header className={stylesHeader.header_container}>
            <div className={stylesHeader.header_title}>
                <h1>Seja bem vindo</h1>
                <p>A sua To-do List</p>
            </div>

            <button type="button" title="btn" onClick={() => handleAdd()}>
                Adicionar tarefa
            </button>
        </header>
    );
}

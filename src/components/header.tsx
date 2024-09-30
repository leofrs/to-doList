import ModalsHook from "../hooks/modals";
import stylesHeader from "../styles/header.module.scss";
import AdicionarTarefa from "./modals/addTarefa";

export default function HeaderComponent() {
    const { handleAdd, addIsOpen } = ModalsHook();
    return (
        <header className={stylesHeader.header_container}>
            <div className={stylesHeader.header_title}>
                <h1>Seja bem vindo</h1>
                <p>A sua To-do List</p>
            </div>

            <button type="button" title="btn" onClick={() => handleAdd()}>
                Adicionar tarefa
            </button>
            <AdicionarTarefa isVisible={addIsOpen} handleClose={handleAdd} />
        </header>
    );
}

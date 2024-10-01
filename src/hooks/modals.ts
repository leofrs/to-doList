import { useState } from "react";

export default function ModalsHook() {
    const [addIsOpen, setAddIsOpen] = useState<boolean>(false);
    const [excluirIsOpen, setExcluirIsOpen] = useState<boolean>(false);
    const [atualizarIsOpen, setAtualizarIsOpen] = useState<boolean>(false);
    const [optionIsOpen, setOptionIsOpen] = useState<boolean>(false);
    const [tarefaId, setTarefaId] = useState<number>();

    const handleAdd = () => {
        setAddIsOpen(!addIsOpen);
    };

    const handleExcluir = () => {
        setExcluirIsOpen(!excluirIsOpen);
    };

    const handleAtualizar = () => {
        setAtualizarIsOpen(!atualizarIsOpen);
    };

    const handleOptions = (id: number) => {
        setOptionIsOpen(!optionIsOpen);
        setTarefaId(id);
    };

    return {
        handleAdd,
        addIsOpen,
        handleAtualizar,
        atualizarIsOpen,
        handleExcluir,
        excluirIsOpen,
        handleOptions,
        optionIsOpen,
        tarefaId,
    };
}

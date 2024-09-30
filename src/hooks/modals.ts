import { useState } from "react";

export default function ModalsHook() {
    const [addIsOpen, setAddIsOpen] = useState<boolean>(false);
    const [excluirIsOpen, setExcluirIsOpen] = useState<boolean>(false);
    const [atualizarIsOpen, setAtualizarIsOpen] = useState<boolean>(false);

    const handleAdd = () => {
        setAddIsOpen(!addIsOpen);
    };

    const handleExcluir = () => {
        setExcluirIsOpen(!excluirIsOpen);
    };

    const handleAtualizar = () => {
        setAtualizarIsOpen(!atualizarIsOpen);
    };

    return { handleAdd, addIsOpen, handleAtualizar, handleExcluir };
}

import { useEffect, useState } from "react";
import { FetchTasks } from "../api/tasks";
import { Tarefa, TarefaEdit, UpdatedTarefa } from "../@types/tarefa";

export default function TarefasHook() {
    const [tarefas, setTarefas] = useState<Tarefa[]>([]);
    const [loading, setLoading] = useState(true);
    const [selectedTarefa, setSelectedTarefa] = useState<TarefaEdit>();

    const ShowTarefas = async () => {
        const fetchTasks = new FetchTasks();
        const tasks = await fetchTasks.getAll();
        setTarefas(tasks);
        setLoading(false);
    };

    useEffect(() => {
        ShowTarefas();
    }, []);

    const handleRefreshTasks = () => {
        ShowTarefas();
    };

    const handleAFazer = async (
        id: number,
        { title, description, aFazer, fazendo, feito }: UpdatedTarefa
    ) => {
        const fetchTasks = new FetchTasks();
        const task = await fetchTasks.updatedTaskStatus(id, {
            title,
            description,
            aFazer,
            fazendo,
            feito,
        });

        return task;
    };

    const handleFazendo = async (
        id: number,
        { title, description, aFazer, fazendo, feito }: UpdatedTarefa
    ) => {
        const fetchTasks = new FetchTasks();
        const task = await fetchTasks.updatedTaskStatus(id, {
            title,
            description,
            aFazer,
            fazendo,
            feito,
        });

        return task;
    };

    const handleFeita = async (
        id: number,
        { title, description, aFazer, fazendo, feito }: UpdatedTarefa
    ) => {
        const fetchTasks = new FetchTasks();
        const task = await fetchTasks.updatedTaskStatus(id, {
            title,
            description,
            aFazer,
            fazendo,
            feito,
        });
        return task;
    };

    return {
        tarefas,
        loading,
        ShowTarefas,
        setLoading,
        handleRefreshTasks,
        handleAFazer,
        handleFazendo,
        handleFeita,
        selectedTarefa,
        setSelectedTarefa,
    };
}

import { useEffect, useState } from "react";
import { FetchTasks } from "../api/tasks";
import { Tarefa } from "../@types/tarefa";

export default function TarefasHook() {
    const [tarefas, setTarefas] = useState<Tarefa[]>([]);
    const [loading, setLoading] = useState(true);

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

    return {
        tarefas,
        loading,
        ShowTarefas,
        setLoading,
        handleRefreshTasks,
    };
}

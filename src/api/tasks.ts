import { CreateTarefa } from "../@types/tarefa";

const urlBase = import.meta.env.VITE_API_BASE_URL;

export class FetchTasks {
    async getAll() {
        try {
            const response = await fetch(`${urlBase}/api/v1/get-tasks`);
            if (!response.ok) {
                throw new Error(`Erro: ${response.status}`);
            }

            const data = await response.json();

            return data;
        } catch (error) {
            console.error("Erro ao buscar dados:", error);
        }
    }

    async createTask({ title, description, date }: CreateTarefa) {
        try {
            const resposta = await fetch(`${urlBase}/api/v1/create-task`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ title, description, date }),
            });

            if (!resposta.ok) {
                throw new Error("Erro na requisição: " + resposta.status);
            }

            const resultado = await resposta.json();
            return resultado;
        } catch (error) {
            console.error("Erro ao enviar dados:", error);
        }
    }
}

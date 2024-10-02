export interface Tarefa {
    id: number;
    title: string;
    description: string;
    date: string;
    aFazer: boolean;
    fazendo: boolean;
    feito: boolean;
}

export interface CreateTarefa {
    title: string;
    description: string;
    date: string;
}

export interface UpdatedTarefa {
    title: string;
    description: string;
    aFazer: boolean;
    fazendo: boolean;
    feito: boolean;
}

export interface TarefaEdit {
    id: number;
    title: string;
    description: string;
    date: string;
}

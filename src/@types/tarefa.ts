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

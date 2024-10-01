import { useForm, SubmitHandler } from "react-hook-form";
import stylesFormAdd from "../../styles/formAddtask.module.scss";

import { FetchTasks } from "../../api/tasks";

type Inputs = {
    title: string;
    description: string;
    date: string;
};
interface HandleClose {
    handleClose: () => void;
    refreshTasks: () => void;
}
export default function FormAddTarefa({
    handleClose,
    refreshTasks,
}: HandleClose) {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>();

    const fetchTasks = new FetchTasks();
    const regexDate =
        /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/(19|20)\d\d$/;

    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        const { title, description, date } = data;

        try {
            const create = await fetchTasks.createTask({
                title,
                description,
                date,
            });
            if (create) {
                alert("Tarefa criada com sucesso!");
                data.title = "";
                data.description = "";
                data.date = "";
                handleClose();
                refreshTasks();
            } else {
                alert("Error ao criar tarefa! Tente novamente mais tarde");
            }
        } catch (error) {
            alert(`Erro encontrado: ${error}`);
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={stylesFormAdd.form}>
            <input
                {...register("title", { required: true })}
                placeholder="Título"
                autoFocus={true}
            />
            {errors.title && <span>Titulo é obrigatório</span>}

            <input {...register("description")} placeholder="Descrição" />

            <input
                {...register("date", {
                    required: true,
                    pattern: {
                        value: regexDate,
                        message: "Formato de data inválido",
                    },
                })}
                placeholder="27/03/2023"
            />
            {errors.date && <span>Data é obrigatória</span>}
            {errors.date && <span>{errors.date.message}</span>}
            <div className={stylesFormAdd.btn}>
                <input
                    type="submit"
                    value="Adicionar"
                    className={stylesFormAdd.btn_clicks}
                />
                <button
                    type="button"
                    title="btn-cancel"
                    onClick={() => handleClose()}
                    className={stylesFormAdd.btn_clicks}
                >
                    Cancelar
                </button>
            </div>
        </form>
    );
}

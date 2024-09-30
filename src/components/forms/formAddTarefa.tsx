import { useForm, SubmitHandler } from "react-hook-form";
import stylesFormAdd from "../../styles/formAddtask.module.scss";

type Inputs = {
    title: string;
    description: string;
};
interface HandleClose {
    handleClose: () => void;
}
export default function FormAddTarefa({ handleClose }: HandleClose) {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={stylesFormAdd.form}>
            <input
                {...register("title", { required: true })}
                placeholder="Título"
            />
            {errors.title && <span>This field is required</span>}

            <input {...register("description")} placeholder="Descrição" />

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

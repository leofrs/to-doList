import stylesContent from "../styles/content.module.scss";

import { GoDotFill } from "react-icons/go";
import AFazer from "./cards/aFazer";
import Fazendo from "./cards/fazendo";
import Feito from "./cards/feito";

export default function Content() {
    return (
        <section className={stylesContent.content_container}>
            <div className={stylesContent.content}>
                <h4>
                    <GoDotFill color="#17A2B8" />
                    Para Fazer
                </h4>

                <AFazer />
            </div>

            <div className={stylesContent.content}>
                <h4>
                    <GoDotFill color="#FFC107" />
                    Fazendo
                </h4>
                <Fazendo />
            </div>

            <div className={stylesContent.content}>
                <h4>
                    <GoDotFill color="#8BC34A" />
                    Feitas
                </h4>

                <Feito />
            </div>
        </section>
    );
}

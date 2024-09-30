import stylesContent from "../../styles/content.module.scss";

import { BsThreeDotsVertical } from "react-icons/bs";

export default function AFazer() {
    return (
        <div className={stylesContent.content_title}>
            <div>
                <h6>Title of the task</h6>
                <button
                    type="button"
                    title="details"
                    onClick={() => alert("Clicado")}
                >
                    <BsThreeDotsVertical />
                </button>
            </div>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloribus, dolor eveniet excepturi nesciunt aliquid aspernatur
                quas modi ea!
            </p>
            <span>30/09/2024</span>
        </div>
    );
}

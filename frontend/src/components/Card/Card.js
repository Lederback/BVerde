import { toast } from "react-hot-toast";

import styles from "./Card.module.scss";

const Card = (props) => {
  const clickHandler = (actions) =>  {
    if (actions === "register") {
      return () => toast.success(props.toast)
    }
    if (actions === "update") {
      return () => toast.success(props.toast)
    }
    if (actions === "token") {
      return () => toast.success(props.toast)
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>{props.title}</h1>
        <div>
          <img src={`/${props.img}.png`} id={styles.card_logo}/>
        </div>
      </div>
      <div className={styles.main}>
        <p>{props.description}</p>
      </div>
      <div className={styles.actions}>
        {props.action === "register" ? <input placeholder="Nº do certificado" id={styles.certificate_input} /> : props.action === "update" ? <input placeholder="Novo número" id={styles.certificate_input} /> : null}
        <button onClick={clickHandler(props.action)}>
            <img src="/right-arrow.png"/>
        </button>
      </div>
    </div>
  );
};

export default Card;

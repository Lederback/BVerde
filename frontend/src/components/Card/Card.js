import { toast } from "react-hot-toast";
import axios from "axios";

import styles from "./Card.module.scss";

const Card = (props) => {
  const createToken = async (tokenName, tokenSymbol, tokenAmount) => {
    const response = await axios.post('http://localhost:4000/user/createToken', {
      tokenName: tokenName,
      tokenSymbol: tokenSymbol,
      tokenAmount: tokenAmount,
      }, { headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    }})
    return response
  }

  const clickHandler = (actions) =>  {
    if (actions === "register") {
      return () => toast.success(props.toast)
    }
    if (actions === "update") {
      return () => toast.success(props.toast)
    }
    if (actions === "token") {
      const response = createToken("Teste", "TST", "100");
      if (response.status === 200) {
        return () => toast.success(props.toast)
      } else {
        return () => toast.error("Erro ao criar token")
      }
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

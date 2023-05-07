import { toast } from "react-hot-toast";

import styles from "./Card.module.scss";

const Card = (props) => {
  const clickHandler = () =>  {
    toast.success(props.toast)
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>{props.title}</h1>
        <div>
          <img src={`/${props.img}.png`} />
        </div>
      </div>
      <div className={styles.main}>
        <p>{props.description}</p>
      </div>
      <div className={styles.actions}>
        <button onClick={clickHandler}>
            <img src="/right-arrow.png"/>
        </button>
      </div>
    </div>
  );
};

export default Card;

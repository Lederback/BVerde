import styles from './forms.module.css'

export default function Forms(){
    return(
        <div className={styles.container}>
            <div className={styles.name}>
                <p>Faça o login em sua</p>
                <p>conta</p>
            </div>
            <div className={styles.info}>
                <img src='/user.png' className={styles.icon}/>
                <div className={styles.usernameForms}>
                    <p>Usuário:</p>
                    <input className={styles.input} />
                </div>
            </div>
            <div className={styles.info}>
                <img src='/lock.png' className={styles.icon2}/>
                <div className={styles.passwordForms}>
                    <p>Senha:</p>
                    <input className={styles.input} />
                </div>
            </div>
            <div className={styles.submit}>
                <input type='submit' className={styles.button} />
            </div>
        </div>
    )
}
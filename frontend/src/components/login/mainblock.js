import styles from './mainblock.module.css'
import Forms from '../login/forms'

export default function MainBlock(){
    return(
        <div className={styles.main}>
            <div className={styles.container}>
                <div className={styles.left}>
                    <img src='/logochain.png' className={styles.icon}/>
                    <p className={styles.name}>BVerde</p>
                </div>
                <div className={styles.right}>
                    <Forms />
                </div>
            </div>
        </div>
    )
}
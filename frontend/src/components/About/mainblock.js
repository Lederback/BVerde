import styles from '../About/mainblock.module.css'
import { useRouter } from 'next/navigation';

export default function About(){
    const router = useRouter();

    return(
        <div className={styles.main}>
            <div className={styles.top}>
                <img src='/logochain.png' className={styles.icon}/>
                <p className={styles.name}>BVerde</p>
            </div>
            <div className={styles.container}>
                <p className={styles.title}>Quem somos?</p>
                <div className={styles.text}>
                    <p>A BVerde é uma plataforma inovadora que oferece aos proprietários de créditos de carbono certificados a oportunidade de converter seus ativos em tokens digitais. Esses tokens serão listados na bolsa verde, criando um mercado dinâmico onde empresas ambientalmente conscientes podem comprar, vender ou queimar esses tokens para compensar suas emissões de carbono.</p>
                    <p style={{marginTop: '20px'}}>Com a conversão dos créditos de carbono em tokens, a plataforma torna mais acessível e fácil o engajamento de diversos participantes no mercado de carbono, impulsionando a transição para uma economia mais sustentável e de baixa emissão de carbono.</p>
                    <p className={styles.add}>Não vai perder essa chance, né?</p>
                </div>
                <button className={styles.button} onClick={() => router.push('/home')}>Entrar</button>
            </div>
        </div>
    )
}
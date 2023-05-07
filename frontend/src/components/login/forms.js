import styles from './forms.module.css'
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import axios from 'axios';
import { headers } from 'next/dist/client/components/headers';

export default function Forms(){
    const router = useRouter();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);

    const [notEmail, setNotEmail] = useState(true);
    const [notPassword, setNotPassword] = useState(true);

    const handleSubmit = async (event) =>{
        event.preventDefault();
        if (email && password) {
            const response = await axios.post('http://localhost:4000/user/login', {
                email: email,
                password: password
            }, { headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }})
            if (typeof(response.data) === 'string') {
                router.push('/about')
            }
            else {
                alert('Email ou senha incorretos')
            }
        }
    }

    return(
        <div className={styles.container}>
            <form onSubmit={handleSubmit}>
                <div className={styles.name}>
                    <p>Faça o login em sua</p>
                    <p>conta</p>
                </div>
                <div className={styles.info}>
                    <img src='/user.png' className={styles.icon}/>
                    <div className={styles.usernameForms}>
                        <p>Email:</p>
                        <input className={styles.input} value={email} onChange={(e) => {
                            setEmail(e.target.value);
                            (e.target.value.length <= 0) ? setNotEmail(true) : setNotEmail(false);

                            (notEmail || notPassword) ? setIsButtonDisabled(true) : setIsButtonDisabled(false);
                        }}/>
                    </div>
                </div>
                <div className={styles.info}>
                    <img src='/lock.png' className={styles.icon2}/>
                    <div className={styles.passwordForms}>
                        <p>Senha:</p>
                        <input className={styles.input} value={password} onChange={(e) => {
                            setPassword(e.target.value);
                            (e.target.value.length <= 0) ? setNotPassword(true) : setNotPassword(false);

                            (notEmail || notPassword) ? setIsButtonDisabled(true) : setIsButtonDisabled(false)
                        }}/>
                    </div>
                </div>
                <div className={styles.submit}>
                    <input type='submit' className={styles.button} disabled={isButtonDisabled}/>
                </div>
            </form>
        </div>
    )
}
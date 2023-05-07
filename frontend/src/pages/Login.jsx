import '../styles/Login.css';

function Login(){
    return(
        <div className="main">
            <div className='login'>
                <div className='left'>
                    <p className='name'>BVerde</p>
                </div>
                <div className='right'>
                    <div className="comand">
                        <p>Faça o login com a sua</p>
                        <p>conta</p>
                    </div>
                    <div className="form">
                        <div className="username">
                            <div className="text">Usuário</div>
                            <input type='text' className='input'/>
                        </div>
                        <div className="password">
                            <div className="text">Senha</div>
                            <input type="text" className='input' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
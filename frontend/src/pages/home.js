import Card from "@/components/Card/Card";

import styles from "../styles/home.module.scss";
import { Toaster } from "react-hot-toast";

const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <header className={styles.header}>
        <div>
          <img src="/logo.png" />
        </div>
        <h1>BVerde</h1>
      </header>
      <main className={styles.content}>
        <div className={styles.textContainer}>
          <h1>Olá, Renato!</h1>
          <p>O que você gostaria de fazer hoje?</p>
        </div>
        <div className={styles.actions}>
          <Card
            title="Cadastrar certificado"
            img="register"
            description="Precisa cadastrar números de certificado? Clique aqui para abrir o modal de cadastro. Preencha as informações corretamente para validação e autenticação confiável."
            action="register"
            toast='Certificado cadastrado!'
          />
          <Card
            title="Atualizar Certificado"
            img="updated"
            description="Precisa atualizar o número do certificado? Clique aqui para abrir o modal de atualização. Insira o novo número e preencha as informações necessárias para validação e autenticação confiável."
            action="update"
            toast="Certificado atualizado!"
          />
          <Card
            title="Gerar Token"
            img="crypto"
            description="Área responsável por gerar um token que representa uma área verde, que pode ser utilizada como ativo. Este token é importante para garantir a autenticidade e segurança da transação."
            action="token"
            toast="Token criado!"
          />
        </div>
      </main>
      <Toaster />
    </div>
  );
};

export default Home;

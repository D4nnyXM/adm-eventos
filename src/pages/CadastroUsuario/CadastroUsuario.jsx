import { useState } from 'react';
import { collection, addDoc } from "firebase/firestore"; 
import { db } from '../../database/firebaseConfig'; 
import {  doc, setDoc } from "firebase/firestore"; 



const CadastroUsuario = () => {

  const [formulario, setFormulario] = useState(
    {
      nome: '',
      email: '',
      senha: '',
      confSenha: ''
    }//OBJETO
  )




  const alteraFormulario = (e) => {
    const { name, value } = e.target;
    setFormulario({ ...formulario, [name]: value });
  };


  const meuSubmit =  async (evento) => {
    evento.preventDefault() // evita o comportamento padrao do form
    console.log(formulario) // quem é formulario?
    // formulario e´um objeto de uma state(estado é a forma que o react usa ) 

  const docRef = await addDoc(collection(db, "usuarios"), formulario);

  }

  // esse é uma outra forma de ter o botao, escolha um modelo so ou esse ou aquele  
   const salvar2 = async () => {
    await setDoc(doc(db, "usuarios", formulario.email),formulario);
   
   }
  

  return (
    <div>
      <h2>Cadastro de Usuário</h2>
      <form onSubmit={meuSubmit}>
        <label htmlFor='nome' >Nome</label>
        <input type='text' id="nome" name="nome"
          value={formulario.nome}
          onChange={alteraFormulario} />

        <label htmlFor='email' >Email</label>
        <input type='text' id="email" name="email"
          value={formulario.email}
          onChange={alteraFormulario} />

        <label htmlFor='senha' >Senha</label>
        <input type='text' id="senha" name="senha"
          value={formulario.senha}
          onChange={alteraFormulario} />

        <label htmlFor='confSenha' >Confirmar Senha</label>
        <input type='text' id="confSenha" name="confSenha"
          value={formulario.confSenha}
          onChange={alteraFormulario} />

        <button type='submit'>Salvar</button>
        

      </form>

        <button onClick={salvar2}>Salvar2</button>

    </div>
  );
};

export default CadastroUsuario;

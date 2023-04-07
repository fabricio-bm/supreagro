import axios from "axios";
import {useState} from "react";
import { Button } from 'primereact/button';
import { InputMask } from "primereact/inputmask";

function CadastrarCliente() {
    const [nome, setNome] = useState();
    const [endereco, setEndereco] = useState();
    const [telefone, setTelefone] = useState();
    const [email, setEmail] = useState();
    
    function gravar() {

        console.log("clicou no gravar");
        const api = axios.create(
            {
                urlBase: "http://localhost:3001", //VER E ALTERAR URL
            })

        api.post("http://localhost:3001/produtos", { //VER E ALTERAR URL
            nome: {nome},
            endereco: {endereco},
            telefone: {telefone},
            email: {email},
        })
    }


    return (
        <div>
            <h1>CADASTRO DE CLIENTES</h1>
            <form>
                Nome: <input type="text" onChange={(e) => {
                setNome(e.target.value)}}/>
                Endereço: <input type="text" onChange={(e) => {
                setEndereco(e.target.value)}}/>
                Telefone: <input placeholder="(99)99999-9999" type="text" onChange={(e) => {
                setTelefone(e.target.value)}}/>
                E-mail: <input type="text" onChange={(e) => {
                setEmail(e.target.value)}}/>

                <Button label="Success" severity="success" value="Gravar" onClick={gravar}/>
                <Button label="Warning" severity="warning" value="Voltar" onClick={gravar}/>
            </form>


        </div>
    )
}

export default CadastrarCliente;
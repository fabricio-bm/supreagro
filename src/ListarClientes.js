import axios from "axios";

function AcessaJsonServer(){

    const obterDados1 = () => {


        const api = axios.create({
            baseURL:"http://localhost:3001"

        });
        api.get("/clientes").then((response) =>{ console.log(response)
        }).catch((err) =>{
            console.error("erro ao listar")
        });
    }

    function obterDados(){
        console.log("obtendo dados");
    }
    return(
        <div>
            <h1>Listagem de Clientes</h1>
            <form>
                <input type="button"
                       value="Listar Clientes"
                       onClick={obterDados}/>
            </form>
        </div>
    );
}
export default AcessaJsonServer;
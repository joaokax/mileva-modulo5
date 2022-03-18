import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import UsuarioService from "../../services/UsuarioService";
import DestinoService from "../../services/DestinoService";
import ViagemService from "../../services/ViagemService";

export default function Create() {
        const [aeroportoPartida, setAeroportoPartida] = useState("");
        const [aeroportoChegada, setAeroportoChegada] = useState("");
        const [dataIda, setDataIda] = useState("");
        const [dataVolta, setDataVolta] = useState("");
        const [valor, setValor] = useState("");
        const [usuario, setUsuario] = useState({ id_usuario: "", nome: ""});
        const [destino, setDestino] = useState({ id_destino: "", cidadeDestino: "" });
        const [usuarios, setUsuarios] = useState([]);
        const [destinos, setDestinos] = useState([]);
        const { id } = useParams();
        const navigate = useNavigate();
      
        const getAllUsuarios = () => {
            UsuarioService.getAllUsuarios().then((response) => {
                setUsuarios(response.data);
                console.log(response.data)
            }).catch((error) => {
                console.log(error);
            });
        };
    
        useEffect(() => {
            getAllUsuarios();
    
        }, []);

        const getAllDestinos = () => {
            DestinoService.getAllDestinos().then((response) => {
                setDestinos(response.data);
                console.log(response.data)
            }).catch((error) => {
                console.log(error);
            });
        };
    
        useEffect(() => {
            getAllDestinos();
    
        }, []);


        const criarOuEditarViagem = (e) => {
          e.preventDefault();
      
          const viagem = { aeroportoPartida, aeroportoChegada, dataIda, dataVolta, valor, usuario, destino};
          console.log(viagem)
    
          if (id) {
              ViagemService.updateViagem(id, viagem)
              .then((response) => {
                  navigate("/Viagem")
              });
      
          } else {
              ViagemService.createViagem(viagem)
              .then((response) => {
                  navigate("/Viagem")
              });
          }
        };
      
        useEffect(() => {
            function getViagemById() {
              if (id) {
                  ViagemService.getViagemById(id)
                  .then((response) => {
                      setAeroportoPartida(response.data.aeroportoPartida);
                      setAeroportoChegada(response.data.aeroportoChegada);
                      setDataIda(response.data.dataIda);
                      setDataVolta(response.data.dataVolta);
                      setValor(response.data.valor);
                      setUsuario({
                        id_usuario: response.data.usuario.id_usuario,
                        nome: response.data.usuario.nome,
                      });
                      setDestino({
                        id_destino: response.data.destino.id_destino,
                        cidadeDestino: response.data.destino.cidadeDestino,
                    });
                  })
                  .catch((error) => {
                      console.log(error);
                  });
              }
            }
            getViagemById()
        }, [id]);
    

    return (
        <>
            <div class="bg-crud"></div>
            <div className="description-box">

            <h1>{id ? "Editar" : "Criar"}</h1>

            <div className="form-center">
            <div class="form-container" >
                <form>

                <label for="nome">Aeroporto de Partida</label>
                <input type="text" id="aeroportoPartida" placeholder="Aeroporto de Partida" value={aeroportoPartida} 
                onChange={(e) => setAeroportoPartida(e.target.value)}/>
                <br/>

                <label for="nome">Aeroporto de Chegada</label>
                <input type="text" id="aeroportoChegada" placeholder="Aeroporto de Chegada" value={aeroportoChegada} 
                onChange={(e) => setAeroportoChegada(e.target.value)}/>
                <br/>

                <label for="nome">Data de Ida</label>
                <input type="text" id="dataIda" placeholder="Data de Ida" value={dataIda}
                onChange={(e) => setDataIda(e.target.value)}/>
                <br/>

                <label for="nome">Data de Volta</label>
                <input type="text" id="dataVolta" placeholder="Data de Volta" value={dataVolta}
                onChange={(e) => setDataVolta(e.target.value)}/>
                <br/>

                <label for="nome">Valor</label>
                <input type="number" id="valor" placeholder="Valor" value={valor}
                onChange={(e) => setValor(e.target.value)}/>
                <br/>

                <label for="nome">Usuario</label>
                <select id="usuario" name="Usuario"
                onChange={(e) => setUsuario({ id_usuario: Number.parseInt(e.target.value) }) }>
                    <option value="DEFAULT" >{id ? usuario.nome : 'Escolha uma pessoa'}</option>
                    {usuarios.map((usuario) => (
                        <option key={usuario.id_usuario} value={usuario.id_usuario}>
                            {usuario.nome}
                        </option>
                    ))}   
                </select>
                <br/>

                <label for="nome">Destino</label>
                <select id="destino" name="Destino"
                onChange={(e) => setDestino({ id_destino: Number.parseInt(e.target.value) }) }>
                    <option value="DEFAULT" >{id ? destino.cidadeDestino : 'Escolha um destino'}</option>
                    {destinos.map((destino) => (
                        <option key={destino.id_destino} value={destino.id_destino}>
                            {destino.cidadeDestino}
                        </option>
                    ))}   
                </select>
                <br/>

                <input type="submit" value="Salvar"
                onClick={(e) => criarOuEditarViagem(e)} />
                <br/>

                <Link to="/Viagem">
                <button className="btn-cancel">
                    Cancelar
                </button>
                </Link>
                
                </form>

            </div>
            </div>

            </div>

        </>
    );
}
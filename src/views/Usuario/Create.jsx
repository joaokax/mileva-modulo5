import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import UsuarioService from "../../services/UsuarioService";

export default function Create() {
        const [nome, setNome] = useState("");
        const [idade, setIdade] = useState("");
        const [email, setEmail] = useState("");
        const [telefone, setTelefone] = useState("");
        const { id } = useParams();
        const navigate = useNavigate();
      
        const criarOuEditarUsuario = (e) => {
          e.preventDefault();
      
          const usuario = { nome, idade, email, telefone};
      
          if (id) {
              UsuarioService.updateUsuario(id, usuario)
              .then((response) => {
                  navigate("/Usuario")
              })
      
          } else {
              UsuarioService.createUsuario(usuario)
              .then((response) => {
                  navigate("/Usuario")
              })
          }
        }
      
        useEffect(() => {
            function getUsuarioById() {
              if (id) {
                  UsuarioService.getUsuarioById(id)
                  .then((response) => {
                      setNome(response.data.nome);
                      setIdade(response.data.idade);
                      setEmail(response.data.email);
                      setTelefone(response.data.telefone);
                  })
                  .catch((error) => {
                      console.log(error);
                  })
              }
            }
            getUsuarioById()
        }, [id]);
    

    return (
        <>
            <div class="bg-crud"></div>
            <div className="description-box">

            <h1>{id ? "Editar" : "Criar"}</h1>

            <div className="form-center">
            <div class="form-container" >
                <form>

                <label for="nome">Nome</label>
                <input type="text" id="Nome" placeholder="Nome" value={nome} 
                onChange={(e) => setNome(e.target.value)}/>
                <br/>

                <label for="nome">Idade</label>
                <input type="number" id="Idade" placeholder="Idade" value={idade} 
                onChange={(e) => setIdade(e.target.value)}/>
                <br/>

                <label for="nome">Email</label>
                <input type="text" id="Email" placeholder="Email" value={email}
                onChange={(e) => setEmail(e.target.value)}/>
                <br/>

                <label for="nome">Telefone</label>
                <input type="number" id="Telefone" placeholder="Telefone" value={telefone}
                onChange={(e) => setTelefone(e.target.value)}/>
                <br/>

                <input type="submit" value="Salvar"
                onClick={(e) => criarOuEditarUsuario(e)} />
                <br/>

                <Link to="/Usuario">
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
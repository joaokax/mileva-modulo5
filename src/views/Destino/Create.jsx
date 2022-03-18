import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import DestinoService from "../../services/DestinoService";

export default function Create() {
        const [cidadeDestino, setCidadeDestino] = useState("");
        const { id } = useParams();
        const navigate = useNavigate();
      
        const criarOuEditarDestino = (e) => {
          e.preventDefault();
      
          const destino = { cidadeDestino };
      
          if (id) {
              DestinoService.updateDestino(id, destino)
              .then((response) => {
                  navigate("/Destino")
              })
      
          } else {
              DestinoService.createDestino(destino)
              .then((response) => {
                  navigate("/Destino")
              })
          }
        }
      
        useEffect(() => {
            function getDestinoById() {
              if (id) {
                  DestinoService.getDestinoById(id)
                  .then((response) => {
                      setCidadeDestino(response.data.cidadeDestino);
                  })
                  .catch((error) => {
                      console.log(error);
                  })
              }
            }
            getDestinoById()
        }, [id]);
    

    return (
        <>
            <div class="bg-crud"></div>
            <div className="description-box">

            <h1>{id ? "Editar" : "Criar"}</h1>

            <div className="form-center">
            <div class="form-container" >
                <form>

                <label for="cidadeDestino">Cidade Destino</label>
                <input type="text" id="cidadeDestino" placeholder="Cidade Destino" value={cidadeDestino} 
                onChange={(e) => setCidadeDestino(e.target.value)}/>
                <br/>

                <input type="submit" value="Salvar"
                onClick={(e) => criarOuEditarDestino(e)} />
                <br/>

                <Link to="/Destino">
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
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ViagemService from "../../services/ViagemService";

export default function Index() {
    const [viagens, setViagens] = useState([]);

    const getAllViagens = () => {
        ViagemService.getAllViagens().then((response) => {
            setViagens(response.data);
            console.log(response.data)
        }).catch((error) => {
            console.log(error);
        });
    };

    useEffect(() => {
        getAllViagens();

    }, []);

    const deleteViagem = (viagemId) => {
        ViagemService.deleteViagem(viagemId).then((response) => {
            getAllViagens();
        }).catch((error) => {
            console.log(error);
        });
    }


    return (
        <>
            <div class="bg-crud"></div>
            <div className="description-box">

                <h1>Lista de viagens cadastradas</h1>
                <h2>Você pode adicionar, atualizar ou excluir suas viagens</h2>

                <div className="btn-center">
                <Link to="/Viagem-Create">
                <button className="btn-create">Fazer Nova Viagem</button>
                </Link>
                </div>

                <div className="table-responsivo">
                <table>
                    <thead>
                        <tr>
                            <td>Id</td>
                            <td>Partida</td>
                            <td>Chegada</td>
                            <td>Valor</td>
                            <td>Ida</td>
                            <td>Volta</td>
                            <td>Usuario</td>
                            <td>Destino</td>
                            <td> </td>
                        </tr>
                    </thead>
                    <tbody>
                        {viagens.map((viagem) => (
                                <tr key={viagem.id_viagem}>
                                    <td>{viagem.id_viagem}</td>
                                    <td>{viagem.aeroportoPartida}</td>
                                    <td>{viagem.aeroportoChegada}</td>
                                    <td>{viagem.valor}</td>
                                    <td>{viagem.dataIda}</td>
                                    <td>{viagem.dataVolta}</td>

                                    <td>{viagem.usuario.nome}</td>
                                    <td>{viagem.destino.cidadeDestino}</td>
                                    <td>

                                        <Link to={`/Viagem-Update/${viagem.id_viagem}`}>
                                        <button className="btn-edit">
                                            Editar
                                        </button>
                                        </Link>

                                        <button className="btn-delete" 
                                        onClick={() => deleteViagem(viagem.id_viagem)}>
                                            Deletar
                                        </button>

                                    </td>
                                </tr>
                            ))}
                    </tbody>
                </table>
                </div>

                <br/>
                <br/>

            </div>
        </>
    );
}
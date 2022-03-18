import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import DestinoService from "../../services/DestinoService";

export default function Index() {
    const [destinos, setDestinos] = useState([]);

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

    const deleteDestino = (destinoId) => {
        DestinoService.deleteDestino(destinoId).then((response) => {
            getAllDestinos();
        }).catch((error) => {
            console.log(error);
        });
    }


    return (
        <>
            <div class="bg-crud"></div>
            <div className="description-box">

                <h1>Lista de destinos cadastrados</h1>
                <h2>Você pode adicionar, atualizar ou excluir seus destinos</h2>

                <div className="btn-center">
                <Link to="/Destino-Create">
                <button className="btn-create">Criar Destino</button>
                </Link>
                </div>

                <div className="table-responsivo">
                <table>
                    <thead>
                        <tr>
                            <td>Id</td>
                            <td>Cidade</td>
                            <td> </td>
                        </tr>
                    </thead>
                    <tbody>
                        {destinos.map((destino) => (
                                <tr key={destino.id_destino}>
                                    <td>{destino.id_destino}</td>
                                    <td>{destino.cidadeDestino}</td>
                                    <td>

                                        <Link to={`/Destino-Update/${destino.id_destino}`}>
                                        <button className="btn-edit">
                                            Editar
                                        </button>
                                        </Link>

                                        <button className="btn-delete" 
                                        onClick={() => deleteDestino(destino.id_destino)}>
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
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import UsuarioService from "../../services/UsuarioService";

export default function Index() {
    const [usuarios, setUsuarios] = useState([]);

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

    const deleteUsuario = (usuarioId) => {
        UsuarioService.deleteUsuario(usuarioId).then((response) => {
            getAllUsuarios();
        }).catch((error) => {
            console.log(error);
        });
    }


    return (
        <>
            <div class="bg-crud"></div>
            <div className="description-box">

                <h1>Lista de usuarios cadastrados</h1>
                <h2>Você pode adicionar, atualizar ou excluir seus dependentes</h2>

                <div className="btn-center">
                <Link to="/Usuario-Create">
                <button className="btn-create">Criar Usuário</button>
                </Link>
                </div>

                <div className="table-responsivo">
                <table>
                    <thead>
                        <tr>
                            <td>Id</td>
                            <td>Nome</td>
                            <td>Idade</td>
                            <td>Email</td>
                            <td>Telefone</td>
                            <td> </td>
                        </tr>
                    </thead>
                    <tbody>
                        {usuarios.map((usuario) => (
                                <tr key={usuario.id_usuario}>
                                    <td>{usuario.id_usuario}</td>
                                    <td>{usuario.nome}</td>
                                    <td>{usuario.idade}</td>
                                    <td>{usuario.email}</td>
                                    <td>{usuario.telefone}</td>
                                    <td>

                                        <Link to={`/Usuario-Update/${usuario.id_usuario}`}>
                                        <button className="btn-edit">
                                            Editar
                                        </button>
                                        </Link>

                                        <button className="btn-delete" 
                                        onClick={() => deleteUsuario(usuario.id_usuario)}>
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
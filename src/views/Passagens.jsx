import React from "react";
import { Link } from "react-router-dom";

export default function Passagens() {
    return (
        <>
            <div class="bg-passagens"></div>
            <div class="description-box">
                    <h1>Para qualquer lugar do mundo a gente leva você</h1>
                    <h2>Passagens internacionais para as férias de verão em até 10x</h2>

                    <div class="row-card">

                        <div class="coluna-card">
                        <div class="card">
                        <img src="https://i.imgur.com/wnoUUTM.jpg" alt="Orlando" />
                        <div class="container-card">
                            <h4>Orlando</h4> 
                            <p>Passagens<br/>a partir de R$ &nbsp;<b>1.150</b></p>
                        </div>
                        </div>
                        </div>

                        <div class="coluna-card">
                        <div class="card">
                        <img src="https://i.imgur.com/fMNz3qE.jpg" alt="Bangkok" />
                        <div class="container-card">
                            <h4>Bangkok</h4>  
                            <p>Passagens<br/>a partir de R$ &nbsp;<b>1.230</b></p> 
                        </div>
                        </div>
                        </div>

                        <div class="coluna-card">
                        <div class="card">
                        <img src="https://i.imgur.com/PYfvIgE.jpg" alt="Lisboa"/>
                        <div class="container-card">
                            <h4>Lisboa</h4>  
                            <p>Passagens<br/>a partir de R$ &nbsp;<b>980</b></p> 
                        </div>
                        </div>
                        </div>

                        <div class="coluna-card">
                        <div class="card">
                        <img src="https://i.imgur.com/Ihu0R3i.jpg" alt="Hong Kong"/>
                        <div class="container-card">
                            <h4>Hong Kong</h4>  
                            <p>Passagens<br/>a partir de R$ &nbsp;<b>1.460</b></p> 
                        </div>
                        </div>
                        </div>

                    </div>
                    <br/>

                    <div class="row-form">

                        <div class="column-form">
                            <h6>
                                <i class="material-icons">
                                person_outline
                                </i>
                                &nbsp;
                                Crie sua conta no Mileva
                            </h6>
                            <h5>Descontos incríveis estão esperando você. Cadastre-se.</h5>
                        </div>

                        <div class="column-form">
                        <Link to="/Usuario">
                            <div className="container-acesso c-user">
                                <p> Página do Cliente</p>
                            </div>
                        </Link>

                        <Link to="/Destino">
                            <div className="container-acesso c-destinos">
                                <p> Destinos</p>
                            </div>
                        </Link>

                        <Link to="/Viagem">
                            <div className="container-acesso c-viagens">
                                <p> Viagens</p>
                            </div>
                        </Link>
                        </div>

                    </div>

                    <br/>
                    <br/>
            </div>
        </>
    );
}
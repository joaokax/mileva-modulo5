import React from "react";

export default function Contato() {
    return (
        <>
            <div class="bg-contato"></div>
            <div class="description-box">
                    <h1>Fale Conosco</h1>
                    <h2>Preencha o formulário abaixo para que possamos entrar em contato</h2>

                    <img src="https://i.imgur.com/YBVz8KQ.png" alt="contato" />

                    <div class="row-form">

                        <div class="column-form">
                            <h6>
                                <i class="material-icons">
                                contact_support
                                </i>
                                &nbsp;
                                Fale com o Mileva
                            </h6>
                            <h5>Formulário de contato</h5>
                        </div>

                        <div class="column-form">
                            <form action="/action_page.php">
                            <label for="nome">Nome</label>
                            <input type="text" id="nome" name="Nome" placeholder="Nome"/>
                            <br/>
                            <label for="email">Email</label>
                            <input type="text" id="email" name="email" placeholder="Email"/>
                            <br/>
                            <label for="telefone">Telefone</label>
                            <input type="text" id="telefone" name="telefone" placeholder="Telefone com DDD"/>
                            <br/>
                            <label for="assunto">Assunto</label>
                            <select id="assunto" name="Assunto">
                                <option value="passagem">Passagem</option>
                                <option value="pacote">Pacote</option>
                                <option value="hotel">Hotel</option>
                                <option value="cadastro">Cadastro</option>
                                <option value="outro">Outro</option>
                            </select>
                            
                            <label for="mensagem">Mensagem</label>
                            <textarea id="mensagem" name="mensagem" placeholder="Escreva sua mensagem"></textarea>


                            <input type="submit" value="Enviar"/>
                            </form>
                        </div>

                    </div>

                    <br/>
                    <br/>
            </div>

        </>
    );
}
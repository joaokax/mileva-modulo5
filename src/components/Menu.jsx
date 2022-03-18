import React from "react";
import { Link } from "react-router-dom";

export default function Menu() {
    return (
        <nav>
            <div class="topmenu">
                <Link to="/"><a><img src="https://i.imgur.com/gJe8MsI.png" /></a></Link>
                <Link to="/Passagens" class="btnmenu"><a><i class="material-icons">flight</i><br />Passagens</a></Link>
                <Link to="/Pacotes" class="btnmenu"><a><i class="material-icons">luggage</i><br />Pacotes</a></Link>
                <Link to="/Contato" class="btnmenu"><a><i class="material-icons">email</i><br />Contato</a></Link>
            </div>
        </nav>
    );
}
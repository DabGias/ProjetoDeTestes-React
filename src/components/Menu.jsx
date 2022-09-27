import { Link } from "react-router-dom"
import styled from "styled-components"

const StyleMenu = styled.nav `
    font-family: monospace;
    padding-top: 20px;
    background-color: #3d3d3d;

    h1 {
        text-align: center;
        font-size: 40px;
        color: #00b400;
    }

    ul {
        margin-top: 20px;
        list-style: none;
        text-align: center;
        display: flexbox;
        justify-content: center;
    }

    ul li {
        margin: 20px auto;
    }

    .linkMenu {
        display: inline-block;
        font-size: 20px;
        color: white;
        text-decoration: none;
        transition: 150ms;
    }

    .linkMenu:hover {
        transform: scale(1.15);
        transition: 150ms;
    }
`

function Menu() {
    return(
        <StyleMenu>
            <h1>Projeto de Testes</h1>

            <ul>
                <li><Link to={"/"} className="linkMenu">Home</Link></li>
                <li><Link to={"/cores"} className="linkMenu">Cores</Link></li>
                <li><Link to={"/sobre"} className="linkMenu">Sobre</Link></li>
            </ul>
        </StyleMenu>
    )
}

export default Menu
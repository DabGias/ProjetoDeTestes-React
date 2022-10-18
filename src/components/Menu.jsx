import { Link } from "react-router-dom"
import styled from "styled-components"

const StyleMenu = styled.nav `
    padding: 10px;
    background-color: #00122d;

    ul {
        padding: 10px;
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
            <ul>
                <li><Link to={"/cores"} className="linkMenu">🎨 Cores</Link></li>
                <li><Link to={"/galeria"} className="linkMenu">📷 Galeria</Link></li>
                <li><Link to={"/sobre"} className="linkMenu">📖 Sobre</Link></li>
            </ul>
        </StyleMenu>
    )
}

export default Menu
import styled from "styled-components"
import { Link } from "react-router-dom"
import Menu from "./Menu"

const StyleHeader = styled.header `
    padding-top: 20px;
    background-color: #00122d;

    h1 {
        text-align: center;
        font-size: 40px;
    }

    h1 a {
        display: block;
        color: #00b400;
        text-decoration: none;
        transition: 150ms;
    }

    h1 a:hover {
        transform: scale(1.05);
        transition: 150ms;
    }
`

function Header() {
    return(
        <>
            <StyleHeader>
                <h1><Link to={"/"}>Projeto de Testes</Link></h1>
                <Menu/>
            </StyleHeader>
        </>
    )
}

export default Header
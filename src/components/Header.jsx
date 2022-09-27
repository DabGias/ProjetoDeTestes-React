import styled from "styled-components"
import Menu from "./Menu"

const StyleHeader = styled.header `
    font-family: monospace;
    padding-top: 20px;
    background-color: #3d3d3d;

    h1 {
        text-align: center;
        font-size: 40px;
        color: #00b400;
    }
`

function Header() {
    return(
        <>
            <StyleHeader>
                <h1>Projeto de Testes</h1>
                <Menu/>
            </StyleHeader>
        </>
    )
}

export default Header
import styled from "styled-components"

const StyleInfo = styled.div `
    font-family: monospace;
    background-color: #3d3d3d;
    margin: 20px auto;
    padding: 10px;
    height: 100%;
    width: 70%;
    border-radius: 20px;

    h1 {
        text-align: center;
        width: 60%;
        margin: 20px auto;
        color: #00b400;
    }

    h3 {
        text-align: center;
        width: 70%;
        margin: 20px auto;
        color: white;
    }
`

function Home() {
    return(
        <StyleInfo>
            <h1>Bem-vindo(a) ao meu projeto de testes</h1>

            <h3>Este site foi criado com o objetivo de testar, aprimorar e refinar minhas habilidades em Web Dev/Desing e React.</h3>
        </StyleInfo>
    )
}

export default Home
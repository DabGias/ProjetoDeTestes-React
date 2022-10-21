import styled from "styled-components"

const StyleTeste = styled.div `
    background-color: #00122d;
    height: 100vh;
    width: 70%;
    margin: 20px auto;
    padding: 20px;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    p {
        text-align: center;
        width: 50%;
        color: #C62368;
        font-size: 20px;
        margin: 10px;
    }

    p p {
        display: inline;
        color: white;
    }

    p a {
        display: inline-block;
        color: white;
        text-decoration: none;
        transition: 150ms;
    }

    p a:hover {
        transform: scale(1.15);
        transition: 150ms;
    }
`

function Sobre() {
    return(
        <>
            <StyleTeste>
                <p>Autor: <p>Gabriel Furlaneti Dias</p></p>
                <p><a href="https://github.com/DabGias">🐙 GitHub;</a></p>
                <p><a href="https://www.linkedin.com/in/gabrielfurlaneti">👔 LinkedIn;</a></p>
            </StyleTeste>
        </>
    )
}

export default Sobre
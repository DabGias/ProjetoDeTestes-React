import styled from "styled-components"

const StyleFooter = styled.footer `
    padding: 20px;
    background-color: #00122d;
    text-align: center;

    p {
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

function Footer() {
    return(
        <>
            <StyleFooter>
                <p>🗺 Localização: <p>Brasil, SP, São Paulo;</p></p>
                <p><a href="https://github.com/DabGias">🐙 GitHub;</a></p>
                <p><a href="https://www.linkedin.com/in/gabrielfurlaneti">👔 LinkedIn;</a></p>
            </StyleFooter>
        </>
    )
}

export default Footer
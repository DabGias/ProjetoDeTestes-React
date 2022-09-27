import styled from "styled-components"

const StyleFooter = styled.footer `
    background-color: #303030;
    font-family: monospace;
    padding: 20px;
    background-color: #3d3d3d;
    text-align: center;

    p {
        color: white;
        font-size: 20px;
        margin: 10px;
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
                <p>🗺 Localização: Brasil, SP, São Paulo;</p>
                <p><a href="https://github.com/DabGias">🐙 GitHub;</a></p>
                <p><a href="https://www.linkedin.com/in/gabrielfurlaneti">👔 LinkedIn;</a></p>
            </StyleFooter>
        </>
    )
}

export default Footer
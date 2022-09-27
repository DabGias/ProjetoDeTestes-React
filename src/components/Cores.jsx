import styled from "styled-components"

const StyleMain = styled.main `
    font-family: monospace;
    background-color: #3d3d3d;
    margin: 20px auto;
    padding: 20px;
    width: 70%;
    border-radius: 20px;

    h1 {
        font-size: 25px;
        text-align: center;
        width: 60%;
        margin: 20px auto;
        color: #00b400;
    }
`

const StyleCores = styled.div `
    font-family: monospace;
    background-color: #303030;
    margin: 20px auto;
    padding: 20px;
    width: 70%;
    border-radius: 20px;

    .theme-colors {
        display: flex;
        justify-content: space-evenly;
    }

    .theme-colors button {
        padding: 10px;
        border-radius: 50%;
        transition: 150ms;
    }

    .theme-colors button:hover {
        scale: 1.2;
        transition: 150ms;
    }

    .blue {
        cursor: pointer;
        background-color: blue;
    }

    .red {
        cursor: pointer;
        background-color: red;
    }

    .green {
        cursor: pointer;
        background-color: green;
    }

    .indigo {
        cursor: pointer;
        background-color: indigo;
    }

    .purple {
        cursor: pointer;
        background-color: purple;
    }

    .yellow {
        cursor: pointer;
        background-color: yellow;
    }

    .turquoise {
        cursor: pointer;
        background-color: turquoise;
    }
`

function Cores() {
    return(
        <StyleMain>
                <h1>Título de alguma coisa</h1>
            <StyleCores>
                <div className="colors">
                    <div className="theme-colors">
                        <button className="blue" value={"blue"}></button>
                        <button className="red" value={"red"}></button>
                        <button className="green" value={"green"}></button>
                        <button className="indigo" value={"indigo"}></button>
                        <button className="purple" value={"purple"}></button>
                        <button className="yellow" value={"yellow"}></button>
                        <button className="turquoise" value={"turquoise"}></button>
                    </div>
                    <div className="options">
                        
                    </div>
                </div>
            </StyleCores>
        </StyleMain>
    )
}

export default Cores
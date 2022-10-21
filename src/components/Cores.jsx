import styled from "styled-components"

const StyleMain = styled.main `
    background-color: #00122d;
    margin: 20px auto;
    padding: 20px;
    width: 70%;
    border-radius: 20px;

    h1 {
        font-size: 35px;
    }
`

const StyleCores = styled.div `
    background-color: #00122d;
    margin: 100px auto;
    padding: 20px;
    width: 50%;
    border-radius: 20px;

    .theme-colors {
        display: flex;
        justify-content: space-evenly;
        flex-wrap: wrap;
    }

    .theme-colors button {
        margin: 10px;
        padding: 10px;
        border: 1px solid white;
        border-radius: 50%;
        transition: 150ms;
    }

    .theme-colors button:hover {
        transform: scale(1.2);
        transition: 150ms;
    }

    .black {
        cursor: pointer;
        background-color: #001220;
    }

    .blue {
        cursor: pointer;
        background-color: #000070;
    }

    .red {
        cursor: pointer;
        background-color: #700000;
    }

    .green {
        cursor: pointer;
        background-color: #007000;
    }

    .indigo {
        cursor: pointer;
        background-color: indigo;
    }

    .purple {
        cursor: pointer;
        background-color: #700170;
    }

    .yellow {
        cursor: pointer;
        background-color: #a3a300;
    }

    .turquoise {
        cursor: pointer;
        background-color: #2a998e;
    }
`

function Cores(props) {
    return(
        <>
        
            <StyleMain>
                    <h1>Mude seu tema</h1>
            </StyleMain>
            <StyleCores>
                <div className="colors">
                    <div className="theme-colors">
                        <button className="black" value={"black"} onClick={props.changeTheme}></button>
                        <button className="blue" value={"blue"} onClick={props.changeTheme}></button>
                        <button className="red" value={"red"} onClick={props.changeTheme}></button>
                        <button className="green" value={"green"} onClick={props.changeTheme}></button>
                        <button className="indigo" value={"indigo"} onClick={props.changeTheme}></button>
                        <button className="purple" value={"purple"} onClick={props.changeTheme}></button>
                        <button className="yellow" value={"yellow"} onClick={props.changeTheme}></button>
                        <button className="turquoise" value={"turquoise"} onClick={props.changeTheme}></button>
                    </div>
                </div>
            </StyleCores>
        </>
    )
}

export default Cores
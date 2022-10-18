import styled from "styled-components"

const DivStyle = styled.div `
    background-color: #00122d;
    margin: 20px auto;
    width: 70%;
    border-radius: 20px;
    padding: 20px;

    .header {
        width: 70%;
        margin: auto;
        background-image: linear-gradient(#FA7268, #00122d, #00122d);
        border-radius: 20px;
    }

    h1 {
        font-family: 'PT Sans', sans-serif;
        font-size: 60px;
        color: white;
        text-align: left;
        width: 50%;
        margin: 20px;
    }

    .fotos {
        column-count: 4;
    }

    .fotos img {
        width: 100%;
        border-radius: 10px;
        margin-bottom: 20px;
        transition: 150ms;
    }

    .fotos img:hover {
        transform: scale(1.05);
        box-shadow: 0 0 20px white;
        transition: 150ms;
    }
`

function Galeria() {
    return(
        <>
            <DivStyle>
                <div className="header">
                    <h1>Galeria de Fotos</h1>
                </div>

                <div className="fotos">
                    <img src="https://source.unsplash.com/random?a=1" alt="Imagem" />
                    <img src="https://source.unsplash.com/random?b=1" alt="Imagem" />
                    <img src="https://source.unsplash.com/random?c=1" alt="Imagem" />
                    <img src="https://source.unsplash.com/random?d=1" alt="Imagem" />
                    <img src="https://source.unsplash.com/random?e=1" alt="Imagem" />
                    <img src="https://source.unsplash.com/random?f=1" alt="Imagem" />
                    <img src="https://source.unsplash.com/random?g=1" alt="Imagem" />
                    <img src="https://source.unsplash.com/random?h=1" alt="Imagem" />
                    <img src="https://source.unsplash.com/random?i=1" alt="Imagem" />
                    <img src="https://source.unsplash.com/random?j=1" alt="Imagem" />
                    <img src="https://source.unsplash.com/random?k=1" alt="Imagem" />
                    <img src="https://source.unsplash.com/random?l=1" alt="Imagem" />
                    <img src="https://source.unsplash.com/random?m=1" alt="Imagem" />
                    <img src="https://source.unsplash.com/random?n=1" alt="Imagem" />
                    <img src="https://source.unsplash.com/random?o=1" alt="Imagem" />
                    <img src="https://source.unsplash.com/random?p=1" alt="Imagem" />
                    <img src="https://source.unsplash.com/random?q=1" alt="Imagem" />
                    <img src="https://source.unsplash.com/random?r=1" alt="Imagem" />
                    <img src="https://source.unsplash.com/random?s=1" alt="Imagem" />
                    <img src="https://source.unsplash.com/random?t=1" alt="Imagem" />
                    <img src="https://source.unsplash.com/random?u=1" alt="Imagem" />
                    <img src="https://source.unsplash.com/random?v=1" alt="Imagem" />
                    <img src="https://source.unsplash.com/random?w=1" alt="Imagem" />
                    <img src="https://source.unsplash.com/random?x=1" alt="Imagem" />
                    <img src="https://source.unsplash.com/random?y=1" alt="Imagem" />
                    <img src="https://source.unsplash.com/random?z=1" alt="Imagem" />
                    <img src="https://source.unsplash.com/random?a=2" alt="Imagem" />
                    <img src="https://source.unsplash.com/random?b=2" alt="Imagem" />
                    <img src="https://source.unsplash.com/random?c=2" alt="Imagem" />
                    <img src="https://source.unsplash.com/random?d=2" alt="Imagem" />
                    <img src="https://source.unsplash.com/random?e=2" alt="Imagem" />
                    <img src="https://source.unsplash.com/random?f=2" alt="Imagem" />
                    <img src="https://source.unsplash.com/random?g=2" alt="Imagem" />
                    <img src="https://source.unsplash.com/random?h=2" alt="Imagem" />
                    <img src="https://source.unsplash.com/random?i=2" alt="Imagem" />
                    <img src="https://source.unsplash.com/random?j=2" alt="Imagem" />
                    <img src="https://source.unsplash.com/random?k=2" alt="Imagem" />
                    <img src="https://source.unsplash.com/random?l=2" alt="Imagem" />
                    <img src="https://source.unsplash.com/random?m=2" alt="Imagem" />
                    <img src="https://source.unsplash.com/random?n=2" alt="Imagem" />
                    <img src="https://source.unsplash.com/random?o=2" alt="Imagem" />
                    <img src="https://source.unsplash.com/random?p=2" alt="Imagem" />
                    <img src="https://source.unsplash.com/random?q=2" alt="Imagem" />
                    <img src="https://source.unsplash.com/random?r=2" alt="Imagem" />
                    <img src="https://source.unsplash.com/random?s=2" alt="Imagem" />
                    <img src="https://source.unsplash.com/random?t=2" alt="Imagem" />
                    <img src="https://source.unsplash.com/random?u=2" alt="Imagem" />
                    <img src="https://source.unsplash.com/random?v=2" alt="Imagem" />
                    <img src="https://source.unsplash.com/random?w=2" alt="Imagem" />
                    <img src="https://source.unsplash.com/random?x=2" alt="Imagem" />
                    <img src="https://source.unsplash.com/random?y=2" alt="Imagem" />
                    <img src="https://source.unsplash.com/random?z=2" alt="Imagem" />
                    <img src="https://source.unsplash.com/random?a=3" alt="Imagem" />
                    <img src="https://source.unsplash.com/random?b=3" alt="Imagem" />
                    <img src="https://source.unsplash.com/random?c=3" alt="Imagem" />
                    <img src="https://source.unsplash.com/random?d=3" alt="Imagem" />
                    <img src="https://source.unsplash.com/random?e=3" alt="Imagem" />
                    <img src="https://source.unsplash.com/random?f=3" alt="Imagem" />
                    <img src="https://source.unsplash.com/random?g=3" alt="Imagem" />
                    <img src="https://source.unsplash.com/random?h=3" alt="Imagem" />
                    <img src="https://source.unsplash.com/random?i=3" alt="Imagem" />
                    <img src="https://source.unsplash.com/random?j=3" alt="Imagem" />
                    <img src="https://source.unsplash.com/random?k=3" alt="Imagem" />
                    <img src="https://source.unsplash.com/random?l=3" alt="Imagem" />
                    <img src="https://source.unsplash.com/random?m=3" alt="Imagem" />
                    <img src="https://source.unsplash.com/random?n=3" alt="Imagem" />
                    <img src="https://source.unsplash.com/random?o=3" alt="Imagem" />
                    <img src="https://source.unsplash.com/random?p=3" alt="Imagem" />
                    <img src="https://source.unsplash.com/random?q=3" alt="Imagem" />
                    <img src="https://source.unsplash.com/random?r=3" alt="Imagem" />
                    <img src="https://source.unsplash.com/random?s=3" alt="Imagem" />
                    <img src="https://source.unsplash.com/random?t=3" alt="Imagem" />
                    <img src="https://source.unsplash.com/random?u=3" alt="Imagem" />
                    <img src="https://source.unsplash.com/random?v=3" alt="Imagem" />
                    <img src="https://source.unsplash.com/random?w=3" alt="Imagem" />
                    <img src="https://source.unsplash.com/random?x=3" alt="Imagem" />
                    <img src="https://source.unsplash.com/random?y=3" alt="Imagem" />
                    <img src="https://source.unsplash.com/random?z=3" alt="Imagem" />
                    <img src="https://source.unsplash.com/random?a=4" alt="Imagem" />
                    <img src="https://source.unsplash.com/random?b=4" alt="Imagem" />
                    <img src="https://source.unsplash.com/random?c=4" alt="Imagem" />
                    <img src="https://source.unsplash.com/random?d=4" alt="Imagem" />
                    <img src="https://source.unsplash.com/random?e=4" alt="Imagem" />
                    <img src="https://source.unsplash.com/random?f=4" alt="Imagem" />
                    <img src="https://source.unsplash.com/random?g=4" alt="Imagem" />
                    <img src="https://source.unsplash.com/random?h=4" alt="Imagem" />
                    <img src="https://source.unsplash.com/random?i=4" alt="Imagem" />
                    <img src="https://source.unsplash.com/random?j=4" alt="Imagem" />
                    <img src="https://source.unsplash.com/random?k=4" alt="Imagem" />
                    <img src="https://source.unsplash.com/random?l=4" alt="Imagem" />
                    <img src="https://source.unsplash.com/random?m=4" alt="Imagem" />
                    <img src="https://source.unsplash.com/random?n=4" alt="Imagem" />
                    <img src="https://source.unsplash.com/random?o=4" alt="Imagem" />
                    <img src="https://source.unsplash.com/random?p=4" alt="Imagem" />
                    <img src="https://source.unsplash.com/random?q=4" alt="Imagem" />
                    <img src="https://source.unsplash.com/random?r=4" alt="Imagem" />
                    <img src="https://source.unsplash.com/random?s=4" alt="Imagem" />
                    <img src="https://source.unsplash.com/random?t=4" alt="Imagem" />
                    <img src="https://source.unsplash.com/random?u=4" alt="Imagem" />
                    <img src="https://source.unsplash.com/random?v=4" alt="Imagem" />
                    <img src="https://source.unsplash.com/random?w=4" alt="Imagem" />
                    <img src="https://source.unsplash.com/random?x=4" alt="Imagem" />
                    <img src="https://source.unsplash.com/random?y=4" alt="Imagem" />
                    <img src="https://source.unsplash.com/random?z=4" alt="Imagem" />
                    <img src="https://source.unsplash.com/random?a=5" alt="Imagem" />
                    <img src="https://source.unsplash.com/random?b=5" alt="Imagem" />
                    <img src="https://source.unsplash.com/random?c=5" alt="Imagem" />
                    <img src="https://source.unsplash.com/random?d=5" alt="Imagem" />
                    <img src="https://source.unsplash.com/random?e=5" alt="Imagem" />
                    <img src="https://source.unsplash.com/random?f=5" alt="Imagem" />
                    <img src="https://source.unsplash.com/random?g=5" alt="Imagem" />
                    <img src="https://source.unsplash.com/random?h=5" alt="Imagem" />
                    <img src="https://source.unsplash.com/random?i=5" alt="Imagem" />
                    <img src="https://source.unsplash.com/random?j=5" alt="Imagem" />
                    <img src="https://source.unsplash.com/random?k=5" alt="Imagem" />
                    <img src="https://source.unsplash.com/random?l=5" alt="Imagem" />
                    <img src="https://source.unsplash.com/random?m=5" alt="Imagem" />
                    <img src="https://source.unsplash.com/random?n=5" alt="Imagem" />
                    <img src="https://source.unsplash.com/random?o=5" alt="Imagem" />
                    <img src="https://source.unsplash.com/random?p=5" alt="Imagem" />
                    <img src="https://source.unsplash.com/random?q=5" alt="Imagem" />
                    <img src="https://source.unsplash.com/random?r=5" alt="Imagem" />
                    <img src="https://source.unsplash.com/random?s=5" alt="Imagem" />
                    <img src="https://source.unsplash.com/random?t=5" alt="Imagem" />
                    <img src="https://source.unsplash.com/random?u=5" alt="Imagem" />
                    <img src="https://source.unsplash.com/random?v=5" alt="Imagem" />
                    <img src="https://source.unsplash.com/random?w=5" alt="Imagem" />
                    <img src="https://source.unsplash.com/random?x=5" alt="Imagem" />
                    <img src="https://source.unsplash.com/random?y=5" alt="Imagem" />
                    <img src="https://source.unsplash.com/random?z=5" alt="Imagem" />
                </div>
            </DivStyle>
        </>
    )
}

export default Galeria
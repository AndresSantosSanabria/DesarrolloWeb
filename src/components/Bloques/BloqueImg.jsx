import styled from "styled-components";

const Bloque = () => {
    return (
        <>
            <Divs>
                <div className="Bloqueder">
                    <div className="BloqueCuadroInterno">
                        
                    </div> 
                    <div className="BloqueImg">
                        </div>
                </div>
            </Divs>
        </>
    )
}

export default Bloque;

const Divs = styled.section`
        
        margin-left:10%;
        .Bloqueder{
            margin-top:-5px;
            width:38%;
            height:524px;
            float:left;
            margin-right:3%;
            background-color: #736357;
            
            }

            --img: url("img/ImgArtifice/PRIMAVERA/IMG_3735 - copia.webp");
        .BloqueImg{
            width:90%;
            height:89%;
            margin-top:4%;
            margin-left:5%;
            position: relative;
            background: var(--img) center center;
            background-size:cover;
            display: flex;
            justify-content: center;
            align-items: center;
        }

`

import styled from "styled-components";

const BloqueTexto = () => {
    return (
        <>
            <Seccion>
                <div className="Bloqueder">
                        <div className="BloqueCuadroInterno">
                            
                        
                    </div> 
                    <div className="BloqueTexto">
                        <h1>QUIÉNES SOMOS</h1>
                        <h3>Una experiencia 100% integral</h3>
                            <p>Lo simplificamos en una frase, “ el espacio es tuyo, el diseño interior es nuestro”. Por eso nos encanta ayudar a buscar la mejor solución que permita mejorar la calidad de vida de nuestro clientes a través de la creación de espacios armónicos y funcionales.</p>
                            <p>Idealo ofrece un soporte personalizado y junto a ellos, comercializamos productos que nos lleven a concretar y hacer realidad una idea, A esto nos dedicamos y es lo que hacemos ya que es nuestra pasión y razón de ser.</p> 
                            <p>Por qué una experiencia integral? En Idealo entendemos que el tiempo y la inversión de las personas son aspectos fundamentales, lo cual nos lleva a ofrecer productos de alta calidad para el diseño y la decoración de espacios generales, todo con el fin de hacer que el proceso de diseño se convierta en una experiencia viva de lo que somos como marca.</p>
                        </div>
                </div>
            </Seccion>
        </>
    )
}

export default BloqueTexto;

const Seccion = styled.section`

        background-color:blue;
        margin-left:10%;
        .Bloqueder{
            width:38%;
            height:514px;
            float:left;
            margin-right:3%;
            background-color: #E5DBD0;
            position: relative;
            
            &:after{
                content:"";
                width:42.3%;
                height:507px;
                position:absolute;
                top:-8px;
                left: 58.7%;
                z-index: -2;
                background-image:
                linear-gradient(
                    #736357 254px,
                    transparent 254px,
                    transparent 254px
                );
            }
            .BloqueCuadroInterno{
                content:"";
                margin-top:255px;
                margin-left: -6px;
                width:254px;
                height:264px;
                background:#736357;
                position:absolute;
                z-index:-1;
            }
        }
        .BloqueTexto{
            margin:4%;
            h3{
                color: #846851
            }
        }
        .BloqueTexto h1{
            color:#736357;
            text-align:center;
            font-weight:bold;
        }
        .BloqueTexto p{
            font-size:18px;
            font-weight:600;
            text-align:justify;
        }


    /*resposivo*/
    @media  screen and (max-width: 600px) {
        .BloqueTexto h1{
            color:#e96500;
            text-align:center;
            font-weight:bold;
        }
}
`


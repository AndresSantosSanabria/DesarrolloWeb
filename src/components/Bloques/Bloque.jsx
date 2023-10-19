import styled from "styled-components";

const BloqueTexto = () => {
    return (
        <>
            <Seccion>
            <div className="der"><div className="cuadroInterno"></div></div>
            </Seccion>
        </>
    )
}

export default BloqueTexto;

const Seccion = styled.section`

        padding-top:75px;
        
        .der{
            width:600px;
            height:560px;
            float:right;
            margin-right:8%;
            background:#ff0000;
            position: relative;
            margin-bottom:20px;
            
            &:after{
                content:"";
                width:254px;
                height:560px;
                position:absolute;
                z-index:-1;
                top:-6px;
                left: 58.4%;
                background-image:
                linear-gradient(
                    #736357 254px,
                    transparent 254px,
                    transparent 530px
                );
            }
            .cuadroInterno{
                content:"";
                margin-top:312px;
                margin-left: -6px;
                width:254px;
                height:254px;
                background:#736357;
                position:absolute;
                z-index:-1;
            }
        }

`

import BloqueText from "./BloqueText"
import BloqueImg from "./BloqueImg";


function ContenedorBloques(props) {
    
    const validar=()=>{
        if (props.numero === "1") {
            let a =<BloqueText ></BloqueText>
            return a 
        }else{
            let a =<BloqueImg margin={props.espacio}></BloqueImg>
            return a
        }
    }
    const Completar=()=>{
        if (props.numero === "1") {
            let a = <BloqueImg></BloqueImg>
            return a 
        }else{
            let a = <BloqueText></BloqueText>
            return a
        }
    }

    return (
        <article style={{height:"504px", width:"100%",marginTop:"-100px"}}>
            {validar()}
            {Completar()}
        </article>
    )
}

export default ContenedorBloques


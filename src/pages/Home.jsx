
import ContenedorBloques from "../components/Bloques/ContenedorBloques";
import GaleriaHover from "../components/GaleriaHover/GaleriaHover";
import SliderHome from "../components/SliderHome/SliderHome";

function Home() {
    return (
        <>
        <SliderHome></SliderHome>
        <GaleriaHover></GaleriaHover>
        <ContenedorBloques numero = "2"></ContenedorBloques>
        
        </>
    );
}
export default Home;
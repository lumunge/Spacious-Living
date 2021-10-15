import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import HouseDetails from "../../Components/HouseComponents/HouseDetails/HouseDetails";
import SimilarHouses from "../../Components/HouseComponents/SimilarHouses/SimilarHouses";

const House = () => {
    return(
        <>
            <Navbar/>
            <HouseDetails/>
            <SimilarHouses/>
            <Footer/>
        </>
    )
}

export default House;
import Landing from "../../Components/Landing/Landing"
import Navbar from "../../Components/Navbar/Navbar";
import Search from "../../Components/Search/Search";

const Home = () => {
    return(
        <div>
            <Navbar/>
            <Search/>
           {/* <Header/> */}
           <Landing/>
        </div>
    )
}

export default Home;
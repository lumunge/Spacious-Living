import Navbar from "../Navbar/Navbar";
import Search from "../Search/Search";
import './styles.css';

const Header = () => {
    return(
        <header>
            <Navbar/>
            <Search />
        </header>
    )
}

export default Header;
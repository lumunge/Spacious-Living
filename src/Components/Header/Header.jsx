import Navbar from "../Navbar/Navbar";
import Search from "../Search/Search";
import './header.css';

const Header = () => {
    return(
        <header>
            <Navbar/>
            <Search />
        </header>
    )
}

export default Header;
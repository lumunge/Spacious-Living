import { Button } from "@mui/material";
// icons
import LanguageIcon from '@mui/icons-material/Language';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
//styles
import './styles.css';
// import useStyles from './styles';

const Navbar = () => {
    // const classes = useStyles();
    return(
        <header className="navContainer">
            <div>
                logo here
            </div>
            <div className="navLinks">
                <a href="#!" className="link">Places to Stay</a>
                <a href="#!" className="link">Link 2</a>
                <a href="#!" className="link">Link 3</a>
            </div>
            <div className="navEnd">
                <div className="end">
                    <button className="btn">Become a host</button>
                </div>
                <div className="end">
                    <LanguageIcon/>
                </div>
                <div className="dropdown end">
                    <AccountCircleIcon onClick={() => alert("hello")}/>
                    <div className="dropContent">
                        <a href="#!">Sign up</a>
                        <a href="#!">Log in</a>
                        <hr />
                        <a href="#!">Share your home</a>
                        <a href="#!">Share your home</a>
                        <a href="#!">Help center</a>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Navbar;
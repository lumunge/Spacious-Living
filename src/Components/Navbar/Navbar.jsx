import { useState } from "react";
import {Link, useHistory} from 'react-router-dom';
// icons
import LanguageIcon from "@mui/icons-material/Language";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ExploreIcon from "@mui/icons-material/Explore";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ListAltIcon from '@mui/icons-material/ListAlt';
import HomeIcon from '@mui/icons-material/Home';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import PersonIcon from '@mui/icons-material/Person';//styles
import "./navbar.css";

const Navbar = () => {
	const [stick, setStick] = useState(false);

	const history = useHistory();

	const sticky = () => {
		if (window.scrollY >= 70) {
			setStick(true);
		} else {
			setStick(false);
		}
	};

	window.addEventListener("scroll", sticky);

	return (
		<header className="navContainer">
			<div className="topResponsiveNav">
				<div className="logo">
					<span onClick={() => history.push("/")}>hom-ly</span>
				</div>
				<div className="top">
					<span>
						<LanguageIcon className="language" />
					</span>
					&nbsp;
					<button className="btn">Become a host</button>
				</div>
			</div>
			<div className="largeNav">
				<div className="logo">
					<span onClick={() => history.push("/listings")}>hom-ly</span>
				</div>
				<div className="navLinks">
					<a href="#!" className="link">
						Places to Stay
					</a>
					<a href="#!" className="link">
						Link 2
					</a>
					<a href="#!" className="link">
						Link 3
					</a>
				</div>
				<div className="navEnd">
					<div className="end">
						<button className="btn">Become a host</button>
					</div>
					<div className="end">
						<LanguageIcon />
					</div>
					<div className="dropdown end">
						<AccountCircleIcon onClick={() => alert("hello")} />
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
			</div>
			<div className={stick ? "smallNav active" : "smallNav"}>
				<div className="smallIcon">
					<ExploreIcon className="navIcon" />
					<br />
					<small>spaces</small>
				</div>
				<div className="smallIcon">
					<FavoriteBorderIcon className="navIcon"/>
					<br />
					<small>wishlist</small>
				</div>
				<div className="smallIcon">
					<PersonOutlineIcon className="navIcon" />
					<br />
					<small>login</small>
				</div>
				{/* not included start */}
				<div className="smallIcon" >
					<ListAltIcon className="navIcon" onClick={() => history.push("/listings")}/>
					<br />
					<small>listings</small>
				</div>
				<div className="smallIcon">
					<HomeIcon className="navIcon" onClick={() => history.push("/house")}/>
					<br />
					<small>house</small>
				</div>
				<div className="smallIcon">
					<HomeWorkIcon className="navIcon" onClick={() => history.push("/newhouse")}/>
					<br />
					<small>new house</small>
				</div>
				<div className="smallIcon">
					<ChatBubbleOutlineIcon className="navIcon" onClick={() => history.push("/chat")}/>
					<br />
					<small>chat</small>
				</div>
				<div className="smallIcon">
					<PersonIcon className="navIcon" onClick={() => history.push("/profile")}/>
					<br />
					<small>profile</small>
				</div>
				{/* end not included */}
			</div>
		</header>
	);
};

export default Navbar;

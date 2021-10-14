import { useState, useEffect } from "react";
// icons
import LanguageIcon from "@mui/icons-material/Language";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ExploreIcon from "@mui/icons-material/Explore";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
//styles
import "./navbar.css";

const Navbar = () => {
	const [stick, setStick] = useState(false);

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
					<span>hom-ly</span>
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
				<div>logo here</div>
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
					<ExploreIcon />
					<br />
					<small>spaces</small>
				</div>
				<div className="smallIcon">
					<FavoriteBorderIcon />
					<br />
					<small>wishlist</small>
				</div>
				<div className="smallIcon">
					<PersonOutlineIcon />
					<br />
					<small>login</small>
				</div>
			</div>
		</header>
	);
};

export default Navbar;

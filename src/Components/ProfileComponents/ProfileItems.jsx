import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LoginIcon from "@mui/icons-material/Login";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import MapsHomeWorkOutlinedIcon from "@mui/icons-material/MapsHomeWorkOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import ContactSupportOutlinedIcon from "@mui/icons-material/ContactSupportOutlined";
import loginUser from "../../img/chatuser.jpg"
import "./profileitems.css";

const ProfileItems = () => {
	return (
		<div className="profileComponent">
			<div className="header">
				<div className="userName">
					<p>Hi Carol</p>
				</div>
				<div className="userPicture">
					<img
						src={loginUser}
						alt="user_image"
					/>
				</div>
			</div>
			<div className="main">
				<div className="info">
					<div className="infoDetails">
						<PersonOutlineIcon className="infoIcon" />
						<p>Personal Info</p>
						<span>
							Provide your personal info and how you can be
							reached.
						</span>
					</div>
					<div className="infoDetails">
						<LoginIcon className="infoIcon" />
						<p>Login and security</p>
						<span>Update your password and login credentials.</span>
					</div>
					<div className="infoDetails">
						<FavoriteBorderIcon className="infoIcon" />
						<p>Liked houses</p>
						<span>View and manage the houses you liked.</span>
					</div>
				</div>
				<div className="hr">
					<hr />
				</div>
				<p className="sectionHeading">Hosting</p>
				<div className="profileCtas">
					<div className="infoDetails">
						<HomeOutlinedIcon className="infoIcon" />
						<p>Host your house</p>
						<span>
							Upload your house and get a suitable roomate.
						</span>
					</div>
					<div className="infoDetails">
						<MapsHomeWorkOutlinedIcon className="infoIcon" />
						<p>Listed houses</p>
						<span>View your listed houses.</span>
					</div>
				</div>
				<div className="hr">
					<hr />
				</div>
				<p className="sectionHeading support">Support</p>
				<div className="help">
					<div className="infoDetails">
						<HelpOutlineOutlinedIcon className="infoIcon" />
						<p>How spacious works</p>
						<span>
							Find out how to use spacious effectively to improve
							your experience.
						</span>
					</div>
					<div className="infoDetails">
						<ContactSupportOutlinedIcon className="infoIcon" />
						<p>Get help</p>
						<span>
							Ask for assistance from our helpful support team.
						</span>
					</div>
				</div>
			</div>
			<div className="footer">
				<button>Log out</button>
			</div>
			<div className="deactivate">
				<a href="#!">Deactivate account</a>
			</div>
		</div>
	);
};

export default ProfileItems;

import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import LoginIcon from '@mui/icons-material/Login';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import MapsHomeWorkOutlinedIcon from '@mui/icons-material/MapsHomeWorkOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import ContactSupportOutlinedIcon from '@mui/icons-material/ContactSupportOutlined';
import './profilecomponent.css';

const ProfileComponent = () => {
	return (
		<div className="profileComponent">
			<div className="header">
				<div className="userName">
					<p>Hi Carol</p>
				</div>
				<div className="userPicture">
					<img
						src="https://www.incimages.com/uploaded_files/image/1920x1080/getty_624206636_200013332000928034_376810.jpg"
						alt="user_image"
					/>
				</div>
			</div>
			<div className="main">
				<div className="info">
                    <span>
                        <PersonOutlineIcon className="infoIcon"/>
                        <p>Personal Info</p>
                    </span>
                    <span>
                        <LoginIcon className="infoIcon"/>
                        <p>Login and security</p>
                    </span>
                    <span>
                        <FavoriteBorderIcon className="infoIcon"/>
                        <p>Liked houses</p>
                    </span>
                </div>
                <div className="hr">
                <hr />
                </div>
				<div className="profileCtas">
                    <p className="sectionHeading">Hosting</p>
                    <span>
                        <HomeOutlinedIcon className="infoIcon"/>
                        <p>Host your house</p>
                    </span>
                    <span>
                        <MapsHomeWorkOutlinedIcon className="infoIcon"/>
                    <p>Listed houses</p>
                    </span>
                </div>
                <div className="hr">
                <hr />
                </div>
				<div className="help">
                <p className="sectionHeading">Support</p>
                <span>
                    <HelpOutlineOutlinedIcon className="infoIcon"/>
                    <p>How hom-ly works</p>
                </span>
                <span>
                    <ContactSupportOutlinedIcon className="infoIcon"/>
                    <p>Get help</p>
                </span>

                </div>
			</div>
			<div className="footer">
				<button>Log out</button>
			</div>
		</div>
	);
};

export default ProfileComponent;

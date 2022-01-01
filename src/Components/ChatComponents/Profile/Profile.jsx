import './profile.css';
import chatuser from "../../../img/chatuser.jpg"

const Profile = () => {
    return(
        <div className="profileContainer">
            <p className="chatTitle">Chat With User</p>
            <div className="chatProfile">
                <div className="profileImg">
                    <img src={chatuser} alt="user_profile" />
                </div>
                <div className="profileDetails">
                    <p className="profileName">Susan Doe</p>
                    <span className="userRank">Host</span>
                </div>
            </div>
        </div>
    )
}

export default Profile;
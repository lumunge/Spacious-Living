import './profile.css';

const Profile = () => {
    return(
        <div className="profileContainer">
            <p className="chatTitle">Chat With User</p>
            <div className="chatProfile">
                <div className="profileImg">
                    <img src="https://www.incimages.com/uploaded_files/image/1920x1080/getty_624206636_200013332000928034_376810.jpg" alt="user_profile" />
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
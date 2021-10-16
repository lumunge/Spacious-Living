import StarOutlineIcon from "@mui/icons-material/StarOutline";
import PoolIcon from "@mui/icons-material/Pool";
import LocalParkingIcon from "@mui/icons-material/LocalParking";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import NetworkWifiIcon from "@mui/icons-material/NetworkWifi";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./housedetails.css";

const HouseDetails = () => {
	return (
		<div className="detailsContainer">
			<div className="houseImages">
				<div className="mainHouseImage">
					<img
						src="https://a0.muscache.com/im/pictures/cfa3a285-ad10-4bcc-a032-9956e8b2e9e5.jpg?im_w=1200"
						alt="house_img"
					/>
				</div>
				<div className="smallHouseImages">
					<div className="houseImage">
						<img
							src="https://a0.muscache.com/im/pictures/2c1121c1-dc8a-46d2-9604-e51981b4560f.jpg?im_w=720"
							alt="house_img"
						/>
					</div>
					<div className="houseImage">
						<img
							src="https://a0.muscache.com/im/pictures/100cd8df-561f-4c34-904b-a75314e616b5.jpg?im_w=720"
							alt="house_img"
						/>
					</div>
					<div className="houseImage">
						<img
							src="https://a0.muscache.com/im/pictures/d11e6546-12fb-485a-9883-58e9fb3d1a89.jpg?im_w=720"
							alt="house_img"
						/>
					</div>
					<div className="houseImage">
						<img
							src="https://a0.muscache.com/im/pictures/5bbba8f1-5cc9-4967-808d-f3fd3367fb89.jpg?im_w=1200"
							alt="house_img"
						/>
					</div>
				</div>
			</div>
			<div className="houseDetails">
				<div className="houseDetail">
					<div>
						<p className="houseTitle">2 Bedroom Apartment</p>
						<span>
							<StarOutlineIcon className="rateIcon" /> &nbsp; 4.6
						</span>
					</div>
					<div>
						<p className="detailTitle">Description</p>
						<p className="description">
							Lorem ipsum, dolor sit amet consectetur adipisicing
							elit. Autem, delectus at voluptas laboriosam
							suscipit consequatur?
						</p>
					</div>
					<div className="features">
						<p className="detailTitle">Features</p>
						<span className="description">
							<PoolIcon /> &nbsp; Swimming Pool
						</span>
						<span className="description">
							<LocalParkingIcon /> &nbsp; Parking
						</span>
						<span className="description">
							<FitnessCenterIcon /> &nbsp; Gym
						</span>
						<span className="description">
							<NetworkWifiIcon /> &nbsp; Wifi
						</span>
						<a href="#!">more modal</a>
					</div>
				</div>
				<div className="mapLocationContainer">
					<div className="mapLocation">
						<p className="detailTitle">Location</p>
						<img
							src="https://media.wired.com/photos/59269cd37034dc5f91bec0f1/191:100/w_1280,c_limit/GoogleMapTA.jpg"
							alt="map_img"
						/>
					</div>
				</div>
			</div>
			<div className="reviewsAccordion">
				<p className="detailTitle">
					Reviews <ExpandMoreIcon className="reviewIcon" />{" "}
				</p>
			</div>
		</div>
	);
};

export default HouseDetails;

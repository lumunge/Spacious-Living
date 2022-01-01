import StarOutlineIcon from "@mui/icons-material/StarOutline";
import PoolIcon from "@mui/icons-material/Pool";
import LocalParkingIcon from "@mui/icons-material/LocalParking";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import NetworkWifiIcon from "@mui/icons-material/NetworkWifi";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import landinghse1 from "../../../img/landinghse1.jpg";
import landinghse2 from "../../../img/landinghse2.jpg";
import landinghse3 from "../../../img/landinghse3.jpg";
import landinghse4 from "../../../img/landinghse4.jpg";
import landinghse5 from "../../../img/landinghse5.jpg";
import map2 from "../../../img/map2.jpg";
import "./housedetails.css";

const HouseDetails = () => {
	return (
		<div className="detailsContainer">
			<div className="houseImages">
				<div className="mainHouseImage">
					<img
						src={landinghse1}
						alt="house_img"
					/>
				</div>
				<div className="smallHouseImages">
					<div className="houseImage">
						<img
							src={landinghse2}
							alt="house_img"
						/>
					</div>
					<div className="houseImage">
						<img
							src={landinghse3}
							alt="house_img"
						/>
					</div>
					<div className="houseImage">
						<img
							src={landinghse4}
							alt="house_img"
						/>
					</div>
					<div className="houseImage">
						<img
							src={landinghse5}
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
							src={map2}
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

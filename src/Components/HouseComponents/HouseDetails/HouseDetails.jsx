import StarOutlineIcon from "@mui/icons-material/StarOutline";
import PoolIcon from "@mui/icons-material/Pool";
import LocalParkingIcon from "@mui/icons-material/LocalParking";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import NetworkWifiIcon from "@mui/icons-material/NetworkWifi";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './housedetails.css';

const HouseDetails = () => {
	return (
		<div className="detailsContainer">
			<div className="houseImage">
				<img
					src="https://imganuncios.mitula.net/house_for_rent_at_muthaiga_nairobi_01_muthaiga_nairobi_2344_kenya_mls_433884117_5420135612625571459.jpg"
					alt="house_img"
				/>
			</div>
			<div className="details">
				<div>
					<p className="houseTitle">2 Bedroom Apartment</p>
					<span>
						<StarOutlineIcon className="rateIcon" /> &nbsp; 4.6
					</span>
				</div>
				<div>
					<p className="sectionTitle">Description</p>
					<p className="description">
						Lorem ipsum, dolor sit amet consectetur adipisicing
						elit. Autem, delectus at voluptas laboriosam suscipit
						consequatur?
					</p>
				</div>
				<div className="features">
					<p className="sectionTitle">Features</p>
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
			<div className="mapLocation">
				<p className="sectionTitle">Location</p>
				<img
					src="https://media.wired.com/photos/59269cd37034dc5f91bec0f1/191:100/w_1280,c_limit/GoogleMapTA.jpg"
					alt="map_img"
				/>
			</div>
			<div className="reviewsAccordion">
				<p className="sectionTitle">Reviews <ExpandMoreIcon className="reviewIcon" /> </p>
			</div>
		</div>
	);
};

export default HouseDetails;

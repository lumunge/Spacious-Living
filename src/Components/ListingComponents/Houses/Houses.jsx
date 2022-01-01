import StarOutlineIcon from "@mui/icons-material/StarOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import mapImg from "../../../img/map.jpg";
import listing1 from "../../../img/listing1.jpg";
import listing2 from "../../../img/listing2.jpg";
import listing3 from "../../../img/listing3.jpg";
import listing4 from "../../../img/listing4.jpeg";
import "./houses.css";

const Houses = () => {
	const houses = [
		{
			image: listing1,
			rating: 4.2,
			type: "1 Bedroom Cabin",
			amenities: [
				"Swimming Pool",
				"Spacious Kitchen",
				"Gym",
				"Wifi",
				"Reading material",
			],
			price: 45000,
		},
		{
			image: listing2,
			rating: 3.2,
			type: "1 Bedroom Apartment",
			amenities: [
				"Indoor fireplace",
				"Dedicated Workspace",
				"Microwave",
				"Balcony",
			],
			price: 55000,
		},
		{
			image: listing3,
			rating: 4.4,
			type: "1 Bedroom SQ",
			amenities: [
				"Balcony",
				"Fire Pit",
				"Outdoor Funiture",
				"Outdoor Dining",
				"Parking",
			],
			price: 23000,
		},
		{
			image: listing4,
			rating: 3.9,
			type: "1 Bedroom Multi-family Residentia",
			amenities: [
				"Gym",
				"Pets Allowed",
				"Air Conditioning",
				"Dryer",
				"Security Cameras",
			],
			price: 67000,
		},
	];
	return ( 
		<div className="listingContainer">
			<div className="mapContainer">
				<img src={mapImg} alt="map_image" />
			</div>
			<div className="housesContainer">
				{houses.map((house) => (
					<div className="house">
						<div className="houseImg">
							<img src={house.image} alt={house.type} />
						</div>
						<div className="listingHouseDetails">
							<div className="houseIcons">
								<span className="houseRating">
									<StarOutlineIcon className="rate" />{" "}
									<>{house.rating}</>
								</span>
								<span>
									<FavoriteBorderIcon className="like" />
								</span>
							</div>
							<p className="houseTitle">{house.type}</p>
							<span className="amenities">
								{house.amenities.map((amenity) => (
									<span>{amenity}, </span>
								))}
							</span>
							<p className="houseMoney">Ksh {house.price}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Houses;

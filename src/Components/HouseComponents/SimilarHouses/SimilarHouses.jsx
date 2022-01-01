import StarOutlineIcon from "@mui/icons-material/StarOutline";
import similar1 from "../../../img/similar1.jpg";
import similar2 from "../../../img/similar2.jpg";
import similar3 from "../../../img/similar3.jpg";
import similar4 from "../../../img/similar4.jpg";
import similar5 from "../../../img/similar5.jpg";
import similar6 from "../../../img/similar6.jpg";
import similar7 from "../../../img/similar7.jpg";
import similar8 from "../../../img/similar8.jpg";
import similar9 from "../../../img/similar9.jpg";
import "./similarhouses.css";

const SimilarHouses = () => {
	const houses = [
		{
			title: "1 Bedroom Apartment",
			image: similar1,
			features: ["Swimming Pool", "Pets", "Wifi"],
			rating: 4.2,
			price: 24000,
		},
		{
			title: "2 Bedroom Cabin",
			image: similar2,
			features: ["Free Parking", "Outdoor Furniture", "Wifi"],
			rating: 4.1,
			price: 35000,
		},
		{
			title: "1 Bedroom SQ",
			image: similar3,
			features: ["Reading Material", "Furniture", "Wifi"],
			rating: 3.6,
			price: 55000,
		},
		{
			title: "Studio Apartment",
			image: similar4,
			features: ["Washing Machine", "Gym", "Wifi"],
			rating: 4.0,
			price: 45000,
		},
		{
			title: "1 Bedroom Bungalow",
			image: similar5,
			features: ["Air Conditioning", "Pets", "Hot Water"],
			rating: 3.9,
			price: 44000,
		},
		{
			title: "Bedsitter",
			image: similar6,
			features: ["Swimming Pool", "Free Parking", "Outdoor Furniture"],
			rating: 4.6,
			price: 27000,
		},
		{
			title: "1 Bedroom SQ",
			image: similar7,
			features: ["Reading Material", "Furniture", "Wifi"],
			rating: 3.6,
			price: 55000,
		},
		{
			title: "Studio Apartment",
			image: similar8,
			features: ["Washing Machine", "Gym", "Wifi"],
			rating: 4.0,
			price: 45000,
		},
		{
			title: "1 Bedroom Bungalow",
			image: similar9,
			features: ["Air Conditioning", "Pets", "Hot Water"],
			rating: 3.9,
			price: 44000,
		},
	];

	return (
		<div className="similarContainer">
			<p className="similarTitle">Similar Houses</p>
			<div className="similarHousesWrapper">
				{houses.map((house) => (
					<div className="similarHouse">
						<div className="similarImage">
							<img src={house.image} alt={house.title} />
						</div>
						<div className="similarDescription">
							<p className="rating">
								<StarOutlineIcon className="rateIcon" />&nbsp;
								{house.rating}
							</p>
							<p className="similarHouseTitle">{house.title}</p>
							<p>
								{house.features.map((feature) => (
									<span className="feature">{feature}, </span>
								))}
							</p>
							<p className="money">Ksh {house.price}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default SimilarHouses;

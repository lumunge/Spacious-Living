import StarOutlineIcon from "@mui/icons-material/StarOutline";
import "./similarhouses.css";

const SimilarHouses = () => {
	const houses = [
		{
			title: "1 Bedroom Apartment",
			image: "https://media-cdn.tripadvisor.com/media/photo-s/07/41/d0/d5/oasis-luxury-apartments.jpg",
			features: ["Swimming Pool", "Pets", "Wifi"],
			rating: 4.2,
			price: 24000,
		},
		{
			title: "2 Bedroom Cabin",
			image: "https://a0.muscache.com/im/pictures/fceb7df2-4925-468d-adbc-317c4453d098.jpg?aki_policy=large",
			features: ["Free Parking", "Outdoor Furniture", "Wifi"],
			rating: 4.1,
			price: 35000,
		},
		{
			title: "1 Bedroom SQ",
			image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/04/9e/f1/c7/getlstd-property-photo.jpg?w=900&h=-1&s=1",
			features: ["Reading Material", "Furniture", "Wifi"],
			rating: 3.6,
			price: 55000,
		},
		{
			title: "Studio Apartment",
			image: "https://imganuncios.mitula.net/warm_beautiful_3_bedroom_apartments_to_let_in_kiambu_road_thindigua_7830135634134853887.jpg",
			features: ["Washing Machine", "Gym", "Wifi"],
			rating: 4.0,
			price: 45000,
		},
		{
			title: "1 Bedroom Bungalow",
			image: "https://i.pinimg.com/originals/e9/5e/71/e95e71670910e24e76a1f81c5e5f6e33.jpg",
			features: ["Air Conditioning", "Pets", "Hot Water"],
			rating: 3.9,
			price: 44000,
		},
		{
			title: "Bedsitter",
			image: "https://scontent.fnbo2-1.fna.fbcdn.net/v/t1.6435-9/s600x600/104912202_1789638857843052_2858891814349530883_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=730e14&_nc_ohc=p4-vTpKLxDoAX_d9nAi&_nc_ht=scontent.fnbo2-1.fna&oh=f6f42873adf4c98451e07dbedbe74f5b&oe=61906986",
			features: ["Swimming Pool", "Free Parking", "Outdoor Furniture"],
			rating: 4.6,
			price: 27000,
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

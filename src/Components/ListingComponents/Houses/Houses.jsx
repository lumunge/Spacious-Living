import StarOutlineIcon from '@mui/icons-material/StarOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import './houses.css';

const Houses = () => {
	const houses = [
		{
			image: "https://media-cdn.tripadvisor.com/media/photo-s/06/35/c5/3f/rutundu-log-cabins.jpg",
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
			image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/163560738.jpg?k=da4ee7c86cc4c0bdca386b13c39cf8c9e5f6dace5533e426e5bab65d9c91eb62&o=&hp=1",
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
			image: "https://pictures-kenya.jijistatic.com/9644342_img-20200616-wa0024_960x1280.jpg",
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
			image: "https://images.mansionglobal.com/im-113435?size=1.3333333333333333&width=1280",
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
        <div className="housesContainer">
            {houses.map((house) => (
                <div className="house">
                    <FavoriteBorderIcon className="like" />
                    <div className="houseImg">
                        <img src={house.image} alt={house.type} />
                    </div>
                    <div className="houseDetails">
                        <p><StarOutlineIcon className="rate"/> {house.rating}</p>
                        <p>{house.type}</p>
                        <span className="amenities">{house.amenities.map((amenity) => (
                            <span>{amenity}, </span>
                        ))}</span>
                        <p className="money">Ksh {house.price}</p>
                    </div>
                </div>
            ))}
        </div>
    )
};

export default Houses;

import mapImg from "../../../img/map.webp";
import "./map.css";

const Map = () => {
	return (
		<div className="mapContainer">
			<img src={mapImg} alt="map_image" />
		</div>
	);
};

export default Map;

import Navbar from "../../Components/Navbar/Navbar";
import Search from "../../Components/Search/Search";
import Map from "../../Components/ListingComponents/Map/Map";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/ListingComponents/Header/Header";

const Listings = () => {
	return (
		<>
			<Navbar />
			<Search />
			<Map />
			<Header />
			<Footer />
		</>
	);
};

export default Listings;

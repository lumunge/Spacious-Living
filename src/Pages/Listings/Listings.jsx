import Navbar from "../../Components/Navbar/Navbar";
import Search from "../../Components/Search/Search";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/ListingComponents/Header/Header";
import Houses from "../../Components/ListingComponents/Houses/Houses";

const Listings = () => {
	return (
		<>
			<Navbar /> 
			<Search />
			<Header />
			<Houses />
			<Footer />
		</>
	);
};

export default Listings;

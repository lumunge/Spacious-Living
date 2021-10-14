import Cta from "../../Components/CTA/Cta";
import Explore from "../../Components/Explore/Explore";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import Landing from "../../Components/Landing/Landing";
import Reviews from "../../Components/Reviews/Reviews";
import Views from "../../Components/Views/Views";
import "./home.css";

const Home = () => {
	return (
		<div>
			<div className="landing">
				<Header />
				<Landing />
				<Explore />
				<Views />
				<Cta />
				<Reviews />
				<Footer/>
				<br /><br /><br /><br /><br /><br />
			</div>
		</div>
	);
};

export default Home;

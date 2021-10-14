import Cta from "../../Components/CTA/Cta";
import Explore from "../../Components/Explore/Explore";
import Header from "../../Components/Header/Header";
import Landing from "../../Components/Landing/Landing";
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
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
			</div>
		</div>
	);
};

export default Home;

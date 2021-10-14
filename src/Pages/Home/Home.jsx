import Header from "../../Components/Header/Header";
import Landing from "../../Components/Landing/Landing";
import "./home.css";

const Home = () => {
	return (
		<div>
			<div className="landing">
				<Header />
				<Landing />
			</div>
		</div>
	);
};

export default Home;

import landingImg from "../../img/home.svg";
//styles
import "./styles.css";

const Landing = () => {

	return (
		<div className="landingContainer">
			<div className="introText">
				<p className="title">
					Lorem ipsum dolor sit amet consectetur adipisicing.
					<br />
					<span className="subtitle">
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem, amet!
					</span>
				</p>
            <button className="cta">Let's Go</button>
			</div>
			<div className="img">
				<img src={landingImg} alt="landing_img" />
			</div>
		</div>
	);
};

export default Landing;

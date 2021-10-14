import "./cta.css";
import usrImg from "../../img/listLady.png";
const Cta = () => {
	return (
		<div className="ctaContainer">
			<div className="card">
				<div className="ctaDetails">
					<p className="cardHeading">List your house</p>
					<p>
						Lorem ipsum dolor sit amet consectetur, adipisicing
						elit. Libero, consequuntur.
					</p>
					<button className="ctaBtn">Get Started</button>
				</div>
				<div className="userImg">
					<img src={usrImg} alt="list_lady" />
				</div>
			</div>
		</div>
	);
};

export default Cta;
 
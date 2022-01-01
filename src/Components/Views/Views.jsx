import { useState } from "react";
import view1 from "../../img/view1.jpg";
import view2 from "../../img/view2.jpg";
import view3 from "../../img/view3.jpg";
import view4 from "../../img/view4.jpg";
import view5 from "../../img/view5.jpg";
import view6 from "../../img/view6.jpg";
import StarRateIcon from "@mui/icons-material/StarRate";
import "./views.css";

const Views = () => {
	const [views] = useState([
		{
			location: "Mombasa",
			viewName: "Ocean",
			rating: "4.7",
			image: view1,
			money: "30,000",
		},
		{
			location: "Nairobi",
			viewName: "City",
			rating: "4.0",
			image: view2,
			money: "45,000",
		},
		{
			location: "Kisumu",
			viewName: "Lake",
			rating: "4.6",
			image: view3,
			money: "60,000",
		},
		{
			location: "Meru",
			viewName: "Farm",
			rating: "2.5",
			image: view4,
			money: "25,000",
		},
		{
			location: "Kilifi",
			viewName: "Shore",
			rating: "3.4",
			image: view5,
			money: "34,000",
		},
		{
			location: "Eldoret",
			viewName: "Highlands",
			rating: "4.7",
			image: view6,
			money: "21,000",
		},
	]);
	return (
		<div className="viewContainer">
			<div className="viewTitle">Top views</div>
			<div className="views">
				{views.map((view) => (
					<div className="view">
						<div className="viewImg">
							<img src={view.image} alt={view.viewName} />
						</div>
						<div className="viewDetails">
							<p className="viewLocation">{view.location}</p>
							<p className="viewName">{view.viewName} View</p>
							<div className="viewFooter">
								<div className="rating">
									<StarRateIcon className="ratingIcon" />{" "}
									{view.rating}
								</div>
								<div className="money">Ksh {view.money}</div>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Views;

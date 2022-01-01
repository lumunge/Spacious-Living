import { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import review1 from "../../img/review1.JPG";
import review2 from "../../img/review2.jpg";
import review3 from "../../img/review3.jpg";
import review4 from "../../img/review4.jpg";
import review5 from "../../img/review5.jpg";
import review6 from "../../img/review6.jpg";
import review7 from "../../img/review7.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./reviews.css";

const Reviews = () => {
	const [cards] = useState([
		{
			image: review1,
			review: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
			name: "Karen",
			age: 27,
		},
		{
			image: review2,
			review: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
			name: "Joe",
			age: 20,
		},
		{
			image: review3,
			review: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
			name: "Tracy",
			age: 23,
		},
		{
			image: review4,
			review: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
			name: "Mike",
			age: 22,
		},
		{
			image: review5,
			review: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
			name: "Joan",
			age: 21,
		},
		{
			image: review6,
			review: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
			name: "Laura",
			age: 34,
		},
		{
			image: review7,
			review: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
			name: "Doe",
			age: 29,
		},
	]);

	return (
		<div className="reviewContainer">
			<p className="heading">What our users say</p>
			<div className="sliderContainer">
					<Carousel
						infiniteLoop
						useKeyboardArrows
						autoPlay
						stopOnHover
						showStatus={false}
					>
                        {cards.map((card) => (
                            <div className="reviewWrapper">
                                <div className="reviewCard">
                                <div className="reviewImg">
                                    <img src={card.image} alt={card.name} />
                                </div>
                                <div className="userReview">
                                    <p className="review">{card.review}</p>
                                    <br />
                                    <p className="username">{card.name}, {card.age}</p>
                                </div>
                                </div>
                            </div>
                        ))}
					</Carousel>
				</div>
		</div>
	);
};

export default Reviews;

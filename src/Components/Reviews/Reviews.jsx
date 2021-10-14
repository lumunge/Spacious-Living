import { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./reviews.css";

const Reviews = () => {
	const [cards] = useState([
		{
			image: "https://d8zcwdvc14g2e.cloudfront.net/contentAsset/image/f361c59f-91ba-4b2f-b21d-7700ed29d20f/image/byInode/1/filter/Resize,Jpeg/jpeg_q/70/resize_w/1400",
			review: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
			name: "Karen",
			age: 27,
		},
		{
			image: "https://imageresizer.static9.net.au/o_9r3IdwixWdjgMgptT5TBfFFRk=/400x0/https%3A%2F%2Fprod.static9.net.au%2F_%2Fmedia%2FNetwork%2FImages%2F2017%2F02%2F23%2F11%2F10%2Fold-mate.jpg",
			review: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
			name: "Joe",
			age: 20,
		},
		{
			image: "https://i0.wp.com/post.healthline.com/wp-content/uploads/2021/02/Female_Portrait_1296x728-header-1296x729.jpg?w=1155&h=2268",
			review: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
			name: "Tracy",
			age: 23,
		},
		{
			image: "https://static.billygraham.org/sites/billygraham.org/uploads/pro/2013/06/29153327/IMG_4285-Version-2-1024x682.jpg",
			review: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
			name: "Mike",
			age: 22,
		},
		{
			image: "https://www.incimages.com/uploaded_files/image/1920x1080/getty_624206636_200013332000928034_376810.jpg",
			review: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
			name: "Joan",
			age: 21,
		},
		{
			image: "https://www.avert.org/sites/default/files/styles/responsive_articlecustom_user_desktop_1x/public/PLHIV%20Young%20person%20female_0.jpg?itok=kC2AQKDx&timestamp=1529415642",
			review: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
			name: "Laura",
			age: 34,
		},
		{
			image: "https://ichef.bbci.co.uk/news/976/cpsprodpb/10DD8/production/_112208096_chrisprofilepic2.jpg",
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
					>
                        {cards.map((card) => (
                            <div className="reviewWrapper">
                                <div className="reviewCard">
                                <div className="reviewImg">
                                    <img src={card.image} alt={card.name} />
                                </div>
                                <div className="userReview">
                                    <p>{card.review}</p>
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

import {useState} from 'react';
import './styles.css';


const Explore = () => {
    const [locations] = useState([
        {
            name: "Nairobi",
            image: "https://www.rmjm.com/wp-content/uploads/2017/01/maxresdefault.jpg",
            drive: "45 mins drive"
        },
        {
            name: "Thika",
            image: "https://www.rmjm.com/wp-content/uploads/2017/01/maxresdefault.jpg",
            drive: "45 mins drive"
        },
        {
            name: "Kileleshwa",
            image: "https://www.pamgolding.co.za/Uploads/areaguides/ef427c4a-846e-40bd-aade-b739eb91a5af/Header/Kileleshwa%20header.jpg",
            drive: "20 mins drive"
        },
        {
            name: "Kiambu",
            image: "https://victormatara.com/wp-content/uploads/2018/07/List-Of-Sub-Counties-In-Kiambu-County.jpg",
            drive: "1hr drive"
        },
        {
            name: "Machakos",
            image: "https://images.hivisasa.com/1200/Vphv5Re7RVInvestment.png",
            drive: "50 min drive"
        },
        {
            name: "Juja",
            image: "https://i1.wp.com/breakingnews.co.ke/wp-content/uploads/2020/02/juja-pic-1.jpg?w=600&ssl=1",
            drive: "35 mins drive"
        },
    ])
    return(
        <div className="exploreContainer">
            <p className="exploreTitle">Explore nearby</p>
            <div className="exploreAreas">
                {locations.map((location) => (
                    <div className="location">
                        <div className="locationImg">
                            <img src={location.image} alt={location.name} />
                        </div>
                        <div className="locationDetails">
                            <p className="name">{location.name}</p>
                            <p className="drive">{location.drive}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Explore;
import {useState} from 'react';
import exp1 from '../../img/explore1.jpg';
import exp2 from '../../img/explore2.jpg';
import exp3 from '../../img/explore3.jpg';
import exp4 from '../../img/explore4.jpg';
import exp6 from '../../img/explore5.png';
import './styles.css';


const Explore = () => {
    const [locations] = useState([
        {
            name: "Nairobi",
            image: exp1,
            drive: "45 mins drive"
        },
        {
            name: "Thika",
            image: exp4,
            drive: "45 mins drive"
        },
        {
            name: "Kileleshwa",
            image: exp3,
            drive: "20 mins drive"
        },
        {
            name: "Kiambu",
            image: exp4,
            drive: "1hr drive"
        },
        {
            name: "Machakos",
            image: exp2,
            drive: "50 min drive"
        },
        {
            name: "Juja",
            image: exp6,
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
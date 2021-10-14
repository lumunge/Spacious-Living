import {useState} from 'react';
import StarRateIcon from '@mui/icons-material/StarRate';
import './styles.css';

const Views = () => {
    const [views] = useState([
        {
            location: "Mombasa",
            viewName: "Ocean",
            rating: "4.7",
            image: "https://dynaimage.cdn.cnn.com/cnn/q_auto,w_900,c_fill,g_auto,h_506,ar_16:9/http%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F170720170033-kenya-beaches-chale-island-main-beach-photo-courtesy-the-sands-at-chale-island-.jpg",
            money: "30,000"
        },
        {
            location: "Nairobi",
            viewName: "City",
            rating: "4.0",
            image: "https://upload.wikimedia.org/wikipedia/commons/3/30/Nairobi_City_Aerial_view.jpg",
            money: "45,000"
        },
        {
            location: "Kisumu",
            viewName: "Lake",
            rating: "4.6",
            image: "https://intosafaris.com/wp-content/uploads/2021/05/Hotels-in-Kisumu-near-the-Lake-Milimani-Beach-Resort.-696x536.jpg?ezimgfmt=ng:webp/ngcb4",
            money: "60,000"
        },
        {
            location: "Meru",
            viewName: "Farm",
            rating: "2.5",
            image: "https://a0.muscache.com/im/pictures/a8812a0f-1a3d-4fd9-84ee-15cd3d6c8618.jpg?im_w=1200",
            money: "25,000"
        },
        {
            location: "Kilifi",
            viewName: "Shore",
            rating: "3.4",
            image: "https://eastafricanretreats.com/wp-content/uploads/2016/01/Takaungu-Private-House-Pool.jpg",
            money: "34,000"
        },
        {
            location: "Eldoret",
            viewName: "Highlands",
            rating: "4.7",
            image: "https://media.istockphoto.com/photos/landscape-view-from-kenyas-kerio-escarpment-of-farm-land-with-the-picture-id1026587556?k=20&m=1026587556&s=612x612&w=0&h=A20F0JjZfq6jrJv6O2tmiVLB5dp2bpNhH7tvG2Vcefs=",
            money: "21,000"
        },
    ])
    return(
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
                            <div className="footer">
                            <span className="rating">
                                <StarRateIcon className="ratingIcon" />
                                {view.rating}
                            </span>
                            <span className="money">
                               Ksh {view.money}
                            </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Views;
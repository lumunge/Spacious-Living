import { Typography } from '@mui/material';
import landingImg from '../../img/home.svg';
//styles
import './styles.css';

const Landing = () => {
    // const classes = useStyles();

    return(
        <div className="landingContainer">
           <div>
                <Typography variant="h2">Lorem ipsum dolor sit amet consectetur adipisicing.</Typography>
           </div>
           <div>
                <img src={landingImg} alt="landing_img" />
           </div>
        </div>
    )
}

export default Landing;
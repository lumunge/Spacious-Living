//packages
import {Switch, Route} from 'react-router-dom';
// pages
import Home from './Pages/Home/Home';
import Listings from './Pages/Listings/Listings';
import House from './Pages/House/House';
import NewHouse from './Pages/NewHouse/NewHouse';
import Chat from './Pages/Chat/Chat';
import Profile from './Pages/Profile/Profile';
// components
import Scroll from './Utils/Scroll';
// styles
import "./App.css";

function App() {
	return (
		<div className="App">
			<Scroll>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/listings" component={Listings} />
					<Route path="/house" component={House} />
					<Route path="/newhouse" component={NewHouse} />
					<Route path="/chat" component={Chat} />
					<Route path="/profile" component={Profile} />
				</Switch>
			</Scroll>
		</div>
	);
}

export default App;

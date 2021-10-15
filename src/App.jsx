//packages
import {Switch, Route} from 'react-router-dom';
// pages
import Home from './Pages/Home/Home';
import Listings from './Pages/Listings/Listings';
import House from './Pages/House/House';
import Chat from './Pages/Chat/Chat';
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
					<Route path="/chat" component={Chat} />
				</Switch>
			</Scroll>
		</div>
	);
}

export default App;

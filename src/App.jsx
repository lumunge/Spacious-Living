//packages
import {Switch, Route} from 'react-router-dom';
// pages
import Home from './Pages/Home/Home';
// components
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Scroll from './Utils/Scroll';
// styles
import "./App.css";

function App() {
	return (
		<div className="App">
			<Scroll>
				<Switch>
					<Route exact path="/" component={Home} />
				</Switch>
				<Footer />
			</Scroll>
		</div>
	);
}

export default App;

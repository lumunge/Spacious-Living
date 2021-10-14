//packages
import {Switch, Route} from 'react-router-dom';
// pages
import Home from './Pages/Home/Home';
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
				</Switch>
			</Scroll>
		</div>
	);
}

export default App;

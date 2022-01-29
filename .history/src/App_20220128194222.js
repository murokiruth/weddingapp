import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages';
import Image from './images/bgimage.jpg';

function App() {
	return (
		<div styles={{ backgroundImage: `url(${Image})` }}>
			<Router>
				<Switch>
					<Route path='/' component={Home} exact />
				</Switch>
			</Router>
		</div>
	);
}

export default App;

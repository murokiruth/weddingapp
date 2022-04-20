import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages';
import Seating from './pages/seating';

function App() {
	return (
		<div>
			<Router>
				<Switch>
					<Route path='/' component={Home} exact />
					<Route path='/seating' component={Seating} exact />
				</Switch>
			</Router>
		</div>
	);
}

export default App;

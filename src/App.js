import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Store from './store/Store';
import HomeDetailsContainer from './container/HomeDetailsContainer';
import CharacterDetails from './components/CharacterDetails';

export default class App extends Component {
	render() {
		return (
			<div>
				<Provider store={Store}>
					<Router>
						<Route exact path="/home" component={HomeDetailsContainer} />
						<Route path="/character-details/:id" component={CharacterDetails} />
					</Router>
				</Provider>
			</div>
		);
	}
}

import './App.css';

import React from 'react';

import { Header } from './components/header/Header';
import { Properties } from './components/properties/Properties';
import { Footer } from './components/footer/Footer';

class App extends React.Component {
	render() {
		return (
			<div className="app-wrap">
				<Header />
				<Properties />
				<Footer />
			</div>
		);
	}
}

export default App;

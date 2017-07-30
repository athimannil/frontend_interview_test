import './App.css';

import React from 'react';

import { Header } from './components/header/Header';
import { Footer } from './components/footer/Footer';

class App extends React.Component {
	render() {
		return (
			<div className="app-wrap">
				<Header />
				<main>
					<div className="container">
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
					</div>
				</main>
				<Footer />
			</div>
		);
	}
}

export default App;

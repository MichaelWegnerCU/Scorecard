import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Nav from './components/Nav'
import Welcome from './components/Welcome'
import Scorecard from './components/Scorecard'
import Footer from './components/Footer'

function App() {
  return (
	
    <div className="App">
		<Nav />
	  	<div className="main_container">
	  		{/*<Welcome />*/}
	  		<Scorecard />
	    </div>
	    <Footer />
	</div>
  );
}

export default App;

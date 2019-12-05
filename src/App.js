import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Nav from './components/Nav'
import Welcome from './components/Welcome'
import Scorecard from './components/Scorecard'
import Footer from './components/Footer'
import FadeIn from 'react-fade-in';



class App extends React.Component {
	
constructor(props) {
	super(props);
	this.callbackFunction = this.callbackFunction.bind(this);
	this.changecolor = this.callbackFunction.bind(this);
	this.state = {
		displayWelcome: true,
		displayScoreCard: false,
		displayAboutyou: false,
		displayFin: false,
		activeStep: 0,
		nav: <Nav dataFromParent = {0} />,
	}
}

/*THIS IS SENT TO WELCOME SO THAT IT CAN TELL US WHEN TO MOVE TO SCORECARD */
callbackFunction = (childData) => {
	  
      this.setState({displayScoreCard: childData});
	  this.setState({activeStep: 1});
	  this.setState({displayWelcome: false});
	  this.state.nav= <Nav dataFromParent = {1} />;
	  
}

changecolor(){
	this.forceUpdate();
}

render() {
	const displayWelcome = this.state.displayWelcome;
	const displayScorecard = this.state.displayScoreCard;
	const displayAboutyou = this.state.displayAboutyou;
	const displayFin = this.state.displayFin;
	let show;
	let nav;
	if (displayWelcome) {
      show = <Welcome parentCallback = {this.callbackFunction}/>;
	  /*THIS ALLOWS ME TO CONTROL THE NAV ACTIVE STEP */
	  this.state.nav= <Nav dataFromParent = {0} />;
    } 
	if (displayScorecard){
      show = <Scorecard />;
	  this.state.nav= <Nav dataFromParent = {1} />;	  
	  
    }
	if (displayAboutyou){
      /*show = <Aboutyou />;
    }
	if (displayFin){
      /*show = <Fin />;*/
    }
	return(
	
    <div className="App">
		
		{this.state.nav}
		
	  	<div className="main_container">
		{/*<Scorecard/>*/}
		<FadeIn>
		{show}
		</FadeIn>
	    </div>
	    <Footer />
	</div>
  );
}
}
export default App;

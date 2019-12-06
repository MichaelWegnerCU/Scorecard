import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Nav from './components/Nav'
import Welcome from './components/Welcome'
import Scorecard from './components/Scorecard'
import Aboutyou from './components/Aboutyou'
import Footer from './components/Footer'
import FadeIn from 'react-fade-in';



class App extends React.Component {
	
constructor(props) {
	super(props);
	this.callbackFunction1 = this.callbackFunction1.bind(this);
	this.callbackFunction2 = this.callbackFunction2.bind(this);
	this.state = {
		displayWelcome: true,
		displayScoreCard: false,
		displayAboutyou: false,
		displayFin: false,
		activeStep: 0,
		uname: '',
	}
}

/*THIS IS SENT TO WELCOME SO THAT IT CAN TELL US WHEN TO MOVE TO SCORECARD */
callbackFunction1 = (childflag, user_name) => {
	  
      this.setState({displayScoreCard: childflag[0]});
	  this.setState({uname: user_name});
	  this.setState({activeStep: 1});
	  this.setState({displayWelcome: false});
	  this.state.nav= <Nav dataFromParent = {1} />;
	  
}

/*THIS IS SENT TO Scorecard SO THAT IT CAN TELL US WHEN TO MOVE TO About You */
callbackFunction2 = (childData) => {
	  
      this.setState({displayAboutyou: childData});
	  this.setState({activeStep: 2});
	  this.setState({displayScoreCard: false});
	  this.state.nav= <Nav dataFromParent = {2} />;
	  
}

render() {
	const displayWelcome = this.state.displayWelcome;
	const displayScorecard = this.state.displayScoreCard;
	const displayAboutyou = this.state.displayAboutyou;
	const displayFin = this.state.displayFin;
	let show;
	let nav;
	if (displayWelcome) {
      show = <Welcome parentCallback = {this.callbackFunction1}/>;
	  /*THIS ALLOWS ME TO CONTROL THE NAV ACTIVE STEP */
	  this.state.nav= <Nav dataFromParent = {0} />;
    } 
	if (displayScorecard){
      show = <Scorecard parentCallback = {this.callbackFunction2} user_name = {this.state.uname}/>;
	  this.state.nav= <Nav dataFromParent = {1} />;	  
	  
    }
	if (displayAboutyou){
      show = <Aboutyou user_name = {this.state.uname}/>;
	  this.state.nav= <Nav dataFromParent = {2} />;
    }
	if (displayFin){
      /*show = <Fin />;*/
    }
	return(
	
    <div className="App">
		
		{this.state.nav}
		
	  	<div className="main_container">
		
		<FadeIn>
		{/*<Aboutyou/>*/}
		{show}
		</FadeIn>
	    </div>
	    <Footer />
	</div>
  );
}
}
export default App;

import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Nav from './components/Nav'
import Welcome from './components/Welcome'
import Scorecard from './components/Scorecard'
import Aboutyou from './components/Aboutyou'
import Footer from './components/Footer'

import ls from 'local-storage'



class App extends React.Component {
	
constructor(props) {
	super(props);
	this.callbackFunction1 = this.callbackFunction1.bind(this);
	this.callbackFunction2 = this.callbackFunction2.bind(this);
	console.log(ls.get('wivalue'));
	var UserName_in= ls.get('UserName');
	
	if(UserName_in==null){
		this.state = {
			displayWelcome: true,
			displayScoreCard: false,
			displayAboutyou: false,
			displayFin: false,
			ActiveStep: 0,
			uname: '',
			ls_set: 0,
		}
	}
	else{
		this.state = {
			ActiveStep: ls.get('ActiveStep'),
			uname: UserName_in,
			displayWelcome: true,
			displayScoreCard: false,
			displayAboutyou: false,
			displayFin: false,
			ls_set: 1,
		}
	}
}

/*THIS IS SENT TO WELCOME SO THAT IT CAN TELL US WHEN TO MOVE TO SCORECARD  may need to get email here in the future*/
callbackFunction1 = (childflag, user_name) => {
      this.setState({displayScoreCard: true});
	  this.setState({uname: user_name});
	  ls.set('UserName',user_name);
	  ls.set('ActiveStep',1);
	  this.setState({ActiveStep: 1});
	  this.setState({displayWelcome: false});
	  this.state.nav= <Nav dataFromParent = {1} />;
	  
}

/*THIS IS SENT TO Scorecard SO THAT IT CAN TELL US WHEN TO MOVE TO About You */
callbackFunction2 = (childData) => {
      this.setState({displayAboutyou: true});
	  this.setState({ActiveStep: 2});
	  ls.set('ActiveStep',2);
	  this.setState({displayScoreCard: false});
	  this.state.nav= <Nav dataFromParent = {2} />;  
}

render() {
	/*These control the page to be displayed currently.*/
	var displayWelcome = false;
	var displayScorecard = false;
	var displayAboutyou = false;
	var displayFin = false;
	if (this.state.ls_set){
		if (this.state.ActiveStep===0){displayWelcome = true;}
		if (this.state.ActiveStep===1){displayScorecard = true;}
		if (this.state.ActiveStep===2){displayAboutyou = true;}
		if (this.state.ActiveStep===3){displayFin = true;}
	}
	else{
		displayWelcome = this.state.displayWelcome;
	    displayScorecard = this.state.displayScoreCard;
		displayAboutyou = this.state.displayAboutyou;
		displayFin = this.state.displayFin;
	}
	
	let show;
	
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
	/*This controls the page and should be used for testing. <Aboutyou user_name = {"Michael"}/>
    It should say in prod {show} <Scorecard user_name={"Michael"}/>*/
	
	return(
	
    <div className="App">
		
		{this.state.nav}
		
	  	<div className="main_container">
		
		{show}
		

	    </div>
		
	    <Footer />
	</div>
  );
}
}
export default App;

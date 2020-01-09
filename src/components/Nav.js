import React from 'react'
import logo from '../logo.PNG';
import arrow from '../imgs/arrow.png'
import './Nav.css'



class Nav extends React.Component {

constructor(props) {
	super(props);
	this.state = {
		activeStep: this.props.dataFromParent,
		first: "",
		second: "",
		third: "",
		fourth: "",
	}
	
}
	
componentWillReceiveProps(nextProps) {
	this.setState({ activeStep: nextProps.dataFromParent });  
}

render() {
	
	switch(this.state.activeStep){
				case 0:
					this.state= {
    					first: "step_active",
						second: "",
						third: "",
						fourth: "",
  					};
					break;
				case 1:
					this.state = {
    					first: "",
						second: "step_active",
						third: "",
						fourth: "",
  					};
					break;
				case 2:
					this.state = {
    					first: "",
						second: "",
						third: "step_active",
						fourth: "",
  					};
					break;
				case 3:
					this.state = {
    					first: "",
						second: "",
						third: "",
						fourth: "step_active",
  					};
					break;
			 
	}
	
	return(
	<div className="row navbar">
		<div className="col-12">
			<div className="row">
				<div className="col-1 logo_container">
					<img className="logo" alt="logo" src={logo} height='120px'/>
				</div>
				<div className="col-11 navsteps_container">
					<div className="row">
						<div className={"col-1 first_navstep " + this.state.first}>
						Welcome
						</div>
						<div className="col-1">
						<img className="navline" alt="logo" src={arrow} width='80px'/>
						</div>
						<div className={"col-2 navstep sec_nav "+ this.state.second}>
						Scorecard
						</div>
						<div className="col-1 navline">
						<img className="navline" alt="logo" src={arrow} width='80px'/>
						</div>
						<div className={"col-2 navstep thr_nav " + this.state.third}>
						About You
						</div>
						<div className="col-1 navline">
						<img className="navline" alt="logo" src={arrow} width='80px'/>
						</div>
						<div className={"col-2 last_navstep "+ this.state.fourth}>
						Flourish! Score
						</div>
						<div className="col-1 navline">
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
		
	
	)
	
}
	
}

export default Nav;
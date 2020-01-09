import React from 'react'
import './Welcome.css'


class Welcome extends React.Component {

constructor(props){
	super(props);
	this.state = {
		user_name_in: ''
	};
	this.handleName = this.handleName.bind(this);
}
sendData = (event) => {
	event.preventDefault();
	this.props.parentCallback("true",this.state.user_name_in);
    }

handleName(event) {
    this.setState({user_name_in: event.target.value});
}

render() {
	return(
	<div className="welcome_container">
	<div className="col-4 welcome_box">
		<div className="intro-welcome-text">
		Welcome to the Flourish! Scorecard application.
		</div>
		<div className="intro_plzemail">
		At the end you will recieve an email containing your final Flourish! Scorecard.
		</div>
		
		<div className="first_form">
		
		<form onSubmit={this.sendData} autoComplete="off" >
							 <div className="row in1">
								 <div className="u-in">
									 Name:
								 </div>
								 <input value={this.state.value} type="text" name="Name" className="InputSectionOne" id="in1" required onChange={this.handleName} maxlength="12"></input>
							 </div>
							 <div className="row in1">
								 <div className="u-in">
									 Email:&nbsp;
								 </div>
								 <input type="email" name="Email" className="InputSectionOne" id="in2" required ></input>
							 </div>

							 <br></br>
							 <div className="info-next">
								 <input type="submit" className="Next1" value="Next"></input>
							 </div>
		</form>
		</div>
		
		</div>
		</div>

	
	
	)
	
}
}
export default Welcome;
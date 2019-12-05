import React from 'react'
import './Welcome.css'

function Welcome () {
	return(
	<div className="welcome_container">
	<div className="col-4 welcome_box">
		<div className="intro-welcome-text">
					<h2>Welcome to the Flourish! Scorecard application.</h2>
		</div>
		<div className="intro_plzemail">
		At the end you will recieve an email containing your final Flourish! Scorecard.
		</div>
		<div className="col-md-12">
			
		</div>
		<div className="first_form">
		<form onSubmit="next1(); return false;" autocomplete="off" >
							 <div className="row in1">
								 <div className="u-in">
									 Name:
								 </div>
								 <input type="text" name="Name" className="InputSectionOne" id="in1" required></input>
							 </div>
							 <div className="row in1">
								 <div className="u-in">
									 Email:&nbsp;
								 </div>
								 <input type="email" name="Email" className="InputSectionOne" id="in2" required ></input>
							 </div>

							 <br></br>
							 <div className="info-next">
								 <input type="submit" className="Next1" onClick="next1();" value="Next"></input>
							 </div>
		</form>
		</div>
		
		</div>
		</div>

	
	
	)
	
}

export default Welcome;
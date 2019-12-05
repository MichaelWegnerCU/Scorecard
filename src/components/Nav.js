import React from 'react'
import logo from '../logo.PNG';
import arrow from '../imgs/arrow.png'
import './Nav.css'

function Nav () {
	return(
	<div className="row navbar">
		<div className="col-md-12">
			<div className="row">
				<div className="col-md-1 logo_container">
					<img className="logo" alt="logo" src={logo} height='120px'/>
				</div>
				<div className="col-md-11 navsteps_container">
					<div className="row">
						<div className="col-md-1 first_navstep step_active">
						Welcome
						</div>
						<div className="col-md-1">
						<img className="navline" alt="logo" src={arrow} width='80px'/>
						</div>
						<div className="col-md-2 navstep">
						Scorecard
						</div>
						<div className="col-md-1 navline">
						<img className="navline" alt="logo" src={arrow} width='80px'/>
						</div>
						<div className="col-md-2 navstep">
						About You
						</div>
						<div className="col-md-1 navline">
						<img className="navline" alt="logo" src={arrow} width='80px'/>
						</div>
						<div className="col-md-2 last_navstep">
						Flourish! Score
						</div>
						<div className="col-md-1 navline">
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
		
	
	)
	
}

export default Nav;
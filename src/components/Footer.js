import React from 'react'
import './Footer.css'
import ls from 'local-storage'

class Footer extends React.Component {
	constructor(props) {
	super(props);
	this.state = {isToggleOn: true};
	this.handleReset = this.handleReset.bind(this);
	
	}
	handleReset(){
		ls.clear();
		window.location.reload(false);
	}
	
	render() {
		return(
		<div>
		<div className="row Footer">
			<div className="copyright">
				Flourish! Scorecard &copy; 2019
			</div>
		</div>
		<button class="reset" onClick={this.handleReset}>Testing Reset</button>
		</div>
			

		);
	}
}

export default Footer;
import React from 'react'
import './Scorecard.css'
import Slider from '@material-ui/core/Slider';
var Chart = require("chart.js")



class Scorecard extends React.Component {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
		this.state = {
			one: "num_active",
			two: "na",
			three: "na",
			four: "na",
			five: "na",
			six: "na",
			seven: "na",
			eight: "na",
			nine: "na",
			ten: "na",
		}
		
	}
	 wheel_next(){
		 this.slide_index= this.slide_index+1;
	 }
	 componentDidMount() {
			
		    this.myVar = 'this test';
			this.chart = new Chart(document.getElementById("pie-chart"), {
			type: 'doughnut',
			data: {
				labels: ['Well Informed', 'WellFocused', 'Well Compensated', 'Well Accumulated','Well Optimized','Well Liberated','Well Transformed'],
				datasets: [{
					backgroundColor: ["white","white","white","white","white","white","white"],
					data: [1,1,1,1,1,1,1],
					borderColor: ['black','black','black','black','black','black','black'],
					borderWidth: [2,2,2,2,2,2,2,2],
				}]
			},
			options:{
				labels: {
					render: 'label'
					},
				legend: {
					display: false
					},

				tooltips:{enabled: false},
				hover: {mode: null},
				responsive:true,
				animation: false,
				cutoutPercentage: 30,
				rotation: (-0.5 * Math.PI) - (25/180 * Math.PI)
				}
			});
		  
		  }
	 
		handleChange(event, newValue){
			
			switch(newValue){
				case 1:
					this.setState({
    					one: "num_active",
						two: "na",
						three: "na",
						four: "na",
						five: "na",
						six: "na",
						seven: "na",
						eight: "na",
						nine: "na",
						ten: "na",
  					})
					break;
				case 2:
					this.setState({
    					one: "na",
						two: "num_active",
						three: "na",
						four: "na",
						five: "na",
						six: "na",
						seven: "na",
						eight: "na",
						nine: "na",
						ten: "na",
  					})
					break;
				case 3:
					this.setState({
    					one: "na",
						two: "na",
						three: "num_active",
						four: "na",
						five: "na",
						six: "na",
						seven: "na",
						eight: "na",
						nine: "na",
						ten: "na",
  					})
					break;
				case 4:
					this.setState({
    					one: "na",
						two: "na",
						three: "na",
						four: "num_active",
						five: "na",
						six: "na",
						seven: "na",
						eight: "na",
						nine: "na",
						ten: "na",
  					})
					break;
				case 5:
					this.setState({
    					one: "na",
						two: "na",
						three: "na",
						four: "na",
						five: "num_active",
						six: "na",
						seven: "na",
						eight: "na",
						nine: "na",
						ten: "na",
  					})
					break;
				case 6:
					this.setState({
    					one: "na",
						two: "na",
						three: "na",
						four: "na",
						five: "na",
						six: "num_active",
						seven: "na",
						eight: "na",
						nine: "na",
						ten: "na",
  					})
					break;
				case 7:
					this.setState({
    					one: "na",
						two: "na",
						three: "na",
						four: "na",
						five: "na",
						six: "na",
						seven: "num_active",
						eight: "na",
						nine: "na",
						ten: "na",
  					})
					break;
				case 8:
					this.setState({
    					one: "na",
						two: "na",
						three: "na",
						four: "na",
						five: "na",
						six: "na",
						seven: "na",
						eight: "num_active",
						nine: "na",
						ten: "na",
  					})
					break;
				case 9:
					this.setState({
    					one: "na",
						two: "na",
						three: "na",
						four: "na",
						five: "na",
						six: "na",
						seven: "na",
						eight: "na",
						nine: "num_active",
						ten: "na",
  					})
					break;
				case 10:
					this.setState({
    					one: "na",
						two: "na",
						three: "na",
						four: "na",
						five: "na",
						six: "na",
						seven: "na",
						eight: "na",
						nine: "na",
						ten: "num_active",
  					})
					break;
			}
			
    		
			var color_out="white";
			
			if (newValue<=3){
				color_out='red';
			}
			if (newValue >3 && newValue<=7){
				color_out='yellow';
			}
			if (newValue >7 && newValue<=10){
				color_out='green';
			}
			
			this.chart.data.datasets[0].backgroundColor[0]=color_out;
			this.chart.update();
			
  		};
	render() {
	
	return(
	<div className="scorecard_container">
	<div className="row">
		<div className="col-6 control_container">
			<div className="CurSlice_control">
				Well Informed
			</div>
			<div className="control_box">
		    This is the very detalied all wel comiled phrasing for the first of the Flourish! Activators. At this level you understand the key ides and goals. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
				<div className="number_container">
					<div className="row numberline">
						<div className={"num " + this.state.one}>
							1
						</div>
						<div className={"num " + this.state.two}>
							2
						</div>
						<div className={"num " + this.state.three}>
							3
						</div>
						<div className={"num " + this.state.four}>
							4
						</div>
						<div className={"num " + this.state.five}>
							5
						</div>
						<div className={"num " + this.state.six}>
							6
						</div>
						<div className={"num " + this.state.seven}>
							7
						</div>
						<div className={"num " + this.state.eight}>
							8
						</div>
						<div className={"num " + this.state.nine}>
							9
						</div>
						<div className={"num " + this.state.ten}>
							10
						</div>

					</div>
					<div className="slider">
					
						<Slider className="slide"
							defaultValue={1}
							color="primary"
							onChange={this.handleChange}
							aria-labelledby="discrete-slider"
							valueLabelDisplay="off"
							step={1}

							min={1}
							max={10}
						  />
					</div>
				</div>
			</div>
						<div className="NextPrevious row">

						  <div className="col-7 previous_btn_container">
		
									 <input type="submit" className="previous" onClick={this.wheel_next} value="Previous"></input>
						  </div>


						  <div className="col-1 next_btn_container">
									 <input type="submit" className="Next1" onClick={this.wheel_next} value="Next"></input>
						  </div>

						</div>
		</div>
		<div className="col-1">
		</div>
		<div className="col-5 wheel">
			<canvas id="pie-chart"></canvas>

			{/* THE TITLES SECTION*/}
			<div className="you">
				You
			</div>
			<div className="wellinformed">
				WELL INFORMED
			</div>
			<div className="wellfocused">
				WELL FOCUSED
			</div>
			<div className="welltransformed">
				WELL TRANSFORMED
			</div>
			<div className="wellliberated">
				WELL LIBERATED
			</div>
			<div className="wellcompensated">
				WELL COMPENSATED
			</div>
			<div className="welloptimized">
				WELL OPTIMIZED
			</div>
			<div className="wellaccumulated">
				WELL ACCUMULATED
			</div>

		</div>
	</div>
		
	
	</div>

	
	
	)
	}
}
export default Scorecard;
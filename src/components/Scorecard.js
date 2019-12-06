import React from 'react'
import './Scorecard.css'
import Slider from '@material-ui/core/Slider';
import info from '../imgs/info.svg'
import close from '../imgs/close.png'
import logo from '../logo.PNG';
import graph1 from '../imgs/graph1.png'
import graph2 from '../imgs/graph2.png'
import ToggleDisplay from 'react-toggle-display';
var Chart = require("chart.js")



class Scorecard extends React.Component {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
		this.wheel_next = this.wheel_next.bind(this);
		this.wheel_prev = this.wheel_prev.bind(this);
		this.si = 0;
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
			slide_index: 0,
			cur_val: 1,
			wivalue: 1,
			wfvalue: 1,
			wtvalue: 1,
			wlvalue: 1,
			wcvalue: 1,
			wovalue: 1,
			wavalue: 1,
			cs_title: "Well Informed",
			showinfo: false,
		}
		
	 }
	sendData(){
	     
         this.props.parentCallback("true");
    }
		
	wheel_next(){
		 var slidetitles = ["Well Informed", "Well Focused", "Well Compensated","Well Accumulated","Well Optimized","Well Liberated","Well Transformed"];
		 this.si=this.si+1;
		 if (this.si>6){
			 this.sendData();
			 this.si=6;
		 }
		 var SlideScoreTitle= document.getElementById("ActTitleScore");
		 SlideScoreTitle.innerHTML = slidetitles[this.si];
		 var i = 0;
		 while (i < 7){
		 	
			this.chart.data.datasets[0].borderWidth[i]=2;
			i= i+1;
		 }
		 
		 this.chart.data.datasets[0].borderWidth[this.si]=3;
		 this.chart.update();
		 
		 var cs_name="";
		
			switch(this.si){
				case 0:
					cs_name="wivalue";
					break;
				case 1:
					cs_name="wfvalue";
					break;
				case 2:
					cs_name="wtvalue";
					break;
				case 3:
					cs_name="wlvalue";
					break;
				case 4:
					cs_name="wcvalue";
					break;
				case 5:
					cs_name="wovalue";
					break;
				case 6:
					cs_name="wavalue";
					break;
			}
		 var cur_score= eval('this.state.'+cs_name);
		 this.setState({ cur_val: cur_score });
		 switch(cur_score){
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
  					});
					/*console.log(this.state.slide_index);*/
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
  					});
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
  					});
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
  					});
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
  					});
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
  					});
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
  					});
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
  					});
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
  					});
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
  					});
					break;
			}
		
	
	 }
	
	wheel_prev(){
		 var slidetitles = ["Well Informed", "Well Focused", "Well Compensated","Well Accumulated","Well Optimized","Well Liberated","Well Transformed"];
		 this.si=this.si-1;
		 if (this.si<0){
			 this.si=0;
	     }
		var i = 0;
		 while (i < 7){
			
			this.chart.data.datasets[0].borderWidth[i]=2;
			i= i+1;
		 }
		 
		 this.chart.data.datasets[0].borderWidth[this.si]=3;
		 this.chart.update();
		
		var cs_name="";
		
		switch(this.si){
			case 0:
				cs_name="wivalue";
				break;
			case 1:
				cs_name="wfvalue";
				break;
			case 2:
				cs_name="wtvalue";
				break;
			case 3:
				cs_name="wlvalue";
				break;
			case 4:
				cs_name="wcvalue";
				break;
			case 5:
				cs_name="wovalue";
				break;
			case 6:
				cs_name="wavalue";
				break;
		}
		
		
		 var SlideScoreTitle= document.getElementById("ActTitleScore");
		 SlideScoreTitle.innerHTML = slidetitles[this.si];
		 
		 /*this.setState({ cur_val: [this.state.cs_name]});*/
		
		 var cur_score= eval('this.state.'+cs_name);
		 this.setState({ cur_val: cur_score });
		 switch(cur_score){
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
  					});
					/*console.log(this.state.slide_index);*/
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
  					});
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
  					});
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
  					});
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
  					});
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
  					});
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
  					});
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
  					});
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
  					});
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
  					});
					break;
			}

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
					borderWidth: [3,2,2,2,2,2,2,2],
				}]
			},
			options:{
				labels: {
					render: 'label'
					},
				legend: {
					display: false
					},
				segmentShowStroke: false,
				tooltips:{enabled: false},
				hover: {mode: null},
				responsive:true,
				animation: false,
				cutoutPercentage: 30,
				rotation: (-0.5 * Math.PI) - (25/180 * Math.PI)
				}
			});
		  
		  }
    displayInfo(){
			this.setState({
      			showinfo: !this.state.showinfo
    		});
	} 	
	
	handleChange(event, newValue){
			var cs_name="";
			var description = document.getElementById("act-description");
			var act_desc_list=["This is the very detalied all wel comiled phrasing for the first of the Flourish! Activators. At this level you understand the key ides and goals. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque This will be the text descripton for well informed level 1.","This is the very detalied all wel comiled phrasing for the first of the Flourish! Activators. At this level you understand the key ides and goals. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque This will be the text descripton for well informed level 2.","This is the very detalied all wel comiled phrasing for the first of the Flourish! Activators. At this level you understand the key ides and goals. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque This will be the text descripton for well informed level 3.","This is the very detalied all wel comiled phrasing for the first of the Flourish! Activators. At this level you understand the key ides and goals. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque This will be the text descripton for well informed level 4.","This is the very detalied all wel comiled phrasing for the first of the Flourish! Activators. At this level you understand the key ides and goals. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque This will be the text descripton for well informed level 5.","This is the very detalied all wel comiled phrasing for the first of the Flourish! Activators. At this level you understand the key ides and goals. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque This will be the text descripton for well informed level 6.","This is the very detalied all wel comiled phrasing for the first of the Flourish! Activators. At this level you understand the key ides and goals. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque This will be the text descripton for well informed level 7.","This is the very detalied all wel comiled phrasing for the first of the Flourish! Activators. At this level you understand the key ides and goals. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque This will be the text descripton for well informed level 8.","This is the very detalied all wel comiled phrasing for the first of the Flourish! Activators. At this level you understand the key ides and goals. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque This will be the text descripton for well informed level 9.","This is the very detalied all wel comiled phrasing for the first of the Flourish! Activators. At this level you understand the key ides and goals. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque This will be the text descripton for well informed level 10."];
		
			switch(this.si){
				case 0:
					cs_name="wivalue";
					break;
				case 1:
					cs_name="wfvalue";
					break;
				case 2:
					cs_name="wtvalue";
					break;
				case 3:
					cs_name="wlvalue";
					break;
				case 4:
					cs_name="wcvalue";
					break;
				case 5:
					cs_name="wovalue";
					break;
				case 6:
					cs_name="wavalue";
					break;
			}
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
  					});
					this.setState({ [cs_name]: newValue });
					this.setState({ cur_val: 1 });
					description.innerHTML=act_desc_list[newValue-1];
					
					/*console.log(this.state.slide_index);*/
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
  					});
					this.setState({ [cs_name]: newValue });
					description.innerHTML=act_desc_list[newValue-1];
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
  					});
					this.setState({ [cs_name]: newValue });
					description.innerHTML=act_desc_list[newValue-1];
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
  					});
					this.setState({ [cs_name]: newValue });
					description.innerHTML=act_desc_list[newValue-1];
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
  					});
					this.setState({ [cs_name]: newValue });
					description.innerHTML=act_desc_list[newValue-1];
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
  					});
					this.setState({ [cs_name]: newValue });
					description.innerHTML=act_desc_list[newValue-1];
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
  					});
					this.setState({ [cs_name]: newValue });
					description.innerHTML=act_desc_list[newValue-1];
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
  					});
					this.setState({ [cs_name]: newValue });
					description.innerHTML=act_desc_list[newValue-1];
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
  					});
					this.setState({ [cs_name]: newValue });
					description.innerHTML=act_desc_list[newValue-1];
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
  					});
					this.setState({ [cs_name]: newValue });
					description.innerHTML=act_desc_list[newValue-1];
					break;
			}
			this.setState({ cur_val: newValue });
    		
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
			
			this.chart.data.datasets[0].backgroundColor[this.si]=color_out;
			
			
			
			this.chart.update();
			
  		};
	render() {
	
		
	return(
	<div className="scorecard_container">
	<ToggleDisplay show={this.state.showinfo}>
		
		<div className="info_section" id="infosect">
		<div className="info-icon">
					<img src={close} alt="close" className="close-icon" onClick={ () => this.displayInfo() } />
		</div>
		
			<div className="col-md-12">
			<div className="row">
				<div className="col-md-2">
					<img className="logo" alt="logo" src={logo} height='120px'/>
				</div>
				<div className="col-md-10 help-header">
				Maybe some text over here
				</div>
			</div>
			<div className="row">
				<div className="col-md-8">
					<img className="graph" alt="logo" src={graph1} height='200px'/>
				</div>
				<div className="col-md-4">
				A tile for the graph perchance
				</div>
			</div>
			<div className="row">
				<div className="col-md-2">
				A second logo
				</div>
				<div className="col-md-10">
				A second text logo description
				</div>
			</div>
			<div className="row">
				<div className="col-md-8">
				<img className="graph" alt="logo" src={graph2} height='170px'/>
				</div>
				<div className="col-md-4">
				And some more graph descption
				</div>
			</div>
		</div>
		</div>
	</ToggleDisplay>
	<div className="row">
		<div className="col-6 control_container">
		    <div className="instructions">
		    <h5>Begin by rating yourself from 1 to 10, using the text associated with each rating number as a guide, that best describes your current rating for the Flourish! Activator. Click on the blue information icon for more details.</h5>
			</div>
			<div className="row">
				<div className="CurSlice_control" id="ActTitleScore">
					Well Informed
				</div>
				<div className="info-icon">
					<img src={info} alt="info" className="info-icon" onClick={ () => this.displayInfo() } />
				</div>
			</div>
			<div className="control_box">
				<div className="act-description" id="act-description">
					 This is the very detalied all wel comiled phrasing for the first of the Flourish! Activators. At this level you understand the key ides and goals. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque This will be the text descripton for well informed level 1.
				</div>
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
							value={this.state.cur_val}
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
		
									 <input type="submit" className="previous" onClick={this.wheel_prev} value="Previous"></input>
						  </div>


						  <div className="col-1 next_btn_container">
									 <input type="submit" className="Next1" onClick={this.wheel_next} value="Next"></input>
						  </div>

						</div>
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
			<div className="wellcompensated">
				WELL COMPENSATED
			</div>
			<div className="wellaccumulated">
				WELL ACCUMULATED
			</div>
			<div className="welloptimized">
				WELL OPTIMIZED
			</div>
			<div className="wellliberated">
				WELL LIBERATED
			</div>
			<div className="welltransformed">
				WELL TRANSFORMED
			</div>

		</div>
	</div>
		
	
	</div>

	
	
	)
	}
}
export default Scorecard;
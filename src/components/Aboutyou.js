import React from 'react'
import './Aboutyou.css'
import Slider from '@material-ui/core/Slider';


class Aboutyou extends React.Component {

constructor(props){
     super(props);
     
   }
sendData = (event) => {
	     event.preventDefault();
         this.props.parentCallback("true");
    }



render() {
	function valuetext(value) {
	  return `${value}°C`;
	}
	const marks_pension = [
	  {
		value: 0,
		label: '$0',
	  },
	  {
		value: 100000,
		label: '$100,000',
	  },
	  {
		value: 200000,
		label: '$100,000',
	  },
	  {
		value: 300000,
		label: '$100,000',
	  },
	  {
		value: 400000,
		label: '$400,000',
	  },
	  {
		value: 500000,
		label: '$500,000',
	  },
	];
	return(
	<div className="aboutyou_container">
	<div className="col-4 form_box">
		<div className="form-head-text">
					<h2>Congratulations on completing your Flourish! Wheel.</h2>
		</div>
		<div className="about_you_sub">
		Only a few more questions to you complete your Flourish! Scorecard analysis.
		</div>
		<div className="col-md-12 about-you-form">
			<div className="row">
				<div className="col-md-1 form_num">
		 		1
				</div>
				<div className="col-md-11 question">
				What is the approximate vlaue of working assets (invetment accounts, retirement account, savings accounts) you have already accumulated towards your long term financial security?
				</div>
			</div>
			<div className="row">
				<div className="col-md-1">
				</div>
				<div className="col-md-11 slider_cont">
				<Slider className="slide "
					defaultValue={20}
					color="primary"
					getAriaValueText={valuetext}
					aria-labelledby="discrete-slider"
					valueLabelDisplay="auto"
					step={10}
					marks
					min={10}
					max={110}
				  />
				</div>
			</div>
			<div className="row">
				<div className="col-md-1 form_num">
				2
				</div>
				<div className="col-md-11 question">
				What is the desired total annual spendign amount you would like to have, net of (after) taxes, available to maintain your desired standard of living? For our anaylis this amoutn will be rounded up 25% for taxes.
				</div>
			</div>
			<div className="row">
				<div className="col-md-1">
				</div>
				<div className="col-md-11 slider_cont">
				<Slider className="slide"
					defaultValue={20}
					color="primary"
					getAriaValueText={valuetext}
					aria-labelledby="discrete-slider"
					valueLabelDisplay="auto"
					step={10}
					marks
					min={10}
					max={110}
				  />
				</div>
			</div>
			<div className="row">
				<div className="col-md-1 form_num">
				3
				</div>
				<div className="col-md-11 question">
				Want to include social security income as one of your resources? (If so provide current age and pick a few ranges of average annual income in the last ten years):
				</div>
			</div>
			<div className="row age_sect">
				<div className="col-md-1">
				
				</div>
				<div className="col-md-2 inp_des">
				Current Age:
				</div>
				<div className="col-md-3">
				<input type="text" name="Name" className="age_in" id="in1" required></input>
				</div>
			</div>
			<div className="row social_in_modal">
				<div className="col-md-1">
				</div>
				<div className="col-md-2 social_md_desc">
				under $29,000
					<div className="col-12">
						<input type="radio" className="social-radio" name="gender" value="male"/>
					</div>
				</div>
				<div className="col-md-2 social_md_desc">
				$30,000 to $49,000
					<div className="col-12">
						<input type="radio" className="social-radio" name="gender" value="male"/>
					</div>
				</div>
				<div className="col-md-2 social_md_desc">
				$50,000 to $99,909
					<div className="col-12">
						<input type="radio" className="social-radio" name="gender" value="male"/>
					</div>
				</div>
				<div className="col-md-3 social_md_desc">
				$100,000 to $250,000
					<div className="col-12">
						<input type="radio" className="social-radio" name="gender" value="male"/>
					</div>
				</div>
				<div className="col-md-2 social_md_desc last_social">
				$250,000 or more
					<div className="col-12">
						<input type="radio" className="social-radio" name="gender" value="male"/>
					</div>
				</div>
			</div>
			
			<div className="row">
				<div className="col-md-1 form_num">
				4
				</div>
				<div className="col-md-11 question">
				Would you like to include any pension benefits you qualify for at age 65 or more? if Yes, what is the approximate annual pension benefits you will recieve at age 65 or more?
				</div>
			</div>
			<div className="row">
				<div className="col-md-1">
				</div>
				<div className="col-md-11 slider_cont">
				
					
				<Slider className="slide"
					defaultValue={20}
					color="primary"
					getAriaValueText={valuetext}
					aria-labelledby="discrete-slider"
					valueLabelDisplay="auto"
					step={25000}
					marks={marks_pension}
					min={0}
					max={500000}
				  />
				</div>
			</div>
			
		</div>
		<input type="submit" className="fin_btn" value="Flourish!"></input>
		
		</div>
		</div>

	
	
	)
	
}
}
export default Aboutyou;
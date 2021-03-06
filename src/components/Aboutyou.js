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
	
	const marks_pension = [
	  {
		value: 0,
		label: '$0',
	  },
	  {
		value: 100000,
		label: '$100 K',
	  },
	  {
		value: 200000,
		label: '$200 K',
	  },
	  {
		value: 300000,
		label: '$300 K',
	  },
	  {
		value: 400000,
		label: '$400 K',
	  },
	  {
		value: 500000,
		label: '$500 K',
	  },
	];
	return(
	<div className="aboutyou_container ">
	<div className="col-4 form_box">
		<div className="form-head-text">
					Congratulations! {this.props.user_name}
		</div>
		
		<div className="about_you_sub">
		 You have completed your Flourish! Wheel and now there are only a few more questions till you complete your Flourish! Scorecard analysis.
		</div>
		<div className="col-12 about-you-form">
			<div className="question_card">
				<div className="row">
					<div className="form_circle">
						<div className="col-1 form_num">
						1
						</div>
					</div>
					<div className="col-11 question">
					What is the approximate vlaue of working assets (invetment accounts, retirement account, savings accounts) you have already accumulated towards your long term financial security?
					</div>
				</div>
				<div className="row">
					<div className="col-1">
					</div>
					<div className="col-11 slider_one">
						<Slider className="slide"
							defaultValue={0}
							color="primary"
							step={50000}
							marks={marks_pension}
							min={0}
							max={500000}
					  	/>
					</div>
				</div>
			</div>
	
			<div className="question_card">
				<div className="row">
					<div className="form_circle">
						<div className="col-1 form_num">
						2
						</div>
					</div>
					<div className="col-11 question">
					What is the desired total annual spendign amount you would like to have, net of (after) taxes, available to maintain your desired standard of living? For our anaylis this amoutn will be rounded up 25% for taxes.
					</div>
				</div>
				<div className="row">
					<div className="col-1">
					</div>
					<div className="col-11 slider_one">
						<Slider className="slide"
							defaultValue={0}
							color="primary"
							step={50000}
							marks={marks_pension}
							min={0}
							max={500000}
					  	/>
					</div>
				</div>
			</div>
			
			<div className="question_card">
				<div className="row">
					<div className="form_circle">
						<div className="col-1 form_num">
						3
						</div>
					</div>
					<div className="col-11 question">
					Want to include social security income as one of your resources? (If so provide current age and pick a few ranges of average annual income in the last ten years):
					</div>
				</div>
				<div className="row age_sect">
					<div className="col-1">

					</div>
					<div className="col-2 inp_des">
					Current Age:
					</div>
					<div className="col-3">
					<input type="text" name="Name" className="age_in" id="in1" required></input>
					</div>
				</div>
				<div className="row social_in_modal modal_3">
					<div className="col-1">
					</div>
					<div className="col-2 social_md_desc one_rad">
					under $29,000
						<div className="col-12">
							<input type="radio" className="social-radio" name="gender" value="male"/>
						</div>
					</div>
					<div className="col-2 social_md_desc two_rad">
					$30,000 to $49,000
						<div className="col-12">
							<input type="radio" className="social-radio" name="gender" value="male"/>
						</div>
					</div>
					<div className="col-2 social_md_desc three_rad">
					$50,000 to $99,909
						<div className="col-12">
							<input type="radio" className="social-radio" name="gender" value="male"/>
						</div>
					</div>
					<div className="col-3 social_md_desc four_rad">
					$100,000 to $250,000
						<div className="col-12">
							<input type="radio" className="social-radio" name="gender" value="male"/>
						</div>
					</div>
					<div className="col-2 social_md_desc last_social five_rad">
					$250,000 or more
						<div className="col-12">
							<input type="radio" className="social-radio" name="gender" value="male"/>
						</div>
					</div>
				</div>
			</div>
			<div className="question_card">
				<div className="row">
					<div className="form_circle">
						<div className="col-1 form_num">
						4
						</div>
					</div>
					<div className="col-11 question">
					Would you like to include any pension benefits you qualify for at age 65 or more? if Yes, what is the approximate annual pension benefits you will recieve at age 65 or more?
					</div>
				</div>
				<div className="row">
					<div className="col-1">
					</div>
					<div className="col-11 slider_one">
						<Slider className="slide"
							defaultValue={0}
							color="primary"
							step={50000}
							marks={marks_pension}
							min={0}
							max={500000}
					  	/>
					</div>
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
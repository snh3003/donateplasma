import React from 'react';
import undraw from "../assets/undraw.png";
import './NewDonor.css';

class NewDonor extends React.Component {

	constructor(){
		super();
		this.state={
			isChecked: true,
			fullName: '',
			age: null,
			bloodGroup: '',
			phone: null,
			location: ''
		}
		this.handleChange = this.handleChange.bind(this);
	}
	handleChange(event){
		const {name, value, type, checked} = event.target;
		type === "checkbox" ? this.setState({
			[name]: checked
		})

		: this.setState({
			[name] : value
		})
		
	}
	render(){
		return (
		<div>
			<center>
				<h2>Be a donor </h2>
				<br />
				<img src={undraw} alt="heart" width="100px" height="100px"/>
				<br />
				<br />
						
			<div className="input_box card">
				<center>
					<br />
					<form className="ui form">
					  <div className="field">
					    <label>Name</label>
					    <input type="text" name="fullName" placeholder="Full Name" />
					  </div>
					  <div className="field">
					    <label>Blood group</label>
					    <input type="text" name="bloodGroup" placeholder="Blood group" />
					  </div>
					  <div className="field">
					    <label>Age</label>
					    <input type="number" name="age" placeholder="Age" />
					  </div>
					  <div className="field">
					    <label>Phone Number</label>
					    <input type="number" name="phone" placeholder="Phone Number" />
					  </div>
					  <div className="field">
					    <label>Location</label>
					    <input type="text" name="location" placeholder="Location" />
					  </div>
					  <div className="field">
					    <div className="ui checkbox">
					      <input 
					      	type="checkbox" 
					      	 
					      	name="isChecked" 
					      	onChange = {this.handleChange} 
					      	checked={this.state.isChecked} 
					      />
					      <label>I agree to the Terms and Conditions</label>
					    </div>
					  </div>

					  <button 
					  	className="ui button" 
					  	type="submit"
					  	onClick={() => console.log(this.state)}
					  >Submit</button>
					</form>
					<br />
				</center>						
			</div></center>
			<br />
			<br />
		</div>
		
	)	
	}
	
}
export default NewDonor;
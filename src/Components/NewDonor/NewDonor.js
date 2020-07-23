import React from 'react';
import undraw from "../assets/undraw.png";
import './NewDonor.css';

const NewDonor = () => {
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
					<form class="ui form">
					  <div class="field">
					    <label>Name</label>
					    <input type="text" name="full-name" placeholder="Full Name" />
					  </div>
					  <div class="field">
					    <label>Blood group</label>
					    <input type="text" name="blood-group" placeholder="Blood group" />
					  </div>
					  <div class="field">
					    <label>Age</label>
					    <input type="number" name="age" placeholder="Age" />
					  </div>
					  <div class="field">
					    <label>Phone Number</label>
					    <input type="number" name="phone" placeholder="Phone Number" />
					  </div>
					  <div class="field">
					    <label>Location</label>
					    <input type="text" name="location" placeholder="Location" />
					  </div>
					  <div class="field">
					    <div class="ui checkbox">
					      <input type="checkbox" tabindex="0" class="hidden" />
					      <label>I agree to the Terms and Conditions</label>
					    </div>
					  </div>
					  <button class="ui button" type="submit">Submit</button>
					</form>
					<br />
				</center>						
			</div></center>
			<br />
			<br />
		</div>
		
	)
}
export default NewDonor;
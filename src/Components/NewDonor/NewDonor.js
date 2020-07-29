import React from 'react';
import undraw from "../assets/undraw.png";
import styles from './NewDonor.module.css';

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
		<div className={styles.parent}>
			<center>
				<h2>Be a donor </h2>
				<br />
				<img src={undraw} alt="heart" width="100px" height="100px"/>
				
			</center>			
			<div className={styles.container}>  
				<form className={styles.contact}>
					<fieldset>
						<input name="name" placeholder="Your name" type="text" required autofocus/>
					</fieldset>
					<fieldset>
						<input name="email" placeholder="Your Email Address" type="email" required/>
					</fieldset>
					<fieldset>
						<input name="age" placeholder="Your current age" type="text" required/>
					</fieldset>
					<fieldset>
						<input name="bloodGroup" placeholder="Your blood group" type="text" required/>
					</fieldset>
					<fieldset>
						<input name="phoneNo" placeholder="Your Phone Number" type="tel" required/>
					</fieldset>
					<fieldset>
						<input name="location" placeholder="Your location" type="text" required/>
					</fieldset>
					<input 
					    type="checkbox"   	 
					    name="isChecked" 
					  	onChange = {this.handleChange} 
				      	checked={this.state.isChecked} 
				      />
				    <label>I agree to the Terms and Conditions</label>
					<fieldset>
						<button name="submit" type="submit" id="contact-submit" onClick={() => console.log(this.state)}>Submit</button>
					</fieldset>
				</form>
			</div>	
		</div>
		
		
	)	
	}
	
}
export default NewDonor;
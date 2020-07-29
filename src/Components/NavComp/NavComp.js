import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './NavComp.css';

class NavComp extends React.Component {

	render(){
		return (
		<div>
			<Navbar expand="lg" bg="dark" variant="dark" >
				<Navbar.Brand href="#">
				<img alt=""
					src="https://img.icons8.com/color/96/000000/coronavirus.png"
					width='40px' height='40px'
				/>
				Plasma Donor
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					
					<Nav className="ml-auto">
						<Nav.Item>

							<img 
								alt=""
								src="https://img.icons8.com/color/48/000000/home-page.png"
								width='25px' height='25px'
							/>
						    <label>
						    	<Nav.Link href="/donateplasma/">
									Home
								</Nav.Link>
						    </label>
													 
						</Nav.Item>
						<Nav.Item>
							<img alt=""
						      src="https://img.icons8.com/doodle/48/000000/winged-heart.png"
						      width='25px' height='25px'
						       />
							<label>
						    	<Nav.Link href="/donateplasma/donors/">
									Find Donors
								</Nav.Link>
						    </label>						 
						</Nav.Item>
						<Nav.Item>
							<img alt=""
					    		src="https://img.icons8.com/cotton/64/000000/receive-cash--v3.png"
					    		width='25px' height='25px'
					    	/>
							<label>
						    	<Nav.Link href="/donateplasma/newdonor/">
									Donate plasma
								</Nav.Link>
						    </label>					 
						</Nav.Item>	
						<Nav.Item>
							<img 
								alt=""
					    		src="https://img.icons8.com/dusk/64/000000/heart-health.png"
					    		width='25px' height='25px'
					    	/>
							<label>
						    	<Nav.Link href="/donateplasma/sharestory/">
									Share your story
								</Nav.Link>
						    </label>					 
						</Nav.Item>						
					</Nav>
				</Navbar.Collapse>
			</Navbar>
			
		</div>
	)
	}
}

export default NavComp;
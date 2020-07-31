import React from 'react';
import { Button, Card, Image } from 'semantic-ui-react';
import styles from './Donors.module.css';
import calling from '../assets/calling.svg';
import connect from '../assets/connect.svg';

class Donors extends React.Component {

	render(){
		return (
		<div>
			<center>
			<h2>Find Donors</h2>
			<section  className={styles.donorparent}>
				<div className={styles.rightchild}>
					
					<img alt="call" src={calling} width="300px" height="300px"/>
				</div>
				<main className={styles.midchild}>
					
					<div className={styles.cards}>
						<Card.Group>
						    <Card className={styles.cards}>
						      <Card.Content >
						        <Image
						          floated='right'
						          size='mini'
						          src='https://react.semantic-ui.com/images/avatar/large/steve.jpg'
						        />
						        <Card.Header>Steve Sanders</Card.Header>
						        <Card.Meta>Friends of Elliot</Card.Meta>
						        <Card.Description>
						          Steve wants to add you to the group <strong>best friends</strong>
						        </Card.Description>
						      </Card.Content>
						      <Card.Content extra>
						        <div className='ui two buttons'>
						          <Button basic color='green'>
						            Call
						          </Button>
						          <Button basic color='red'>
						            Email
						          </Button>
						        </div>
						      </Card.Content>
						    </Card>
						    <Card className={styles.cards}>
						      <Card.Content >
						        <Image
						          floated='right'
						          size='mini'
						          src='https://react.semantic-ui.com/images/avatar/large/molly.png'
						        />
						        <Card.Header>Molly Thomas</Card.Header>
						        <Card.Meta>New User</Card.Meta>
						        <Card.Description>
						          Molly wants to add you to the group <strong>musicians</strong>
						        </Card.Description>
						      </Card.Content>
						      <Card.Content extra>
						        <div className='ui two buttons'>
						          <Button basic color='green'>
						            Call
						          </Button>
						          <Button basic color='red'>
						            Email
						          </Button>
						        </div>
						      </Card.Content>
						    </Card>
						    <Card  className="cards">
						      <Card.Content>
						        <Image
						          floated='right'
						          size='mini'
						          src='https://react.semantic-ui.com/images/avatar/large/jenny.jpg'
						        />
						        <Card.Header>Jenny Lawrence</Card.Header>
						        <Card.Meta>New User</Card.Meta>
						        <Card.Description>
						          Jenny requested permission to view your contact details
						        </Card.Description>
						      </Card.Content>
						      <Card.Content extra>
						        <div className='ui two buttons'>
						          <Button basic color='green'>
						            Call
						          </Button>
						          <Button basic color='red'>
						            Email
						          </Button>
						        </div>
						      </Card.Content>
						    </Card>
						    <Card  className={styles.cards}>
						      <Card.Content>
						        <Image
						          floated='right'
						          size='mini'
						          src='https://react.semantic-ui.com/images/avatar/large/jenny.jpg'
						        />
						        <Card.Header>Jenny Lawrence</Card.Header>
						        <Card.Meta>New User</Card.Meta>
						        <Card.Description>
						          Jenny requested permission to view your contact details
						        </Card.Description>
						      </Card.Content>
						      <Card.Content extra>
						        <div className='ui two buttons'>
						          <Button basic color='green'>
						            Call
						          </Button>
						          <Button basic color='red'>
						            Email
						          </Button>
						        </div>
						      </Card.Content>
						    </Card>
						    <Card className={styles.cards}>
						      <Card.Content>
						        <Image
						          floated='right'
						          size='mini'
						          src='https://react.semantic-ui.com/images/avatar/large/jenny.jpg'
						        />
						        <Card.Header>Jenny Lawrence</Card.Header>
						        <Card.Meta>New User</Card.Meta>
						        <Card.Description>
						          Jenny requested permission to view your contact details
						        </Card.Description>
						      </Card.Content>
						      <Card.Content extra>
						        <div className='ui two buttons'>
						          <Button basic color='green'>
						            Call
						          </Button>
						          <Button basic color='red'>
						            Email
						          </Button>
						        </div>
						      </Card.Content>
						    </Card>
						    <Card className={styles.cards}>
						      <Card.Content>
						        <Image
						          floated='right'
						          size='mini'
						          src='https://react.semantic-ui.com/images/avatar/large/molly.png'
						        />
						        <Card.Header>Molly Thomas</Card.Header>
						        <Card.Meta>New User</Card.Meta>
						        <Card.Description>
						          Molly wants to add you to the group <strong>musicians</strong>
						        </Card.Description>
						      </Card.Content>
						      <Card.Content extra>
						        <div className='ui two buttons'>
						          <Button basic color='green'>
						            Call
						          </Button>
						          <Button basic color='red'>
						            Email
						          </Button>
						        </div>
						      </Card.Content>
						    </Card>
						    
						    <Card className={styles.cards}>
						      <Card.Content>
						        <Image
						          floated='right'
						          size='mini'
						          src='https://react.semantic-ui.com/images/avatar/large/molly.png'
						        />
						        <Card.Header>Molly Thomas</Card.Header>
						        <Card.Meta>New User</Card.Meta>
						        <Card.Description>
						          Molly wants to add you to the group <strong>musicians</strong>
						        </Card.Description>
						      </Card.Content>
						      <Card.Content extra>
						        <div className='ui two buttons'>
						          <Button basic color='green'>
						            Call
						          </Button>
						          <Button basic color='red'>
						            Email
						          </Button>
						        </div>
						      </Card.Content>
						    </Card>
						  </Card.Group>
					</div>
				</main>
				<div className={styles.leftchild}>					
					<img alt="connect" src={connect} width="300px" height="300px"/>
				</div>
			</section>
			</center>
		</div>
		)
	}	
}
export default Donors;
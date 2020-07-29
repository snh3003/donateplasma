import React from 'react';
import {
    Button,
    Container,
    Grid,
    Header,
    Image,
    Responsive,
    Segment,
  } from 'semantic-ui-react'
import styles from './TopSec.module.css';
import covid from '../assets/covid.jpg';
import covid2 from '../assets/covid2.jpg';


export const TopSec = () => {
    return (
        <div>
            <img className={styles.image} alt="" src={covid} />
            <Responsive>
                <Segment style={{ padding: '8em 0em' }} vertical>
                    <Grid container stackable verticalAlign='middle'>
                        <Grid.Row>
                        <Grid.Column width={8}>
                            <Header as='h3' style={{ fontSize: '2em' }}>
                            We Help Companies and Companions
                            </Header>
                            <p style={{ fontSize: '1.33em' }}>
                            We can give your company superpowers to do things that they never thought possible.
                            Let us delight your customers and empower your needs... through pure data analytics.
                            </p>
                            <Header as='h3' style={{ fontSize: '2em' }}>
                            We Make Bananas That Can Dance
                            </Header>
                            <p style={{ fontSize: '1.33em' }}>
                            Yes that's right, you thought it was the stuff of dreams, but even bananas can be
                            bioengineered.
                            </p>
                        </Grid.Column>
                        <Grid.Column floated='right' width={6}>
                            <Image bordered rounded size='large' src={covid2} />
                        </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Segment>
            </Responsive>
        </div>
    )
}
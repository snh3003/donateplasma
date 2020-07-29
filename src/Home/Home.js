import React from 'react';
import styles from './Home.module.css';
import { Cards, Chart, CountryPicker } from '../Components';
import { fetchData } from '../Components/api';

class Home extends React.Component{

  constructor(){
    super();
    this.state={
      data:{},
      country: ''
    }
  }

  async componentDidMount(){
    const fetchedData = await fetchData();
    this.setState({
      data: fetchedData
    })
  }
  handleCountryChange = async (country) => {
    //fetch the data
    const fetchedData = await fetchData(country);
    this.setState({
      data: fetchedData,
      country: country
    })
    
  }

  render(){
    const { data, country } = this.state;
    return (
      <section>
        <div className={styles.top}>

          <h1>Health Care</h1>

        </div>
        <div className={styles.container}>
          <img className={styles.image} alt="" src='https://i.ibb.co/7QpKsCX/image.png'/>
          <Cards data={data} />
          <CountryPicker handleCountryChange={this.handleCountryChange}/>
          <Chart data={data} country={country}/>
        </div>
      </section>
      
    );
  }

  
}

export default Home;

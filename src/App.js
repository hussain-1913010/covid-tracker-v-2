import React from 'react';
import'./App.css';
// import Cards from './components/Cards/Cards';
// import Charts from './components/Charts/Charts';
// import CountryPicker from './components/CountryPicker/CountryPicker';
import { Cards, Charts, CountryPicker } from "./components";
// go and check index.js in components for understanding this
// import styles from './App.css';
// {styles.container} this can be used in class components.. but need naming css file as App.module.css
// for handling asynchronous data transition, it is easier to used when its class bases component
import {fetchData} from './api';
import img from './../src/img/image.png';



class App extends React.Component {
 
  state = {
    data: {},
    country: '',
  }



  async componentDidMount() {
    const fetchedData = await fetchData();

    this.setState({ data: fetchedData});
  }
   // we need to get data and send to components, for this we need to get out the data from componentdidMount scope. so defining a state. Constructor can be used in state .. but no really need. State should be used in the top of component. 

   handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    console.log(fetchedData);
    this.setState({ data: fetchedData, country: country});
  }

  render(){
    const { data, country } = this.state;
    // to distructure data from state. as we are sending this in cards. as prop
    return (
      <div className="container">
        <img src={img} alt="covid" className="image"/>
        <Cards data={data}/>
        <CountryPicker handleCountryChange={this.handleCountryChange}/>
        <Charts data={data} country={country}/>
      </div>
    );
  }
}

export default App;

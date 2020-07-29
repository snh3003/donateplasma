import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavComp from './Components/NavComp/NavComp';
import Home from './Home/Home';
import Donors from './Components/Donors/Donors';
import NewDonor from './Components/NewDonor/NewDonor';
import ShareStory from './Components/ShareStory/ShareStory';
import styles from './App.module.css';

const App = () => {
  return (
    <div>
      <NavComp />
      <Router>
      	<Switch>
	      	<Route exact path="/donateplasma/" component={Home} />
	      	<Route path="/donateplasma/donors/" component={Donors} />
	      	<Route path="/donateplasma/newdonor/" component={NewDonor} />
	      	<Route path="/donateplasma/sharestory/" component={ShareStory} />
	    </Switch>
      
      </Router>
      
      
    </div>
  );
}

export default App;

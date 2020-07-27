import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavComp from './Components/NavComp';
import Slider from './Components/Slider';
import Donors from './Components/Donors/Donors';
import NewDonor from './Components/NewDonor/NewDonor';
import ShareStory from './Components/ShareStory/ShareStory';
import './App.css';

const App = () => {
  return (
    <div className="bodyImg">
      <NavComp />
      <Router>
      	<Switch>
	      	<Route exact path="/donateplasma/" component={Slider} />
	      	<Route path="/donateplasma/donors/" component={Donors} />
	      	<Route path="/donateplasma/newdonor/" component={NewDonor} />
	      	<Route path="/donateplasma/sharestory/" component={ShareStory} />
	    </Switch>
      </Router>
      
      
    </div>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavComp from './Components/NavComp';
import Slider from './Components/Slider';
import Donors from './Components/Donors/Donors';
import NewDonor from './Components/NewDonor/NewDonor';
import ShareStory from './Components/ShareStory/ShareStory';

const App = () => {
  return (
    <div>
      <NavComp />
      <Router>
      	<Switch>
	      	<Route exact path="/donateplasma" component={Slider} />
	      	<Route path="/donors" component={Donors} />
	      	<Route path="/newdonor" component={NewDonor} />
	      	<Route path="/sharestory" component={ShareStory} />
	    </Switch>
      </Router>
      
      
    </div>
  );
}

export default App;

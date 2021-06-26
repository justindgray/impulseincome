import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

//236 Routes//
import Display236a from './236/236a';
import Display236b from './236/236b';
import BrandBuilder236 from './236/236bb';
import Dashboard236 from './236/236dash';

//031 Routes//
import BrandBuilder031 from './031/031bb';
import Display031a from './031/031a';
import Display031b from './031/031b';
import Dashboard031 from './031/031dash';

const App = () => {

  return (
        <Fragment>
          <Router>
          <Route path='/236/1' exact component ={Display236a} />
          <Route path='/236/2' exact component ={Display236b} />  
          <Route path='/236/bb' exact component ={BrandBuilder236} /> 
          <Route path='/236/dashboard' exact component ={Dashboard236} />  
          <Route path='/031/1' exact component ={Display031a} />   
          <Route path='/031/2' exact component ={Display031b} />  
          <Route path='/031/bb' exact component ={BrandBuilder031} />   
          <Route path='/031/dashboard' exact component ={Dashboard031} />     
          </Router>
        </Fragment>
  );
};

export default App;
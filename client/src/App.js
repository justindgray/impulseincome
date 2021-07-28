import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Landing from './components/Landing';
import Test from './031/test';
import Testscan from './031/testscan';
import Form from './components/Form';

//236 Routes//
import Display236a from './236/236a';
import BrandBuilder236 from './236/236bb';
import Dashboard236 from './236/236dash';
import Scan236 from '../src/236/236scan';
import Edit236 from '../src/236/236edit';
import ServicesBB from '../src/236/ServicesBB';


//031 Routes//
import BrandBuilder031 from './031/031bb';
import Display031a from './031/031a';
import Dashboard031 from './031/031dash';
import Scan031 from './031/031scan';

const App = () => {

  return (
        <Fragment>
          <Router>
          <Route path='/form' exact component ={Form} />
          <Route path='/' exact component ={Landing} />
          <Route path='/test' exact component ={Test} />
          <Route path='/testscan' exact component ={Testscan} />


          <Route path='/236/1' exact component ={Display236a} />
          <Route path='/236/bb' exact component ={BrandBuilder236} /> 
          <Route path='/236/dashboard' exact component ={Dashboard236} />
          <Route path='/236/scan' exact component ={Scan236} />
          <Route path='/236/edit' exact component ={Edit236} />
          <Route path='/236/services' exact component={ServicesBB} />


          <Route path='/031/1' exact component ={Display031a} />   
          <Route path='/031/bb' exact component ={BrandBuilder031} />   
          <Route path='/031/dashboard' exact component ={Dashboard031} />   
          <Route path='/031/scan' exact component ={Scan031} />  
          </Router>
        </Fragment>
  );
};

export default App;
import React, { Component, Fragment } from 'react'
import BarcodeReader from 'react-barcode-reader'
import axios from 'axios';
import { Link } from 'react-router-dom';

import { Button } from '@material-ui/core';

import '../components/css/styles.css';
 
class Edit236 extends Component {
  constructor(props){
    super(props)
    this.state = {
      result: 'No result',
    }
 
    this.handleScan = this.handleScan.bind(this)
  }
  handleScan(data){
    this.setState({
      result: data,
    })
    console.log(data);

    axios.put(`http://107.191.45.141:5000/236/display1/inc/${data}`),
    axios.put(`http://107.191.45.141:5000/236/display2/inc/${data}`)
  }


  handleError(err){
    console.error(err)
  }
  render(){
 
    return(
      <>
      <div>

        <BarcodeReader
          onError={this.handleError}
          onScan={this.handleScan}
          minLength={2}
          />
            <span className="landing-inner"><h2>Edit Page</h2></span>
            <span className="landing-inner"><h3>Updated Ticket: {this.state.result}</h3></span>
            <span className="landing-inner"><h1><Link to="/236/scan">Click to Sell</Link></h1></span>
            </div>
          </>
    )
  }
}


export default Edit236;
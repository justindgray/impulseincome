import React, { Component, Fragment } from 'react'
import BarcodeReader from 'react-barcode-reader'
import axios from 'axios';

import '../components/css/styles.css'
 
class Testscan extends Component {
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

    axios.put(`http://localhost:5000/test/updateSize/${data}`)
  }


  handleError(err){
    console.error(err)
  }
  render(){
 
    return(
      <div>
        <BarcodeReader
          onError={this.handleError}
          onScan={this.handleScan}
          minLength={2}
          />
          <div className="landing-inner">
            <p>Last ticket scanned: {this.state.result}</p>
          </div>
          
      </div>

    )
  }
}

export default Testscan;
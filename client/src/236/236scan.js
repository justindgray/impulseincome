import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import BarcodeReader from 'react-barcode-reader'
import axios from 'axios';

import '../components/css/styles.css';  

 
class Scan236 extends Component {
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

    axios.put(`http://107.191.45.141:5000/236/display1/dec/${data}`),
    axios.put(`http://107.191.45.141:5000/236/display2/dec/${data}`)
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
            <span className="landing-inner"><h3>Sales Page</h3></span>
            <span className="landing-inner"><h2>Last ticket scanned: {this.state.result}</h2></span>
            <span className="landing-inner"><h1><Link to="/236/edit">Click to Edit</Link></h1></span>
            </div>
          </>
    )
  }
}


export default Scan236;
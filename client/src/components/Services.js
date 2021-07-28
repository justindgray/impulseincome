import React from 'react'
import ReactPlayer from 'react-player'

import './css/bb.css';

const Services = () => {
      return (
        <div className='player-wrapper'>
          <ReactPlayer
            className='react-player'
            url='https://youtu.be/Rhj4wP9V11Y'
            width="100%"
            height="100%"
            muted='true'
            playing='true'
            loop='true' 
          />
        </div>
      )
    }


export default Services;
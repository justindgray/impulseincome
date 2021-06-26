import React from 'react';
import { Fade } from 'react-slideshow-image';
import './css/styles.css';
import './css/slideshow.css'

const fadeImages = [
  'https://impulseincome.com/031/images/financial-services.png',
  'https://impulseincome.com/031/images/236/autotags.png',
  'https://impulseincome.com/031/images/236/creamy.png',
  'https://impulseincome.com/031/images/236/hours.png',
  'https://impulseincome.com/031/images/236/poppers.png',
  'https://impulseincome.com/031/images/financial-services.png',
  'https://impulseincome.com/031/images/ww2.jpg',
  'https://impulseincome.com/031/images/236/kitchenandtable.png',
  'https://impulseincome.com/031/images/loteria.jpg',
  'https://impulseincome.com/031/images/financial-services.png',
  'https://impulseincome.com/031/images/236/mighty-crust.png',
  'https://impulseincome.com/031/images/236/hours.png',
  'https://impulseincome.com/031/images/financial-services.png',
  'https://impulseincome.com/031/images/Crossword.jpg',
  'https://impulseincome.com/031/images/236/hours.png',
  'https://impulseincome.com/031/images/236/postoak.png',
  'https://impulseincome.com/031/images/financial-services.png',
  'https://impulseincome.com/031/images/50_or_100.jpg',
  'https://impulseincome.com/031/images/financial-services.png',
  'https://impulseincome.com/031/images/236/suncare.png'

];

const Properties = {
  indicators: false,
  autoplay: true,
  arrows: false,
  duration: 9000
}

const Slideshow = () => {
  return (
    <div className="slideshow-container">
      <Fade {...Properties}>
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[0]} />
          </div>
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[1]} />
          </div>
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[2]} />
          </div>
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[3]} />
          </div>
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[4]} />
          </div>
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[5]} />
          </div>
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[6]} />
          </div>
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[7]} />
          </div>
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[8]} />
          </div>
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[9]} />
          </div>
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[10]} />
          </div>
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[11]} />
          </div>
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[12]} />
          </div>
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[13]} />
          </div>
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[14]} />
          </div>
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[15]} />
          </div>
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[16]} />
          </div>
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[17]} />
          </div>
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[18]} />
          </div>
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[19]} />
          </div>
        </div>
      </Fade>
    </div>
  )
}

export default Slideshow;


import React, { useState, useEffect } from 'react';
import BrandBuilders from '../components/BrandBuilders';

import '../components/css/display2.css';
import '../components/css/slideshow.css';

const url = 'http://107.191.45.141:5000/236/display2/';



const BrandBuilder236 = () => {
  const [slots, setSlots] = useState([]);

  const getSlots = async () => {
    const response = await fetch(url);
    const slots = await response.json();
    setSlots(slots);
  };

  useEffect(() => {
    getSlots();

    const interval=setInterval (() => {
      getSlots()
    }, 2000)
    return()=>clearInterval(interval)
  }, []);
  return (
    <div className="grid-container">
    <>
       {slots.map((slot) => {
          const { _id, id, game, size } = slot;
                    return (
     <>
         <div key={_id}>
             <div className="slot">
            <div className="slot">
            <div className="slot"><img src={game} alt="Game not found..."></img></div>
            <div className="slot-id"><p>{id}</p></div>
            <div className="slot-size"><p>Ticket#{size}</p></div>
            </div>
            </div>
            </div>
     </>
          );
        })}
        </>
        <div className="Slideshow"><BrandBuilders /></div>
    </ div>  
  );
};
export default BrandBuilder236;
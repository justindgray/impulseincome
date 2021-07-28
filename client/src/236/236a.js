import React, { useState, useEffect } from 'react';

import '../components/css/display1.css';

const url = 'http://107.191.45.141:5000/236/display1/';



const Display236a = () => {
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
    }, 500)
    return()=>clearInterval(interval)
  }, []);
  return (
    <>
    <div className="container">
       {slots.map((slot) => {
          const { _id, id, game, size } = slot;
                    return (
            <>
            <div key={_id}>
            <div className="slot">
            <div className="slot"><img src={`${process.env.PUBLIC_URL}/cards/${game}.png`} alt="game not found..." /></div>
            <div className="slot-id"><p>{id}</p></div>
            <div className="slot-size"><p>Ticket#{size}</p></div>
            </div>
            </div>
            </>
          );
        })}
    </div>
    </>
  );
};
export default Display236a;

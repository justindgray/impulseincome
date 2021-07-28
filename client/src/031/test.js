import React, { useState, useEffect } from 'react';

import '../components/css/display1.css';

const url = 'http://localhost:5000/test/';



const Test = () => {
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
          const { _id, slot_id, game, size } = slot;
                    return (
            <>
            <div key={_id}>
            <div className="slot">
            <div className="slot"><img src={`${process.env.PUBLIC_URL}/cards/${game}.png`} /></div>
            <div className="slot-id"><p>{slot_id}</p></div>
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
export default Test;

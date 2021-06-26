import React, { useState, useEffect } from 'react';

import '../components/css/display1.css';

const url = 'http://107.191.45.141:5000/031/display1/';



const Display031a = () => {
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
    <>
    <div className="container">
       {slots.map((slot) => {
          const { _id, id, game, size } = slot;
                    return (
            <>
            <div key={_id}>
            <div className="slot">
            <div className="slot"><img src={game} alt="Game not found..."></img></div>
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
export default Display031a;

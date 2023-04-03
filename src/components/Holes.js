import React from "react";

export default function Holes({ holesarray, hammer, handleClick }) {
  return (
    <div className="hole-container">
      {holesarray.map((val, i) => {
        if (val === 0) {
          return <div className={`hole ${hammer}`} key={i}></div>;
        } else {
          return (
            <div key={i}>
              <div className={`hole ${hammer}`}>
                <div className="mole" onClick={handleClick}> </div>
              </div>
              {/* <img className="mole" src="/img/mole.png" /> */}
            </div>
          );
        }
      })}
      {/* <div className='hole'></div>
      <div className='hole'></div>
      <div className='hole'></div>
      <div className='hole'></div>
      <div className='hole'></div>
      <div className='hole'></div> */}
    </div>
  );
}

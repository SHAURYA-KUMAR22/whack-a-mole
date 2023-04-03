import React, { useEffect, useState } from "react";
import Holes from "./Holes";

export default function Board() {
  const [holesarray, setHolesArray] = useState(new Array(6).fill(0)); //to determine no of moles
  const [score, setScore] = useState(1); //to track score
  const [counter, setCounter] = useState(30);
  const [countDown, setCountDown] = useState(false);
  const [intervalid, setIntervalId] = useState(null); //helps to store interval id and clear it in useffect
  const [hammer, setHammer] = useState('')
  const [id, setId] = useState(null)


  // const countDown = () => {
  //     setCounter((prevCounter) => prevCounter-1)
  //     console.log(counter)
  // }

  const startGame = () => {
    if(countDown) return
    setHammer('hammer')
    setCountDown(true)
    setHolesArray(new Array(6).fill(0))
    setScore(0);
    setCounter(30);
    setIntervalId(
      setInterval(() => {
        setCounter((prevCounter) => prevCounter - 1)
        
        
      }, 1000) 
    );

    setId(
      setInterval(() => {
        const newarray = new Array(6).fill(0)
        const a = Math.floor(Math.random()*7)
        for(let i=0 ; i<=a ; i++){
          const b = Math.floor(Math.random()*6)
          newarray[b] = 1
        }
        setHolesArray(newarray)
      }, 2000)
    );
  };

  const endGame = () => {
    setHammer('')
    setCountDown(false)
    setScore(0);
    setCounter(30);
    setHolesArray(new Array(6).fill(0))
    clearInterval(id)
    clearInterval(intervalid);
    //setTimeout(() => {setCounter(5);setCountDown(false)},2000)
  };

  const handleClick = () => {
    setScore((prevscore) => prevscore+1)
  }

  useEffect(() => {
    console.log("new array created", holesarray);
  },[holesarray])


  useEffect(() => {
    if (counter == 0) { 
      setCountDown(false)
      console.log(intervalid);
      setHolesArray(new Array(6).fill(0))
      clearInterval(id)
      clearInterval(intervalid);
      //endGame();
    }
  }, [counter, intervalid]);

 
  return (
    <div className="board">
      <div className="stats">
        <button className="btn" onClick={startGame}>
          START GAME
        </button>
        <button className="btn" onClick={endGame}>
          END GAME
        </button>
        <h4>{counter}</h4>
        <h2> Your Score - {score}!</h2>
      </div>
      <Holes holesarray={holesarray} hammer={hammer} handleClick={handleClick}/>
    </div>
  );
}

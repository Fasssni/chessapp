import React, { useEffect } from 'react';
import bishop from "./assets/black_bishop.png"
import "./App.css"
import { BoardComponent } from './components/BoardComponent';
import {useState} from "react"
import { Board } from './models/Board';


function App() {
  const [board,setBoard]=useState(new Board())

  useEffect(()=>{
    restart()
  },[])

  function restart(){
    const newBoard=new Board()
    newBoard.initCells()
  }
  return (
    <div className="App">
     <BoardComponent
                    board={board}
                    setBoard={setBoard}></BoardComponent>
    </div>
  );
}

export default App;

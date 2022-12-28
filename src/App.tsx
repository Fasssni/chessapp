import React, { useEffect } from 'react';
import bishop from "./assets/black_bishop.png"
import "./App.css"
import { BoardComponent } from './components/BoardComponent';
import {useState} from "react"
import { Board } from './models/Board';


function App() {
  const [board,setBoard]=useState(new Board())
  
  const newBoard= new Board()
  newBoard.initCells()
  newBoard.addFigures()


  useEffect(()=>{
    restart()
  },[])

  function restart(){

    
  }


 
  return (
    <div className="App">
     <BoardComponent
                    board={newBoard}
                    setBoard={setBoard}></BoardComponent>
    </div>
  );
}

export default App;

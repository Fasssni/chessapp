import { Board } from "../models/Board"
import React from "react"
import { Cell } from "../models/Cell";
import { CellComponent } from "./CellComponent";

interface BoardProps{
    board:Board; 
    setBoard:(board: Board)=>void;
   }

export const BoardComponent: React.FC<BoardProps> =({board,setBoard})=>{



    return(
        <div className="board">
            {board.cells.map((row, index)=>
            <React.Fragment key={index}>
                {row.map(cell=>
                    <CellComponent></CellComponent>)}
            </React.Fragment>)}
            
        </div>
    )
}
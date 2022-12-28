import { Board } from "../models/Board"
import{FC} from "react"
import React from "react";
import { Cell } from "../models/Cell";
import { CellComponent } from "./CellComponent";

interface BoardProps{
    board:Board; 
    setBoard:(board: Board)=>void;
   }

export const BoardComponent: FC<BoardProps> =({board,setBoard})=>{



    return(
        <div className="board">
            {board.cells.map((row, index)=>
            <React.Fragment key={index}>
                {row.map((cell)=>
                    <CellComponent cell={cell}></CellComponent>)}
            </React.Fragment>)}
            
        </div>

    )
}
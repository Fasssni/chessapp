import {FC} from "react"
import { Cell } from "../models/Cell"


interface CellProps{
    cell:Cell
}

export  const CellComponent:FC<CellProps>=({cell})=>{

    return(
        <div className="cell" style={{background:cell.color}}>
                {cell.figure?.logo&&<img src={cell.figure.logo}></img>}
        </div>
    )
}
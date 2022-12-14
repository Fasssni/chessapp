import { Cell } from "./Cell"
import { Colors } from "./Colors"
import { Bishop } from "./figures/Bishop"
import { King } from "./figures/King"
import { Knight } from "./figures/Knight"
import { Pawn } from "./figures/Pawn"
import { Queen } from "./figures/Queen"
import { Rook } from "./figures/Rook"

export class Board{
    cells:Cell[][]=[]


    public initCells(){
        for(let i=0; i<8; i++){
            const row: Cell[]=[]
            for(let j=0; j<8;j++){
                if((i+j)%2!==0){
                    row.push(new Cell(this, j, i, Colors.BLACK, null))
                }else{
                    row.push(new Cell(this, j, i, Colors.WHITE, null))
                }
            }
            console.log("did wrk")
            this.cells.push(row)
        }
        
    }

    public getCell(x:number, y:number){
        return this.cells[y][x]
    }

    public addFigures(){
        new Queen(Colors.WHITE, this.getCell(3,7))
        new Bishop(Colors.WHITE, this.getCell(2,7))
        new Knight(Colors.WHITE, this.getCell(1,7))
        new Rook(Colors.WHITE, this.getCell(0,7))
        new King(Colors.WHITE, this.getCell(4,7))
        new Bishop(Colors.WHITE, this.getCell(5,7))
        new Knight(Colors.WHITE, this.getCell(6,7))
        new Rook(Colors.WHITE, this.getCell(7,7))

        new Pawn(Colors.WHITE, this.getCell(3,6))
        new Pawn(Colors.WHITE, this.getCell(2,6))
        new Pawn(Colors.WHITE, this.getCell(1,6))
        new Pawn(Colors.WHITE, this.getCell(0,6))
        new Pawn(Colors.WHITE, this.getCell(4,6))
        new Pawn(Colors.WHITE, this.getCell(5,6))
        new Pawn(Colors.WHITE, this.getCell(6,6))
        new Pawn(Colors.WHITE, this.getCell(7,6))


        new Queen(Colors.BLACK, this.getCell(3,0))
        new Bishop(Colors.BLACK, this.getCell(2,0))
        new Knight(Colors.BLACK, this.getCell(1,0))
        new Rook(Colors.BLACK, this.getCell(0,0))
        new King(Colors.BLACK, this.getCell(4,0))
        new Bishop(Colors.BLACK, this.getCell(5,0))
        new Knight(Colors.BLACK, this.getCell(6,0))
        new Rook(Colors.BLACK, this.getCell(7,0))

        new Pawn(Colors.BLACK, this.getCell(3,1))
        new Pawn(Colors.BLACK, this.getCell(2,1))
        new Pawn(Colors.BLACK, this.getCell(1,1))
        new Pawn(Colors.BLACK, this.getCell(0,1))
        new Pawn(Colors.BLACK, this.getCell(4,1))
        new Pawn(Colors.BLACK, this.getCell(5,1))
        new Pawn(Colors.BLACK, this.getCell(6,1))
        new Pawn(Colors.BLACK, this.getCell(7,1))
    }
}

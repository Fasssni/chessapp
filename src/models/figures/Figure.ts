import { timeStamp } from "console";
import { Cell } from "../Cell";
import { Colors } from "../Colors";
import logo from "../../assets/white_rook.png"

export enum FigureNames{
    FIGURE="",
    KING="Король", 
    BISHOP='Слон',
    KNIGHT='Конь',
    PAWN='Пешка',
    ROOK='Ладья',
    QUEEN='Ферзь',

}

export class Figure{
     color: Colors; 
     logo:typeof logo | null;
     cell:Cell;
     name:FigureNames;
     id:number;

    constructor(color:Colors, cell:Cell){
     this.color=color;
     this.cell=cell;
     this.cell.figure=this;
     this.logo=null;
     this.name=FigureNames.FIGURE;
     this.id=Math.random();
    }

    canMove(target:Cell):boolean{
        return true
            }
    
    moveFigure(target:Cell):void{
        
    }
}
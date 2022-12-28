import { Cell } from "../Cell";
import { Colors } from "../Colors";
import { Figure, FigureNames } from "./Figure";

import {images} from "./Figure_imgs"

export class Pawn extends Figure{


    constructor(color:Colors, cell:Cell){
        super(color,cell);
        this.logo=color===Colors.BLACK ? images.pawn.black : images.pawn.white;
        this.name=FigureNames.PAWN
    }
}
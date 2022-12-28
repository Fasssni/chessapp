import { Cell } from "../Cell";
import { Colors } from "../Colors";
import { Figure, FigureNames } from "./Figure";

import {images} from "./Figure_imgs"

export class Rook extends Figure{


    constructor(color:Colors, cell:Cell){
        super(color,cell);
        this.logo=color===Colors.BLACK ? images.rook.black : images.rook.white;
        this.name=FigureNames.ROOK
    }
}
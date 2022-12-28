import { Cell } from "../Cell";
import { Colors } from "../Colors";
import { Figure, FigureNames } from "./Figure";

import {images} from "./Figure_imgs"

export class Bishop extends Figure{


    constructor(color:Colors, cell:Cell){
        super(color,cell);
        this.logo=color===Colors.BLACK ? images.bishop.black : images.bishop.white;
        this.name=FigureNames.BISHOP
    }
}
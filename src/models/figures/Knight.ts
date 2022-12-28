import { Cell } from "../Cell";
import { Colors } from "../Colors";
import { Figure, FigureNames } from "./Figure";

import {images} from "./Figure_imgs"

export class Knight extends Figure{


    constructor(color:Colors, cell:Cell){
        super(color,cell);
        this.logo=color===Colors.BLACK ? images.knight.black : images.knight.white;
        this.name=FigureNames.KNIGHT
    }
}
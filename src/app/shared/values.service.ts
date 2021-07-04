
import {Injectable} from "@angular/core";

export interface BaseColor {
  main   : string[]
  second : string[]
  gray   : string[]
}

@Injectable({providedIn: "root"})

export class ValuesService {

  BaseColor : BaseColor = {
    main : [
      "#FFFFFF",
      "#E4388C", "#E4221B", "#FF7F00",
      "#FFED00", "#008739", "#02A7AA",
      "#47B3E7", "#2A4B9B", "#702283"
    ],
    second : [
    ],
    gray : [
      "#FFFFFF",
      "#E2E2E2", "#C6C6C6", "#AAAAAA",
      "#8E8E8E", "#717171", "#555555",
      "#383838", "#1C1C1C", "#000000"
    ]
  }


  constructor() {
    this.BaseColor.second = [
      this.BaseColor.main[0],
      this.BaseColor.main[9], this.BaseColor.main[1], this.BaseColor.main[2],
      this.BaseColor.main[3], this.BaseColor.main[4], this.BaseColor.main[5],
      this.BaseColor.main[6], this.BaseColor.main[8], this.BaseColor.main[7]

    ]
  }

//   //максимальное количество символов вводимой строки
  max_input_length : number = 33

//   //максимальное количество знаков на расширение
//  max_expansion_length : number = 45 //было 57
}




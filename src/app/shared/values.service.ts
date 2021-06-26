
import {Injectable} from "@angular/core";



@Injectable({providedIn: "root"})

export class ValuesService {
  constructor() {
  }
// //база цветов//
  BASE_colors : string[] = [
                      "#FFFFFF",
                      "#E4388C", "#E4221B", "#FF7F00",
                      "#FFED00", "#008739", "#02A7AA",
                      "#47B3E7", "#2A4B9B", "#702283"
                    ]

  BASE_second_colors : string[] = [
                             this.BASE_colors[0],
                             this.BASE_colors[9], this.BASE_colors[1], this.BASE_colors[2],
                             this.BASE_colors[3], this.BASE_colors[4], this.BASE_colors[5],
                             this.BASE_colors[6], this.BASE_colors[8], this.BASE_colors[7]
                           ]

  BASE_gray_colors : string[]  = [
                            "#FFFFFF",
                            "#E2E2E2", "#C6C6C6", "#AAAAAA",
                            "#8E8E8E", "#717171", "#555555",
                            "#383838", "#1C1C1C", "#000000"
                         ]

//   //максимальное количество символов вводимой строки
  max_input_length : number = 33
//   //максимальное количество знаков на расширение
  max_expansion_length : number = 45 //было 57
}

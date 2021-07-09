import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";


// type colorString [] = {}

export interface BaseColor {
  main   : string[]
  second : string[]
  gray   : string[]
  gray2  : string[]
}


@Injectable({providedIn: 'root'})
export class ColorService {

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
    ],
    gray2 : [
    ]
  }

  //переменная определения цветовой схемы и её начальное значение
  private shema = new BehaviorSubject<string[]>(
    this.BaseColor.main
  )
  public schema$ = this.shema.asObservable();


  constructor(
    // private values : ValuesService
  ) {

    this.BaseColor.second = [
      this.BaseColor.main[0],
      this.BaseColor.main[9], this.BaseColor.main[1], this.BaseColor.main[2],
      this.BaseColor.main[3], this.BaseColor.main[4], this.BaseColor.main[5],
      this.BaseColor.main[6], this.BaseColor.main[8], this.BaseColor.main[7]

    ]
    this.BaseColor.gray2 = [
      this.BaseColor.gray[9],
      this.BaseColor.gray[8], this.BaseColor.gray[7], this.BaseColor.gray[6],
      this.BaseColor.gray[5], this.BaseColor.gray[4], this.BaseColor.gray[3],
      this.BaseColor.gray[2], this.BaseColor.gray[1], this.BaseColor.gray[0]
    ]

    // this.setSchema('main')
    // console.log(this.shema)
  }


  //возвращает массив BaseColor[schema]
  get getSchema() : string[] {
    return this.shema.getValue()
  }

  public setSchema(schema : string) {

    let keys: string[] = []
    for (let key in this.BaseColor) {
      keys.push(key)
    }
    if (keys.includes(schema)) {
      this.shema.next(this.BaseColor[schema])
    }
  }


}

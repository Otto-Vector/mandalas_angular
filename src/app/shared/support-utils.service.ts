import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SupportUtilsService {

  constructor() { }

  //функция сложения чисел к одному числу фибоначчи
  public to_one_fibbonachi_digit(number_in_fn:number):number {//передаётся числовое значение
      return number_in_fn%9 || 9
    }//возвращает одну цифру по фибоначчи

  //функция
  public to_one_eleven_digit(number_in_fn:number):number {
    number_in_fn = Math.abs(number_in_fn - 11)
    return number_in_fn > 9 ? this.to_one_eleven_digit(number_in_fn) : number_in_fn
  }

  //переключает логические поля внутри активного элемента по ключу
  //второй параметр устанавливает ключ в значение себя
  public mode_sw( mode:string, bool?:boolean ):boolean | undefined{
    //создание массива ключей с логическим содержимым
    let keysArr :string[] = []
    for (let key in this) { if (typeof this[key] === 'boolean') keysArr.push(key)}

    try {
      //проверка правильности написания ключа переключения
      if (keysArr.includes(mode)) {

        //проверка на применение второго параметра bool
        (typeof bool === 'undefined') ? this[mode] = !this[mode] : this[mode] = bool

        return this[mode]
      } else {
        throw new SyntaxError("Данные лог.переключателя некорректры. Должны быть:" + keysArr.join(" "));
      }
    } catch(e) {

      console.log(e)
      return undefined
    }
}
}

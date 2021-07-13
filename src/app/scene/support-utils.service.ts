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
}

import { Injectable } from '@angular/core';
import {ButtonBooleanKeys} from './buttons.service';

@Injectable({
  providedIn: 'root'
})
export class SupportUtilsService {

  constructor() { }

  // функция приведения чисел к одной цифре по системе сложения фибоначчи
  public toOneFibonacciDigit(integerNumber: number): number {// передаётся числовое значение
      return Math.floor(Math.abs(integerNumber)) % 9 || 9;
    }// возвращает одну цифру по фибоначчи

  // функция аналог фибоначи, только по числу 11
  public toOneElevenDigit(numberInFn: number): number {
      return Math.abs(numberInFn - 11) > 9 ? this.toOneElevenDigit(numberInFn) : numberInFn;
  }

  // выдаёт объект с булевыми ключами
  public booleanKeysFilter(objWithBooleanKeys: object): object {
     return Object.keys(objWithBooleanKeys)
       .filter(key => typeof this[key] === 'boolean')
       .reduce((value, key) => ({...value, [key]: key}), {});
  }

  // переключает логические поля внутри активного элемента по ключу
  // второй параметр устанавливает ключ в значение себя
  public modeSwitcher(key: string, bool?: boolean ): boolean | undefined {
    // создание массива ключей с логическим содержимым
    const booleanKeys: {} = this.booleanKeysFilter(this);

    try {
      // проверка правильности написания ключа переключения
      if (booleanKeys.hasOwnProperty(key)) {

        // проверка на применение второго параметра bool
        (typeof bool === 'undefined') ? this[key] = !this[key] : this[key] = bool;

        // возвращает переключенное значение
        return this[key];
      } else {
        throw new SyntaxError('Данные лог.переключателя некорректры. Должны быть: ' + Object.keys(booleanKeys).join(' '));
      }
    } catch (e) {
      // выводит ошибку об отсутствии ключей и возвращает неопределённость
      console.error(e);
      return undefined;
    }
}
}

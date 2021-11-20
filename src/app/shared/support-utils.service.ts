import { Injectable } from '@angular/core';

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

  // переключает логические поля внутри активного элемента по ключу
  // второй параметр устанавливает ключ в значение себя
  public modeSwitcher(mode: string, bool?: boolean ): boolean | undefined {
    // создание массива ключей с логическим содержимым
    const booleanKeys: string[] = Object.keys(this).filter(key => typeof this[key] === 'boolean');

    try {
      // проверка правильности написания ключа переключения
      if (booleanKeys.includes(mode)) {

        // проверка на применение второго параметра bool
        (typeof bool === 'undefined') ? this[mode] = !this[mode] : this[mode] = bool;

        // возвращает переключенное значение
        return this[mode];
      } else {
        throw new SyntaxError('Данные лог.переключателя некорректры. Должны быть: ' + booleanKeys.join(' '));
      }
    } catch (e) {
      // выводит ошибку об отсутствии ключей и возвращает неопределённость
      console.error(e);
      return undefined;
    }
}
}

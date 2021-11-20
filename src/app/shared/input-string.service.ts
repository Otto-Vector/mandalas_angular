import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InputStringService {
  // символы расположены строго по таблице (удачно получилось то, что нужен всего один пробел)
  private readonly SYMBOLS_STATIC: string = 'abcdefghijklmnopqrstuvwxyz абвгдеёжзийклмнопрстуфхцчшщъыьэюя';
  // private readonly SYMBOLS_STATIC : string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ"
  private readonly STRING_BY_DEFAULT: string = 'Умиротворённость';

  constructor() {
  }

  // функция перевода строки в числа
  // принимает строку, где каждая позиция символа соответсвует числовому коду
  public toArrayOfNumbers(inputString: string): number[] {

    return inputString
      .split('') // перевод строки в массив
      .map(stringSymbol =>   // пересборка в новый массив
        +stringSymbol || // если символ число, то возвращает число
        // иначе возвращает позицию символа в соответствии с SYMBOL_STATIC
        this.SYMBOLS_STATIC.indexOf(stringSymbol) % 9 + 1
      );
  }

  // возвращает обработанную строку без пробелов в нижнем регистре либо обработанную тестовую строку
  modificationToNormal(stringFromUserInput: string, stringByDefault: string = this.STRING_BY_DEFAULT): string {
    // принимает две строки, stringFromUserInput - на обработку
    // stringByDefault - на замену, если stringFromUserInput оказалась false

    return (// проверка stringFromUserInput
      !stringFromUserInput || // на значения приводящие к false
      !stringFromUserInput.trim() || // (в том числе пустая строка после сброса пробелов)
      +stringFromUserInput === 0 // бессмысленные нули
    ) ?
      // присваивается значение по умолчанию //и (на всякий случай) обрабатывается и оно
      this.modificationToNormal(stringByDefault, '0123456789')
      :
      stringFromUserInput
        .replace(/[\s.,%]/g, '') // убираем все пробелы
        .toLowerCase();     // убираем регистр
  }

}

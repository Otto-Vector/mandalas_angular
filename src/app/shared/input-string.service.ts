import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InputStringService {
  //символы расположены строго по таблице (удачно получилось то, что нужен всего один пробел)
  private readonly SYMBOLS_STATIC : string = "abcdefghijklmnopqrstuvwxyz абвгдеёжзийклмнопрстуфхцчшщъыьэюя"
  private readonly STRING_BY_DEFAULT : string = "0123456789"

  constructor(
  ) {  }


  ///функция перевода строки в числа
  //принимает строку, где каждая позиция символа соответсвует числовому коду
  public to_array_of_numbers(input_string : string) : number[] {

    // input_string = this.modification_to_normal(input_string)

    return input_string
            .split('') //перевод строки в массив
            .map( string_symbol =>   //пересборка в новый массив
                  +string_symbol || //если символ число, то возвращает число
                  //иначе возвращает позицию символа в соответствии с SYMBOL_STATIC
                  this.SYMBOLS_STATIC.indexOf(string_symbol)%9+1
                )
  }


  modification_to_normal(string_from_user_input : string, string_by_default : string = this.STRING_BY_DEFAULT) : string {
  //принимает две строки, string_from_user_input - на обработку
  //string_by_default - на замену, если string_from_user_input оказалась false

  return  (//проверка string_from_user_input
            !string_from_user_input || // на значения приводящие к false
            !string_from_user_input.trim() || // (в том числе пустая строка после сброса пробелов)
            +string_from_user_input == 0 //бессмысленные нули
          ) ?
              //присваивается значение по умолчанию //и (на всякий случай) обрабатывается и оно
              this.modification_to_normal( string_by_default, "0123456789" )
            :
              string_from_user_input
                .replace(/[\s.,%]/g, '') //убираем все пробелы
                .toLowerCase()     //убираем верхний регистр
}//возвращает обработанную строку без пробелов в нижнем регистре либо обработанную тестовую строку



}

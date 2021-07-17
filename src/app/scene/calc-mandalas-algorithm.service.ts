import { Injectable } from '@angular/core';
import {SupportUtilsService} from "../shared/support-utils.service";

@Injectable({
  providedIn: 'root'
})
export class CalcMandalasAlgorithmService {


  constructor(private readonly support : SupportUtilsService
  ) {
  }

  //принимает одномерный массив чисел, созданных из введенной строки
  //возвращает двумерную матрицу
  public plane_square_3x_algorithm(input_nums_in_fn: number[], eleven = false) : number[][] {

    //задаём основной цифро-световой массив мандалы
    let matrix : number[][] = []
    //сначала назначаем ось по горизонтали
      matrix[0] = input_nums_in_fn
    //и зеркально по вертикали от единицы
    for (let i=1; i < input_nums_in_fn.length; i++) {
      //первое значение каждой строки
      matrix[i] = [matrix[0][i]]
    }

    //высчитываем мандалу на основе заданных осей (массивы считаются от 1, потому что подсчёт -1)
    let fibbo_number : number = 0
    for (let y=1; y < input_nums_in_fn.length; y++)
      for (let x=1; x < input_nums_in_fn.length; x++) {

        fibbo_number = matrix[y-1][x] + matrix[ y ][x-1] + matrix[y-1][x-1]
        fibbo_number = !eleven ?
          this.support.to_one_fibbonachi_digit(fibbo_number)
          :
          this.support.to_one_eleven_digit(fibbo_number)

        matrix[y].push(fibbo_number)
      }

    return matrix
  }//возвращает двумерный массив
}

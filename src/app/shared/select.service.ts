import { Injectable } from '@angular/core';


export interface SelectedValue {
  value: string
  id: string
  content: string
}

@Injectable({
  providedIn: 'root'
})
export class SelectService {

  constructor() { }

selected_mandala : SelectedValue[] = [
   {
      value: 'square3',
      id: '4',
      content: 'квадрат (по три)'
    },
    {
      value: 'square3_11',
      id: '2',
      content: 'квадрат (по три) =11='
    },
    {
      value: 'diamond3',
      id: '3',
      content: 'квадрат (по три) "ромб"'
    },
    {
      value: 'diamond3_11',
      id: '5',
      content: 'квадрат (по три) "ромб" =11='
    },
    {
      value: 'chess_v1',
      id: '8',
      content: 'квадрат шахматный расчёт (1вар)'
   },
   {
      value: 'chess_v2',
      id: '9',
      content: 'квадрат шахматный расчёт (2вар)'
   },
   {
      value: 'chess_v1_11',
      id: '6',
      content: 'квадрат шахматный расчёт (1вар) =11='
   },
   {
      value: 'chess_v2_11',
      id: '7',
      content: 'квадрат шахматный расчёт (2вар) =11='
   }
  ]
}

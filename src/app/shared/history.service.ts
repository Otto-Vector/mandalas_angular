import { Injectable } from '@angular/core';

export interface History {
  selected_mandala: number
  title_of_mandala: string
  length_of_title: number
  dots_mode: boolean
  grid_mode: boolean
  grid_mode_for_dots: boolean
  border_mode: boolean
  border_color: number
  number_mode: boolean
  visible_colors: [boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean],
  second_color_mode: boolean
  gray_mode: boolean
  second_gray_mode: boolean
  swich_mode: object
}

@Injectable({ providedIn: 'root' })

export class HistoryService {

  constructor() { }
  color :string = 'green'
  title_input : any = {value: "mandala"}
  history_default : History = {
          selected_mandala  : 4,
          title_of_mandala  : this.title_input.value,
          length_of_title 	: this.title_input.value.length,
          dots_mode 				: false,
          grid_mode 				: false,
          grid_mode_for_dots: false,
          border_mode				: true,
          border_color			: -1,
          number_mode				: false,
          visible_colors  	: [true,true,true,true,true,true,true,true,true,true],
          second_color_mode : false,
          gray_mode         : true,
          second_gray_mode  : true,
          swich_mode        : function(mode) {this[mode] = !this[mode]; return this[mode]}
          }
}

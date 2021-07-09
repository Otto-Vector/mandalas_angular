import { Injectable } from '@angular/core';
import {SelectService} from "./select.service";

export interface History {
  selected_mandala: string
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
  swich_mode: (string) => boolean
}

@Injectable({ providedIn: 'root' })

export class HistoryService {

  constructor(
    private selectedValue : SelectService
  ) {

  }
  title_input : any = {value: "mandala"}

  history_default : History = {
          selected_mandala  : this.selectedValue.selected_mandala[0].value,
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
          gray_mode         : false,
          second_gray_mode  : false,
          swich_mode        : function(mode) {this[mode] = !this[mode]; return this[mode]}
          }
}

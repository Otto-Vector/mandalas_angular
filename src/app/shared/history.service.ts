import { Injectable } from '@angular/core';
import {SelectService} from "./select.service";
import {BehaviorSubject} from "rxjs";

export type visibleColors = [
  boolean, boolean, boolean, boolean, boolean,
  boolean, boolean, boolean, boolean, boolean
]

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
  visible_colors: visibleColors,
  second_color_mode: boolean
  gray_mode: boolean
  second_gray_mode: boolean
  swich_mode: (string) => boolean
}

@Injectable({ providedIn: 'root' })

export class HistoryService {

  constructor(
    private selectedValue: SelectService
  ) {

  }

  title_input: any = {value: "mandala"}

  public history_default: History = {
    selected_mandala: this.selectedValue.selected_mandala[0].value,
    title_of_mandala: this.title_input.value,
    length_of_title: this.title_input.value.length,
    dots_mode: false,
    grid_mode: false,
    grid_mode_for_dots: false,
    border_mode: true,
    border_color: -1,
    number_mode: false,
    visible_colors: [true, true, true, true, true, true, true, true, true, true],
    second_color_mode: false,
    gray_mode: false,
    second_gray_mode: false,
    swich_mode: function (mode) {
      this[mode] = !this[mode];
      return this[mode]
    }
  }

  private vis_colors_sw = new BehaviorSubject<visibleColors>(this.history_default.visible_colors)
  public visible_colors$ = this.vis_colors_sw.asObservable()

  set visColorSet(numcolor: number) {
    this.history_default.visible_colors[numcolor] = !this.history_default.visible_colors[numcolor]
    this.vis_colors_sw.next(this.history_default.visible_colors)
  }

  get visColorGet(): visibleColors {
    return this.vis_colors_sw.getValue()
  }

  //изменение видимости цветов (без параметров переключает видимые с невидимыми)
  public visColorAll(switcher: boolean | undefined) {

    for (let idx=0; idx < this.history_default.visible_colors.length; idx++) {
        this.history_default.visible_colors[idx] = switcher ?? !this.history_default.visible_colors[idx]
    }
    this.vis_colors_sw.next(this.history_default.visible_colors)
  }
}

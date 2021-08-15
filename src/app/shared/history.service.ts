import { Injectable } from '@angular/core';
import {SelectService} from './select.service';
import {BehaviorSubject} from 'rxjs';
import {SupportUtilsService} from './support-utils.service';
import {InputStringService} from './input-string.service';

export type visibleColors = [
  boolean, boolean, boolean, boolean, boolean,
  boolean, boolean, boolean, boolean, boolean
];

export interface History {
  selected_mandala: string;
  title_of_mandala: string;
  length_of_title: number;
  dots_mode: boolean;
  grid_mode: boolean;
  grid_mode_for_dots: boolean;
  border_mode: boolean;
  border_color: number;
  number_mode: boolean;
  visible_colors: visibleColors;
  second_color_mode: boolean;
  gray_mode: boolean;
  second_gray_mode: boolean;
  swich_mode: (field: string) => boolean;
}

@Injectable({ providedIn: 'root' })

export class HistoryService {

  constructor(
    private readonly selectedValue: SelectService,
    private readonly supportUtilsService: SupportUtilsService,
    private readonly stringSrv: InputStringService
  ) {

  }

  set setVisColor(numColor: number) {
    this.history_default.visible_colors[numColor] = !this.history_default.visible_colors[numColor];
    this.vis_colors_sw.next(this.history_default.visible_colors);
  }

  get getVisColor(): visibleColors {
    return this.vis_colors_sw.getValue();
  }

  get getTitle(): string {
    return this.stringSrv.modification_to_normal(this.title_input.getValue());
  }

  set setTitle(val: string) {
    // val = val.toLowerCase()
    this.title_input.next(val);
    this.history_default.title_of_mandala = val;
  }


  public history_default: History = {
    selected_mandala: this.selectedValue.selected_mandala[0].value,
    title_of_mandala: 'MandalaZ',
    length_of_title: 99,
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
    swich_mode: this.supportUtilsService.mode_sw
  };

  // обзор и манипуляции с визуализацией цветов
  private vis_colors_sw = new BehaviorSubject<visibleColors>(this.history_default.visible_colors);
  public visible_colors$ = this.vis_colors_sw.asObservable();

  // обзор и манипуляции с введенным title
  private title_input = new BehaviorSubject<string>(this.history_default.title_of_mandala);
  public title_input$ = this.title_input.asObservable();

  // изменение видимости цветов (без параметров переключает видимые с невидимыми)
  public visColorAll(switcher: boolean | undefined) {
    for (let idx = 0; idx < this.history_default.visible_colors.length; idx++) {
        this.history_default.visible_colors[idx] = switcher ?? !this.history_default.visible_colors[idx];
    }
    this.vis_colors_sw.next(this.history_default.visible_colors);
  }
}

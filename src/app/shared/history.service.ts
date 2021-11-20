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
  selectedMandala: string;
  titleOfMandala: string;
  lengthOfTitle: number;
  dotsMode: boolean;
  gridMode: boolean;
  gridModeForDots: boolean;
  borderMode: boolean;
  borderColor: number;
  numberMode: boolean;
  visibleColors: visibleColors;
  secondColorMode: boolean;
  grayMode: boolean;
  secondGrayMode: boolean;
  switchMode: (key: string, defaultTo?: boolean) => boolean;
}

@Injectable({ providedIn: 'root' })

export class HistoryService {

  constructor(
    private readonly selectedValue: SelectService,
    private readonly supportUtilsService: SupportUtilsService,
    private readonly stringSrv: InputStringService
  ) {

  }

  set setVisibleColorSwitchByNumber(numColor: number) {
    this.historyDefault.visibleColors[numColor] = !this.historyDefault.visibleColors[numColor];
    this.visibleColorsBehaviorSubject.next(this.historyDefault.visibleColors);
  }

  get getVisColor(): visibleColors {
    return this.visibleColorsBehaviorSubject.getValue();
  }

  get getTitle(): string {
    return this.stringSrv.modificationToNormal(this.titleBehaviorSubject.getValue());
  }

  set setTitle(val: string) {
    // val = val.toLowerCase()
    this.historyDefault.titleOfMandala = val;
    this.titleBehaviorSubject.next(val);
  }


  public historyDefault: History = {
    selectedMandala: this.selectedValue.selectedMandala[0].value,
    titleOfMandala: 'MandalaZ',
    lengthOfTitle: 99,
    dotsMode: false,
    gridMode: false,
    gridModeForDots: false,
    borderMode: true,
    borderColor: -1,
    numberMode: false,
    visibleColors: [true, true, true, true, true, true, true, true, true, true],
    secondColorMode: false,
    grayMode: false,
    secondGrayMode: false,
    switchMode: this.supportUtilsService.modeSwitcher
  };

  // обзор и манипуляции с визуализацией цветов
  private visibleColorsBehaviorSubject = new BehaviorSubject<visibleColors>(this.historyDefault.visibleColors);
  public visibleColors$ = this.visibleColorsBehaviorSubject.asObservable();

  // обзор и манипуляции с введенным title
  private titleBehaviorSubject = new BehaviorSubject<string>(this.historyDefault.titleOfMandala);
  public titleInput$ = this.titleBehaviorSubject.asObservable();

  // изменение видимости цветов (без параметров переключает видимые с невидимыми)
  public visColorAll(switcher: boolean | undefined) {
    for (let idx = 0; idx < this.historyDefault.visibleColors.length; idx++) {
        this.historyDefault.visibleColors[idx] = switcher ?? !this.historyDefault.visibleColors[idx];
    }
    this.visibleColorsBehaviorSubject.next(this.historyDefault.visibleColors);
  }
}

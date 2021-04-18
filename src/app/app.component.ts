import {Component} from '@angular/core';

export interface History {
  selectedMandala: number
  titleOfMandala: string
  lengthOfTitle: number
  dotsMode: boolean
  gridMode: boolean
  gridModeForDots: boolean
  borderMode: boolean
  borderColor: number
  numberMode: boolean
  visibleColors: [boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean],
  secondColorMode: boolean
  grayMode: boolean
  secondGrayMode: boolean
  swichMode: object
}
export interface TitleTest {
  title: string
  lm: boolean
}


//todo-t    Возможно надо перенести Buttons и History в отдельный блок


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent {
  public title: string = 'mandalas-fibonacci';
  public title_in: TitleTest = {title: "ЗАГОЛОВОЧНАЯ ПЕРЕМЕННАЯ", lm: true}
  public max_input_length = 25
  // history: History[] = [
  //   {}
  // ]


}

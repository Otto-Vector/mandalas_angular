
import {Injectable, OnInit} from '@angular/core';
import {Buttons, ButtonsService} from './buttons.service';
import {ColorService} from './color.service';
import {HistoryService} from './history.service';


@Injectable({providedIn: 'root'})
export class ActionsService {

  constructor(private readonly globalBtn: ButtonsService,
              private readonly colorService: ColorService,
              private readonly history: HistoryService
  ) {
    // покрас кнопок при инициализации
    // this.colorService.setSchema('main')
  }
  // ngOnInit(): void {
  //
  // }

  default() {
    console.log('default_action');
  }

  buttonListener(local: Buttons) {
    // упрощаем обращение с массивом
    const buttons: Buttons[] = this.globalBtn.buttons;
    const history = this.history.historyDefault;

    // нажатие кнопок отображения помощи справа и слева
    if (['r_help', 'l_help'].includes(local.id)) {

      local.modeSwitcher('inactiveVisualMode');

      for (const [i, {isLeft}] of buttons.entries()) {
        if (isLeft === local.isLeft) {
          buttons[i].modeSwitcher('help');
        }
      }

    }

    // смена сторон панелей
    if (local.id === 'sw_panels') {
      // смена состояния кнопки
      local.modeSwitcher('inactiveVisualMode');
      for (const i of buttons.keys()) {
        buttons[i].modeSwitcher('isLeft');
      }
    }

    // смена цветовых схем
    if (local.id === 'colors_shema') {

      if (history.grayMode) {
        // history.swich_mode('second_gray_mode')
        // this.colorService.setSchema = !history.second_gray_mode ? 'gray' : 'gray2'

        this.colorService.setSchema = !history.switchMode('second_gray_mode') ? 'gray' : 'gray2';
      } else {
        // history.swich_mode('second_color_mode')
        // this.colorService.setSchema = !history.second_color_mode ? 'main' : 'second'

        this.colorService.setSchema = !history.switchMode('second_color_mode') ? 'main' : 'second';
      }

    }

    // смена серых схем
    if (local.id === 'gray_shema') {

      if (history.switchMode('gray_mode')) {
        this.colorService.setSchema = !history.secondGrayMode ? 'gray' : 'gray2';
      } else {
        this.colorService.setSchema = !history.secondColorMode ? 'main' : 'second';
      }

    }

    // меняем визуализацию
    if (/^num\d$/.test(local.id)) {
      // local.sw_mode('inactiveVisualMode')
      this.history.setVisibleColorSwitchByNumber = +local.content;
    }

    if (local.id === 'all_vis') {
      this.history.visColorAll(true);
    }
    if (local.id === 'all_unvis') {
      this.history.visColorAll(false);
    }
    if (local.id === 'sw_unvis') {
      this.history.visColorAll(undefined);
    }


    // пересборка визуализации. пока вот такой костыль на этом уровне знания Angular :)
    function reView(){
      const face = {};
      for (const [i, {id}] of buttons.entries()) { face[id] = i; }

      buttons[face.colors_shema].sw_mode('inactiveVisualMode',
        (!history.grayMode && history.secondColorMode)
        ||
        ( history.grayMode && history.secondGrayMode )
      );

      buttons[face.gray_shema].sw_mode('inactiveVisualMode', history.grayMode);
    }

    reView();
  }


}

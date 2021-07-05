
import {Injectable} from "@angular/core";
import {Buttons, ButtonsService} from "./buttons.service";
import {ColorService} from "./color.service";
import {HistoryService} from "./history.service";


@Injectable({providedIn: "root"})

export class ActionsService {
  constructor(private globalBtn: ButtonsService,
              private color : ColorService,
              private history: HistoryService
  ) {
  }

  default() {
    console.log("default_action")
  }

  buttonListener(local) {
    //упрощаем обращение с массивом
    let buttons: Buttons[] = this.globalBtn.buttons


    //нажатие кнопок отображения помощи справа и слева
    if (['r_help', 'l_help'].includes(local.id)) {
      local.sw_mode('unactive_visual_mode')
      local.sw_mode(false)


      for (let [i, {left}] of buttons.entries()) {
        if (left === local.left) {
          // @ts-ignore
          buttons[i].sw_mode('help')
        }
      }

    }

    //смена сторон панелей
    if (local.id === 'sw_panels') {
      //смена состояния кнопки
      local.sw_mode('unactive_visual_mode')
      for (let i = 0; i < buttons.length; i++) {
        // @ts-ignore
        buttons[i].sw_mode('left')
      }
    }

    if (local.id === 'colors_shema') {
      //смена состояния кнопки
      local.sw_mode('unactive_visual_mode')

      if (!this.history.history_default.gray_mode) {
        // @ts-ignore
        this.history.history_default.swich_mode('second_gray_mode')
        this.color.setShema = !this.history.history_default.second_gray_mode ? 'gray' : 'gray2'
      } else {
        // @ts-ignore
        this.history.history_default.swich_mode('second_color_mode')
        this.color.setShema = !this.history.history_default.second_color_mode ? 'main' : 'second'
      }

      this.globalBtn.colored(this.color.getShema)
    }

    if (local.id === 'gray_shema') {
      //смена состояния кнопки
      local.sw_mode('unactive_visual_mode')
      // @ts-ignore
      this.history.history_default.swich_mode('gray_mode')
      if (!this.history.history_default.gray_mode) {
        this.color.setShema = !this.history.history_default.second_color_mode ? 'gray' : 'gray2'
      } else {
        this.color.setShema = !this.history.history_default.second_color_mode ? 'main' : 'second'
      }
      this.globalBtn.colored(this.color.getShema)
    }
  }


}

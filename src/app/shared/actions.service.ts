
import {Injectable} from "@angular/core";
import {Buttons, ButtonsService} from "./buttons.service";
import {ValuesService} from "./values.service";


@Injectable({providedIn: "root"})

export class ActionsService {
  constructor(public globalBtn: ButtonsService,
              public colorR : ValuesService
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
      this.colorR.shema = !local.unactive_visual_mode ? 'main' : 'second'
      this.globalBtn.colored(this.colorR.shema)
    }
  }
}

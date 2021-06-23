
import {Injectable} from "@angular/core";
import {Buttons, ButtonsService} from "./buttons.service";


@Injectable({providedIn: "root"})

export class ActionsService {
  constructor( public globalBtn : ButtonsService
  ) {
  }

  default() {
    console.log("default_action")
  }

  buttonListener(local) {
    let buttons : Buttons[] = this.globalBtn.buttons
    //нажатие кнопок отображения помощи справа и слева
    if (['r_help', 'l_help'].includes(local.id)) {
      local.unactive_visual_mode = !local.unactive_visual_mode

      for (let [i,{left,help}] of buttons.entries()) {
        if (left === local.left) {
          buttons[i].help = !help
        }
      }

    }

    //смена сторон панелей
    if (local.id === 'sw_panels') {
      local.unactive_visual_mode = !local.unactive_visual_mode
      for (let i = 0; i < buttons.length; i++) {
        buttons[i].left = !buttons[i].left
      }
    }
  }
}

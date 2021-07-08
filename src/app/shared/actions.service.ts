
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
    //покрас кнопок при инициализации
    this.globalBtn.colored(this.color.getShema)
  }

  default() {
    console.log("default_action")
  }

  buttonListener(local) {
    //упрощаем обращение с массивом
    let buttons: Buttons[] = this.globalBtn.buttons
    let history = this.history.history_default

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

      if (history.gray_mode) {
        // @ts-ignore
        history.swich_mode('second_gray_mode')
        this.color.setShema = !history.second_gray_mode ? 'gray' : 'gray2'
      } else {
        // @ts-ignore
        history.swich_mode('second_color_mode')
        this.color.setShema = !history.second_color_mode ? 'main' : 'second'
      }

      this.globalBtn.colored(this.color.getShema)

    }

    if (local.id === 'gray_shema') {

      // @ts-ignore
      history.swich_mode('gray_mode')
      if (history.gray_mode) {
        this.color.setShema = !history.second_gray_mode ? 'gray' : 'gray2'
      } else {
        this.color.setShema = !history.second_color_mode ? 'main' : 'second'
      }
      this.globalBtn.colored(this.color.getShema)
    }

    //пересборка визуализации. пока вот такой костыль на этом уровне Angular
    function reView(){
      let face = {}
      for (const [i, {id}] of buttons.entries()) { face[id] = i }
      // @ts-ignore
      buttons[face['colors_shema']].sw_mode('unactive_visual_mode',
        (!history.gray_mode && history.second_color_mode)
        ||
        ( history.gray_mode && history.second_gray_mode )
      )
      // @ts-ignore
      buttons[face['gray_shema']].sw_mode('unactive_visual_mode', history.gray_mode)
    }

    reView()
  }


}

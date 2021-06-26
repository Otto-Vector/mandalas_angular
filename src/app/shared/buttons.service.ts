
import {Injectable} from "@angular/core";
import {ValuesService} from "./values.service";


export interface Buttons {
  id: string
  color: string
  title: string
  content: string
  left: boolean
  opacity_mode: boolean
  unactive_visual_mode: boolean
  help: boolean,
  sw_mode: object
}

@Injectable({providedIn: "root"})

export class ButtonsService {
constructor( public colors : ValuesService) {
}
  color: string = '#e9e9e9'
  green: string = "#f05"
  //переключает логические поля внутри активного элемента по ключу
  //второй параметр устанавливает ключ в значение себя
  mode( mode:string, bool?:boolean ):boolean {
    //создание массива ключей с логическим содержимым
    let keysArr :string[] = []
    for (let key in this) { if (typeof this[key] === 'boolean') keysArr.push(key)}

    try {
      //проверка правильности написания ключа переключения
      if (keysArr.includes(mode)) {

        //проверка на применение второго параметра bool
        (typeof bool === 'undefined') ? this[mode] = !this[mode] : this[mode] = bool

        return this[mode]
      } else {
        throw new SyntaxError("Данные лог.переключателя некорректры. Должны быть:" + keysArr.join(" "));
      }
    } catch(e) {
      console.log(e)
      return undefined
    }
}


  buttons: Buttons[] = [
    {
      help: false, left : true, color: this.color, unactive_visual_mode: false, opacity_mode: false,
      id: 'stat', title: 'Статистика', content: 'S',
      sw_mode : this.mode
    },
    {
      help: false, left : true, color: this.color, unactive_visual_mode: false, opacity_mode: false,
      id: 'num0', title: '0', content: '0',
      sw_mode : this.mode
    },
    {
      help: false, left : true, color: this.color, unactive_visual_mode: false, opacity_mode: false,
      id: 'num1', title: '1', content: '1',
      sw_mode : this.mode
    },
    {
      help: false, left : true, color: this.color, unactive_visual_mode: false, opacity_mode: false,
      id: 'num2', title: '2', content: '2',
      sw_mode : this.mode
    },
    {
      help: false, left : true, color: this.color, unactive_visual_mode: false, opacity_mode: false,
      id: 'num3', title: '3', content: '3',
      sw_mode : this.mode
    },
    {
      help: false, left : true, color: this.color, unactive_visual_mode: false, opacity_mode: false,
      id: 'num4', title: '4', content: '4',
      sw_mode : this.mode
    },
    {
      help: false, left : true, color: this.color, unactive_visual_mode: false, opacity_mode: false,
      id: 'num5', title: '5', content: '5',
      sw_mode : this.mode
    },
    {
      help: false, left : true, color: this.color, unactive_visual_mode: false, opacity_mode: false,
      id: 'num6', title: '6', content: '6',
      sw_mode : this.mode
    },
    {
      help: false, left : true, color: this.color, unactive_visual_mode: false, opacity_mode: false,
      id: 'num7', title: '7', content: '7',
      sw_mode : this.mode
    },
    {
      help: false, left : true, color: this.color, unactive_visual_mode: false, opacity_mode: false,
      id: 'num8', title: '8', content: '8',
      sw_mode : this.mode
    },
    {
      help: false, left : true, color: this.color, unactive_visual_mode: false, opacity_mode: false,
      id: 'num9', title: '9', content: '9',
      sw_mode : this.mode
    },
    {
      help: false, left : true, color: this.color, unactive_visual_mode: false, opacity_mode: false,
      id: 'colors_shema', title: 'Цветовые схемы', content: 'C',
      sw_mode : this.mode
    },
    {
      help: false, left : true, color: this.color, unactive_visual_mode: false, opacity_mode: false,
      id: 'gray_shema', title: 'Серая схема', content: 'G',
      sw_mode : this.mode
    },
    {
      help: false, left : true, color: this.color, unactive_visual_mode: false, opacity_mode: false,
      id: 'r_help', title: 'Убрать помощь справа', content: '?',
      sw_mode : this.mode
    },
    {
      help: false, left : false, color: this.color, unactive_visual_mode: false, opacity_mode: false,
      id: 'greed_onoff', title: 'Убрать сетку', content: '#',
      sw_mode : this.mode
    },
    {
      help: false, left : false, color: this.color, unactive_visual_mode: false, opacity_mode: false,
      id: 'all_unvis', title: 'Убрать все цвета', content: 'X',
      sw_mode : this.mode
    },
    {
      help: false, left : false, color: this.color, unactive_visual_mode: false, opacity_mode: false,
      id: 'sw_unvis', title: 'Поменять активные с невидимыми', content: '@',
      sw_mode : this.mode
    },
    {
      help: false, left : false, color: this.color, unactive_visual_mode: false, opacity_mode: false,
      id: 'all_vis', title: 'Вернуть все цвета', content: 'A',
      sw_mode : this.mode
    },
    {
      help: false, left : false, color: this.color, unactive_visual_mode: false, opacity_mode: false,
      id: 'brd_color', title: 'Поменять цвет обводки', content: 'B',
      sw_mode : this.mode
    },
    {
      help: false, left : false, color: this.color, unactive_visual_mode: false, opacity_mode: false,
      id: 'lbrd_unvis_onoff', title: 'Убрать/отобразить обводку', content: 'b',
      sw_mode : this.mode
    },
    {
      help: false, left : false, color: this.color, unactive_visual_mode: false, opacity_mode: false,
      id: 'nums_unvis_onoff', title: 'Убрать/отобразить цифры', content: '№',
      sw_mode : this.mode
    },
    {
      help: false, left : false, color: this.color, unactive_visual_mode: false, opacity_mode: false,
      id: 'dots_mode_onoff', title: 'Точечный режим', content: '\u2219',
      sw_mode : this.mode
    },
    {
      help: false, left : false, color: this.color, unactive_visual_mode: false, opacity_mode: false,
      id: 'zoom_in', title: 'Приблизить', content: '+',
      sw_mode : this.mode
    },
    {
      help: false, left : false, color: this.color, unactive_visual_mode: false, opacity_mode: false,
      id: 'zoom_out', title: 'Отдалить', content: '-',
      sw_mode : this.mode
    },
    {
      help: false, left : false, color: this.color, unactive_visual_mode: false, opacity_mode: false,
      id: 'full_screen', title: 'Развернуть на весь экран', content: '\u25A3',
      sw_mode : this.mode
    },
    {
      help: false, left : false, color: this.color, unactive_visual_mode: false, opacity_mode: false,
      id: 'save_settings', title: 'Сохранить настройки отображения', content: 'visual_check',
      sw_mode : this.mode
    },
    {
      help: false, left : false, color: this.color, unactive_visual_mode: false, opacity_mode: false,
      id: 'sw_panels', title: 'Поменять панели кнопок местами', content: '\u21C4',
      sw_mode : this.mode
    },
    {
      help: false, left : false, color: this.color, unactive_visual_mode: false, opacity_mode: false,
      id: 'l_help', title: 'Убрать помощь слева', content: '?',
      sw_mode : this.mode
    },
  ]

  //окрашивание кнопок
  colored() {
  for (let [i,{id,content}] of this.buttons.entries()) {
    //окрашивание кнопок с цифрами
    if (/^num\d$/.test(id)) {
      this.buttons[i].color = this.colors.BASE_colors[+content]
    }
  }
  }
}

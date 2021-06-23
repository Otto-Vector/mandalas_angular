
import {Injectable} from "@angular/core";

export interface Buttons {
  id: string
  color: string
  title: string
  content: string
  left: boolean
  opacity_mode: boolean
  unactive_visual_mode: boolean
  help: boolean
}

@Injectable({providedIn: "root"})
export class ButtonsService {
  color: string = '#e9e9e9'
  max_input_length: number = 25
  buttons: Buttons[] = [
    {
      help: false, left : true, color: this.color, unactive_visual_mode: false, opacity_mode: false,
      id: 'stat', title: 'Статистика', content: 'S'
    },
    {
      help: false, left : true, color: this.color, unactive_visual_mode: false, opacity_mode: false,
      id: 'num0', title: '0', content: '0'
    },
    {
      help: false, left : true, color: this.color, unactive_visual_mode: false, opacity_mode: false,
      id: 'num1', title: '1', content: '1'
    },
    {
      help: false, left : true, color: this.color, unactive_visual_mode: false, opacity_mode: false,
      id: 'num2', title: '2', content: '2'
    },
    {
      help: false, left : true, color: this.color, unactive_visual_mode: false, opacity_mode: false,
      id: 'num3', title: '3', content: '3'
    },
    {
      help: false, left : true, color: this.color, unactive_visual_mode: false, opacity_mode: false,
      id: 'num4', title: '4', content: '4'
    },
    {
      help: false, left : true, color: this.color, unactive_visual_mode: false, opacity_mode: false,
      id: 'num5', title: '5', content: '5'
    },
    {
      help: false, left : true, color: this.color, unactive_visual_mode: false, opacity_mode: false,
      id: 'num6', title: '6', content: '6'
    },
    {
      help: false, left : true, color: this.color, unactive_visual_mode: false, opacity_mode: false,
      id: 'num7', title: '7', content: '7'
    },
    {
      help: false, left : true, color: this.color, unactive_visual_mode: false, opacity_mode: false,
      id: 'num8', title: '8', content: '8'
    },
    {
      help: false, left : true, color: this.color, unactive_visual_mode: false, opacity_mode: false,
      id: 'num9', title: '9', content: '9'
    },
    {
      help: false, left : true, color: this.color, unactive_visual_mode: false, opacity_mode: false,
      id: 'r_colors', title: 'Цветовые схемы', content: 'C'
    },
    {
      help: false, left : true, color: this.color, unactive_visual_mode: false, opacity_mode: false,
      id: 'r_gray', title: 'Серая схема', content: 'G'
    },
    {
      help: false, left : true, color: this.color, unactive_visual_mode: false, opacity_mode: false,
      id: 'r_help', title: 'Убрать помощь справа', content: '?'
    },
    {
      help: false, left : false, color: this.color, unactive_visual_mode: false, opacity_mode: false,
      id: 'l_greed', title: 'Убрать сетку', content: '#'
    },
    {
      help: false, left : false, color: this.color, unactive_visual_mode: false, opacity_mode: false,
      id: 'l_all_unvis', title: 'Убрать все цвета', content: 'X'
    },
    {
      help: false, left : false, color: this.color, unactive_visual_mode: false, opacity_mode: false,
      id: 'l_sw_unvis', title: 'Поменять активные с невидимыми', content: '@'
    },
    {
      help: false, left : false, color: this.color, unactive_visual_mode: false, opacity_mode: false,
      id: 'l_all_vis', title: 'Вернуть все цвета', content: 'A'
    },
    {
      help: false, left : false, color: this.color, unactive_visual_mode: false, opacity_mode: false,
      id: 'l_brd_color', title: 'Поменять цвет обводки', content: 'B'
    },
    {
      help: false, left : false, color: this.color, unactive_visual_mode: false, opacity_mode: false,
      id: 'l_brd_unvis', title: 'Убрать/отобразить обводку', content: 'b'
    },
    {
      help: false, left : false, color: this.color, unactive_visual_mode: false, opacity_mode: false,
      id: 'l_nums_unvis', title: 'Убрать/отобразить цифры', content: '№'
    },
    {
      help: false, left : false, color: this.color, unactive_visual_mode: false, opacity_mode: false,
      id: 'l_dots_mode', title: 'Точечный режим', content: '\u2219'
    },
    {
      help: false, left : false, color: this.color, unactive_visual_mode: false, opacity_mode: false,
      id: 'l_zoom_in', title: 'Приблизить', content: '+'
    },
    {
      help: false, left : false, color: this.color, unactive_visual_mode: false, opacity_mode: false,
      id: 'l_zoom_out', title: 'Отдалить', content: '-'
    },
    {
      help: false, left : false, color: this.color, unactive_visual_mode: false, opacity_mode: false,
      id: 'l_full_screen', title: 'Развернуть на весь экран', content: '\u25A3'
    },
    {
      help: false, left : false, color: this.color, unactive_visual_mode: false, opacity_mode: false,
      id: 'l_save_settings', title: 'Сохранить настройки отображения', content: 'visual_check'
    },
    {
      help: false, left : false, color: this.color, unactive_visual_mode: false, opacity_mode: false,
      id: 'l_help', title: 'Убрать помощь слева', content: '?'
    },
  ];
}

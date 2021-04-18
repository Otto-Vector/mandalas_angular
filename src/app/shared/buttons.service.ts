
import {Injectable} from "@angular/core";

export interface Buttons {
  id: string
  color: string
  title: string
  content: string
  position?: string
  opacity_mode: boolean
  unactive_visual_mode: boolean
}

@Injectable({providedIn: "root"})
export class ButtonsService {
  color: string = '#e9e9e9'
  max_input_length: number = 25
  buttons: Buttons[] = [
    {
      color: this.color, unactive_visual_mode: true, opacity_mode: false,
      id: 'stat', title: 'Статистика', content: 'S'
    },
    {
      color: this.color, unactive_visual_mode: false, opacity_mode: true,
      id: 'num0', title: '0', content: '0'
    },
    {
      color: this.color, unactive_visual_mode: true, opacity_mode: false,
      id: 'num1', title: '1', content: '1'
    },
    {
      color: this.color, unactive_visual_mode: false, opacity_mode: true,
      id: 'num2', title: '2', content: '2'
    },
    {
      color: this.color, unactive_visual_mode: true, opacity_mode: true,
      id: 'num3', title: '3', content: '3'
    },
    {
      color: this.color, unactive_visual_mode: false, opacity_mode: false,
      id: 'num4', title: '4', content: '4'
    },
    {
      color: this.color, unactive_visual_mode: false, opacity_mode: false,
      id: 'num5', title: '5', content: '5'
    },
    {
      color: this.color, unactive_visual_mode: false, opacity_mode: false,
      id: 'num6', title: '6', content: '6'
    },
    {
      color: this.color, unactive_visual_mode: false, opacity_mode: false,
      id: 'num7', title: '7', content: '7'
    },
    {
      color: this.color, unactive_visual_mode: false, opacity_mode: false,
      id: 'num8', title: '8', content: '8'
    },
    {
      color: this.color, unactive_visual_mode: false, opacity_mode: false,
      id: 'num9', title: '9', content: '9'
    },
    {
      color: this.color, unactive_visual_mode: false, opacity_mode: false,
      id: 'r_colors', title: 'Цветовые схемы', content: 'C'
    },
    {
      color: this.color, unactive_visual_mode: false, opacity_mode: false,
      id: 'r_gray', title: 'Серая схема', content: 'G'
    },
    {
      color: this.color, unactive_visual_mode: false, opacity_mode: false,
      id: 'r_help', title: 'Убрать помощь справа', content: '?', position: 'right'
    },
    {
      color: this.color, unactive_visual_mode: false, opacity_mode: false,
      id: 'l_greed', title: 'Убрать сетку', content: '#'
    },
    {
      color: this.color, unactive_visual_mode: false, opacity_mode: false,
      id: 'l_all_unvis', title: 'Убрать все цвета', content: 'X'
    },
    {
      color: this.color, unactive_visual_mode: false, opacity_mode: false,
      id: 'l_sw_unvis', title: 'Поменять активные с невидимыми', content: '@'
    },
    {
      color: this.color, unactive_visual_mode: false, opacity_mode: false,
      id: 'l_all_vis', title: 'Вернуть все цвета', content: 'A'
    },
    {
      color: this.color, unactive_visual_mode: false, opacity_mode: false,
      id: 'l_brd_color', title: 'Поменять цвет обводки', content: 'B'
    },
    {
      color: this.color, unactive_visual_mode: false, opacity_mode: false,
      id: 'l_brd_unvis', title: 'Убрать/отобразить обводку', content: 'b'
    },
    {
      color: this.color, unactive_visual_mode: false, opacity_mode: false,
      id: 'l_nums_unvis', title: 'Убрать/отобразить цифры', content: '№'
    },
    {
      color: this.color, unactive_visual_mode: false, opacity_mode: false,
      id: 'l_dots_mode', title: 'Точечный режим', content: '\u2219'
    },
    {
      color: this.color, unactive_visual_mode: false, opacity_mode: false,
      id: 'l_zoom_in', title: 'Приблизить', content: '+'
    },
    {
      color: this.color, unactive_visual_mode: false, opacity_mode: false,
      id: 'l_zoom_out', title: 'Отдалить', content: '-'
    },
    {
      color: this.color, unactive_visual_mode: false, opacity_mode: false,
      id: 'l_full_screen', title: 'Развернуть на весь экран', content: '\u25A3'
    },
    {
      color: this.color, unactive_visual_mode: false, opacity_mode: false,
      id: 'l_save_settings', title: 'Сохранить настройки отображения', content: 'visual_check'
    },
    {
      color: this.color, unactive_visual_mode: false, opacity_mode: false,
      id: 'l_help', title: 'Убрать помощь слева', content: '?', position: 'left'
    },
  ];
}

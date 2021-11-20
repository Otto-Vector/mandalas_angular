
import {Injectable, OnDestroy} from '@angular/core';
import {ColorService, typeTenColors} from './color.service';
import {Subscription} from 'rxjs';
import {HistoryService, visibleColors} from './history.service';
import {SupportUtilsService} from './support-utils.service';

export interface Buttons {
  id: string;
  color: string;
  title: string;
  content: string;
  isLeft: boolean;
  disabled: boolean;
  inactiveVisualMode: boolean;
  help: boolean;
  modeSwitcher: (key: string, defaultTo?: boolean) => boolean;
}

@Injectable({providedIn: 'root'})
export class ButtonsService implements OnDestroy{

  mainColorOfButtons = '#e9e9e9';

  buttons: Buttons[] = [
    {
      help: false, isLeft : true, color: this.mainColorOfButtons, inactiveVisualMode: false, disabled: false,
      id: 'stat', title: 'Статистика', content: 'S',
      modeSwitcher : this.supportUtilsService.modeSwitcher
    },
    {
      help: false, isLeft : true, color: this.mainColorOfButtons, inactiveVisualMode: false, disabled: false,
      id: 'num0', title: '0', content: '0',
      modeSwitcher : this.supportUtilsService.modeSwitcher
    },
    {
      help: false, isLeft : true, color: this.mainColorOfButtons, inactiveVisualMode: false, disabled: false,
      id: 'num1', title: '1', content: '1',
      modeSwitcher : this.supportUtilsService.modeSwitcher
    },
    {
      help: false, isLeft : true, color: this.mainColorOfButtons, inactiveVisualMode: false, disabled: false,
      id: 'num2', title: '2', content: '2',
      modeSwitcher : this.supportUtilsService.modeSwitcher
    },
    {
      help: false, isLeft : true, color: this.mainColorOfButtons, inactiveVisualMode: false, disabled: false,
      id: 'num3', title: '3', content: '3',
      modeSwitcher : this.supportUtilsService.modeSwitcher
    },
    {
      help: false, isLeft : true, color: this.mainColorOfButtons, inactiveVisualMode: false, disabled: false,
      id: 'num4', title: '4', content: '4',
      modeSwitcher : this.supportUtilsService.modeSwitcher
    },
    {
      help: false, isLeft : true, color: this.mainColorOfButtons, inactiveVisualMode: false, disabled: false,
      id: 'num5', title: '5', content: '5',
      modeSwitcher : this.supportUtilsService.modeSwitcher
    },
    {
      help: false, isLeft : true, color: this.mainColorOfButtons, inactiveVisualMode: false, disabled: false,
      id: 'num6', title: '6', content: '6',
      modeSwitcher : this.supportUtilsService.modeSwitcher
    },
    {
      help: false, isLeft : true, color: this.mainColorOfButtons, inactiveVisualMode: false, disabled: false,
      id: 'num7', title: '7', content: '7',
      modeSwitcher : this.supportUtilsService.modeSwitcher
    },
    {
      help: false, isLeft : true, color: this.mainColorOfButtons, inactiveVisualMode: false, disabled: false,
      id: 'num8', title: '8', content: '8',
      modeSwitcher : this.supportUtilsService.modeSwitcher
    },
    {
      help: false, isLeft : true, color: this.mainColorOfButtons, inactiveVisualMode: false, disabled: false,
      id: 'num9', title: '9', content: '9',
      modeSwitcher : this.supportUtilsService.modeSwitcher
    },
    {
      help: false, isLeft : true, color: this.mainColorOfButtons, inactiveVisualMode: false, disabled: false,
      id: 'colors_shema', title: 'Цветовые схемы', content: 'C',
      modeSwitcher : this.supportUtilsService.modeSwitcher
    },
    {
      help: false, isLeft : true, color: this.mainColorOfButtons, inactiveVisualMode: false, disabled: false,
      id: 'gray_shema', title: 'Серая схема', content: 'G',
      modeSwitcher : this.supportUtilsService.modeSwitcher
    },
    {
      help: false, isLeft : true, color: this.mainColorOfButtons, inactiveVisualMode: false, disabled: false,
      id: 'r_help', title: 'Убрать помощь справа', content: '?',
      modeSwitcher : this.supportUtilsService.modeSwitcher
    },
    {
      help: false, isLeft : false, color: this.mainColorOfButtons, inactiveVisualMode: false, disabled: false,
      id: 'greed_onoff', title: 'Убрать сетку', content: '#',
      modeSwitcher : this.supportUtilsService.modeSwitcher
    },
    {
      help: false, isLeft : false, color: this.mainColorOfButtons, inactiveVisualMode: false, disabled: false,
      id: 'all_unvis', title: 'Убрать все цвета', content: 'X',
      modeSwitcher : this.supportUtilsService.modeSwitcher
    },
    {
      help: false, isLeft : false, color: this.mainColorOfButtons, inactiveVisualMode: false, disabled: false,
      id: 'sw_unvis', title: 'Поменять активные с невидимыми', content: '@',
      modeSwitcher : this.supportUtilsService.modeSwitcher
    },
    {
      help: false, isLeft : false, color: this.mainColorOfButtons, inactiveVisualMode: false, disabled: false,
      id: 'all_vis', title: 'Вернуть все цвета', content: 'A',
      modeSwitcher : this.supportUtilsService.modeSwitcher
    },
    {
      help: false, isLeft : false, color: this.mainColorOfButtons, inactiveVisualMode: false, disabled: false,
      id: 'brd_color', title: 'Поменять цвет обводки', content: 'B',
      modeSwitcher : this.supportUtilsService.modeSwitcher
    },
    {
      help: false, isLeft : false, color: this.mainColorOfButtons, inactiveVisualMode: false, disabled: false,
      id: 'lbrd_unvis_onoff', title: 'Убрать/отобразить обводку', content: 'b',
      modeSwitcher : this.supportUtilsService.modeSwitcher
    },
    {
      help: false, isLeft : false, color: this.mainColorOfButtons, inactiveVisualMode: false, disabled: false,
      id: 'nums_unvis_onoff', title: 'Убрать/отобразить цифры', content: '№',
      modeSwitcher : this.supportUtilsService.modeSwitcher
    },
    {
      help: false, isLeft : false, color: this.mainColorOfButtons, inactiveVisualMode: false, disabled: false,
      id: 'dots_mode_onoff', title: 'Точечный режим', content: '\u2219',
      modeSwitcher : this.supportUtilsService.modeSwitcher
    },
    {
      help: false, isLeft : false, color: this.mainColorOfButtons, inactiveVisualMode: false, disabled: false,
      id: 'zoom_in', title: 'Приблизить', content: '+',
      modeSwitcher : this.supportUtilsService.modeSwitcher
    },
    {
      help: false, isLeft : false, color: this.mainColorOfButtons, inactiveVisualMode: false, disabled: false,
      id: 'zoom_out', title: 'Отдалить', content: '-',
      modeSwitcher : this.supportUtilsService.modeSwitcher
    },
    {
      help: false, isLeft : false, color: this.mainColorOfButtons, inactiveVisualMode: false, disabled: false,
      id: 'full_screen', title: 'Развернуть на весь экран', content: '\u25A3',
      modeSwitcher : this.supportUtilsService.modeSwitcher
    },
    {
      help: false, isLeft : false, color: this.mainColorOfButtons, inactiveVisualMode: false, disabled: false,
      id: 'save_settings', title: 'Сохранить настройки отображения', content: 'visual_check',
      modeSwitcher : this.supportUtilsService.modeSwitcher
    },
    {
      help: false, isLeft : false, color: this.mainColorOfButtons, inactiveVisualMode: false, disabled: false,
      id: 'sw_panels', title: 'Поменять панели кнопок местами', content: '\u21C4',
      modeSwitcher : this.supportUtilsService.modeSwitcher
    },
    {
      help: false, isLeft : false, color: this.mainColorOfButtons, inactiveVisualMode: false, disabled: false,
      id: 'l_help', title: 'Убрать помощь слева', content: '?',
      modeSwitcher : this.supportUtilsService.modeSwitcher
    },
  ];

  private readonly subs: Subscription;
  private readonly subs_for_color_visual: Subscription;

  constructor(
    private readonly colorService: ColorService,
    private readonly history: HistoryService,
    private readonly supportUtilsService: SupportUtilsService
  ) {
    // автоматический покрас при инициализации класса
    this.subs = this.colorService.schema$.subscribe((schema) => {
      this.colored(schema);
    });
    // автоматическое присвоение значения на визуализацию
    this.subs_for_color_visual = this.history.visibleColors$.subscribe((visual) => {
      this.visualed_colors(visual);
    });
  }

  // отписка от слушания переменной
  ngOnDestroy(): void {
    this.subs.unsubscribe();
    this.subs_for_color_visual.unsubscribe();
  }



  // окрашивание кнопок
  private colored(shema: typeTenColors): void {

    for (const [i, {id, content}] of this.buttons.entries()) {

      // окрашивание кнопок с цифрами
      if (/^num\d$/.test(id)) {
        this.buttons[i].color = shema[+content];
      }
    }
  }

  // активация кнопок
  private visualed_colors(colors: visibleColors) {
    for (const [i, {id, content}] of this.buttons.entries()) {
      if (/^num\d$/.test(id)) {
        this.buttons[i].inactiveVisualMode = !colors[+content];
      }
    }
  }
}

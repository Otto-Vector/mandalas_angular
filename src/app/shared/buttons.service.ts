
import {Injectable, OnDestroy} from '@angular/core';
import {ColorService, typeTenColors} from './color.service';
import {Subscription} from 'rxjs';
import {HistoryService, visibleColors} from './history.service';
import {SupportUtilsService} from './support-utils.service';

export interface ButtonBooleanKeys <T>{
  isLeft: T;
  disabled: T;
  inactiveVisualMode: T;
  help: T;
}

export interface ButtonsInterface {
  id: string;
  color: string;
  title: string;
  content: string;
  mode: ButtonBooleanKeys<boolean>;
  modeSwitcher: (key: string, defaultTo?: boolean) => boolean;
}


@Injectable({providedIn: 'root'})
export class ButtonsService implements OnDestroy{

  mainColorOfButtons = '#e9e9e9';

  booleanKeys: ButtonBooleanKeys<string> = {
    isLeft: 'isLeft',
    disabled: 'disabled',
    inactiveVisualMode: 'inactiveVisualMode',
    help: 'help',
  };

  buttons: ButtonsInterface[] = [
    {
      color: this.mainColorOfButtons,
      id: 'stat', title: 'Статистика', content: 'S',
      mode: { inactiveVisualMode: false, disabled: false, help: false, isLeft: true },
      modeSwitcher : this.supportUtilsService.modeSwitcher
    },
    {
      color: this.mainColorOfButtons,
      id: 'num0', title: '0', content: '0',
      mode: { inactiveVisualMode: false, disabled: false, help: false, isLeft: true },
      modeSwitcher : this.supportUtilsService.modeSwitcher
    },
    {
      color: this.mainColorOfButtons,
      id: 'num1', title: '1', content: '1',
      mode: { inactiveVisualMode: false, disabled: false, help: false, isLeft: true },
      modeSwitcher : this.supportUtilsService.modeSwitcher
    },
    {
      color: this.mainColorOfButtons,
      id: 'num2', title: '2', content: '2',
      mode: { inactiveVisualMode: false, disabled: false, help: false, isLeft: true },
      modeSwitcher : this.supportUtilsService.modeSwitcher
    },
    {
      color: this.mainColorOfButtons,
      id: 'num3', title: '3', content: '3',
      mode: { inactiveVisualMode: false, disabled: false, help: false, isLeft: true },
      modeSwitcher : this.supportUtilsService.modeSwitcher
    },
    {
      color: this.mainColorOfButtons,
      id: 'num4', title: '4', content: '4',
      mode: { inactiveVisualMode: false, disabled: false, help: false, isLeft: true },
      modeSwitcher : this.supportUtilsService.modeSwitcher
    },
    {
      color: this.mainColorOfButtons,
      id: 'num5', title: '5', content: '5',
      mode: { inactiveVisualMode: false, disabled: false, help: false, isLeft: true },
      modeSwitcher : this.supportUtilsService.modeSwitcher
    },
    {
      color: this.mainColorOfButtons,
      id: 'num6', title: '6', content: '6',
      mode: { inactiveVisualMode: false, disabled: false, help: false, isLeft: true },
      modeSwitcher : this.supportUtilsService.modeSwitcher
    },
    {
      color: this.mainColorOfButtons,
      id: 'num7', title: '7', content: '7',
      mode: { inactiveVisualMode: false, disabled: false, help: false, isLeft: true },
      modeSwitcher : this.supportUtilsService.modeSwitcher
    },
    {
      color: this.mainColorOfButtons,
      id: 'num8', title: '8', content: '8',
      mode: { inactiveVisualMode: false, disabled: false, help: false, isLeft: true },
      modeSwitcher : this.supportUtilsService.modeSwitcher
    },
    {
      color: this.mainColorOfButtons,
      id: 'num9', title: '9', content: '9',
      mode: { inactiveVisualMode: false, disabled: false, help: false, isLeft: true },
      modeSwitcher : this.supportUtilsService.modeSwitcher
    },
    {
      color: this.mainColorOfButtons,
      id: 'colors_shema', title: 'Цветовые схемы', content: 'C',
      mode: { inactiveVisualMode: false, disabled: false, help: false, isLeft: true },
      modeSwitcher : this.supportUtilsService.modeSwitcher
    },
    {
      color: this.mainColorOfButtons,
      id: 'gray_shema', title: 'Серая схема', content: 'G',
      mode: { inactiveVisualMode: false, disabled: false, help: false, isLeft: true },
      modeSwitcher : this.supportUtilsService.modeSwitcher
    },
    {
      color: this.mainColorOfButtons,
      id: 'r_help', title: 'Убрать помощь справа', content: '?',
      mode: { inactiveVisualMode: false, disabled: false, help: false, isLeft: true },
      modeSwitcher : this.supportUtilsService.modeSwitcher
    },
    {
      color: this.mainColorOfButtons,
      id: 'greed_onoff', title: 'Убрать сетку', content: '#',
      mode: { inactiveVisualMode: false, disabled: false, help: false, isLeft: false },
      modeSwitcher : this.supportUtilsService.modeSwitcher
    },
    {
      color: this.mainColorOfButtons,
      id: 'all_unvis', title: 'Убрать все цвета', content: 'X',
      mode: { inactiveVisualMode: false, disabled: false, help: false, isLeft: false },
      modeSwitcher : this.supportUtilsService.modeSwitcher
    },
    {
      color: this.mainColorOfButtons,
      id: 'sw_unvis', title: 'Поменять активные с невидимыми', content: '@',
      mode: { inactiveVisualMode: false, disabled: false, help: false, isLeft: false },
      modeSwitcher : this.supportUtilsService.modeSwitcher
    },
    {
      color: this.mainColorOfButtons,
      id: 'all_vis', title: 'Вернуть все цвета', content: 'A',
      mode: { inactiveVisualMode: false, disabled: false, help: false, isLeft: false },
      modeSwitcher : this.supportUtilsService.modeSwitcher
    },
    {
      color: this.mainColorOfButtons,
      id: 'brd_color', title: 'Поменять цвет обводки', content: 'B',
      mode: { inactiveVisualMode: false, disabled: false, help: false, isLeft: false },
      modeSwitcher : this.supportUtilsService.modeSwitcher
    },
    {
      color: this.mainColorOfButtons,
      id: 'lbrd_unvis_onoff', title: 'Убрать/отобразить обводку', content: 'b',
      mode: { inactiveVisualMode: false, disabled: false, help: false, isLeft: false },
      modeSwitcher : this.supportUtilsService.modeSwitcher
    },
    {
      color: this.mainColorOfButtons,
      id: 'nums_unvis_onoff', title: 'Убрать/отобразить цифры', content: '№',
      mode: { inactiveVisualMode: false, disabled: false, help: false, isLeft: false },
      modeSwitcher : this.supportUtilsService.modeSwitcher
    },
    {
      color: this.mainColorOfButtons,
      id: 'dots_mode_onoff', title: 'Точечный режим', content: '\u2219',
      mode: { inactiveVisualMode: false, disabled: false, help: false, isLeft: false },
      modeSwitcher : this.supportUtilsService.modeSwitcher
    },
    {
      color: this.mainColorOfButtons,
      id: 'zoom_in', title: 'Приблизить', content: '+',
      mode: { inactiveVisualMode: false, disabled: false, help: false, isLeft: false },
      modeSwitcher : this.supportUtilsService.modeSwitcher
    },
    {
      color: this.mainColorOfButtons,
      id: 'zoom_out', title: 'Отдалить', content: '-',
      mode: { inactiveVisualMode: false, disabled: false, help: false, isLeft: false },
      modeSwitcher : this.supportUtilsService.modeSwitcher
    },
    {
      color: this.mainColorOfButtons,
      id: 'full_screen', title: 'Развернуть на весь экран', content: '\u25A3',
      mode: { inactiveVisualMode: false, disabled: false, help: false, isLeft: false },
      modeSwitcher : this.supportUtilsService.modeSwitcher
    },
    {
      color: this.mainColorOfButtons,
      id: 'save_settings', title: 'Сохранить настройки отображения', content: 'visual_check',
      mode: { inactiveVisualMode: false, disabled: false, help: false, isLeft: false },
      modeSwitcher : this.supportUtilsService.modeSwitcher
    },
    {
      color: this.mainColorOfButtons,
      id: 'sw_panels', title: 'Поменять панели кнопок местами', content: '\u21C4',
      mode: { inactiveVisualMode: false, disabled: false, help: false, isLeft: false },
      modeSwitcher : this.supportUtilsService.modeSwitcher
    },
    {
      color: this.mainColorOfButtons,
      id: 'l_help', title: 'Убрать помощь слева', content: '?',
      mode: { inactiveVisualMode: false, disabled: false, help: false, isLeft: false },
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

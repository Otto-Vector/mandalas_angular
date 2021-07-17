import { Component, OnInit } from '@angular/core';
import {ValuesService} from "../../shared/values.service";
import {HistoryService} from "../../shared/history.service";
import {InputStringService} from "../../shared/input-string.service";

@Component({
  selector: 'app-title-panel',
  templateUrl: './title-panel.component.html',
  styleUrls: ['./title-panel.component.scss']
})
export class TitlePanelComponent implements OnInit {

  constructor(private readonly valuesService: ValuesService,
              private history : HistoryService,
              private readonly  stringService : InputStringService

  ) {}


  title : string = this.history.getTitle
  number : string | number  = this.title.length
  max_input_length = this.valuesService.max_input_length
  title_placeholder: string = 'Название мандалы'

  ngOnInit(): void {

  }

  setValue(title) {
    this.title = this.stringService.modification_to_normal(title)
    this.history.setTitle = this.title
    this.number = this.number || this.title.length
  }

  clearTitle() {
    this.title = ""
    this.number = this.title.length
  }
  //функция изменения цифр по нажатию стрелок вверх-вниз
  number_of_symbols_changer_from_current(direction : 'up'|'down') {
    //если поле пустое, то отсчет ведется от длины введенного текста
    if (!this.number) this.number = this.title.length

    //добавление манипуляций с количеством из поля ввода имени мандалы
      if (direction === 'up' && +this.number < this.max_input_length)
        this.number = +this.number + 1
      else if (direction === 'down' && +this.number > 1)
        this.number = +this.number - 1
    }
}

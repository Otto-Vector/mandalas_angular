import {Component, Input, OnInit} from '@angular/core'
import {AppComponent} from "../app.component";
import {HistoryService} from "../shared/history.service";
import {ValuesService} from "../shared/values.service";

@Component( {
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})

export class TitleComponent implements OnInit {

  constructor(private fromGlobal: ValuesService,
  public history : HistoryService) {}


  title : string = this.history.title_input.value
  number  = this.title.length
  max_input_length = this.fromGlobal.max_input_length

  ngOnInit(): void {

  }


  fixValue(title) {
    this.title = title.trim()
    this.number = title.length
  }

  clearTitle() {
    this.title = ""
    this.number = this.title.length
    // let todo_focus_wrap = () => title_input.focus()
    // todo_focus_wrap()
  }

  onlyDigits(event) {
    // this.number = Number(this.number.toString().replace(/[^\d]/g, ''))
    if (this.number > this.max_input_length) {
      this.number = 33
    }
    if (event.data === "+") this.number = Number(this.number.toString().replace(/[^\d]/g, ''))
	// Разрешаем: backspace, delete, tab и escape
	// if ( event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 27 ||
	// 	// Разрешаем: Ctrl+A
	// 	(event.keyCode == 65 && event.ctrlKey === true) ||
	// 	// Разрешаем: home, end, влево, вправо
	// 	(event.keyCode >= 35 && event.keyCode <= 39)) {
  //
	// 	// Ничего не делаем
	// 	return;
	// } else {
	// 	// Запрещаем все, кроме цифр на основной клавиатуре, а так же Num-клавиатуре
	// 	if ((event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105 )) {
  //
	// 		event.preventDefault();
	// 	}
	// }

  }
}

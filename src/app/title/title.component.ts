import {Component, Input, OnInit} from '@angular/core'
import {AppComponent} from "../app.component";
import {HistoryService} from "../shared/history.service";

@Component( {
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})

export class TitleComponent implements OnInit {

  constructor(private fromGlobal: AppComponent,
  public history : HistoryService) {}


  title = this.history.title_input.value
  number = this.fromGlobal.max_input_length / 2
  max_input_length = this.fromGlobal.max_input_length
  color: string = this.randomColor()
  history_arr = this.history.history_default



  ngOnInit(): void {

  }

  randomColor() : string {
    return '#'+Math.floor(Math.random() * 16777215).toString(16)
  }

    inputEnter() {
    console.log("Ввели")
  }


  fixValue() {
    if (this.title == 'нет') {
      this.title = 'да'
    }

  }
}

import { Component, OnInit } from '@angular/core';
import {ValuesService} from "../../shared/values.service";
import {HistoryService} from "../../shared/history.service";

@Component({
  selector: 'app-title-panel',
  templateUrl: './title-panel.component.html',
  styleUrls: ['./title-panel.component.scss']
})
export class TitlePanelComponent implements OnInit {

  constructor(private fromGlobal: ValuesService,
  public history : HistoryService) {}


  title : string = this.history.title_input.value
  number : string | number  = this.title.length
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

  }

}

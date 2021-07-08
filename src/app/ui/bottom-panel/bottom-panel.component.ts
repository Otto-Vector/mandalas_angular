import { Component, OnInit } from '@angular/core';
import {SelectedValue, SelectService} from "../../shared/select.service";
import {HistoryService} from "../../shared/history.service";

@Component({
  selector: 'app-bottom-panel',
  templateUrl: './bottom-panel.component.html',
  styleUrls: ['./bottom-panel.component.scss']
})
export class BottomPanelComponent implements OnInit {

  constructor(
    private selected : SelectService,
    private history : HistoryService) { }

  selected_value : SelectedValue [] = this.selected.selected_mandala
  select_now : string = this.history.history_default.selected_mandala

  ngOnInit(): void {
    // console.log(this.select_now)
  }

  run() {
    // console.log(this.select_now)
  }
}

import { Component, OnInit } from '@angular/core';
import {SelectedValue, SelectService} from "../../shared/select.service";
import {HistoryService} from "../../shared/history.service";

@Component({
  selector: 'app-footer-panel',
  templateUrl: './footer-panel.component.html',
  styleUrls: ['./footer-panel.component.scss']
})
export class FooterPanelComponent implements OnInit {

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

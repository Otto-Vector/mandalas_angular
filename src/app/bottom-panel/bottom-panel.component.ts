import { Component, OnInit } from '@angular/core';
import {SelectedValue, SelectService} from "../shared/select.service";

@Component({
  selector: 'app-bottom-panel',
  templateUrl: './bottom-panel.component.html',
  styleUrls: ['./bottom-panel.component.scss']
})
export class BottomPanelComponent implements OnInit {

  constructor( private glValue : SelectService) { }

  selected_value : SelectedValue [] = this.glValue.selected_mandala
  select_now : string = this.selected_value[1].value

  ngOnInit(): void {
    // console.log(this.select_now)
  }

  run() {
    // console.log(this.select_now)
  }
}

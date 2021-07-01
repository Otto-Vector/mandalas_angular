import { Component, OnInit } from '@angular/core';
import {SelectedValue, ValuesService} from "../shared/values.service";

@Component({
  selector: 'app-bottom-panel',
  templateUrl: './bottom-panel.component.html',
  styleUrls: ['./bottom-panel.component.scss']
})
export class BottomPanelComponent implements OnInit {

  constructor( private glValue : ValuesService) { }

  selected_value : SelectedValue [] = this.glValue.selected_mandala

  ngOnInit(): void {
  }

}

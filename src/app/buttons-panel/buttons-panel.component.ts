import { Component, OnInit } from '@angular/core';
import {ButtonsService} from "../shared/buttons.service";

@Component({
  selector: 'app-buttons-panel',
  templateUrl: './buttons-panel.component.html',
  styleUrls: ['./buttons-panel.component.scss']
})
export class ButtonsPanelComponent implements OnInit {

  constructor(public buttons : ButtonsService) {
  }

  ngOnInit(): void {
    // this.buttons.colored('main')
  }

}

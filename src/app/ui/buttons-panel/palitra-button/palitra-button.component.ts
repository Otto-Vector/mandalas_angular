import {Component, Input, OnInit} from '@angular/core';
import {ButtonsInterface} from "../../../shared/buttons.service";
import {ActionsService} from "../../../shared/actions.service";

@Component({
  selector: 'app-palitra-button',
  templateUrl: './palitra-button.component.html',
  styleUrls: ['./palitra-button.component.scss']
})

export class PalitraButtonComponent implements OnInit {


@Input() localButton : ButtonsInterface
  class_name: string = 'palitra_button'
  unactive_visual_mode: string = 'unactive_visual_mode'
  action

  constructor( private readonly actionsService : ActionsService) {
      this.action  = actionsService
  }

  ngOnInit(): void {
    // this.localButton.position = this.localButton.position ||

  }


}

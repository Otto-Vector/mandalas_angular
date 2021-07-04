import {Component, Input, OnInit} from '@angular/core';
import {Buttons} from "../shared/buttons.service";
import {ActionsService} from "../shared/actions.service";

@Component({
  selector: 'app-palitra-button',
  templateUrl: './palitra-button.component.html',
  styleUrls: ['./palitra-button.component.scss']
})

export class PalitraButtonComponent implements OnInit {

@Input() localButton : Buttons
  class_name: string = 'palitra_button'
  opacity_button: string = 'opacity_button'
  unactive_visual_button: string = 'unactive_visual_button'


  constructor( public actions : ActionsService) {

  }

  ngOnInit(): void {
    // this.localButton.position = this.localButton.position ||

  }


}

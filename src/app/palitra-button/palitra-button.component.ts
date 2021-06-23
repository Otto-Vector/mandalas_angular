import {Component, Input, OnInit} from '@angular/core';
import {Buttons, ButtonsService} from "../shared/buttons.service";

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


  constructor( public globalButton : ButtonsService) {

  }

  ngOnInit(): void {
    // this.localButton.position = this.localButton.position || ''
  }

  buttonListener(){
    if (this.localButton.id === 'r_help') {
      let i=0
      for (let {left} of this.globalButton.buttons) {
        if (left) {
          this.globalButton.buttons[i].help = !this.globalButton.buttons[i].help
        }
        i++
      }
    }

    if (this.localButton.id === 'l_help') {
      let i=0
      for (let {left} of this.globalButton.buttons) {
        if (!left) {
          this.globalButton.buttons[i].help = !this.globalButton.buttons[i].help
        }
        i++
      }
    }

  }
}

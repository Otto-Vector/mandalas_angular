import {Component, Input, OnInit} from '@angular/core';
import {Buttons, ButtonsService} from "../shared/buttons.service";

@Component({
  selector: 'app-palitra-button',
  templateUrl: './palitra-button.component.html',
  styleUrls: ['./palitra-button.component.scss']
})

export class PalitraButtonComponent implements OnInit {

@Input() localButton : Buttons
  position: string
  class_name: string = 'palitra_button'
  // opacity_mode: boolean = false
  // unactive_visual_mode: boolean = false
  opacity_button: string = 'opacity_button'
  unactive_visual_button: string = 'unactive_visual_button'
  help_class:string = 'help'
  help_left: string = 'help_left'
  help_right: string = 'help_right'
  // button_palitra: Buttons;

  constructor( public globalButton : ButtonsService) {

  }

  ngOnInit(): void {
    // this.localButton.position = this.localButton.position || ''
  }

  //для проверки взаимодействия глобальных элементов состояний кнопки
  boolChanger(ids : string): void {
    // this.localButton.opacity_mode = !this.localButton.opacity_mode
    // let i=0;
    // for (let {id} of this.globalButton.buttons) {
    //   if (id === ids) {
    //     console.log("opacity_mode : ",this.globalButton.buttons[i].opacity_mode)
    //     // this.globalButton.buttons[i].color = (this.globalButton.buttons[i-1].color === "green") ?
    //     // this.globalButton.color : "green"
    //   }
    //   i++
    // }

  }
}

import {Component, Input, OnInit} from '@angular/core';
import {ButtonsInterface} from "../../../shared/buttons.service";

@Component({
  selector: 'app-help-descriptors',
  templateUrl: './help-descriptors.component.html',
  styleUrls: ['./help-descriptors.component.scss']
})
export class HelpDescriptorsComponent implements OnInit {

  @Input() localButton : ButtonsInterface

  help_class: string = 'help'
  help_left: string  = 'help_left'
  help_right: string = 'help_right'

  constructor() { }

  ngOnInit(): void {
  }

}

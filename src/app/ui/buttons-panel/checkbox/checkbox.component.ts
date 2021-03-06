import {Component, Input, OnInit} from '@angular/core';
import {ButtonsInterface} from "../../../shared/buttons.service";


@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})

export class CheckboxComponent implements OnInit {

    @Input() button_check: ButtonsInterface

        block_name   = 'checkbox'
        default_type = 'checkbox'
        main_class   = this.block_name
        label_class  = this.block_name + '__label'
        input_class  = this.block_name + '__input'
        box_class    = this.block_name + '__box'
        checked_mode :boolean = false

  constructor() { }

  ngOnInit(): void {

  }

}

import {Component, Input, OnInit} from '@angular/core'
import {AppComponent, TitleTest} from "../app.component";

@Component( {
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})

export class TitleComponent implements OnInit {
  // @Input() max_input_length : number
  @Input() title_in : TitleTest

  constructor(private fromGlobal: AppComponent) {}


  title = this.fromGlobal.title
  max_input_length = this.fromGlobal.max_input_length
  num : number = 33
  color: string = this.randomColor()
  borderColor: string = this.randomColor()
  borderpx: number = 1


  ngOnInit(): void {
    console.log(this.title)
  }

  randomColor() : string {
    return '#'+Math.floor(Math.random() * 16777215).toString(16)
  }

  // moreOne(...strings) : void {
  //   for (let i =0; i < strings.length; i++)
  //     strings[i] = this.randomColor()
  //   console.log(this.color)
  // }

  // inputEnter(event: any) {
  //   this.title = event.target.value
  // }

    inputEnter() {
    console.log("Ввели")
  }

  // on_Change(event: string) {
  //   let ivclose = event
  //   if (event.length > 5) {
  //     ivclose = event.substr(0,5)
  //     this.title = ivclose}
  // return ivclose
  // }

  fixValue() {
    if (this.title == 'нет') {
      this.title = 'да'
    }
    // if (this.title.length >= 5) {
    //   let z = [...this.title].join('')
    //   z = z.substr(0,5)
    //   this.title = z
    //
    // }

  }
}

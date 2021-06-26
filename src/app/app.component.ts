import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent implements OnInit{
  title: string = 'mandalas-fibonacci';
  public max_input_length = 25

  ngOnInit(): void {
  }
}

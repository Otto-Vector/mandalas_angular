import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {SceneService} from './scene.service';
import {VisualConstructorsService} from "./visual-constructors.service";
import {Subscription} from "rxjs";
import {HistoryService} from "../shared/history.service";

@Component({
  selector: 'app-scene',
  templateUrl: './scene.component.html',
  styleUrls: ['./scene.component.scss']
})
export class SceneComponent implements OnInit, OnDestroy {

  @ViewChild('rendererCanvas', {static: true})
  public rendererCanvas: ElementRef<HTMLCanvasElement>;
  private subsTitle : Subscription

  public constructor(private engServ: SceneService,
                     private visualAdd: VisualConstructorsService,
                     private history : HistoryService
  ) {
  }

  public ngOnInit(): void {
    this.engServ.createScene(this.rendererCanvas)
    this.engServ.animate()

    this.subsTitle = this.history.title_input$.subscribe((_) => {
      this.visualAdd.clear_scene(this.engServ.scene)
      this.visualAdd.add_mandala(this.engServ.scene)
      }
    )


  }

  ngOnDestroy(): void {
    this.visualAdd.clear_scene(this.engServ.scene)
  }
}

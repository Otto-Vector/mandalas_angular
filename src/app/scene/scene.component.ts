import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {SceneService} from './scene.service';
import {VisualConstructorsService} from "./visual-constructors.service";

@Component({
  selector: 'app-scene',
  templateUrl: './scene.component.html',
  styleUrls: ['./scene.component.scss']
})
export class SceneComponent implements OnInit {

  @ViewChild('rendererCanvas', {static: true})
  public rendererCanvas: ElementRef<HTMLCanvasElement>;

  public constructor(private engServ: SceneService,
                     private visualAdd: VisualConstructorsService) {
  }

  public ngOnInit(): void {
    this.engServ.createScene(this.rendererCanvas);
    this.engServ.animate();
    this.visualAdd.add_mandala(this.engServ.scene)
  }

}

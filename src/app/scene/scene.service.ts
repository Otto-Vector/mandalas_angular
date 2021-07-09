import * as THREE from 'three';
import {ElementRef, Injectable, NgZone, OnDestroy} from '@angular/core';
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";
import {UiComponent} from "../ui/ui.component";

// import {root} from "rxjs/internal-compatibility";

@Injectable({providedIn: 'root'})
export class SceneService implements OnDestroy {
  private canvas: HTMLCanvasElement;
  private renderer: THREE.WebGLRenderer;
  private camera: THREE.PerspectiveCamera;
  private scene: THREE.Scene;
  public controls: OrbitControls
  // private active_layer: HTMLElement = document.getElementById('ui-wrapper')
  // private active_layer: HTMLElement = window.document.body['app-root']['app-ui']
  private light: THREE.AmbientLight;
  private cube: THREE.Mesh;

  private frameId: number = null;

  public constructor(
    private ngZone: NgZone,

  ) {
    // this.active_layer = ui.uiHTMLwrap
    // console.log(this.active_layer)
    // console.log(window.document)
  }

  public ngOnDestroy(): void {
    if (this.frameId != null) {
      cancelAnimationFrame(this.frameId);
    }
  }

  public createScene(canvas: ElementRef<HTMLCanvasElement>): void {
    // The first step is to get the reference of the canvas element from our HTML document
    this.canvas = canvas.nativeElement;

    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      alpha: true,    // transparent background
      antialias: true // smooth edges
    });
    this.renderer.setSize(window.innerWidth, window.innerHeight);

    // create the scene
    this.scene = new THREE.Scene();

    this.camera = new THREE.PerspectiveCamera(
      75, window.innerWidth / window.innerHeight, 0.1, 1000
    );
    this.camera.position.z = 5;
    this.scene.add(this.camera);

    ////////////////////////////////////////////////////////////////////////////
    //УПРАВЛЕНИЕ ПРИБЛИЖЕНИЕМ
    ////////////////////////////////////////////////////////////////////////////

    //управление приближением
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    //применяем к активной зоне отрисовки
    this.controls.listenToKeyEvents(this.canvas)
    //controls.addEventListener( 'change', render ); // call this only in static scenes (i.e., if there is no animation loop)

    //отключаем ненужные применения
    this.controls.enableRotate = false //отключаем поворот
    this.controls.enablePan = false //отключаем перетаскивание
    this.controls.screenSpacePanning = false; //отключаем чтото ещё

    //включаем, когда не действует автоповорот
    this.controls.enableDamping = true; // an animation loop is required when either damping or auto-rotation are enabled
    this.controls.dampingFactor = 0.05;

    //параметры дистанции
    this.controls.minDistance = 1;
    this.controls.maxDistance = 100;

    //???это может быть интересно. возможно повлияет на автофокус
    this.controls.maxPolarAngle = Math.PI / 2;

    // soft white light
    // this.light = new THREE.AmbientLight(0x404040);
    // this.light.position.z = 100;
    // this.scene.add(this.light);

    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const randColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    const material = new THREE.MeshBasicMaterial({color: randColor});
    this.cube = new THREE.Mesh(geometry, material);
    this.scene.add(this.cube);

  }

  public animate(): void {
    // We have to run this outside angular zones,
    // because it could trigger heavy changeDetection cycles.
    this.ngZone.runOutsideAngular(() => {
      if (document.readyState !== 'loading') {
        this.render();
        this.controls.update();
      } else {
        window.addEventListener('DOMContentLoaded', () => {
          this.render();
          this.controls.update();
        });
      }
      // this.controls.update();
      window.addEventListener('resize', () => {
        this.resize();
      });
    });
  }

  public render(): void {
    this.frameId = requestAnimationFrame(() => {
      this.render();
    });

    this.cube.rotation.x += 0.01;
    this.cube.rotation.y += 0.01;
    this.renderer.render(this.scene, this.camera);
  }

  public resize(): void {
    const width = window.innerWidth;
    const height = window.innerHeight;

    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();

    this.renderer.setSize(width, height);
  }
}

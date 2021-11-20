import { Injectable } from '@angular/core';
import {ColorService} from "../shared/color.service";
import {Subscription} from "rxjs";

import * as THREE from 'three';
import {BoxGeometry, Material, Mesh, Scene, SphereGeometry} from "three";

import {CalcMandalasAlgorithmService} from "./calc-mandalas-algorithm.service";
import {HistoryService} from "../shared/history.service";
import {InputStringService} from "../shared/input-string.service";

//визуальный объект с вынесеным числом цвета для обработки
type visualObject = {
  colornum : number
  mesh : Mesh
}

@Injectable({
  providedIn: 'root'
})
export class VisualConstructorsService {

  private readonly subs_for_color : Subscription
  private readonly subs_for_color_visual : Subscription

  constructor( private readonly colorService : ColorService,
               private readonly algorithm : CalcMandalasAlgorithmService,
               private readonly history : HistoryService,
               private readonly inputStringSrv : InputStringService
  ) {
    //подписка на изменения параметров цвета
    this.subs_for_color = colorService.schema$.subscribe((schema) => {
          this.color_material_set(schema)
        })
    ////подписка на изменения параметров визуальности
    this.subs_for_color_visual = history.visibleColors$.subscribe((visibles) =>{
      for (let [colornum,bool] of visibles.entries()) {
        this.unvis(colornum,bool)
      }
    })
  }

  //геометрия кубов//
  cubeGeom = new THREE.BoxGeometry(1, 1, 0.01)
  //геометрия точек//
  sphereGeom = new THREE.SphereGeometry(0.15,32,32)
  private color_material : Material

  //материал кубов создаётся из массива цветов
  //или перекрашивается, если уже создан
  private color_material_set(basic_colors):void {
    if (!this.color_material) {
      this.color_material = basic_colors.map(
        (color_n : string) => new THREE.MeshBasicMaterial({color: color_n}))
    } else {
      for (let [n,color] of basic_colors.entries()) {
        this.color_material[n].color.set(color)
      }
    }
  }
  //передаются координаты, номер цвета и геометрия объекта.
  //Возвращает новый объект (куб, сфера)
  private cubus_construct( x: number, y: number, z: number, colornum :number,
                           setGeom: BoxGeometry | SphereGeometry = this.cubeGeom ) : visualObject {

    //в конструкторе для бордюра задаются отрицательные значения цвета
    // let color_material_choice = (colornum < 0) ? color_material_for_border
    //                                            : color_material[colornum]
    let color_material_choice = this.color_material[colornum]
    let cubus = new THREE.Mesh( setGeom , //геометрия куба задана один раз
                                color_material_choice
                              )
    cubus.position.set(x,y,z) // устанавливается позиция объекта
    // if (colornum >= 0) cubus.colornum = Math.abs(colornum) //идентификатор для отбора объектов по значению цвета
    // scene.add(cubus) //визуализация полученного объекта

    return { colornum, mesh : cubus }
  }


  //сборка осей
  //принимает одномерный числовой массив
  private axis_visual(input_nums_fn:number[]) : visualObject[] {

    let axis_fn : visualObject[] = []

    //нулевой куб в центре оси
    axis_fn[0] = this.cubus_construct( 0,0,0, input_nums_fn[0] )

    let colornum : number
    for (let i = 1; i < input_nums_fn.length; i++) {
      //присваиваем значение цвета из принятого массива
      colornum = input_nums_fn[i]

      //направо
      axis_fn.push( this.cubus_construct( i,0,0, colornum) )
      //вверх
      axis_fn.push( this.cubus_construct( 0,i,0, colornum) )
      //налево
      axis_fn.push( this.cubus_construct( -i,0,0, colornum) )
      //вниз
      axis_fn.push( this.cubus_construct( 0,-i,0, colornum) )

    }

    return axis_fn
  }//возвращает одномерный массив объектов

  //создание объектов, для дальнейшей визуализации
  private plain_x_cube_visual(plane_of_colors_fn : number[][]) : visualObject[] {

    let plain_x_cube_fn : visualObject[] = []
    //отрисовка панелей
    let color_n
    for (let y = 1; y < plane_of_colors_fn[0].length; y++)
      for (let x = 1; x < plane_of_colors_fn[0].length; x++) {

        //назначение цвета в соответствии с цветоцифрами, вычисленными по примененному алгоритму
        color_n = plane_of_colors_fn[y][x]

        //верх-право
        plain_x_cube_fn.push( this.cubus_construct ( y, x, 0, color_n) )
        //низ-лево
        plain_x_cube_fn.push( this.cubus_construct ( -y, -x, 0, color_n) )
        //верх-лево
        plain_x_cube_fn.push( this.cubus_construct ( -x, y, 0, color_n) )
        //низ-право
        plain_x_cube_fn.push( this.cubus_construct ( x, -y, 0, color_n) )
      }

    return plain_x_cube_fn
  }
  private axis : visualObject[]
  private plane : visualObject[]

  //скрытие/отображение объектов
  private unvis(colorn: number, bool_value: boolean) {
    if (this.axis) {
      for (let {colornum, mesh} of [...this.axis,...this.plane]) {
        if (colorn === colornum) {
          mesh.visible = bool_value
        }
      }
    }
  }
  /*////////////////////////////////////////////////////////////////////////////////////////////////*/
  //добавляет объекты на сцену
  public add_mandala(scene : Scene) {
    // let numsArray : number[] = [0,1,2,3,4,5]
    let numsArray : number[] = this.inputStringSrv.toArrayOfNumbers(this.history.getTitle)
    numsArray.unshift(numsArray.reduce((a,b) => (a+b)%9 || 9 ))
    this.axis  = this.axis_visual(numsArray)
    this.plane = this.plain_x_cube_visual(
      this.algorithm.plane_square_3x_algorithm(numsArray)
    )

    for (let {colornum, mesh} of [...this.axis,...this.plane]) {
      scene.add(mesh)

    }
  }
  public clear_scene(scene : Scene) {
    if (this.axis) {
      for (let {mesh} of this.axis) {
        scene.remove(mesh)
      }
      this.axis = null
    }
    if (this.plane) {
      for (let {mesh} of this.plane) {
        scene.remove(mesh)
      }
      this.plane = null }

    }

  //////////////////////////////////////////////////////////////////////////////

}

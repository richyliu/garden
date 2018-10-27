import { Component, OnInit } from '@angular/core';
import * as Konva from 'konva';

@Component({
  selector: 'app-location-choose',
  templateUrl: './location-choose.component.html',
  styleUrls: ['./location-choose.component.scss']
})
export class LocationChooseComponent implements OnInit {
  private readonly width: number;
  private readonly height: number;
  private readonly size: number;

  constructor() {
    this.width = 30;
    this.height = 20;
    this.size = 40;
  }

  ngOnInit() {
    // first we need to create a stage
    const stage = new Konva.Stage({
      container: 'container',   // id of container <div>
      width: 300,
      height: 300,
      draggable: true,
      dragBoundFunc: pos => {
        return {
          x: LocationChooseComponent.clamp(pos.x, -this.width * this.size + stage.getWidth(), 0),
          y: LocationChooseComponent.clamp(pos.y, -this.height * this.size + stage.getHeight(), 0),
        };
      }
    });

    // then create layer
    const layer = new Konva.Layer();

    for (let i = 0; i < this.width; i++) {
      for (let j = 0; j < this.height; j++) {
        layer.add(LocationChooseComponent.genRect(i * this.size, j * this.size, this.size, i, j));
      }
    }

    stage.on('tap', e => {
      const xy = e.target.name().split(' ').map(Number);
      this.clickSquare(xy[0], xy[1]);
      layer.draw();
    });

    // add the layer to the stage
    stage.add(layer);

    // draw the image
    layer.draw();
  }

  private clickSquare(x: number, y: number) {
    console.log(`square ${x}, ${y} was clicked in square ${this.size} large`);
  }

  private static clamp(num: number, min: number, max: number): number {
    return Math.min(Math.max(min, num), max);
  }

  private static genRect(x: number, y: number, size: number, i: number, j: number, color?: string): any {
    return new Konva.Rect({
      x,
      y,
      width: size,
      height: size,
      fill:
        color ||
        ['red', 'blue', 'yellow', 'green'][Math.floor(Math.random() * 4)],
      stroke: 'black',
      strokeWidth: 2,
      name: i + ' ' + j
    });
  }
}

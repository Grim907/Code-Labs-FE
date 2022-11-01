import { ViewEncapsulation } from '@angular/compiler/src/core';
import { Component, Input, OnInit, } from '@angular/core';

@Component({
  selector: 'app-serverelement',
  templateUrl: './serverelement.component.html',
  styleUrls: ['./serverelement.component.css'],
  //Encapsulation: ViewEncapsulation.ShadowDom
})
export class ServerelementComponent implements OnInit {
 @Input('srvElement') element: {type: string, name: string, content: string}

  constructor() { }

  ngOnInit(): void {
  }

}

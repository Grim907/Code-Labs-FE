import { ViewEncapsulation } from '@angular/compiler/src/core';
import { Component,
   Input,
    OnChanges,
     OnInit,
    } from '@angular/core';

@Component({
  selector: 'app-serverelement',
  templateUrl: './serverelement.component.html',
  styleUrls: ['./serverelement.component.css'],
  //Encapsulation: ViewEncapsulation.ShadowDom
})
export class ServerelementComponent implements OnInit, OnChanges {
 @Input('srvElement') element: {type: string, name: string, content: string}

  constructor() {
    console.log('constructor called!')

  }

  ngOnChanges() {
    console.log('cngOnChanges called!')
    console.log(changes);
  }

  ngOnInit(): void {
    console.log('ngOnit called!')
  }

}

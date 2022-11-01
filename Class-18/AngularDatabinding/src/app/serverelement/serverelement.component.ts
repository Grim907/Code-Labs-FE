import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-serverelement',
  templateUrl: './serverelement.component.html',
  styleUrls: ['./serverelement.component.css']
})
export class ServerelementComponent implements OnInit {
  element: { type: string; name: string; content: string; } | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}

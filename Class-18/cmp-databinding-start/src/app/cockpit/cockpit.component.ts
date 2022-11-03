import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  nameInput: any;
onAddServer() {
throw new Error('Method not implemented.');
}
onAddBlueprint() {
throw new Error('Method not implemented.');
}
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  //newServerName= '';
  //newServerContent= '';
  @ViewChild('serverContentInput') serverContentInput: ElementRef;
  constructor() { }

  ngOnInit(): void {
  }
  onServerAdded(nameInput: HTMLInputElement) {
    this.serverCreated.emit({
    serverName: this.nameInput.value,
    serverContent: this.serverContentInput.nativeElement.value
    })

  }

  onBlueprintAdded(nameInput) {
    this.serverCreated.emit({
      serverName: this.nameInput.value,
      serverContent: this.serverContentInput.nativeElement.value
    })
    }
}

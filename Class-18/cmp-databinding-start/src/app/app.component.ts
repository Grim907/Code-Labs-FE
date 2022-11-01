import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{}];


  }
  //onServerAdded(//serverData: {serverName: string, serverContent: string}) {
    //this.serverElements.push({
      //type: 'server',
      //name: serverData.serverName,
      //content: serverData.serverContent,
    //});
  //}

  //onBlueprintAdded(blueprintData {serverName: string, serverContent: string}) {
    //this.serverElements.push({
      //type: 'blueprint',
     // name: blueprintData.serverName,
     // content: bleprintData.serverContent,
   // });
 // }


function onBlueprintAdded(blueprintData: any, arg1: { serverName: any; serverContent: any; }) {
  throw new Error('Function not implemented.');
}

function onServerAdded(serverData: any, arg1: { serverName: any; serverContent: any; }) {
  throw new Error('Function not implemented.');
}


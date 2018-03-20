import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  alowNewServer: boolean = false;
  serverCreationStatus = "No new server created";
  serverName: string = '';
  serverCreated: boolean = false;
  servers = ['Test', 'Test2'];

  constructor() { 
    setTimeout(()=>{
      this.alowNewServer = !this.alowNewServer;
    }, 2000);
  }

  ngOnInit() {
  }

  onServerCreated(){
    this.serverCreated = true;
    // this.serverCreationStatus = `New server was created. Server name: ${this.serverName}`;
    this.servers.push(this.serverName);
    
  }

  onUpdateServerName(event: Event){
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}

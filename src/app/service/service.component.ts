import { Component, OnInit } from '@angular/core';
import { ServerConnectService } from '../server-connect.service';


@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {

  data;
  constructor(private ServerConnectService : ServerConnectService) { }

  ngOnInit() {
    console.log(this.data == undefined);
    
  }

  useService()
  {
    
    this.ServerConnectService.retrieveData().subscribe( datas => this.data = datas.contacts);
  }

}



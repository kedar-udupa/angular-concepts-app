import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ServerConnectService {

  url = 'https://address-book-demo.herokuapp.com/api/contacts';
  constructor(private HttpClient : HttpClient) 
  {

  }

  retrieveData()
  {
    return this.HttpClient.get(this.url);
  }

}

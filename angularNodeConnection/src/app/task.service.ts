import { Injectable } from '@angular/core';
import { WebRequestHandlerService } from './web-request-handler.service';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private webRequestHandler : WebRequestHandlerService) { }

  testing(data : string ){
   // console.log(data);
    return this.webRequestHandler.post('test',data);
    
  }
}

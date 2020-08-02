import { Component, OnInit } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {TaskService} from 'src/app/task.service';

const materialComponents = [
  MatButtonModule
];
@Component({
  selector: 'app-material-button',
  templateUrl: './material-button.component.html',
  styleUrls: ['./material-button.component.css']
})
export class MaterialButtonComponent implements OnInit {

  constructor(private taskService : TaskService) { }

  testing(){
    this.taskService.testing("hello").subscribe((reponse : any)=>{
      alert(`response is ${reponse}`);
      console.log(reponse);
    });
  //  alert("inside testing");
  }

  ngOnInit(): void {
  }

}

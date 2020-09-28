import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-assign-test',
  templateUrl: './assign-test.component.html',
  styleUrls: ['./assign-test.component.css']
})
export class AssignTestComponent implements OnInit {

  message: any;
  message1:String;
  constructor(private myservice: MyserviceService,private router: Router) { }

  ngOnInit(): void {
  }
onSubmit(obj):any{
  this.myservice.assignTest(obj.id,obj.userId).subscribe(data => {
    this.message = data;
  },error => this.message1 =error.error);
  
}
}

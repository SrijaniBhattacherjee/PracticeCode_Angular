import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [FormsModule,NgIf],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
constructor(private route: ActivatedRoute){}
  name:null|string = "";

  ngOnInit(){
    this.route.params.subscribe((params)=>{
      console.log(params);
      this.name=params['name'];
    })
    //passing data from one component to another
  }

  addDetails(val:NgForm){
    console.log(val);
  }
}

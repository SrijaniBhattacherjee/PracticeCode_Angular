import { Component } from '@angular/core';
import { ProfileComponent } from "../profile/profile.component";
import { ActivatedRoute, RouterLink, RouterStateSnapshot } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ProfileComponent,RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private route: ActivatedRoute){}

  username: string| null = "" ;
  ngOnInit(){
    this.username = this.route.snapshot.paramMap.get('name');
    console.log(this.username);
    //passing data from one component to another
  }
}



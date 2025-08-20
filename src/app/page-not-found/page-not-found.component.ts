import { Component } from '@angular/core';
import { LoginComponent } from "../login/login.component";
import { ProfileComponent } from "../profile/profile.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-page-not-found',
  standalone: true,
  imports: [LoginComponent, ProfileComponent,RouterLink],
  templateUrl: './page-not-found.component.html',
  styleUrl: './page-not-found.component.css'
})
export class PageNotFoundComponent {

}

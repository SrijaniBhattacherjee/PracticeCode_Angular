
import { NgFor } from "@angular/common";
import {Component, Input} from "@angular/core";
import { RouterLink } from "@angular/router";

@Component({
    selector: 'app-profile',
    imports:[RouterLink,NgFor],
    standalone: true, //enable is needed for Angular 17+ for imports
    templateUrl: './profile.component.html',
    styles: 'h1{color:red}' 
})

export class ProfileComponent{

@Input() user:string=''; // input decorator for profile

users=[
    {name: 'srijani', age:'43', Id:'1'},
    {name:'sumo',age:'22',Id:'2'},
    {name:'bhutto',age:'34',Id:'3'}
];

} // custom component created
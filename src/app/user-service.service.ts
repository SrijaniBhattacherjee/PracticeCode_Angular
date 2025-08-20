import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  users:any
  constructor(private http:HttpClient) {
    console.log("user service");
   }

   getUserList(){
    return[
      {name:'SRK', branch:'Red Chillis', stock:'1200$'},
      {name:'Ahaan', branch:'Saiyaara', stock:'100$'},
      {name:'Hrithik', branch:'War 2', stock:'1000$'},
      {name:'Salman', branch:'Tiger zinda hai', stock:'1400$'},
      {name:'Vicky', branch:'Chaava', stock:'500$'},
      {name:'Varun', branch:'Bhediya', stock:'200$'},
    ]
   }

   //external api call for get method.
   getproductsList(){
    const productsAPI = 'https://dummyjson.com/products';
    return this.http.get(productsAPI);
   }

   //post aapi call, parametres also needs to be passed.
   saveproducts(){
    const productsAPI = 'https://dummyjson.com/products';
    return this.http.post(this.users,productsAPI);
   }

   // update api also needs parameter body to be passed.
   updateproducts(id:string){
    const productsAPI = 'https://dummyjson.com/products';
    return this.http.put(this.users,productsAPI+ '/' + id);
   }

   // delete api needs similar to get only the api to be passed.
   deleteproducts(id:string){
    const productsAPI = 'https://dummyjson.com/products';
    return this.http.delete(productsAPI + '/' + id);
   }
}

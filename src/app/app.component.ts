import { afterNextRender, afterRender, Component, effect, NgModule, Pipe, signal, ViewChild } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { FormControl,FormGroup,FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { CurrencyConverterPipe } from './pipe/currency-converter.pipe';
import { UserComponent } from './user/user.component';
import { UserServiceService } from './user-service.service';

@Component({  //this is a decorator
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoginComponent, ProfileComponent, 
    FormsModule, CommonModule,NgFor,RouterLink,
    RouterLinkActive,ReactiveFormsModule,
    NgIf,CurrencyConverterPipe,UserComponent],
  templateUrl:'./app.component.html',  // this is component directive
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('userForm') UserComponent:any
  title = 'TutorialPractice';
  name:string|number = 'Hey! This is me'; // if you don't know use any datatype
  count:number=0;
  getName = "";
  displayName:string = "";
  display=true;
  color="red";
  data="srijani";
  amount = 10;
  number=10;
  user2="Srijani"; // for passing data from parent to child

  getUserData:{
    name: string;
    branch: string;
    stock: string;
  }[] | undefined;
  products: any;

  //life cycle hooks one after the other

 // service injected here , dependency injection example
  constructor(private userservice : UserServiceService){ //signals and effect usage //1
    afterRender(()=>{
      console.log('rendering component', this.UserComponent.userForm);
    });  //renders the child component values or any value upon change. Number of the times it renders it gives
    // the ngOnchanges doesn't give that it just gets called whenever there is any change irrespective of the calls

    afterNextRender(()=>{
      console.log('rendering component', this.UserComponent.userForm);
    }); // this only renders or calls once as ngOndestroy does but after the component is called.

    effect(()=>{
      console.log(this.signals)
      setTimeout(() => {         
        this.signals
      }, 2000);
    });
  };

  ngOnInit(){ // dynamic API calls for the external API
    console.log('ngOnInit been called');  //2
      this.userservice.getproductsList().subscribe((res:any)=>{
        console.log(res);
        this.products = res.products;
      })
  }

  //called any time when a componnet change happens
  ngOnChanges(){        //3 
    console.log('ngOnchanges been called');
  }

  //always gets calls when a object destroys or is not in use
  ngOnDestroy(){
    console.log('ngOnDestroy been called');  
  }
  
  username = new FormControl(''); // using form control seperately
  password = new FormControl('');
 
  formGroup = new FormGroup({ //using formgroup together
      username: new FormControl('',[Validators.required]),   //validators usage
      password: new FormControl('',[Validators.required,Validators.minLength(5)])
    }
  )

  onUserchange(user:string){ //dynamic user for input decorator
    this.user2 = user;
  }

  onsubmit(){
    alert('form has been submitted !');
    console.log(this.formGroup);
  }

  getUserList(){
    this.getUserData = this.userservice.getUserList();  //dummy service call with inbuilt data pass
    console.log(this.getUserData);
  }

  Teachers=["Srini","Mithun","Arun","Sudheesh"]

  Office=[
    {name:'CTS', city:'Bangalore'},
    {name:'TCS', city:'Kolkata'},
    {name:'CAPGI', city:'Delhi'},
    {name:'WIPRO', city:'Chennai'},
  ]

  users=[
    {name: 'srijani', age:'43'},
    {name:'sumo',age:'22'},
    {name:'bhutto',age:'34'}
  ];
  signals = signal('Anil');

  displayform(){
    //console.log(this.username,this.password);
  }
  resetformvalue(){ //resetting form group
    //console.log(this.username,this.password);
    /*this.formGroup.setValue({
      username:'',
      password:''
    });*/
  }

  hideBlock(){
    this.display = !this.display;
  }
  getNameFunc(event:Event){
    this.getName = (event.target as HTMLInputElement).value
  }
  showName(){
    this.displayName = this.getName;
  }
  setName(){
    this.getName='Sam';
  }
  resetValue(){
    this.getName = "";
  }
  buttonclickfunction(){
    console.log("Button has been clicked");
    alert("Hey! Wassup, you did it ! Event binding")
    this.name = "I changed the value"; // data type needed for TS 
    this.name = 10; //both type of data for same variable can be taken 
  }
  handleIncrement(){
    this.count++;
  }
  handleDecrement(){
    this.count--;
  }
  handleReset(){
    this.count = 0;
  }
  // passing parameter through event
  handleEvent(event:KeyboardEvent){
    console.log("keyboard is been used");
  }
  handleMouseEvent(event:any){
    console.log("Mouse enter is been used");
  }

  changeName(event:Event){
    const val = (event.target as HTMLInputElement).value;
    this.data=val;
  }







}
 
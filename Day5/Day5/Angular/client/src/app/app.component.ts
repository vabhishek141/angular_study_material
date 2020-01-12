import { Component } from '@angular/core';
import { Emp} from './Emp'
 
// @Component({
//   selector: 'app-root',
//   template:`<h1>
//               Hello from {{title}}
//             </h1>`
// })

@Component({
  selector: 'app-root',
  templateUrl:'./app.component.html'
})
export class AppComponent 
{
  title = 'Angular';
  emp = new Emp();

  depts : any; 



  constructor()
  {
    console.log("App Component Constructor Called");
    console.log(this.emp);
    console.log(this.emp.ENo);    
    console.log(this.emp.EName);    
    console.log(this.emp.EAddress); 
    
    
    this.depts = [
      {"DNo": 10, "DName" : "IT", "DLoc": "Pune"},
      {"DNo": 11, "DName" : "HR", "DLoc": "Mumbai"},
      {"DNo": 12, "DName" : "Fin", "DLoc": "Delhi"},
      {"DNo": 13, "DName" : "Admin", "DLoc": "Banglore"}
    ];

  }
}









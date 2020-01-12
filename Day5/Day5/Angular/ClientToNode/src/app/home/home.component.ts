import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  emps: any;
  constructor(public helper: HttpClient) 
  {
    //console.log(helper)
    console.log("Home Component Created");
  }
  
  ngOnInit() {

    let statusOfDataFromDB=  
            this.helper.get("http://localhost:9898/emps");;

    statusOfDataFromDB.subscribe((result)=>{
      console.log(result);
      this.emps = result;
    });

    //this.emps = dataFromDB;

    // this.emps = [
    //   {"No": 11, "Name": "ABC1", "Age": 20},
    //   {"No": 12, "Name": "ABC2", "Age": 20},
    //   {"No": 13, "Name": "ABC3", "Age": 20},
    //   {"No": 14, "Name": "ABC4", "Age": 20}
    // ];

  }

}










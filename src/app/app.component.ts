import { Component , OnInit} from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'spaceX';
  spaceXarray = [];
  content;
  constructor(private api:ApiService){}
  yearList: any[] = ['2006', '2007', '2008', '2009', '2010', '2011','2012','2013','2014','2015','2016','2017','2018','2019','2020'];
  successList: any[] = [
    { view:'True',
      value:'true'
    },
    { view:'False',
      value:'false'
    }
  ]
  ngOnInit() {
    this.api.getAllItems().subscribe(
      data => {
      this.spaceXarray = data;
      })
   }
  getLaunchYear(year){
    let launchYear = this.api.encode_query_params({"launch_year":year});
    this.api.test(launchYear).subscribe(
      data => {
        console.log(launchYear);
        this.spaceXarray = data;
      })
  }
  getLandSuccess(land){
    let landSuccess = this.api.encode_query_params({"land_success":land});
    this.api.test(landSuccess).subscribe(
      data => {
        console.log(landSuccess);
        this.spaceXarray = data;
      })
  }
  getLaunchSuccess(launch){
    let launchSuccess = this.api.encode_query_params({"launch_success":launch});
    this.api.test(launchSuccess).subscribe(
      data => {
        console.log(launchSuccess);
        this.spaceXarray = data;
      })
  }
  //function that filter for all 3 parameter
  filter(year?,land?,launch?){
    let launchYear = this.api.encode_query_params({"launch_year":year});
    let landSuccess = this.api.encode_query_params({"land_success":land});
    let launchSuccess = this.api.encode_query_params({"launch_success":launch});
    this.api.test(launchYear).subscribe(
      data => {
        console.log(launchYear);
        this.spaceXarray = data;
      })
  }

}
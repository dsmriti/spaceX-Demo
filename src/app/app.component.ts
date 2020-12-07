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
  isActive: boolean = false;;
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

  filter_query_params = {
    launch_year: "",
    launch_success: "",
    land_success: ""
  };
  
  ngOnInit() {
    this.api.getAllItems().subscribe(
      data => {
      this.spaceXarray = data;
      })
   }

  get_land_success_val(item) {
    if (item.length < 1) {
      return false;
    }
    return item[0].land_success;
  } 
  getLaunchYear(year){
   if (typeof(year) != undefined) {
      this.filter_query_params.launch_year = year;
    }
  
    let launchYear = this.api.encode_query_params(this.filter_query_params);
    this.api.getfilter(launchYear).subscribe(
      data => {
        this.spaceXarray = data;
    })
  }
  getLandSuccess(land){
    if (typeof(land) != undefined) {
      this.filter_query_params.land_success = land;
    }
    let landSuccess = this.api.encode_query_params(this.filter_query_params);
    this.api.getfilter(landSuccess).subscribe(
      data => {
        this.spaceXarray = data;
    })
  }
  getLaunchSuccess(launch){ 
    if (typeof(launch) != undefined) {
      this.filter_query_params.launch_success = launch;
    }
    let launchSuccess = this.api.encode_query_params(this.filter_query_params);
    this.api.getfilter(launchSuccess).subscribe(
      data => {
        this.spaceXarray = data;
    })
  }
}
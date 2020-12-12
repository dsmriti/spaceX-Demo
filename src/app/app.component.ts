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
  constructor(private api:ApiService){}
  yearList: any[] = ['2006', '2007', '2008', '2009', '2010', '2011','2012','2013','2014','2015','2016','2017','2018','2019','2020'];
  evenYearList: any[] = ['2006', '2008', '2010','2012','2014','2016','2018','2020'];
  oddYearList: any[] = ['2007', '2009', '2011','2013','2015','2017','2019'];
 
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

  //to print values of land success from cores array
  get_land_success_val(item) {
    if (item.length < 1) {
      return false;
    }
    return item[0].land_success;
  } 

  //To call API on click of year filter by user
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

  //To call API on click of land filter by user
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

  //To call API on click of launch filter by user
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
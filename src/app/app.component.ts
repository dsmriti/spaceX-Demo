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
  isLauching: boolean = null;
  isLanding: boolean = null;
  constructor(private api:ApiService){}
  evenYearList: any[] = [
    {
      text: '2006',
      isClicked: false
    },
    {
      text: '2008',
      isClicked: false
    },
    {
      text: '2010',
      isClicked: false
    },
    {
      text: '2012',
      isClicked: false
    },
    {
      text: '2014',
      isClicked: false
    },
    {
      text: '2016',
      isClicked: false
    },
    {
      text: '2018',
      isClicked: false
    },
    {
      text: '2020',
      isClicked: false
    }
  ]
  oddYearList: any[] = [
    {
      text: '2007',
      isClicked: false
    },
    {
      text: '2009',
      isClicked: false
    },
    {
      text: '2011',
      isClicked: false
    },
    {
      text: '2013',
      isClicked: false
    },
    {
      text: '2015',
      isClicked: false
    },
    {
      text: '2017',
      isClicked: false
    },
    {
      text: '2019',
      isClicked: false
    }
  ]
  launchList: any[] = [
    { view:'True',
      launchVal:true
    },
    { view:'False',
      launchVal:false
    }
  ]
  landList: any[] = [
    { view:'True',
      value:true
    },
    { view:'False',
      value:false
    }
  ]

  filter_query_params = {
    launch_year: "",
    launch_success: "",
    land_success: ""
  };
  
  ngOnInit() {
    this.api.getAllItems().subscribe(
      data => { this.spaceXarray = data;
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

    //for checking if active in even year list
    for(let i=0;i<this.evenYearList.length;i++){
      if(year.text == this.evenYearList[i].text) {
        this.evenYearList[i].isClicked = !this.evenYearList[i].isClicked;
      } else {
        this.evenYearList[i].isClicked = false;
      }
    }
    //for checking if active in odd year list
    for(let i=0;i<this.oddYearList.length;i++){
      if(year.text == this.oddYearList[i].text) {
        this.oddYearList[i].isClicked = !this.oddYearList[i].isClicked;
      } else {
        this.oddYearList[i].isClicked = false;
      }
    }
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
    this.isLanding = land;
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
    this.isLauching = launch;
  }
}
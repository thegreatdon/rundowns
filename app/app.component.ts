import { Component, NgModule, Pipe, PipeTransform } from '@angular/core';
import { BrowserModule, DomSanitizer } from '@angular/platform-browser';
import { DateTimePickerDirective } from 'ng2-eonasdan-datetimepicker';
import datetimepicker from 'eonasdan-bootstrap-datetimepicker';
import moment from 'moment';



@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
})
export class App implements OnInit {

  show:string = 'me';
  date: moment.Moment;
  newFlxUrl:string;
  a2eOptions: any;
  begNewFlxUrl:string = "http://localhost:3005/?show=";
  fixDate:string;


 shows = ['ME','ATC','WATC','WESAT','WESUN','NEWSCAST','ELECTION','SPECIAL'];

  constructor(){
    this.date = moment();
    this.a2eOptions = {format: 'MMMM DD, YYYY h:mm A'};
    this.fixDate = this.date.format('YYYY-MM')+"-"+this.date.format('D') + " " + this.date.format('HH:mm');
    this.newFlxUrl = this.begNewFlxUrl+this.show+"&datetime="+this.fixDate;
  }
  
  ngOnInit(): void {
    // this is needed for the import 
    // import * as datetimepicker from 'eonasdan-bootstrap-datetimepicker';
    // of eonasdan-bootstrap-datetimepicker library to work.
    // it is a hack, but I can not figure out how to import it globally with SystemJS
    console.log(datetimepicker);
  }

 
  dateChange(date) {
    this.date = date;
    this.fixDate = this.date.format('YYYY-MM')+"-"+this.date.format('D') + " "  + this.date.format('HH:mm');
    this.newFlxUrl = this.begNewFlxUrl+this.show+"&datetime="+this.fixDate;
    console.log(this.newFlxUrl);
  }
  
  dateClick() {
    this.fixDate = this.date.format('YYYY-MM')+"-"+this.date.format('D') + " "  + this.date.format('HH:mm');
    this.newFlxUrl = this.begNewFlxUrl+this.show+"&datetime="+this.fixDate;
    console.log(this.newFlxUrl);
  }

  clickShow(show:any){
    this.show = show.toLowerCase();
    this.fixDate = this.date.format('YYYY-MM')+"-"+this.date.format('D') + " "  + this.date.format('HH:mm');
    this.newFlxUrl = this.begNewFlxUrl+this.show+"&datetime="+this.fixDate;
    console.log(this.newFlxUrl);
  }

  currentDate(){
    this.date = moment();
    this.fixDate = this.date.format('YYYY-MM')+"-"+this.date.format('D') + " "  + this.date.format('HH:mm');
    this.newFlxUrl = this.begNewFlxUrl+this.show+"&datetime="+this.fixDate;
    console.log(this.newFlxUrl);
  }


}


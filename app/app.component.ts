import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
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
  a2eOptions: any;

 shows = ['ME','ATC','WATC','WESAT','WESUN','NEWSCAST','ELECTION','SPECIALS'];

  constructor(){
    this.date = moment();
    this.a2eOptions = {format: 'MMMM DD, YYYY h:mm A'};
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
    console.log('show:'+this.show+"/date:"+date);
  }
  
  dateClick() {
   // alert(this.date);
   console.log('show:'+this.show+"/date:"+this.date);
  }

  clickShow(show:any){
    this.show = show.toLowerCase();
    console.log('show:'+this.show+"/date:"+this.date);
  }

  currentDate(){
    this.date = moment();
    console.log('show:'+this.show+"/date:"+this.date);
  }



  
}


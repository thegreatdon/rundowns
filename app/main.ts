import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgModule }      from '@angular/core';
import { App} from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { DateTimePickerDirective } from 'ng2-eonasdan-datetimepicker';

@NgModule({
  imports: [ BrowserModule ],
  declarations: [ App, DateTimePickerDirective ],
  bootstrap: [ App ]
})
 class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);
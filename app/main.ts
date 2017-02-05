import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgModule, Pipe, PipeTransform  }      from '@angular/core';
import { App} from './app.component';
import { BrowserModule, DomSanitizer } from '@angular/platform-browser';
import { DateTimePickerDirective } from 'ng2-eonasdan-datetimepicker';

@Pipe({ name:'safe'})
export class SafePipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}
  transform(newFlxUrl) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(newFlxUrl);
  }
} 
@NgModule({
  imports: [ BrowserModule ],
  declarations: [ App, DateTimePickerDirective, SafePipe ],
  bootstrap: [ App ]
})
 class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);
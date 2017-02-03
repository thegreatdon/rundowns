"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var eonasdan_bootstrap_datetimepicker_1 = require('eonasdan-bootstrap-datetimepicker');
var moment_1 = require('moment');
var App = (function () {
    function App() {
        this.show = 'me';
        this.shows = ['ME', 'ATC', 'WATC', 'WESAT', 'WESUN', 'NEWSCAST', 'ELECTION', 'SPECIALS'];
        this.date = moment_1.default();
        this.a2eOptions = { format: 'MMMM DD, YYYY h:mm A' };
    }
    App.prototype.ngOnInit = function () {
        // this is needed for the import 
        // import * as datetimepicker from 'eonasdan-bootstrap-datetimepicker';
        // of eonasdan-bootstrap-datetimepicker library to work.
        // it is a hack, but I can not figure out how to import it globally with SystemJS
        console.log(eonasdan_bootstrap_datetimepicker_1.default);
    };
    App.prototype.dateChange = function (date) {
        this.date = date;
        console.log('show:' + this.show + "/date:" + date);
    };
    App.prototype.dateClick = function () {
        // alert(this.date);
        console.log('show:' + this.show + "/date:" + this.date);
    };
    App.prototype.clickShow = function (show) {
        this.show = show.toLowerCase();
        console.log('show:' + this.show + "/date:" + this.date);
    };
    App.prototype.currentDate = function () {
        this.date = moment_1.default();
        console.log('show:' + this.show + "/date:" + this.date);
    };
    App = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/app.component.html',
        }), 
        __metadata('design:paramtypes', [])
    ], App);
    return App;
}());
exports.App = App;
//# sourceMappingURL=app.component.js.map
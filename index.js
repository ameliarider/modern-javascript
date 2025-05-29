console.log("Hello from JavaScript");

var moment = require('moment');

var datetime = moment().startOf("day").fromNow();
var datetime2 = moment().endOf('day').fromNow();
var calendar = moment().add(1, 'days').calendar();
var future = moment().add(10, 'days').calendar(); 
var format = moment().format('LLLL');
var formatTest = moment().add(1, 'days').format('LLLL');
console.log(datetime);
console.log(datetime2);
console.log(calendar);
console.log(future);
console.log(format);
console.log(formatTest);
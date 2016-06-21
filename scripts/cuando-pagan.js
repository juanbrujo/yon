// Description:
//   TODO
//
// Dependencies:
//   moment-business-days
//
// Configuration:
//   None
//
// Commands:
//   hubot cuando pagan
//
// Author:
//   @hectorpalmatellez

var moment = require('moment-business-days');

module.exports = function gardel(robot) {
  'use strict';

  var today = moment().format('D');
  var lastBusinessDay = moment().endOf('month').isBusinessDay() ? moment().endOf('month').format('D') : moment().endOf('month').prevBusinessDay().format('D');
  var nameLastDay = moment().locale('es').endOf('month').isBusinessDay() ? moment().locale('es').endOf('month').format('dddd') : moment().locale('es').endOf('month').prevBusinessDay().format('dddd');
  var dayCount = lastBusinessDay - today;

  robot.respond(/cu[áa]ndo pagan/, function(msg) {
    var message = '';
    if (dayCount === 0) {
      message = ':sparkles:  ¡Hoy pagan! :sparkles: ';
    } else {
      message = 'Faltan ' + dayCount + ' días para que paguen. Este mes pagan el ' + lastBusinessDay + ', que cae ' + nameLastDay + '. ¡A aguantar!';
    }
    return msg.send(message);
  });
};

// Description:
//   Flacu lee lo que su sucia cabeza tiene
//
// Dependencies:
//   None
//
// Configuration:
//   None
//
// Commands:
//   hear

var garabatus = [
  'pico', 'poto', 'sapo', 'pichula', 'ano', 'corneta', 'anal', 'goatse', 'semen', 'cumshot', 'facial'
];

module.exports = function(robot) {
  robot.respond(/dislexia (.*)/gi, function(res) {
    var fraseOriginal = res.match[0];
    var fraseCuantos = fraseOriginal.split(' ').length - 2;
    var fraseReemplazada = [];

    for (var i = 0; i < fraseCuantos; i++) {
      fraseReemplazada.push( garabatus[Math.floor(Math.random() * garabatus.length)] );
    }

    res.send( ':flaku: ~ ' + fraseReemplazada.join(' ') );

  });
};

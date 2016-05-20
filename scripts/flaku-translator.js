// Description:
//   Transforma un texto en el idioma de El Bellotu
//
// Dependencies:
//   None
//
// Configuration:
//   None
//
// Commands:
//   hubot flaku <texto>
//
// Author:
//   @jorgeepunan

var garabatus = ['se me paro el pico','wena care pico','sapoculiao','cómete un pan con pico','chúpalo','sale conchetumare','chupaelpico','tesapoelchupo','carepico','pico','maracaculia','con la punta del pico','esperenme, voy a cambiarme la toallita','micropene','queri un pan con tula CTM','fina la weona tiene hocico de pirata','se me calento el hocico','mande a la mierda al viejo culiao'];

function flakuTranslator (string) {

  var result  = string.split(" ");
  var replace = [];
  result.forEach( function(word) {
    replace.push( word.replace(/\o$/, "u") );
  });
  return replace.join(" ");

}

module.exports = function(robot) {
  robot.respond(/flaku (.*)/i, function(res) {
    var textu = res.match[1];

    res.send( ':flaku: ~ ' + flakuTranslator( textu ) );
    res.send( ':flaku: ~ ' + flakuTranslator( garabatus[Math.floor(Math.random() * garabatus.length)] ) );

  });
};

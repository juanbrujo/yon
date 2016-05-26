// Description:
//   Transforma un texto en el idioma de la Quinta Región
//
// Dependencies:
//   None
//
// Configuration:
//   None
//
// Commands:
//   hubot tu|tú <texto>
//
// Author:
//   @flacu

var frases = ['JIJIJIJIJI','¡BURP!','¡TERMINEEEEE! ¡ME VOOOOY!','¡Maqueta!'];

function yonTranslator (string) {

  var result  = string.split(" ");
  var replace = [];
  result.forEach( function(word) {
    replace.push( word.replace("ando", "andriu").replace("iendo","iendrew") );
  });
  return replace.join(" ");

}

module.exports = function(robot) {
  robot.respond(/t[u|ú] (.*)/i, function(res) {
    var texto = res.match[1];
    console.log(texto);

    res.send( ':yon: ~ ' + yonTranslator( texto ) );
    res.send( ':yon: ~ ' + frases[Math.floor(Math.random() * frases.length)] );

  });
};

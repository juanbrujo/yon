// Description:
//   Transforma un texto a como habla ginito da silva
//
// Dependencies:
//   None
//
// Configuration:
//   None
//
// Commands:
//   hubot gino <texto>
//
// Author:
//   @jorgeepunan


function ginoTranslator(string){

  var words = string.split(' ');
  var ginoPhrase = [];

  words.forEach(function(word){
    word = word.substring(0,2) + '-' + word.substring(0,2) + word.substring(2);
    ginoPhrase.push(word);
  });

  ginoPhrase = ginoPhrase.join(' ');

  return ginoPhrase;

}

module.exports = function(robot) {
  robot.respond(/gino (.*)/i, function(res) {
    var texto = res.match[1];

    res.send(':gino: ' + ginoTranslator( texto ) );

  });
};

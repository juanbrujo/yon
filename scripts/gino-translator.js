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

var foturris = [
  'https://scontent-mia1-1.xx.fbcdn.net/v/t1.0-9/393_35990172402_1583_n.jpg?oh=9138f4cdf2b18f347681dee128cd0f1d&oe=57E6B265',
  'https://scontent-mia1-1.xx.fbcdn.net/v/t1.0-9/393_35990397402_4216_n.jpg?oh=4700a3ed95b1b86523c741b52483fa9a&oe=57DBD483',
  'https://scontent-mia1-1.xx.fbcdn.net/v/t1.0-9/393_35990347402_2140_n.jpg?oh=3e4d5a56cd4c6069c65865f8055e4d6d&oe=57DE0806',
  'https://scontent-mia1-1.xx.fbcdn.net/v/t1.0-9/1931414_1103201260511_2621_n.jpg?oh=1e711e6bda337195930447b4677d918e&oe=57D7782F',
  'https://scontent-mia1-1.xx.fbcdn.net/v/t1.0-9/19466_1387080037303_3820315_n.jpg?oh=8e1c836a8106af7beb04c9863d5ae16f&oe=57D1DFC4',
  'https://scontent-mia1-1.xx.fbcdn.net/v/t1.0-9/306184_2420331867953_2117676_n.jpg?oh=a5d09ff32b21a1b2ac7e5db34b81b6d2&oe=57CCA914'
];

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
    res.send( foturris[Math.floor(Math.random() * foturris.length)] );

  });
};

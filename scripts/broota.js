// Description:
//   Broota pix
//
// Dependencies:
//   None
//
// Configuration:
//   None
//
// Commands:
//   broota

var brootas = [
  'https://scontent.fscl2-1.fna.fbcdn.net/v/t1.0-9/10426171_10152468878270787_9169880928457247606_n.jpg?oh=033170446f944e5dbfccc697538318a8&oe=5835A322',
  'https://scontent.fscl2-1.fna.fbcdn.net/v/t1.0-9/199295_1936917139095_1188238_n.jpg?oh=4e048ea9508b99372cd4a2403f2fbd5b&oe=58256D60',
  'https://scontent.fscl2-1.fna.fbcdn.net/v/t1.0-9/733768_10151351908475787_195843277_n.jpg?oh=4f888b17ac5cdd032743515f4a86b767&oe=582FFC02',
  'https://scontent.fscl2-1.fna.fbcdn.net/v/t1.0-9/1006096_10152438731057612_8419315224546976251_n.jpg?oh=13464e107072c16f1e740b0d674793a4&oe=58333AE1',
  'https://scontent.fscl2-1.fna.fbcdn.net/v/t1.0-9/406247_10151147374658304_1730330153_n.jpg?oh=a9f9a9509a699d147000742da7106f44&oe=58263975',
  'https://scontent.fscl2-1.fna.fbcdn.net/v/t1.0-9/1835_45289096556_4500_n.jpg?oh=707f45f581371d8a347f4d215f741c6f&oe=5828FF00'
];

module.exports = function(robot) {
  robot.hear(/broota/gi, function(res) {

    res.send( brootas[Math.floor(Math.random() * brootas.length)] );

  });
};

// Description:
//   Muestra una foto de nuestro líder supremo
//
// Dependencies:
//   None
//
// Configuration:
//   None
//
// Commands:
//   global|globalinteractive

var foturris = [
  'https://pbs.twimg.com/profile_images/565285062292164608/_iG-8Akm.jpeg',
  'http://www.globalinteractive.cl/wp-content/uploads/2015/10/Rodrigo-Ureta-260x270.jpg',
  'https://media.licdn.com/mpr/mpr/shrinknp_200_200/p/7/000/1ef/3a4/026938d.jpg'
];

module.exports = function(robot) {
  robot.hear(/global|globalinteractive/gi, function(res) {

    res.send( foturris[Math.floor(Math.random() * foturris.length)] );

  });
};

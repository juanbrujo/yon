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
//   global|globalinteractive|amauta

var foturris = [
  'http://www.globalinteractive.cl/wp-content/uploads/2015/11/03.jpg',
  'http://www.globalinteractive.cl/wp-content/uploads/2015/10/Rodrigo-Ureta-260x270.jpg',
  'http://amddchile.com/web_amdd3/wp-content/uploads/2016/04/ru.jpg',
  'http://www.globalinteractive.cl/wp-content/uploads/2015/11/02.jpg',
  'http://www.globalinteractive.cl/wp-content/uploads/2015/11/05.jpg',
  'http://www.globalinteractive.cl/wp-content/uploads/2015/11/06.jpg',
  'http://www.globalinteractive.cl/wp-content/uploads/2015/11/07.jpg',
  'http://negocios.udd.cl/files/2014/08/IMG_0565-300x300.jpg'
];

module.exports = function(robot) {
  robot.hear(/global|globalinteractive|amauta/gi, function(res) {

    res.send( foturris[Math.floor(Math.random() * foturris.length)] );

  });
};

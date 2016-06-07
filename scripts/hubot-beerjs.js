// Description:
//  BeerJS Santiago Hubot script
//
// Dependencies:
//  needle
//
// Configuration:
//   None
//
// Commands:
//   hubot beerjs info|todo
//   hubot beerjs fecha|cuando
//   hubot beerjs donde|lugar
//   hubot beerjs tema
//
// Notes:
//   ©2015 beerjssantiago
//   https://github.com/beerjs/santiago/
//
// Author:
//   @jorgeepunan

var needle = require('needle');

// este es el repositorio del json (estático) que se parsea con la información necesaria, hosteado en GitHub.
// revísalo para que conozcas la simple estructura que contiene la información y modifícala según tus necesidades.
var file = 'https://raw.githubusercontent.com/beerjs/santiago/master/beerjs.json';

module.exports = function(robot) {

  robot.respond(/beerjs (\w+)/i, function(res) {

    var suffix = res.match[1];

    needle.get(file, function(error, response) {
      if (!error && response.statusCode == 200) {

        var obj = JSON.parse(response.body);

        if ( suffix === "fecha" || suffix === "cuando") {
        	res.send(">*" + obj.evento + ":* " + obj.fecha);
        }
        else if ( suffix === "donde" || suffix === "lugar" ) {
          res.send(">*" + obj.evento + ":* " + obj.donde + " (" + obj.direccion + ")");
          res.send("http://maps.google.com/maps/api/staticmap?markers=" + encodeURIComponent(obj.direccion) + "&size=600x600&maptype=roadmap&sensor=false&zoom=16&format=png"); // TODO

        }
        else if ( suffix === "tema" ) {
          res.send(">*" + obj.evento + ":* " + obj.tema);
        }
        else if ( suffix === "registro" ) {
          res.send(">*" + obj.evento + ":* regístrate gratis en " + obj.registro);
        }
        else if ( suffix === "info" || suffix === "todo" ) {
          message = ""
          for(var i in obj){
            if(obj[i] !== '') {
              message += ">*" + i + ":* " + obj[i] + "\n";
            }
          }
          res.send(message);
        }
        else {
          res.send("¿Ayuda? Comandos: @hubot beerjs [fecha|cuando, donde|lugar, tema, registro]");
        }

      }

    });

  });

};


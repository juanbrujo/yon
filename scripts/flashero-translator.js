// Description:
//   Transforma un texto en el idioma de flashero
//
// Dependencies:
//   None
//
// Configuration:
//   None
//
// Commands:
//   hubot flash <texto>
//
// Author:
//   @jorgeepunan


var flashearte = {
  "se"  : "ce",
  "ce"  : "se",
  "ze"  : "se",
  "ci"  : "si",
  "si"  : "ci",
  "zi"  : "si",
  "v"   : "b",
  "b"   : "v",
  "ho"   : "o",
  "Ho"   : "o",
  "ha"   : "a",
  "Ha"   : "a",
  "he"   : "e",
  "He"   : "e",
  "hi"   : "i",
  "Hi"   : "i",
  "hu"   : "u",
  "Hu"   : "u",
  "llo"  : "yo",
  "yo"   : "llo",
  "lla"  : "ya",
  "ya"   : "lla",
  "lle"  : "ye",
  "ye"   : "lle",
  "lli"  : "yi",
  "yi"   : "lli",
  "llu"  : "yu",
  "yu"   : "llu"
};

function flashTranslator(string){
  string = string.replace(new RegExp("(" + Object.keys(flashearte).map(function(i){
    return i.replace(/[.?*+^$[\]\\(){}|-]/g, "\\$&");
  }).join("|") + ")", "g"), function(s){
    return flashearte[s];
  });
  return string;
}

module.exports = function(robot) {
  robot.respond(/flash (.*)/i, function(res) {
    var texto = res.match[1];

    res.send( ':alex: ~ ' + flashTranslator( texto ) );

  });
};

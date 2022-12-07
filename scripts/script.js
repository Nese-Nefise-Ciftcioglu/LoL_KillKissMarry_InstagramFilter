
const Scene = require('Scene');
const Patches = require('Patches');
const Materials = require('Materials');
const Textures = require('Textures');
const FaceGestures = require('FaceGestures');
const Reactive = require('Reactive');
const Diagnostics = require('Diagnostics');
const TouchGestures = require('TouchGestures');
const Layers = require('Layers');

let champ1 = "champ1";
let selectedNum0 = -1;
let selectedNum1 = -1;
let minValue = 0;
let maxValue = 155;


// Function to generate unique random number 
function randomNumber(min, max) {
  let rand = Math.floor(Math.random() * (max - min + 1)) + min;
  while(selectedNum0 == rand || selectedNum1 == rand){
      rand = Math.floor(Math.random() * (max - min + 1)) + min;
  }
  return rand;
}

let randNum0=randomNumber(minValue,maxValue);
selectedNum0=randNum0;

let randNum1=randomNumber(minValue,maxValue);
selectedNum1=randNum1;

let randNum2=randomNumber(minValue,maxValue);


function returnChamp(number) {
switch (number) {
  case 0:
    champ1 = "ahri";
    return champ1;   
  case 1:
    champ1 = "akali";
    return champ1;
  case 2:
    champ1 = "aatrox";
    return champ1;   
  case 3:
    champ1 ="akshan";
    return champ1;   
  case 4:
    champ1 ="Cassiopeia";
    return champ1; 
  case 5:
    champ1 ="Chogath";
    return champ1; 
  case 6:
    champ1 ="Corki";
    return champ1;
  case 7:
    champ1="Katarina";
    return champ1;   
  case 8:
    champ1 ="Darius";
    return champ1;
  case 9:
    champ1 ="Diana";
    return champ1;
  case 10:
    champ1 ="Draven";
    return champ1; 
  case 11:
    champ1 ="DrMundo";
    return champ1;
  case 12:
    champ1 ="Ekko";
    return champ1;

  case 13:
    champ1 ="Elise";
    return champ1; 
  case 14:
    champ1 ="Ezreal";
    return champ1; 
  case 15:
    champ1 ="Fiddlesticks";
    return champ1; 
  case 16:
    champ1 ="Fiora";
    return champ1;   
  case 17:
    champ1 ="Fizz";
    return champ1; 
  case 18:
    champ1 ="Galio";
    return champ1;  
  case 19:
    champ1 ="Gangplank";
    return champ1;  
  case 20:
    champ1 ="Garen";
    return champ1; 
  case 21:
    champ1 ="Gnar";
    return champ1; 
  case 22:
    champ1 ="Gragas";
    return champ1;   
  case 23:
    champ1 ="Graves";
    return champ1; 
  case 24:
    champ1 ="Hecarim";
    return champ1; 
  case 25:
    champ1 ="Heimerdinger";
    return champ1;
  case 26:
    champ1 ="Illaoi";
    return champ1;  
  case 27:
    champ1 ="Ivern";
    return champ1; 
  case 28:
    champ1 ="Janna";
    return champ1;
  case 29:
    champ1 ="JarvanIV";
    return champ1;  
  case 30:
    champ1 ="Jax";
    return champ1;
  case 31:
    champ1 ="Jayce";
    return champ1;
  case 32:
    champ1 ="Jhin";
    return champ1;  
  case 33:
    champ1 ="Jinx";
    return champ1;                      
  case 34:
    champ1 ="Kaisa";
    return champ1; 
  case 35:
    champ1 ="Kalista";
    return champ1;
  case 36:
    champ1 ="Karma";
    return champ1;
  case 37:
    champ1="Karthus";
    return champ1;  
  case 38:
    champ1="LeeSin";
    return champ1; 

  case 39:
    champ1 ="Kassadin";
    return champ1;   
  case 40:
    champ1 ="Kayle";
    return champ1; 
  case 41:
    champ1 ="Kennen";
    return champ1; 
  case 42:
    champ1 ="Khazix";
    return champ1; 
  case 43:
    champ1 ="Kindred";
    return champ1; 
  case 44:
    champ1 ="Kled";
    return champ1;  
  case 45:
    champ1 ="KogMaw";
    return champ1; 
  case 46:
    champ1 ="Leblanc";
    return champ1;  
  case 47:
    champ1 ="Leona";
    return champ1; 
  case 48:
    champ1 ="Lissandra";
    return champ1; 
  case 49:
    champ1 ="Lucian";
    return champ1;  
  case 50:
    champ1 ="Lulu";
    return champ1; 
  case 51:
    champ1 ="Lux";
    return champ1;
  case 52:
    champ1 ="Malphite";
    return champ1;   
  case 53:
    champ1 ="Malzahar";
    return champ1; 
  case 54:
    champ1 ="Maokai";
    return champ1; 
  case 55:
    champ1 ="MasterYi";
    return champ1; 
  case 56:
    champ1 ="MissFortune";
    return champ1;  
  case 57:
    champ1 ="MonkeyKing";
    return champ1; 
  case 58:
    champ1 ="Mordekaiser";
    return champ1;
  case 59:
    champ1 ="Morgana";
    return champ1; 
  case 60:
    champ1 ="Nami";
    return champ1; 
  case 61:
    champ1 ="Nasus";
    return champ1;  
  case 62:
    champ1 ="Nautilus";
    return champ1; 
  case 63:
    champ1 ="Nidalee";
    return champ1;  
  case 64:
    champ1 ="Nocturne";
    return champ1; 
  case 65:
    champ1 ="Nunu";
    return champ1; 
  case 66:
    champ1 ="Olaf";
    return champ1;
  case 67:
    champ1 ="Orianna";
    return champ1;
  case 68:
    champ1 ="Pantheon";
    return champ1;
  case 69:
    champ1 ="Poppy";
    return champ1;  
  case 70:
    champ1 ="Pyke";
    return champ1;     
  case 71:
    champ1 ="Quinn";
    return champ1;
  case 72:
    champ1 ="Rammus";
    return champ1;  
  case 73:
    champ1 ="RekSai";
    return champ1;       
  case 74:
    champ1 ="Renekton";
    return champ1; 
  case 75:
    champ1 ="Rengar";
    return champ1;
  case 76:
    champ1 ="Riven";
    return champ1; 
  case 77:
    champ1 ="Rumble";
    return champ1; 
  case 78:
    champ1 ="Ryze";
    return champ1;   
  case 79:
    champ1 ="Sejuani";
    return champ1;    
  case 80:
    champ1 ="Shaco";
    return champ1;  
  case 81:
    champ1 ="Shen";
    return champ1; 
  case 82:
    champ1 ="Shyvana";
    return champ1;
  case 83:
    champ1 ="Singed";
    return champ1;  
  case 84:
    champ1 ="Sion";
    return champ1;   
  case 85:
    champ1 ="Sivir";
    return champ1; 
  case 86:
    champ1 ="Skarner";
    return champ1; 
  case 87:
    champ1 ="Sona";
    return champ1;  
  case 88:
    champ1 ="Soraka";
    return champ1;   
  case 89:
    champ1 ="Syndra";
    return champ1;
  case 90:
    champ1 ="TahmKench";
    return champ1;  
  case 91:
    champ1 ="Taliyah";
    return champ1;  
  case 92:
    champ1 ="Talon";
    return champ1; 
  case 93:
    champ1 ="Taric";
    return champ1; 
  case 94:
    champ1 ="Teemo";
    return champ1; 
  case 95:
    champ1 ="Thresh";
    return champ1; 
  case 96:
    champ1 ="Tristana";
    return champ1; 
   
  case 97:
    champ1 ="Tryndamere";
    return champ1; 
  case 98:
    champ1 ="TwistedFate";
    return champ1; 
  case 99:
    champ1 ="Twitch";
    return champ1; 
  case 100:
    champ1 ="Udyr";
    return champ1; 
  case 101:
    champ1 ="Urgot";
    return champ1;  
  case 102:
    champ1 ="Varus";
    return champ1;  
  case 103:
    champ1 ="Vayne";
    return champ1; 
  case 104:
    champ1 ="Veigar";
    return champ1; 
  case 105:
    champ1 ="VelKoz";
    return champ1; 
  case 106:
    champ1 ="Vi";
    return champ1;
  case 107:
    champ1 ="Viktor";
    return champ1;  
  case 108:
    champ1 ="Vladimir";
    return champ1;  
  case 109:
    champ1 ="Volibear";
    return champ1; 
  case 110:
    champ1 ="Warwick";
    return champ1; 
  case 111:
    champ1 ="Xerath";
    return champ1;                                                           
  case 112:
    champ1 ="XinZhao";
    return champ1; 
  case 113:
    champ1 ="Yasuo";
    return champ1; 
  case 114:
    champ1 ="Yorick";
    return champ1;
  case 115:
    champ1 ="Zac";
    return champ1;  
  case 116:
    champ1 ="Zed";
    return champ1; 
  case 117:
    champ1 ="Ziggs";
    return champ1; 
  case 118:
    champ1 ="Zilean";
    return champ1; 
  case 119:
    champ1 ="Zyra";
    return champ1; 
  case 120:
    champ1 ="Alistar";
    return champ1;  
  case 121:
    champ1 ="Amumu";
    return champ1;  
  case 122:
    champ1 ="Anivia";
    return champ1;  
  case 123:
    champ1 ="Ashe";
    return champ1;  
  case 124:
    champ1 ="AurelionSol";
    return champ1;
  case 125:
    champ1 ="Azir";
    return champ1;
  case 126:
    champ1 ="Bard";
    return champ1;
  case 127:
    champ1 ="Blitzcrank";
    return champ1;                              
  case 128:
    champ1 ="Brand";
    return champ1; 
  case 129:
    champ1 ="Braum";
    return champ1; 
  case 130:
    champ1 ="Caitlyn";
    return champ1;  
  case 131:
    champ1 ="Camille";
    return champ1;
  case 132:
    champ1 ="Annie";
    return champ1;
  case 133:
      champ1 ="Trundle";
      return champ1; 
      //Checked  
  case 134:
    champ1 ="Aphelios";
    return champ1;
  case 135:
    champ1 ="Evelynn";
    return champ1; 
  case 136:
    champ1 ="Gwen";
    return champ1;   
  case 137:
    champ1 ="Irelia";
    return champ1;   
  case 138:
    champ1 ="Kayn";
    return champ1;  
  case 139:
    champ1 ="Lillia";
    return champ1; 
  case 140:
    champ1 ="Neeko";
    return champ1; 
  case 141:
    champ1 ="Ornn";
    return champ1; 
  case 142:
    champ1 ="Zoe";
    return champ1;     
  case 143:
    champ1 ="Qiyana";
    return champ1;  
  case 144:
    champ1 ="Rakan";
    return champ1;  
  case 145:
    champ1 ="Rell";
    return champ1;
  case 146:
    champ1 ="Samira";
    return champ1;  
  case 147:
    champ1 ="Senna";
    return champ1; 
  case 148:
    champ1 ="Seraphine";
    return champ1;  
  case 149:
    champ1 ="Sett";
    return champ1; 
  case 150:
    champ1 ="Swain";
    return champ1;  
  case 151:
    champ1 ="Sylas";
    return champ1;  
  case 152:
    champ1 ="Viego";
    return champ1;
  case 153:
    champ1 ="Xayah";
    return champ1; 
  case 154:
    champ1 ="Yone";
    return champ1; 
  case 155:
    champ1 ="Yuumi";
    return champ1;   
  case 156:
    champ1 ="Vex";
    return champ1;
  case 157:
    champ1 ="Zeri";
    return champ1; 
  case 158:
    champ1 ="Belveth";
    return champ1;
  case 159:
    champ1 ="Renata";
    return champ1;  
  case 160:
    champ1 ="Nilah";
    return champ1;               

                     
}
}



(async function() {
  const [material0, texture0] = await Promise.all([
    Materials.findFirst('material0'),
    Textures.findFirst(returnChamp(randNum0))
    
    
  ]);
  Diagnostics.log("1.Foto:"+randNum0);
  material0.diffuse = texture0;
 
})();
(async function() {
  const [material1, texture1] = await Promise.all([
    Materials.findFirst('material1'),
    Textures.findFirst(returnChamp(randNum1))   
  ]);
  Diagnostics.log("2.Foto:"+randNum1);
  material1.diffuse = texture1;
})();

(async function() {
  const [material2, texture2] = await Promise.all([
    Materials.findFirst('material2'),
    Textures.findFirst(returnChamp(randNum2))
    
  ]);
  Diagnostics.log("3.Foto:"+randNum2);
  material2.diffuse = texture2;
})();

(async function() { 
  const [killed1, married1, kissed1, killed2, married2, kissed2,killed3,married3,kissed3,firstOptions,secondOptions,thirdOptions] = await Promise.all([
    Scene.root.findFirst('killButton1'),
    Scene.root.findFirst('marryButton1'),
    Scene.root.findFirst('kissButton1'),
    Scene.root.findFirst('killButton2'),
    Scene.root.findFirst('marryButton2'),
    Scene.root.findFirst('kissButton2'),
    Scene.root.findFirst('killButton3'),
    Scene.root.findFirst('marryButton3'),
    Scene.root.findFirst('kissButton3'),
    Scene.root.findFirst('firstOptions'),
    Scene.root.findFirst('secondOptions'),
    Scene.root.findFirst('thirdOptions')


    

  ]);

  const isKilled1 = await Patches.outputs.getBoolean('isKilled1');
  const isMarried1 = await Patches.outputs.getBoolean('isMarried1');
  const isKissed1 = await Patches.outputs.getBoolean('isKissed1'); 

  const isKilled2 = await Patches.outputs.getBoolean('isKilled2');
  const isMarried2 = await Patches.outputs.getBoolean('isMarried2');
  const isKissed2 = await Patches.outputs.getBoolean('isKissed2');

  const isKilled3 = await Patches.outputs.getBoolean('isKilled3');
  const isMarried3 = await Patches.outputs.getBoolean('isMarried3');
  const isKissed3 = await Patches.outputs.getBoolean('isKissed3');

  const isMarried1Tap = await Patches.outputs.getBoolean('isMarry1Tapped');
  const isMarried2Tap = await Patches.outputs.getBoolean('isMarry2Tapped');
  const isMarried3Tap = await Patches.outputs.getBoolean('isMarry3Tapped');


  const isKill1Tap = await Patches.outputs.getBoolean('isKill1Tapped');
  const isKill2Tap = await Patches.outputs.getBoolean('isKill2Tapped');
  const isKill3Tap = await Patches.outputs.getBoolean('isKill3Tapped');

  const isKiss1Tap = await Patches.outputs.getBoolean('isKiss1Tapped');
  const isKiss2Tap = await Patches.outputs.getBoolean('isKiss2Tapped');

if(isMarried1Tap){
  married1.hidden=isMarried1Tap;
  married2.hidden=isMarried1Tap;
  married3.hidden=isMarried1Tap;
  firstOptions.hidden=isMarried1Tap;

  
}

if(isKill1Tap){
  killed1.hidden=isKill1Tap;
  killed2.hidden=isKill1Tap;
  killed3.hidden=isKill1Tap;
  firstOptions.cameraVisibility.forFrontCamera = isKill1Tap.not();

}

if(isKiss1Tap){
  kissed1.hidden=isKiss1Tap;
  kissed2.hidden=isKiss1Tap;
  kissed3.hidden=isKiss1Tap;
  
}


if(isMarried2Tap){
  married1.cameraVisibility.forFrontCamera = isMarried2Tap.not();
  married2.cameraVisibility.forFrontCamera = isMarried2Tap.not();
  married3.cameraVisibility.forFrontCamera = isMarried2Tap.not();

  secondOptions.hidden=isMarried2Tap;

}

if(isKill2Tap){
  killed1.cameraVisibility.forFrontCamera = isKill2Tap.not();
  killed2.cameraVisibility.forFrontCamera = isKill2Tap.not();
  killed3.cameraVisibility.forFrontCamera = isKill2Tap.not();

  secondOptions.cameraVisibility.forFrontCamera = isKill2Tap.not();

}

if(isKiss2Tap){
  kissed1.cameraVisibility.forFrontCamera = isKiss2Tap.not();
  kissed2.cameraVisibility.forFrontCamera = isKiss2Tap.not();
  kissed3.cameraVisibility.forFrontCamera = isKiss2Tap.not();

}

if(isMarried3Tap){

  thirdOptions.hidden=isMarried3Tap;

}

if(isKill3Tap){
  thirdOptions.cameraVisibility.forFrontCamera = isKill3Tap.not();

}
})(); 



//---------------------------------------------------------------






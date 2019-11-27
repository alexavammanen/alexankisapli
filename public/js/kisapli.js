let autismi;
let tapetti;
let lauttaY = 350;
let lautta_leveys = 80;
let ostoslista = [];
let tapetti_korkeus = 400;
let tapetti_leveys =800;
var kissa_adoptio = [];
var elami_kuoleplz = 69;
var makkaraa = 0


var vahinko_aika;

var montakokuoli;
function preload() {
  //tapetti = loadImage('https://igno.cc/opetus/kuvat/tausta.png');
  //autismi = loadImage('https://igno.cc/opetus/kuvat/cat.png');
  tapetti = loadImage('images/putin.png');
  autismi = loadImage('images/kissa.png');

}






function setup() {
var canvas =  createCanvas(windowWidth, windowWidth);
  canvas.parent("kisapli");
 angleMode(DEGREES);
 kissa_olio = new Kissa();



}

function draw() {
  image(tapetti, 0, 0,windowWidth , windowWidth/ 3);
  luo_laiva(windowWidth);
   kissa_adoptio.forEach(function(kissa_olio, montakokuoli) {
      kissa_olio.liikuta(windowWidth);
      if(kissa_olio.Y > windowWidth / 3 ){
        kissa_adoptio.splice(montakokuoli, 1);
        elami_kuoleplz =  elami_kuoleplz - 1;
        if(elami_kuoleplz == 0){
            gameOver();
        }
        //console.log("elämiä kuoleplz" + elami_kuoleplz);
      }
      if(kissa_olio.X > windowWidth){
        kissa_adoptio.splice(montakokuoli, 1);
        makkaraa = makkaraa + 1;
        elami_kuoleplz = elami_kuoleplz - 1;
        //console.log("elämiä kuoleplz" + elami_kuoleplz);

      }
      textSize(32);
     text('vahinkoja: ' + elami_kuoleplz + ' h yvää ' + makkaraa, 10, 30);


   });
 }


function tuhlaa_aikaa(){
  kissa_adoptio = [];
  makkaraa = 0;
  elami_kuoleplz = 69;
clearTimeout(vahinko_aika);
loop();
luo_kissoja();






}




function gameOver(){

  push();
  noLoop();
  textAlign(CENTER);
  text('GAME OVER JEEEEE! ', windowWidth / 2, windowWidth / 3 / 2 );
  pop();
 }

function luo_kissoja() {
 let uusi_lapsi = new Kissa();
  kissa_adoptio.unshift(uusi_lapsi);
  vahinko_aika = setTimeout(luo_kissoja, random (2000, 1));

}


function luo_laiva(){
fill('#blu')
  rect(mouseX, windowWidth / 3 - 50, lautta_leveys, 30, 20, 20, 0, 0);
}
class Kissa{
   constructor(){
    this.X = 30;
    this.Y = 200;
    this.Xnopeus = random(2, 9);
    this.Ynopeus = -2;
    this.korkeus = random(50, 99);
    this.leveys = random(50, 99);
    this.kulma = 0;
    //sä et omista tä tä koodia sä muuten tuhat mun kodin olen senjälkeen koditon ja kuolen joten älä poistaa tätä koodia paitsi jos haluat tappaa minut sitten se on ok
    }
    liikuta(windowWidth){
      this.X = this.X + this.Xnopeus;
      this.Ynopeus = this.Ynopeus + 0.05;

       if(this.Y + this.korkeus  / 2 > windowWidth / 3 - 50){
           if(this.X + 25 > mouseX && this.X < mouseX + lautta_leveys - this.leveys / 2){
             this.Ynopeus = -abs(this.Ynopeus);
           }

       }


      this.Y = this.Y + this.Ynopeus;
      this.kulma = this.kulma + 1;
      push();
      translate(this.X, this.Y);
      rotate(this.kulma);
      imageMode(CENTER);
      image(autismi, 0, 0, this.leveys, this.korkeus);
      pop();
    }

}

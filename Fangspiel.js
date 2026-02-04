var bewegung1X=20;  //command + c. dann command v
var bewegung1Y=20;
var bewegung2X=380;
var bewegung2Y=380;
var schatzX=200;
var schatzY=200;

var geschwindigkeit=5;

var punkte1=0;
var punkte2=0;
var punkteComputer=0;

var abstandX=400;
var abstandY=400;

var computerX=20;
var computerY=380;

var computerTrue=false;

var screen=0;

var bild1;
var bild2
var hintergrundbild

var button1

//buttons mit schwierigkeiten
// dh. die geschwindigkeit ändern

// ai einfügen


function preload()
{
//  bild1=loadImage("Rakete.png")
  bild2=loadImage("assets/Ufo.png")
 // hintergrundbild=loadImage("Weltraum.png")
}

function setup() {
  createCanvas(400, 400);
  imageMode(CENTER);
  fill(255,255,255)
  
   button1=createButton("Schneller Modus");
  button2=createButton("Gegen den Computer")
  
  
  button1.position(450,300)
  button2.position(450,200)

  button1.mousePressed(schwierigkeit)
  button2.mousePressed(computerOn)

  
}

function draw() {
  background(220);
  
  if(screen==0)
    {
      textSize(40) //ab jetzt größe 40
      text("Tolles Fangspiel",50,200)
      
      textSize(20);
      text("Drücke Leertaste",150,350);
    
      if(keyIsDown(32))
        {
          screen=1;
        }
      
    }
  
  
  
  
  
  if(screen==1)
    {
      
   //   hintergrundbild.resize(400,400);
      
     // image(hintergrundbild,200,200)
      
  spieler1();

  if(computerTrue==false)
        { 
          spieler2();
        }
  if(computerTrue)
        {
          computer()
        }
  schatz();
      
      
    }
  
  
  rectMode(CENTER);
}

function schwierigkeit()
{
  geschwindigkeit=7
}

function computerOn()
{
  computerTrue=true;
  
}

function computer()
{
  rect(computerX,computerY,20,20)
  text(punkteComputer,300,30)
  
  abstandX=(computerX-schatzX);
  abstandY=(computerY-schatzY);
  
  if(abstandX > 0)
     {
  computerX=computerX -4;
     }
  else{
    computerX=computerX +4;
  }
  
  if(abstandY > 0)
     {
  computerY=computerY -3;
     }
  else{
    computerY=computerY +3;
  }
  
}

function schatz()
{
  circle(schatzX,schatzY,20);
  
  if(dist(bewegung1X,bewegung1Y,schatzX,schatzY)<20)
  {
    schatzX=random(20,380)
    schatzY=random(20,380)
    punkte1=punkte1+1;
  }
  
  if(dist(bewegung2X,bewegung2Y,schatzX,schatzY)<20)
  {
    schatzX=random(20,380)
    schatzY=random(20,380)
    punkte2=punkte2+1;
  }
  
  
  if(dist(computerX,computerY,schatzX,schatzY)<20)
  {
    schatzX=random(20,380)
    schatzY=random(20,380)
    punkteComputer=punkteComputer+1;
  }
  
  
}

function spieler1()
{
  rect(bewegung1X,bewegung1Y,20,20)
  
  //bild1.resize(20,20);
  //image(bild1,bewegung1X,bewegung1Y);
  
  text(punkte1,50,30)
  textSize(30);
  
  if(bewegung1X >400)
    {
      bewegung1X=1;
    }
  
  if(bewegung1Y >400)
    {
      bewegung1Y=1;
    }
  
  if(bewegung1X <0)
    {
      bewegung1X=399;
    }
  
  if(bewegung1Y <0)
    {
      bewegung1Y=399;
    }
  
  
  if(keyIsDown(UP_ARROW))
    {
      bewegung1Y=bewegung1Y-geschwindigkeit
    }
  
  if(keyIsDown(DOWN_ARROW))
    {
      bewegung1Y=bewegung1Y+geschwindigkeit
    }
  if(keyIsDown(LEFT_ARROW))
    {
      bewegung1X=bewegung1X-geschwindigkeit
    }
  if(keyIsDown(RIGHT_ARROW))
    {
      bewegung1X=bewegung1X+geschwindigkeit
    }
}

function spieler2()
{
  rect(bewegung2X,bewegung2Y,20,20)
  
  bild2.resize(20,20);
  image(bild2,bewegung2X,bewegung2Y);
  
  text(punkte2,300,30)
  
  
  if(bewegung2X >400)
    {
      bewegung2X=400;
    }
  
  if(bewegung2Y >400)
    {
      bewegung2Y=400;
    }
  
  if(bewegung2X <0)
    {
      bewegung2X=0;
    }
  
  if(bewegung2Y <0)
    {
      bewegung2Y=0;
    }
  
  
  
  if(keyIsDown(87))
    {
      bewegung2Y=bewegung2Y-geschwindigkeit
    }
  
  if(keyIsDown(83))
    {
      bewegung2Y=bewegung2Y+geschwindigkeit
    }
  if(keyIsDown(65))
    {
      bewegung2X=bewegung2X-geschwindigkeit
    }
  if(keyIsDown(68))
    {
      bewegung2X=bewegung2X+geschwindigkeit
    }
}



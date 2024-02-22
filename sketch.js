var GameState = "wait"
var wall1,wall2,wall3,wall4,Player;

function preload(){
    Menu_Screen = loadImage('i.gif')
}
function setup(){
    createCanvas(600,600)
    Player = createSprite(300,300,10,10)
    Player.shapeColor = "red"
    Player.visible = false;

    Play_Button = createImg('start_button-removebg-preview.png')
    About_Button = createImg('question_mark-removebg-preview.png')
    Play_Button.position (150,200)
    About_Button.position (162,300)
    About_Button.size (75,75)
    Play_Button.size (100,50)


// boundary walls
wall1 = createSprite(30,300,10,550)
wall1.shapeColor = "orange";
wall2 = createSprite(300,25,550,10)
wall2.shapeColor = "blue";
wall3 = createSprite(300,580,550,10)
wall3.shapeColor = "pink";
wall4 = createSprite(570,300,10,550)
wall4.shapeColor = "black";
Player = createSprite(200,200,10,10)
Player.velocityX=4
Player.velocityY=-4;  



}
function draw(){
   

if (GameState == "wait")
{background(Menu_Screen);
Play_Button.show();
About_Button.show();
Player.visible = false;
wall1.visible = false;
wall2.visible = false;
wall3.visible = false;
wall4.visible = false;
}
    About_Button.mousePressed(() => {
Play_Button.hide();
About_Button.hide()
GameState = "about"
    })
    Play_Button.mousePressed(() => {
        Play_Button.hide();
        About_Button.hide()
        GameState = "play"
            })
    if (GameState == "about"){
        About_Game()
    }
if (GameState == "play"){
    
    background("white")
    Player.visible = true;
    wall1.visible = true;
    wall2.visible = true;
    wall3.visible = true;
    wall4.visible = true;
    if (keyDown("UP_ARROW")) {
  
        Player.velocityX=0;
        Player.velocityY=-4;
       }
        if (keyDown(DOWN_ARROW)) {
          
        Player.velocityX=0;
        Player.velocityY=4;
        }
        if (keyDown(LEFT_ARROW)) {
          
        Player.velocityX=-4;
        Player.velocityY=0;
        }
        if (keyDown(RIGHT_ARROW)) {
          
        Player.velocityX=4;
        Player.velocityY=0;
        }
        
   
    background("white")
  

  Player.bounceOff(wall1);
  Player.bounceOff(wall2);
  Player.bounceOff(wall3);
  Player.bounceOff(wall4);
 
}
drawSprites();
}
function About_Game(){
    swal({
title:"About Game",
text:"kill all the enemies visible to win the game",
textAlign:"centre",
//imageUrl:"",
//imageSize:"",
confirmButtonText:"kill all enemies",
confirmButtonColor:"green",

    },
    function(){
        GameState = "wait"
    })
}
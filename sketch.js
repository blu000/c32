const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;
var hour;

var bg = "sunrise.png";

function preload() {
    getBackgroundImg();
     
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){
    if(backgroundImg)
        background(backgroundImg);

    Engine.update(engine);

    fill("black");
    textSize(30);
    
    if(hour>=12){
        text("Time : "+ hour%12 + " PM", 50,100);
    }else if(hour==0){
        text("Time : 12 AM",100,100);
    }else{
        text("Time : "+ hour%12 + " AM", 50,100);
    }

}

async function getBackgroundImg(){

    // write code to fetch time from API
    
 
    //change the data in JSON format and store it in variable responseJSON
    

    
    //fetch datetime from responseJSON
    
    

    // slice the datetime to extract hour
    

    
    
        var response = await fetch('https://worldtimeapi.org/api/timezone/Asia/Macau')
        console.log(response)
        data= await response.json();
        console.log(data.datetime.slice(11,13))
        hours= data.datetime.slice(11,13)
        if (hours>=18){
            bg=loadImage('sunset.jpg')
        }
        else{
            bg=loadImage('sunrise.png')
        }
        
    }


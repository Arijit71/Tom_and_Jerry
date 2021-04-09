var mouseImg1, mouseImg2, mouseImg3, mouseImg4, mouse;
var catImg1, catImg2, catImg3, catImg4, cat;
var backImg, back;

function preload() {
    //load the images here
    mouseImg1 = loadImage("images/mouse1.png");
    mouseImg2 = loadImage("images/mouse2.png");
    mouseImg3 = loadImage("images/mouse3.png");
    mouseImg4 = loadImage("images/mouse4.png");

    catImg1 = loadImage("images/cat1.png");
    catImg2 = loadImage("images/cat2.png");
    catImg3 = loadImage("images/cat3.png");
    catImg4 = loadImage("images/cat4.png");

    backImg = loadImage("images/garden.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    back = createSprite (500,300);
    back.addImage ("back", backImg);
    
    mouse = createSprite(100,500);
    mouse.addImage ("mouse", mouseImg1);
    mouse.scale = 0.13;

    cat = createSprite(800,475);
    cat.addImage ("cat", catImg1);
    cat.scale = 0.25;
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
    if (keyWentDown("LEFT_ARROW")){
        cat.velocityX = -3;
        cat.addAnimation("cat",catImg2, catImg3);
        mouse.addAnimation("mouse", mouseImg2, mouseImg3);
    }

    if (cat.x - mouse.x < (cat.width - mouse.width)/2){
        cat.addImage("cat", catImg4);
        mouse.addImage("mouse", mouseImg4);
        cat.velocityX = 0;
        mouse.velocityX = 0;
    }
    
    drawSprites();
}

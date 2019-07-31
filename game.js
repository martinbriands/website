var context;
var queue;

var score = 0;
var scoreText;
var gameTimer;
var gameTime = 0;
var timerText;

var map = [
    [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
    [2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
    [2,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,2],
    [2,1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,2],
    [2,1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,2],
    [2,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2],
    [2,1,0,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,0,1,2],
    [2,1,0,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,0,1,2],
    [2,1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1,2],
    [2,1,1,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,1,1,2],
    [2,2,2,2,2,2,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,2,2,2,2,2,2],
    [2,2,2,2,2,2,1,0,1,1,0,0,0,0,0,0,0,0,0,0,1,1,0,1,2,2,2,2,2,2],
    [2,2,2,2,2,2,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,2,2,2,2,2,2],
    [2,1,1,1,1,1,1,0,1,1,0,1,2,2,2,2,2,2,1,0,1,1,0,1,1,1,1,1,1,2],
    [2,1,0,0,0,0,0,0,0,0,0,1,2,2,2,2,2,2,1,0,0,0,0,0,0,0,0,0,1,2],
    [2,1,1,1,1,1,1,0,1,1,0,1,2,2,2,2,2,2,1,0,1,1,0,1,1,1,1,1,1,2],
    [2,2,2,2,2,2,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,2,2,2,2,2,2],
    [2,2,2,2,2,2,1,0,1,1,0,0,0,0,0,0,0,0,0,0,1,1,0,1,2,2,2,2,2,2],
    [2,2,2,2,2,2,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,2,2,2,2,2,2],
    [2,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,2],
    [2,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,2],
    [2,1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,2],
    [2,1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,2],
    [2,1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,1,2],
    [2,1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,2],
    [2,1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,2],
    [2,1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1,2],
    [2,1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,2],
    [2,1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,2],
    [2,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2],
    [2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
    [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
];

var map = [
    [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
    [2,2,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2],
    [2,2,2,2,1,0,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,1,1,0,0,0,0,0,1,1,0,1,1,0,0,0,0,1,1,0,1,2,2,2,2],
    [2,2,2,2,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,1,0,1,1,1,1,0,1,1,1,1,0,1,1,0,1,1,0,1,1,0,1,2,2,2,2],
    [2,2,2,2,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,1,0,1,2,2,1,0,1,2,2,1,0,1,1,0,1,1,0,1,1,0,1,1,1,1,2],
    [2,2,2,2,1,0,1,1,0,1,1,0,1,1,0,0,0,0,1,1,0,0,0,0,0,1,2,2,1,0,1,2,2,1,0,1,1,0,1,1,0,1,1,0,0,0,0,1,2],
    [2,2,2,2,1,0,1,1,1,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,2,2,1,0,1,2,2,1,0,1,1,0,1,1,0,1,1,0,1,1,1,1,2],
    [2,2,2,2,1,0,1,2,2,2,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,1,0,1,1,0,1,1,0,1,2,2,2,2],
    [2,2,2,2,1,0,1,2,2,2,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,1,2,2,2,2],
    [2,2,2,2,1,1,1,2,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2],
    [2,2,2,2,1,1,1,1,1,1,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2],
    [2,2,2,2,1,0,0,0,0,1,2,1,0,0,0,0,0,1,1,0,1,1,0,0,0,0,0,1,1,0,0,0,0,1,1,0,1,1,0,0,0,0,1,1,1,2,2,2,2],
    [2,2,2,2,1,0,1,1,0,1,2,1,0,1,1,1,0,1,1,0,1,1,0,1,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,0,1,1,2,2,2,2],
    [2,1,1,1,1,0,1,1,0,1,1,1,0,1,1,1,0,1,1,0,1,1,0,1,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,1,0,0,1,2,2,2,2],
    [2,1,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,1,1,0,1,1,0,0,0,0,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,1,0,0,1,2,2,2,2],
    [2,1,1,1,1,0,1,1,1,0,1,1,0,1,1,0,1,1,1,0,1,1,0,1,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,1,0,0,1,2,2,2,2],
    [2,2,2,2,1,0,1,1,1,0,1,1,0,1,1,0,1,1,1,0,1,1,0,1,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,0,1,1,2,2,2,2],
    [2,2,2,2,1,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1,2,2,2,2],
    [2,2,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2],
    [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2]
];

var WIDTH = map[0].length * 16;
var HEIGHT = map.length * 16;

var dots;
var teleporter = [
    new Vector2(2, 14),
    new Vector2(46, 5)
    // new Vector2(2, 14),
    // new Vector2(27, 14)
];

var pillsCoordinates = [
    new Vector2(34, 2),
    new Vector2(19, 11),
    //new Vector2(27, 2),
    //new Vector2(27, 29),
];

var pills = [];

var mazeSpriteSheet;

var tileWidth = Math.floor(WIDTH / map[0].length);
var tileHeight = Math.floor(HEIGHT / map.length);

var pacmanSpriteSheet;
var playerSprite;
var playerSpawn = new Vector2(5,11)
var playerPosition = playerSpawn.clone();
var currentDirection = new Vector2(0,0);
var bufferedDirection = new Vector2(0,0);
var playerCounter = 0; 
var playerCounterMax = 10;

var ghostSpriteSheet1;
var ghostSprite1;
var ghostSpawn1 = new Vector2(17,2)
var ghostScatter1 = new Vector2(17,2)
var ghostPosition1 = ghostSpawn1.clone();
var currentGhostDirection1 = new Vector2(0,1);
var ghostCounter1 = 0; 
var ghostCounter1Max = 12;
var ghostCounter1MaxSaved = 12;
var ghostFlee1 = false;
var returning1 = false;
var ghostFleeTimer1 = 0;
var ghostFleeTimerEnd1 = 0;


var ghostSpriteSheet2;
var ghostSprite2;
var ghostSpawn2 = new Vector2(42,12)
var ghostScatter2 = new Vector2(42,12)
var ghostPosition2 = ghostSpawn2.clone();
var currentGhostDirection2 = new Vector2(-1,0);
var ghostCounter2 = 0; 
var ghostCounter2Max = 17;
var ghostCounter2MaxSaved = 17;
var ghostFlee2 = false;
var returning2 = false;
var ghostFleeTimer2 = 0;
var ghostFleeTimerEnd2 = 0;


var ghostSpriteSheet3;
var ghostSprite3;
var ghostSpawn3 = new Vector2(-2,0)
var ghostScatter3 = new Vector2(2,29)
var ghostPosition3 = ghostSpawn3.clone();
var currentGhostDirection3 = new Vector2(0,0);
var ghostCounter3 = 0; 
var ghostCounter3Max = 15;
var ghostCounter3MaxSaved = 15;
var ghostFlee3 = false;
var returning3 = false;
var ghostFleeTimer3 = 0;
var ghostFleeTimerEnd3 = 0;


var ghostSpriteSheet4;
var ghostSprite4;
var ghostSpawn4 = new Vector2(-21,0)
var ghostScatter4 = new Vector2(27,29)
var ghostPosition4 = ghostSpawn4.clone();
var currentGhostDirection4 = new Vector2(0,0);
var ghostCounter4 = 0; 
var ghostCounter4Max = 20;
var ghostCounter4MaxSaved = 20;
var ghostFlee4 = false;
var returning4 = false;
var ghostFleeTimer4 = 0;
var ghostFleeTimerEnd4 = 0;


var ghostFleeTimerMax = 10 * 60;
var ghostFleeTimerEndMax = 2 * 60;



var paused = false;

var isChasing = true;

window.onload = function()
{
    /*
     *      Set up the Canvas with Size and height
     *
     */
    var canvas = document.getElementById('gameCanvas');
    context = canvas.getContext('2d');
    context.canvas.width = WIDTH;
    context.canvas.height = HEIGHT;
    stage = new createjs.Stage("gameCanvas");

    /*
     *      Set up the Asset Queue and load sounds
     *
     */
    queue = new createjs.LoadQueue(false);
//    queue.installPlugin(createjs.Sound);
    queue.on("complete", queueLoaded, this);
//    createjs.Sound.alternateExtensions = ["ogg"];

    /*
     *      Create a load manifest for all assets
     *
     */
    queue.loadManifest([
        {id: 'ghost1', src: 'assets/ghost1.png'},
        {id: 'ghost2', src: 'assets/ghost2.png'},
        {id: 'ghost3', src: 'assets/ghost3.png'},
        {id: 'ghost4', src: 'assets/ghost4.png'},
        {id: 'player', src: 'assets/pacman.png'},
        {id: 'maze', src: 'assets/maze2.png'}
    ]);
    queue.load();

    /*
     *      Create a timer that updates once per second
     *
     */
    gameTimer = setInterval(updateTime, 1000);

}

function queueLoaded(event)
{
    // Add background image
    //var backgroundImage = new createjs.Bitmap(queue.getResult("backgroundImage"))
    //stage.addChild(backgroundImage);

    //Add Score
    scoreText = new createjs.Text("Score: " + score.toString(), "20px Lucida Console, Monaco, monospace", "#FFF");
    scoreText.x = WIDTH / 2 - 50;
    scoreText.y = 0;
    stage.addChild(scoreText);

    //Ad Timer
    //timerText = new createjs.Text("Time: " + gameTime.toString(), "36px Arial", "#FFF");
    //timerText.x = 800;
    //timerText.y = 10;
    //stage.addChild(timerText);

    // Play background sound

    pacmanSpriteSheet = new createjs.SpriteSheet({
        "images": [queue.getResult('player')],
        "frames": {"width": 16, "height": 16},
        "animations": { "right": [0,2], "left": [3,5], "up": [6,8], "down": [9,11] },
        "framerate": 10
    });

    mazeSpriteSheet = new createjs.SpriteSheet({
        "images": [queue.getResult('maze')],
        "frames": {"width": 16, "height": 16},
        "animations": { "Corner1": 0, "Corner2": 1, "Corner3": 2, "Corner4": 3, "Straight1": 4, "Straight2": 5, "Straight3": 6, "Straight4": 7, "CornerBig1": 8, "CornerBig2": 9, "CornerBig3": 10, "CornerBig4": 11}
    });

    ghostSpriteSheet1 = new createjs.SpriteSheet({
        "images": [queue.getResult('ghost1')],
        "frames": {"width": 16, "height": 16},
        "animations": { "right": [0,1], "left": [2,3], "up": [4,5], "down": [6,7], "flee": [8,9], "flee_end": [8,11], "right_eyes": 12, "left_eyes": 13, "up_eyes": 14, "down_eyes":15},
        "framerate": 5
    });

    ghostSpriteSheet2 = new createjs.SpriteSheet({
        "images": [queue.getResult('ghost2')],
        "frames": {"width": 16, "height": 16},
        "animations": { "right": [0,1], "left": [2,3], "up": [4,5], "down": [6,7], "flee": [8,9], "flee_end": [8,11], "right_eyes": 12, "left_eyes": 13, "up_eyes": 14, "down_eyes":15},
        "framerate": 5
    });

    ghostSpriteSheet3 = new createjs.SpriteSheet({
        "images": [queue.getResult('ghost3')],
        "frames": {"width": 16, "height": 16},
        "animations": { "right": [0,1], "left": [2,3], "up": [4,5], "down": [6,7], "flee": [8,9], "flee_end": [8,11], "right_eyes": 12, "left_eyes": 13, "up_eyes": 14, "down_eyes":15},
        "framerate": 5
    });

    ghostSpriteSheet4 = new createjs.SpriteSheet({
        "images": [queue.getResult('ghost4')],
        "frames": {"width": 16, "height": 16},
        "animations": { "right": [0,1], "left": [2,3], "up": [4,5], "down": [6,7], "flee": [8,9], "flee_end": [8,11], "right_eyes": 12, "left_eyes": 13, "up_eyes": 14, "down_eyes":15},
        "framerate": 5
    });

    createMap();

    ghostSprite1 = createEnemy(ghostSpriteSheet1, ghostPosition1);
    ghostSprite2 = createEnemy(ghostSpriteSheet2, ghostPosition2);
    ghostSprite3 = createEnemy(ghostSpriteSheet3, ghostPosition3);
    ghostSprite4 = createEnemy(ghostSpriteSheet4, ghostPosition4);

    createPlayer();

    // Add ticker
    createjs.Ticker.setFPS(30);
    createjs.Ticker.addEventListener('tick', stage);

    Update = setInterval(Update, 16);

    chase();

    window.onkeydown = keyDownHandler;
}

var index = 0;

var KEYCODE_LEFT = 37,   KEYCODE_RIGHT = 39,   KEYCODE_UP = 38,   KEYCODE_DOWN = 40

function keyDownHandler(e) {

    switch(e.keyCode)
    {
        case KEYCODE_LEFT:  
            bufferedDirection = new Vector2(-1,0);
            e.preventDefault();
            break;
        case KEYCODE_RIGHT: 
            bufferedDirection = new Vector2(1,0); 
            e.preventDefault();
            break;
        case KEYCODE_UP:    
            bufferedDirection = new Vector2(0,-1); 
            e.preventDefault();
            break;
        case KEYCODE_DOWN: 
            bufferedDirection = new Vector2(0,1); 
            e.preventDefault();
            break;
    }


    if (currentDirection.x == 0 && currentDirection.y == 0) {
        playerCounter = 0;

        var nextPosition = playerPosition.add(bufferedDirection);
        if (map[nextPosition.y][nextPosition.x] != 1) {
            currentDirection = bufferedDirection;
        }

        if (bufferedDirection.x == 1 && bufferedDirection.y == 0) {
            playerSprite.gotoAndPlay("right");
        } else if (bufferedDirection.x == -1 && bufferedDirection.y == 0) {
            playerSprite.gotoAndPlay("left");
        } else if (bufferedDirection.x == 0 && bufferedDirection.y == -1) {
            playerSprite.gotoAndPlay("up");
        } else if (bufferedDirection.x == 0 && bufferedDirection.y == 1) {
            playerSprite.gotoAndPlay("down");
        }
    }
}


function createMap() 
{
    var rect = new createjs.Shape();
    rect.graphics.beginFill('black');
    rect.graphics.drawRect(0, 0, WIDTH, HEIGHT );
    rect.graphics.endFill();
    stage.addChildAt(rect, index++);

    dots = new Array(map.length);

    for (var y = 0; y < map.length; y++) 
    {
        dots[y] = new Array(map[0].length);

        for (var x = 0; x < map[0].length; x++) 
        {
            if (map[y][x] == 1) {

                //corner 1
                if (map[y][x+1] == 1 && map[y+1][x] == 1 && (map[y+1][x+1] == 0 || (map[y-1][x-1] == 0 && map[y][x-1] == 0 && map[y-1][x] == 0))) {
                    var wall = new createjs.Sprite(mazeSpriteSheet, "Corner1");

                    if (map[y+1][x+1] == 0) {
                        wall.gotoAndPlay("CornerBig1");
                    } else {
                        wall.gotoAndPlay("Corner1");
                    }

                    wall.scaleX = tileWidth / 16;
                    wall.scaleY = tileHeight / 16;
                    wall.x = tileWidth * x;
                    wall.y = tileHeight * y;
                    stage.addChildAt(wall, index++);
                } else if (map[y-1][x] == 1 && map[y][x+1] == 1 && (map[y-1][x+1] == 0 || (map[y+1][x-1] == 0 && map[y][x-1] == 0 && map[y+1][x] == 0))) {
                    var wall = new createjs.Sprite(mazeSpriteSheet, "Corner2");

                    if (map[y-1][x+1] == 0) {
                        wall.gotoAndPlay("CornerBig2");
                    } else {
                        wall.gotoAndPlay("Corner2");
                    }

                    wall.scaleX = tileWidth / 16;
                    wall.scaleY = tileHeight / 16;
                    wall.x = tileWidth * x;
                    wall.y = tileHeight * y;
                    stage.addChildAt(wall, index++);
                } else if (map[y-1][x] == 1 && map[y][x-1] == 1 && (map[y-1][x-1] == 0 || (map[y+1][x+1] == 0 && map[y][x+1] == 0 && map[y+1][x] == 0))) {
                    var wall = new createjs.Sprite(mazeSpriteSheet, "Corner3");

                    if (map[y-1][x-1] == 0) {
                        wall.gotoAndPlay("CornerBig3");
                    } else {
                        wall.gotoAndPlay("Corner3");
                    }
                    

                    wall.scaleX = tileWidth / 16;
                    wall.scaleY = tileHeight / 16;
                    wall.x = tileWidth * x;
                    wall.y = tileHeight * y;
                    stage.addChildAt(wall, index++);
                } else if (map[y+1][x] == 1 && map[y][x-1] == 1 && (map[y+1][x-1] == 0 || (map[y-1][x+1] == 0 && map[y][x+1] == 0 && map[y-1][x] == 0))) {
                    var wall = new createjs.Sprite(mazeSpriteSheet, "Corner4");

                    if (map[y+1][x-1] == 0) {
                        wall.gotoAndPlay("CornerBig4");
                    } else {
                        wall.gotoAndPlay("Corner4");
                    }
                    
                    wall.scaleX = tileWidth / 16;
                    wall.scaleY = tileHeight / 16;
                    wall.x = tileWidth * x;
                    wall.y = tileHeight * y;
                    stage.addChildAt(wall, index++);
                } else if (map[y-1][x] == 1 && map[y+1][x] == 1 && map[y][x+1] == 0) {
                    var wall = new createjs.Sprite(mazeSpriteSheet, "Straight1");
                    wall.gotoAndPlay("Straight1");

                    wall.scaleX = tileWidth / 16;
                    wall.scaleY = tileHeight / 16;
                    wall.x = tileWidth * x;
                    wall.y = tileHeight * y;
                    stage.addChildAt(wall, index++);
                } else if (map[y-1][x] == 1 && map[y+1][x] == 1 && map[y][x-1] == 0) {
                    var wall = new createjs.Sprite(mazeSpriteSheet, "Straight2");
                    wall.gotoAndPlay("Straight2");

                    wall.scaleX = tileWidth / 16;
                    wall.scaleY = tileHeight / 16;
                    wall.x = tileWidth * x;
                    wall.y = tileHeight * y;
                    stage.addChildAt(wall, index++);
                } else if (map[y][x-1] == 1 && map[y][x+1] == 1 && map[y-1][x] == 0) {
                    var wall = new createjs.Sprite(mazeSpriteSheet, "Straight3");
                    wall.gotoAndPlay("Straight3");

                    wall.scaleX = tileWidth / 16;
                    wall.scaleY = tileHeight / 16;
                    wall.x = tileWidth * x;
                    wall.y = tileHeight * y;
                    stage.addChildAt(wall, index++);
                } else if (map[y][x-1] == 1 && map[y][x+1] == 1 && map[y+1][x] == 0) {
                    var wall = new createjs.Sprite(mazeSpriteSheet, "Straight4");
                    wall.gotoAndPlay("Straight4");

                    wall.scaleX = tileWidth / 16;
                    wall.scaleY = tileHeight / 16;
                    wall.x = tileWidth * x;
                    wall.y = tileHeight * y;
                    stage.addChildAt(wall, index++);
                }

                dots[y][x] = null;

            } else if (map[y][x] == 0) {
                console.log("dot!");


                var rect = new createjs.Shape();
                rect.graphics.beginFill('white');
                rect.graphics.drawRect(x * tileWidth + tileWidth / 2 - 2, y * tileHeight + tileHeight / 2 - 2, 4, 4 );
                rect.graphics.endFill();

                rect.isPill = false;

                stage.addChildAt(rect, index++);

                dots[y][x] = rect;
            }
        }
    }


    for (var y = 0; y < map.length; y++) 
    {
        for (var x = 0; x < map[0].length; x++) 
        {
            if (map[y][x] == 0) {
                var count = 0;

                count = (map[y-1][x] == 0 || map[y-1][x] == 3) ? count + 1 : count;
                count = (map[y+1][x] == 0 || map[y+1][x] == 3) ? count + 1 : count;
                count = (map[y][x-1] == 0 || map[y][x-1] == 3) ? count + 1 : count;
                count = (map[y][x+1] == 0 || map[y][x+1] == 3) ? count + 1 : count;

                if (count >= 3) {
                    //we are on a decision tile
                    map[y][x] = 3;
                    //var rect = new createjs.Shape();
                    //rect.graphics.beginFill('green');
                    //rect.graphics.drawRect(x * tileWidth + tileWidth / 2 - 5, y * tileHeight + tileHeight / 2 - 5, 10, 10);
                    //rect.graphics.endFill();
                    //stage.addChildAt(rect, index++);
                    //console.log("decision")
                }
            }
        }
    }

    //teleporter setup
    map[teleporter[0].y][teleporter[0].x] = 4;
    map[teleporter[1].y][teleporter[1].x] = 4;

    for (var i = 0; i < pillsCoordinates.length; i++) {
        map[pillsCoordinates[i].y][pillsCoordinates[i].x] = 0;

        var pill = dots[pillsCoordinates[i].y][pillsCoordinates[i].x];

       // console.log(pillsCoordinates[i].y, pillsCoordinates[i].x);
       // console.log(dots);

        //var pill = new createjs.Shape();
        pill.graphics.beginFill('yellow');
        pill.graphics.drawRect(pillsCoordinates[i].x * tileWidth + tileWidth / 2 - 5, pillsCoordinates[i].y * tileHeight + tileHeight / 2 - 5, 10, 10);
        pill.graphics.endFill();

        pill.isPill = true;

        //stage.addChildAt(rect, index++);
    }

   // console.log(dots);
}

function createPlayer() {
    playerSprite = new createjs.Sprite(pacmanSpriteSheet, "right");
    playerSprite.scaleX = tileWidth / 8;
    playerSprite.scaleY = tileHeight / 8;
    playerSprite.regX = 8;
    playerSprite.regY = 8;
    playerSprite.x = playerPosition.x * tileWidth + tileWidth / 2;
    playerSprite.y = playerPosition.y * tileHeight + tileHeight / 2;
    playerSprite.gotoAndPlay("right");
    stage.addChildAt(playerSprite, index++);
}

function createEnemy(spriteSheet, position)
{
	var sprite = new createjs.Sprite(spriteSheet, "right");
    sprite.regX = 8;
    sprite.regY = 8;
    sprite.scaleX = tileWidth / 8;
    sprite.scaleY = tileHeight / 8;

    sprite.x = position.x * tileWidth + (tileWidth / 2);
    sprite.y = position.y * tileHeight + (tileHeight / 2);

    sprite.gotoAndPlay("right");
    stage.addChildAt(sprite, index++);
    
    return sprite;
}

function Update() 
{
    if (!paused) {
        //player update loop
        if (playerCounter >= playerCounterMax) {
            PlayerUpdate();
            playerCounter = 0;
        } else {
            playerCounter ++;
            if (currentDirection.x != 0 || currentDirection.y != 0) {
                playerSprite.x = playerPosition.x * tileWidth + tileWidth / 2 + playerCounter * ((currentDirection.x * tileWidth) / playerCounterMax);
                playerSprite.y = playerPosition.y * tileHeight + tileHeight / 2 + playerCounter * ((currentDirection.y * tileHeight) / playerCounterMax);
            }
        }

        //ghost 1 update loop
        if (ghostCounter1 >= ghostCounter1Max) {
            var target = isChasing ? playerPosition.clone() : ghostScatter1.clone();

            target = returning1 ? ghostSpawn1.clone() : target;


            [ghostPosition1, currentGhostDirection1] = EnemyUpdate(ghostPosition1, currentGhostDirection1, ghostSprite1, ghostFlee1, target, returning1);
            ghostCounter1 = 0;

            if (returning1 && ghostPosition1.equals(target)) {
                returning1 = false;
                ghostCounter1Max = ghostCounter1MaxSaved;
            }

        } else {
            ghostCounter1 ++;
            if (currentGhostDirection1.x != 0 || currentGhostDirection1.y != 0) {
                ghostSprite1.x = ghostPosition1.x * tileWidth + tileWidth / 2 + ghostCounter1 * ((currentGhostDirection1.x * tileWidth) / ghostCounter1Max);
                ghostSprite1.y = ghostPosition1.y * tileHeight + tileHeight / 2 + ghostCounter1 * ((currentGhostDirection1.y * tileHeight) / ghostCounter1Max);
            }
        }

        //ghost 2 update loop
        if (ghostCounter2 >= ghostCounter2Max) {
            var target = playerPosition.clone();
            for (var i = 0; i < 5; i++) {
                if (map[target.y + currentDirection.y][target.x + currentDirection.x] != 1) {
                    target = target.add(currentDirection);
                } else {
                    i = 5;
                }
            }
            target = isChasing ? target : ghostScatter2.clone();
            target = returning2 ? ghostSpawn2.clone() : target;
            [ghostPosition2, currentGhostDirection2] = EnemyUpdate(ghostPosition2, currentGhostDirection2, ghostSprite2, ghostFlee2, target, returning2);
            ghostCounter2 = 0;

            if (returning2 && ghostPosition2.equals(target)) {
                returning2 = false;
                ghostCounter2Max = ghostCounter2MaxSaved;
            }
        } else {
            ghostCounter2 ++;
            if (currentGhostDirection2.x != 0 || currentGhostDirection2.y != 0) {
                ghostSprite2.x = ghostPosition2.x * tileWidth + tileWidth / 2 + ghostCounter2 * ((currentGhostDirection2.x * tileWidth) / ghostCounter2Max);
                ghostSprite2.y = ghostPosition2.y * tileHeight + tileHeight / 2 + ghostCounter2 * ((currentGhostDirection2.y * tileHeight) / ghostCounter2Max);
            }
        }

        //ghost 3 update loop
        if (ghostCounter3 >= ghostCounter3Max) {
            var target = isChasing ? getRandomPos() : ghostScatter3.clone();

            target = returning3 ? ghostSpawn3.clone() : target;
            //[ghostPosition3, currentGhostDirection3] = EnemyUpdate(ghostPosition3, currentGhostDirection3, ghostSprite3, ghostFlee3, target, returning3);
            ghostCounter3 = 0;

            if (returning3 && ghostPosition3.equals(target)) {
                returning3 = false;
                ghostCounter3Max = ghostCounter3MaxSaved;
            }
        } else {
            ghostCounter3 ++;
            if (currentGhostDirection3.x != 0 || currentGhostDirection3.y != 0) {
                ghostSprite3.x = ghostPosition3.x * tileWidth + tileWidth / 2 + ghostCounter3 * ((currentGhostDirection3.x * tileWidth) / ghostCounter3Max);
                ghostSprite3.y = ghostPosition3.y * tileHeight + tileHeight / 2 + ghostCounter3 * ((currentGhostDirection3.y * tileHeight) / ghostCounter3Max);
            }
        }

        //ghost 4 update loop
        if (ghostCounter4 >= ghostCounter4Max) {
            var target = Math.abs(ghostPosition4.x - playerPosition.x) + Math.abs(ghostPosition4.y - playerPosition.y) < 8 ? getRandomPos() : playerPosition.clone();
            target = isChasing ? target : ghostScatter4.clone();

            target = returning4 ? ghostSpawn4.clone() : target;
            //[ghostPosition4, currentGhostDirection4] = EnemyUpdate(ghostPosition4, currentGhostDirection4, ghostSprite4, ghostFlee4, target, returning4);
            ghostCounter4 = 0;

            if (returning4 && ghostPosition4.equals(target)) {
                returning4 = false;
                ghostCounter4Max = ghostCounter4MaxSaved;
            }
        } else {
            ghostCounter4 ++;
            if (currentGhostDirection4.x != 0 || currentGhostDirection4.y != 0) {
                ghostSprite4.x = ghostPosition4.x * tileWidth + tileWidth / 2 + ghostCounter4 * ((currentGhostDirection4.x * tileWidth) / ghostCounter4Max);
                ghostSprite4.y = ghostPosition4.y * tileHeight + tileHeight / 2 + ghostCounter4 * ((currentGhostDirection4.y * tileHeight) / ghostCounter4Max);
            }
        }


        //detect if close
        if ((Math.abs(playerSprite.x - ghostSprite1.x) + Math.abs(playerSprite.y - ghostSprite1.y)) < 25) {
            if (ghostFlee1 && !returning1) {
                //kill the ghost
                ghostFlee1 = false;

                paused = true;
                setTimeout(function() { paused = false; }, 1000);

                returning1 = true;
                ghostCounter1Max = 5;
                ghostCounter1 = 0;
            } else {
                if (!returning1) {
                //kill the player
                    die();



                }
            }
        }

        if ((Math.abs(playerSprite.x - ghostSprite2.x) + Math.abs(playerSprite.y - ghostSprite2.y)) < 25) {
            if (ghostFlee2) {
                //kill the ghost
                ghostFlee2 = false;

                paused = true;
                setTimeout(function() { paused = false; }, 1000);

                returning2 = true;
                ghostCounter2Max = 5;
            } else {
                //kill the player
                if (!returning2) {
                    die();
                }
            }
        }

        if ((Math.abs(playerSprite.x - ghostSprite3.x) + Math.abs(playerSprite.y - ghostSprite3.y)) < 25) {
            if (ghostFlee3) {
                //kill the ghost
                ghostFlee3 = false;

                paused = true;
                setTimeout(function() { paused = false; }, 1000);  

                returning3 = true;
                ghostCounter3Max = 5;    
            } else {
                //kill the player
                if (!returning3) {
                    die();
                }
            }
        }

        if ((Math.abs(playerSprite.x - ghostSprite4.x) + Math.abs(playerSprite.y - ghostSprite4.y)) < 25) {
            if (ghostFlee4) {
                //kill the ghost
                ghostFlee4 = false;

                paused = true;
                setTimeout(function() { paused = false; }, 1000);  

                returning4 = true;
                ghostCounter4Max = 5;    
            } else {
                //kill the player
                if (!returning4) {
                    die();
                }
            }
        }

        if (ghostFlee1) {
            ghostFleeTimer1++;

            if (ghostFleeTimer1 == ghostFleeTimerMax) {
                ghostSprite1.gotoAndPlay("flee_end");
            } else if (ghostFleeTimer1 > ghostFleeTimerMax) {
                ghostFleeTimerEnd1++;

                if (ghostFleeTimerEnd1 > ghostFleeTimerEndMax) {
                    ghostSprite1.gotoAndPlay("right");
                    ghostFlee1 = false;
                }
            }
        }
        if (ghostFlee2) {
            ghostFleeTimer2++;

            if (ghostFleeTimer2 == ghostFleeTimerMax) {
                ghostSprite2.gotoAndPlay("flee_end");
            } else if (ghostFleeTimer2 > ghostFleeTimerMax) {
                ghostFleeTimerEnd2++;

                if (ghostFleeTimerEnd2 > ghostFleeTimerEndMax) {
                    ghostSprite2.gotoAndPlay("right");
                    ghostFlee2 = false;
                }
            }
        }
        if (ghostFlee3) {
            ghostFleeTimer3++;

            if (ghostFleeTimer3 == ghostFleeTimerMax) {
                ghostSprite3.gotoAndPlay("flee_end");
            } else if (ghostFleeTimer3 > ghostFleeTimerMax) {
                ghostFleeTimerEnd3++;

                if (ghostFleeTimerEnd3 > ghostFleeTimerEndMax) {
                    ghostSprite3.gotoAndPlay("right");
                    ghostFlee3 = false;
                }
            }
        if (ghostFlee4) {
            ghostFleeTimer4++;

            if (ghostFleeTimer4 == ghostFleeTimerMax) {
                ghostSprite4.gotoAndPlay("flee_end");
            } else if (ghostFleeTimer4 > ghostFleeTimerMax) {
                ghostFleeTimerEnd4++;

                if (ghostFleeTimerEnd4 > ghostFleeTimerEndMax) {
                    ghostSprite4.gotoAndPlay("right");
                    ghostFlee4 = false;
                }
            }
        }
        }
    }
}

function die() {
    paused = true;
    setTimeout(function() { 
        paused = false; 
        playerPosition = playerSpawn.clone();
        currentDirection = new Vector2(0,0);
        playerCounter = playerCounterMax;

        ghostPosition1 = ghostSpawn1.clone();
        ghostPosition2 = ghostSpawn2.clone();
        ghostPosition3 = ghostSpawn3.clone();
        ghostPosition4 = ghostSpawn4.clone();

        currentGhostDirection1 = new Vector2(0,1);
        currentGhostDirection2 = new Vector2(1,0);

        currentGhostDirection3 = new Vector2(0,0);
        currentGhostDirection4 = new Vector2(0,0);

        ghostflee1 = false;
        ghostflee2 = false;
        ghostflee3 = false;
        ghostflee4 = false;

        ghostSprite1.gotoAndPlay("right");
        ghostSprite2.gotoAndPlay("right");
        ghostSprite3.gotoAndPlay("left");
        ghostSprite4.gotoAndPlay("left");
    }, 1000);
}


function PlayerUpdate ()
{
    //update the current direction of the player

    var nextPosition = playerPosition.add(currentDirection);

    playerPosition = nextPosition;
    playerSprite.x = playerPosition.x * tileWidth + tileWidth / 2;
    playerSprite.y = playerPosition.y * tileHeight + tileHeight / 2;


    if (dots[playerPosition.y][playerPosition.x] != null) {

        //console.log(dots[playerPosition.y][playerPosition.x]);

        if (dots[playerPosition.y][playerPosition.x].isPill) {
            ghostFlee1 = true;
            ghostFleeTimer1 = 0;
            ghostFleeTimerEnd1 = 0;
            ghostSprite1.gotoAndPlay("flee");

            ghostFlee2 = true;            
            ghostFleeTimer2 = 0;
            ghostFleeTimerEnd2 = 0;
            ghostSprite2.gotoAndPlay("flee");

            ghostFlee3 = true;            
            ghostFleeTimer3 = 0;
            ghostFleeTimerEnd3 = 0;
            ghostSprite3.gotoAndPlay("flee");

            ghostFlee4 = true;            
            ghostFleeTimer4 = 0;
            ghostFleeTimerEnd4 = 0;
            ghostSprite4.gotoAndPlay("flee");
        }

        stage.removeChild(dots[playerPosition.y][playerPosition.x]);
        dots[playerPosition.y][playerPosition.x] = null;

        score += 100;
        scoreText.text = "Score: " + score.toString();
    }

    if (map[playerPosition.y][playerPosition.x] == 4) {
        console.log("teleport");
        if (teleporter[0].x == playerPosition.x && teleporter[0].y == playerPosition.y) {
            playerPosition = teleporter[1].clone();
        } else {
            playerPosition = teleporter[0].clone();
        }

        playerSprite.x = playerPosition.x * tileWidth + tileWidth / 2;
        playerSprite.y = playerPosition.y * tileHeight + tileHeight / 2;

        if (dots[playerPosition.y][playerPosition.x] != null) {
            stage.removeChild(dots[playerPosition.y][playerPosition.x]);
            dots[playerPosition.y][playerPosition.x] = null;

            score += 100;
            scoreText.text = "Score: " + score.toString();
        }

        return;
    }

    if (bufferedDirection. x != 0 || bufferedDirection.y != 0) {
        nextPosition = playerPosition.add(bufferedDirection);

        if (map[nextPosition.y][nextPosition.x] != 1) 
        {
            //buffered is valid
            currentDirection = bufferedDirection;

            if (currentDirection.x == 1 && currentDirection.y == 0) {
                playerSprite.gotoAndPlay("right");
            } else if (currentDirection.x == -1 && currentDirection.y == 0) {
                playerSprite.gotoAndPlay("left");
            } else if (currentDirection.x == 0 && currentDirection.y == -1) {
                playerSprite.gotoAndPlay("up");
            } else if (currentDirection.x == 0 && currentDirection.y == 1) {
                playerSprite.gotoAndPlay("down");
            }
        } 
        else
        {
            //continue with previous
            nextPosition = playerPosition.add(currentDirection);
            if (map[nextPosition.y][nextPosition.x] == 1)
            {
                //current is invalid
                currentDirection = new Vector2(0,0);
            }
        }
    }
}

function EnemyUpdate(ghostPosition, currentGhostDirection, ghostSprite, ghostFlee, targetPosition, returning) {

    var nextGhostPosition = ghostPosition.add(currentGhostDirection);

    ghostPosition = nextGhostPosition;
    ghostSprite.x = ghostPosition.x * tileWidth + tileWidth / 2;
    ghostSprite.y = ghostPosition.y * tileHeight + tileHeight / 2;

    //console.log(ghostPosition);

    var resultPosition = nextGhostPosition;
    var resultDirection = currentGhostDirection;


    if (map[ghostPosition.y][ghostPosition.x] == 4) {
        console.log("teleport");
        if (teleporter[0].x == ghostPosition.x && teleporter[0].y == ghostPosition.y) {
            resultPosition = teleporter[1].clone();
        } else {
            resultPosition = teleporter[0].clone();
        }

        ghostSprite.x = ghostPosition.x * tileWidth + tileWidth / 2;
        ghostSprite.y = ghostPosition.y * tileHeight + tileHeight / 2;

        return [resultPosition, resultDirection];
    }


    if (map[ghostPosition.y][ghostPosition.x] == 3) {
        //decide where to go next
        //currentGhostDirection1 = new Vector2(0,0);

        //do it AStar TODO

        var target = ghostFlee ? ghostPosition.add(getFleeTarget(ghostPosition, currentGhostDirection)) : targetPosition;
        resultDirection = AStar(target, ghostPosition, currentGhostDirection);

        //console.log(currentGhostDirection1);

        if (!ghostFlee) {
            if (resultDirection.x == 1 && resultDirection.y == 0) {
                returning ? ghostSprite.gotoAndPlay("right_eyes") : ghostSprite.gotoAndPlay("right");
            } else if (resultDirection.x == -1 && resultDirection.y == 0) {
                returning ? ghostSprite.gotoAndPlay("left_eyes") : ghostSprite.gotoAndPlay("left");
            } else if (resultDirection.x == 0 && resultDirection.y == -1) {
                returning ? ghostSprite.gotoAndPlay("up_eyes") : ghostSprite.gotoAndPlay("up");
            } else if (resultDirection.x == 0 && resultDirection.y == 1) {
                returning ? ghostSprite.gotoAndPlay("down_eyes") : ghostSprite.gotoAndPlay("down");
            } 
        }       
    } else {
        nextGhostPosition = nextGhostPosition.add(currentGhostDirection);
        if (map[nextGhostPosition.y][nextGhostPosition.x] == 1)
        {
            var target = ghostFlee ? ghostPosition.add(getFleeTarget(ghostPosition, currentGhostDirection)) : targetPosition;

            resultDirection = AStar(target, ghostPosition, currentGhostDirection);

            if (!ghostFlee) {

                if (resultDirection.x == 1 && resultDirection.y == 0) {
                    returning ? ghostSprite.gotoAndPlay("right_eyes") : ghostSprite.gotoAndPlay("right");
                } else if (resultDirection.x == -1 && resultDirection.y == 0) {
                    returning ? ghostSprite.gotoAndPlay("left_eyes") : ghostSprite.gotoAndPlay("left");
                } else if (resultDirection.x == 0 && resultDirection.y == -1) {
                    returning ? ghostSprite.gotoAndPlay("up_eyes") : ghostSprite.gotoAndPlay("up");
                } else if (resultDirection.x == 0 && resultDirection.y == 1) {
                    returning ? ghostSprite.gotoAndPlay("down_eyes") : ghostSprite.gotoAndPlay("down");
                }   
            }
        }
    }

    return [resultPosition, resultDirection];
}

function randomWay(ghostPosition, currentGhostDirection) {
    var min = 0;
    var max = 4;

    var nextAction = false;

    var resultDirection = currentGhostDirection;

    while (!nextAction) {
        var random = Math.floor( Math.random() * (max - min)) + + min; 

        var previousPosition = ghostPosition.subtract(currentGhostDirection);
        var nextDirection;

        switch (random) {
            case 0: 
                nextDirection = new Vector2(0, 1);
                break;
            case 1: 
                nextDirection = new Vector2(0, -1);
                break;
             case 2: 
                nextDirection = new Vector2(1, 0);
                break;
            case 3: 
                nextDirection = new Vector2(-1, 0);
                break;
        }

        nextGhostPosition = ghostPosition.add(nextDirection);
        if (nextGhostPosition.x != previousPosition.x || nextGhostPosition.y != previousPosition.y) {
            if (map[nextGhostPosition.y][nextGhostPosition.x] != 1) {
                resultDirection = nextDirection.clone();
                nextAction = true;

                // if (resultDirection.x == 1 && resultDirection.y == 0) {
                //     ghostSprite.gotoAndPlay("right");
                // } else if (resultDirection.x == -1 && resultDirection.y == 0) {
                //     ghostSprite.gotoAndPlay("left");
                // } else if (resultDirection.x == 0 && resultDirection.y == -1) {
                //     ghostSprite.gotoAndPlay("up");
                // } else if (resultDirection.x == 0 && resultDirection.y == 1) {
                //     ghostSprite.gotoAndPlay("down");
                // }
            }
        }
    }

    return resultDirection;
}



var directions = [
    new Vector2(1,0),
    new Vector2(-1,0),
    new Vector2(0,1),
    new Vector2(0,-1)
];

function AStar(target, ghostPosition, currentGhostDirection) 
{
    var open = [];
    var visited = [];

    var condition = true;

    open.push([ghostPosition]);

    var previousPosition = ghostPosition.subtract(currentGhostDirection);

    visited.push(ghostPosition);
    if (isChasing) {
        visited.push(previousPosition);
    }

    while (open.length != 0) {

        var currentTree = open.shift();

        if (currentTree.length > 3 && condition) {
            //sanity checks for loops
            condition = false;
            visited.shift();
            visited.shift();
        }
        if (currentTree.length > 292) {
            continue;
        }

        var currentPos = currentTree[currentTree.length - 1];

        if (currentPos.equals(target) && currentTree.length > 1) {
            var result = currentTree[1].subtract(currentTree[0])
            return result;
        }

        for (var i = 0; i < directions.length; i++) {
            var next = currentPos.add(directions[i]);

            //if (ne)
            if (!checkVector(visited, next)) 
            {
                if (map[next.y][next.x] != 1) {

                    var newTree = currentTree.slice();
                    newTree.push(next);
                    visited.push(next);

                    if (next.equals(target)) {
                        //calculate the direction needed    
                        var result = newTree[1].subtract(newTree[0])
                        return result;
                    }
                    //console.log(newTree);

                    open.push(newTree);
                }
            }
        }
    }

   // console.log("finished");

    return randomWay(ghostPosition, new Vector2());
}

function checkVector(array, vector) {
    var condition = false;
    array.forEach((element) => {
        condition = condition || element.equals(vector);

    });
    return condition;
}

function getFleeTarget(ghostPosition, currentGhostDirection) {
    var maxDirection = new Vector2(-currentGhostDirection.x, -currentGhostDirection.y);
    var maxDistance = 0;

    var previousDirection = new Vector2(-currentGhostDirection.x, -currentGhostDirection.y);
    directions.forEach((dir) => {
        var newPosition = ghostPosition.add(dir);
        if (map[newPosition.y][newPosition.x] != 1 && !(dir.equals(previousDirection))) {
            var distance = Math.abs(playerPosition.x - newPosition.x) + Math.abs(playerPosition.y - newPosition.y);

            if (distance > maxDistance) {
                maxDistance = distance;
                maxDirection = dir.clone();
            }
        }
    });

   // console.log(maxDirection);
    return maxDirection;
}

function chase() {
    console.log("chase");
    isChasing = true;
    setTimeout(function() {scatter()}, 10000);
}

function scatter() {
    console.log("scatter");

    isChasing = false;
    setTimeout(function() {chase()}, 5000);
}

function getRandomPos() {
    var possible = []

    for (var y = 0; y < map.length; y++) {
        for (var x = 0; x < map[0].length; x++) {
            if (map[y][x] == 0) {
                possible.push(new Vector2(x,y));
            }
        }
    }

    var min = 0;
    var max = possible.length + 1;

    var random = Math.floor( Math.random() * (max - min)) + + min; 

    return possible[random];

}


function handleMouseDown(event)
{
    
}

function updateTime()
{
	gameTime += 1;
	if(gameTime > 60)
	{
		//End Game and Clean up
		//timerText.text = "GAME OVER";
		//stage.removeChild(animation);
		//stage.removeChild(crossHair);
        //createjs.Sound.removeSound("background");
       // var si =createjs.Sound.play("gameOverSound");
		//clearInterval(gameTimer);
	}
	else
	{
		//timerText.text = "Time: " + gameTime
    //createjs.Sound.play("tick");
	}
}

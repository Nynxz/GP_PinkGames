//STATUS - MEDIUM

function preload(){
    //LOAD JSONS
    GameManager.settings = loadJSON("src/json/settings.json");
    GameManager.weapons = loadJSON("src/json/weapons.json", preloadIMAGES);
    GameManager.highscores = loadJSON("src/json/highscores.json");
    preloadSOUNDS();
    //LOAD FONT
    GameManager.settings.font = loadFont('/GP_PinkGames/Q3-Spacefighter/Assets/Fonts/AlienWars-3V3M.ttf');
}

function setup(){

    //useQuadTree(true);

    //Initialise Groups
    GameManager.initGroups();

    //Initialise Difficult
    GameManager.initDifficulty();
    
    //Initialise Shop Items
    GameManager.initShopItems()
    
    //Set Text Font
    textFont(GameManager.settings.font);

    //Make Siderbar Object
    sidebarObj = new Sidebar();

    //SETUP IMAGES
    setupIMAGES();

    //SET FRAME RATE
    frameRate(GameManager.settings.globalSettings.FPS);

    //CREATE CANVAS
    createCanvas(GameManager.settings.globalSettings.canvasWidth + GameManager.settings.globalSettings.sidebarWidth, GameManager.settings.globalSettings.canvasHeight);
    
    //CREATE MAINMENU (Menu)
    createMAINMENU();

    //New Loading Screen
    loadScreen = new LoadingScreen(500, 50);

    //Make Star Background
    Background.makeBackground(400);
  

    //Play Main Music in a Loop
    //Set Volume to 0 To allow AutoPlay on Some Browsers
    mainmusicSOUND.setVolume(0)
    mainmusicSOUND.play();
    mainmusicSOUND.setVolume(1)
    mainmusicSOUND.setLoop(true);

    
      
    //TODO DONT INCLUDE? helpers.js
    //createNameInput();
    GameManager.settings.debug ? debugMenu() : 0;
}

function keyPressed(){
    if(keyCode == 27 && GameManager.player.ship.info.currentHealth > 0){
        if(GameManager.paused){
            unpauseGame();
        } else {
            GameManager.currentPauseState = GameManager.pauseStatesE.PAUSE;
            pauseGame();
        }
    }
}

//PAUSE THE GAME
function pauseGame(){
    GameManager.paused = true;
    GameManager.player.zero();
    GameManager.Groups.pickups.forEach((pickup) => {pickup.self.pausePickup()});
    GameManager.Groups.enemySprites.forEach((enemy) => {enemy.self.pauseEnemy()});
    GameManager.Groups.enemybullets.forEach((bullet) => {bullet.self.pauseBullet()});
    GameManager.Groups.friendlybullets.forEach((bullet) => {bullet.self.pauseBullet()});
    GameManager.Groups.spaceEventsHazards.forEach((haz) => {haz.oldlife = haz.life ; haz.life = -1})
    GameManager.Groups.spaceEventsShop.forEach((shop) => {shop.oldlife = shop.life ; shop.life = -1})
   
    
    switch(GameManager.currentPauseState){
        case GameManager.pauseStatesE.PAUSE:
            createPAUSEMENU();
        break;

        case GameManager.currentPauseState.SHOP:

        break;
    }
    
}

//UNPAUSE THE GAME
function unpauseGame(){
    GameManager.paused = false;
    
    GameManager.Groups.spaceEventsShop.forEach((shop) => {shop.life = shop.oldlife})
    GameManager.Groups.spaceEventsHazards.forEach((haz) => {haz.life = haz.oldlife})
    GameManager.Groups.pickups.forEach((pickup) => {pickup.self.unpausePickup()});
    GameManager.Groups.enemySprites.forEach((enemy) => {enemy.self.unpauseEnemy()});
    GameManager.Groups.enemybullets.forEach((bullet) => {bullet.self.unpauseBullet()});
    GameManager.Groups.friendlybullets.forEach((bullet) => {bullet.self.unpauseBullet()});
    GameManager.Groups.spaceEventsShop.removeSprites();
    GameManager.Groups.pauseMenu.removeSprites();
    GameManager.Groups.ShopItems.removeSprites();
    GameManager.Groups.hoverToolTip.removeSprites();
}


//Draw Loop
function draw(){
    gameLogic();
}


//Function to Handle Game Logic
function gameLogic(){

    //Switch for Current State
    switch(GameManager.currentState){

        //If Currently in Loading
        case  GameManager.statesE.LOADING:

            //Draw Star Background
            Background.backgroundDraw();

            //Start LoadScreen Bar
            loadScreen.startBar(1 , () => {
                //Change State
                GameManager.currentState = GameManager.statesE.MAINMENU;
                //Reset Bar for later use
                loadScreen.resetBar();
                //Clear screen
                clear();
                startMainVideo();
            });
        break;

        //If Currently in Main Menu
        case GameManager.statesE.MAINMENU:
           
            //Draw Star Background
            Background.backgroundDraw();
            //Draw Main Menu
            mainmenu.drawMenu();
            imageMode(CENTER);
            image(uiSpaceFighterLogoIMG, width/2, height/4, 1000, 500);
            imageMode(CORNER)
            image(uiVideoBorderIMG, 10, 575, 580, 345);
        break;

        //If Currently in Playing
        case GameManager.statesE.PLAYING:

            Background.backgroundDraw();
            Controls.refresh();
            
            loadScreen.startBar(1, () => {
                console.log("DONE LOADING PLAYING")
                if(GameManager.Difficulty.Mode == GameManager.DifficultModesE.ENDLESS){
                    GameManager.Difficulty.neededKills = 999999999;
                }
            });

            if(loadScreen.COMPLETE){
                drawSprites();

                if(!GameManager.paused){

                    //CLEANUP 
                    GameManager.cleanBulletGroups();
                    GameManager.enemyShipsRefresh();
                   
                    //PLAYER ALIVE
                    if(GameManager.player.ship.info.currentHealth > 0){

                        //#region COLLISIONS

                        //Reposition overlapped Sprites
                        GameManager.Groups.enemySprites.collide(GameManager.Groups.enemySprites, (enemy) => {enemy.position.x += (random(-25, 25)); enemy.position.y += (random(-250, -150))});

                        //BULLETS > ENEMIES
                        GameManager.Groups.friendlybullets.collide(GameManager.Groups.enemySprites, (bullet,enemy) => {bullet.damage(bullet, enemy.self);});
                        
                        //ENEMIES > PLAYER
                        GameManager.Groups.enemySprites.collide(GameManager.player.ship.sprite) ? GameManager.player.dealDamage(1) : 0;
                        
                        //PLAYER > BULLETS
                        GameManager.player.ship.sprite.collide(GameManager.Groups.enemybullets, (player, bullet) => {
                            bullet.damage(bullet, player.self);
                        });
                        //PLAYER > PICKUPS
                        GameManager.player.ship.sprite.overlap(GameManager.Groups.pickups, (player, pickup) => pickup.self.effect(player, 100));
                        //PLAYER > EVENTS
                        GameManager.player.ship.sprite.overlap(GameManager.Groups.spaceEventsShop, () =>{
                            GameManager.Groups.enemybullets.removeSprites();
                            GameManager.Groups.friendlybullets.removeSprites();
                            GameManager.currentPauseState = GameManager.pauseStatesE.SHOP;
                            pauseGame(GameManager.currentPauseState);
                            Shop.createShopPage()
                            createSHOPMENU();
                            console.log("IN SHOP");
                        })
                        GameManager.Groups.enemySprites.overlap(GameManager.Groups.spaceEventsHazards, (enemy, nul) => {enemy.self.dealDamage(100)});
                        GameManager.player.ship.sprite.overlap(GameManager.Groups.spaceEventsHazards)  ? GameManager.player.dealDamage(1) : 0;

                        //#endregion 

                        //SPAWN ENEMIES FROM SPAWNER
                        GameManager.EnemyAndEventSpawner.refresh(GameManager.Difficulty.maxEnemies);

                        //ALLOW PLAYER TO SHOOT
                        GameManager.player.shoot(Controls.shoot1, Controls.shoot2);

                        //DRAW PLAYER HEALTHBAR
                        GameManager.player.healthbar();
                        GameManager.player.shieldbar();
                        //Recharge Player Shield //TODO ADD SHOP UPGRADE
                        GameManager.player.shieldRecharge(.05);
                        //REPOSITION SHIELD TO PLAYER
                        GameManager.player.ship.sprite.shield.map(e => e.position = GameManager.player.ship.sprite.position);

                        //ALLOW ENEMIES TO SHOOT
                        GameManager.enemyShipsShootAll(GameManager.enemyShipsArray, GameManager.player.ship);

                            
                        //MOVE PLAYER BASED ON CONTROLS VECTOR
                        GameManager.player.movePlayer(Controls.vector, 4 );
                        
                        //BOSS
                        if(GameManager.bossSpawned){
                            GameManager.boss.refresh();
                            GameManager.boss.sprite.collide(GameManager.player.ship.sprite) ? GameManager.player.dealDamage(1) : 0;

                            if(GameManager.boss.sprite.animation.getFrame() == 0 || GameManager.boss.sprite.animation.getFrame() == 10){
                                GameManager.player.ship.sprite.collide(GameManager.Groups.bossAttacks, (player, attack) => {
                                    player.self.damage(attack);
                                })
                                GameManager.Groups.friendlybullets.collide(GameManager.boss.sprite, (bullet,boss) => {
                                    bullet.life = 1;
                                    boss.health -= bullet.damageAmount;
                                });
                            }
                        }
                    } 

                } else{ 

                    //PAUSED
                    Controls.zero();

                    //LOCK PLAYER MOVEMENT
                    GameManager.player.movePlayer(Controls.vector, 0 );


                    //Switch for type of Pause
                    switch(GameManager.currentPauseState){

                        //In Game Pause
                        case GameManager.pauseStatesE.PAUSE:
                            pausemenu.drawMenu();
                        break;

                        //Shop Pause
                        case GameManager.pauseStatesE.SHOP:

                            
                            imageMode(CENTER);
                            //Shop Background
                            image(shopPageIMG, width/2 - GameManager.settings.globalSettings.sidebarWidth/2, height/2);
                            //Shop Items Group
                            drawSprites(GameManager.Groups.ShopItems);
                            //Shop Tooltip Background
                            drawSprites(GameManager.Groups.hoverToolTip);
                            //Draw Tooltip Text
                            GameManager.Groups.hoverToolTip.forEach(e => e.self.drawInfo());
                            //shopmenu.drawMenu();
                        break;

                    }
                    
                }       
                GameManager.player.currentLifes < 0 || GameManager.showGameOver ? drawGameOver() : 0;
                //DRAW SIDEBAR
                imageMode(CORNER);
                Sidebar.drawSideBar();
            } else {
                //Draw the loading Bar
                loadScreen.drawBar();
            }
        break;

        //If Currently in leaderboard Menu
        case GameManager.statesE.LEADERBOARD:
            //Draw Star Background
            Background.backgroundDraw();
            //createLEADERBOARD();

            //Draw Sprites in allSprites
            drawSprites();
            //Draw Leaderboard Text
            drawLEADERBOARDSCORES();

        break;
        
        //If Currently in Options
        case GameManager.statesE.OPTIONS:
            //Draw Star Background
            Background.backgroundDraw();

            //createLEADERBOARD();
            image(uiOptionsMenuIMG, width/2, height/2, 700, 900);
            fill("black");
            textSize(64)
            textAlign(CENTER, TOP);

            text("MODE",width/2, height/2 - 300);

            text("DIFFICULTY",width/2, height/2 - 100);
            
            text("MUSIC",width/2, height/2 + 100);

            text("HAZARDS",width/2, height/2 + 250);

            //Draw Sprites in allSprites
            drawSprites();

        break;
    }
}
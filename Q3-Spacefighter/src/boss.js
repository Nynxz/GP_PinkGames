//Class for a Boss
class Boss{

    constructor(){
        //Create the Sprite
        this.sprite = createSprite(width/2 - (GameManager.settings.globalSettings.sidebarWidth/2), -150);

        //this.sprite = createSprite(width/2, -300);
        //Add the Animation
        this.sprite.addAnimation('main', bossANIM);
        // frame[0] - Weapons
        // frame[6] - Ball
        // Frame[11] - The Big G
        
        //Set the Scale
        this.sprite.scale = 4;
        //Stop the Animation
        this.sprite.animation.stop();
        //Set to 6'th frame (BASE BALL)
        this.sprite.animation.changeFrame(6);
        //Set the Collider
        this.sprite.setCollider('circle', 0,0 ,32);
        //this.sprite.debug = true;
        
        //Set Sprite to Immovable so bullets dont displace it
        this.sprite.immovable = true;
        
        //Set Fricition
        this.sprite.friction = .05;
        
        //Set Health Based on Difficulty
        if(GameManager.Difficulty.Base == GameManager.DifficultyBaseE.EASY){
            this.sprite.health = 3000;
        } else if (GameManager.Difficulty.Base == GameManager.DifficultyBaseE.MEDIUM){
            this.sprite.health = 5000;
        } else if (GameManager.Difficulty.Base == GameManager.DifficultyBaseE.HARD){
            this.sprite.health = 10000;
        }
        //Set Max Health
        this.sprite.maxHealth = this.sprite.health;
        //Set Boss Spawned Boolean to True
        GameManager.bossSpawned = true;
        //Reference this boss "Globally" in GameManager
        GameManager.boss = this;

        //Propertys to Hold the Lazers of each "Turret"
        this.lazersL = new Array();
        this.lazersR = new Array();

        //Propety to hold lerp
        this.lerpIncr = 0;
        
    }
//TODOD LAZERS

    //Function for Boss Logic
    refresh(){
        
        //If Sprite is not in Position
        if(this.sprite.position.y < height/4){
            
            //Move Sprite Down
            this.sprite.position.y++;
            
        //Else If Game is Not Paused
        } else if(!GameManager.paused){ //60
            
            //If Sprite is currently not in "Weapons" "frame[0]" and is greater than half HP, transform towards Weapons Mode
            if(frameCount % 25 == 0 && this.sprite.animation.getFrame() > 0 && this.sprite.health > this.sprite.maxHealth/2){
                this.sprite.animation.previousFrame();
            }
           
            //If Sprite is currently not in "The Big G" "frame[10]" and is less than half HP, transform towards The Big G Mode
            if(frameCount % 25 == 0 && this.sprite.animation.getFrame() < 10 && this.sprite.health <= this.sprite.maxHealth/2){
                this.transformIntoTheBigG();
            }
            
            //If Theyre "In Form"
            if(this.sprite.animation.getFrame() == 0 || this.sprite.animation.getFrame() == 10){
                
                //If Game is Not Over
                if(!GameManager.isGameOver){

                    //Health Bar
                    imageMode(CENTER);
                    fill('red'); 
                    rect(width/2 - (GameManager.settings.globalSettings.sidebarWidth/2), 50,
                        map(this.sprite.health, 0, this.sprite.maxHealth, 0, 925, true), /* map width to health*/
                        30
                    )
                    
                    //Draw outline
                    image(bossHPBarIMG, width/2 - (GameManager.settings.globalSettings.sidebarWidth/2), 50,  1000, 64);
                } else {
                    
                    //Game is Over
                    imageMode(CENTER);
                    
                    //Draw You Win
                    image(uiYouWinIMG, width/2 - (GameManager.settings.globalSettings.sidebarWidth/2), 415, 500, 150)
                }
                
                

                //If sprite is in Regular "Weapons" Mode
                if(this.sprite.animation.getFrame() == 0){
                    //Move Sprite
                    this.move();
                    //Every 10 Seconds (60 FPS)
                    if(frameCount % 600 == 0){
                        //Shoot Lazer 
                        this.shootLazer();
                        //Drop HP
                        this.dropHP();
                        //Start Shop
                        SpaceEvent.startShopEvent();
                    }
                    //Randomly Shoot Cannon
                    if(random(0,1) > .9){
                        //Shoot
                        this.shootCannon()
                        
                        //Filter Bullets
                        this.lazersL.filter(lazer => lazer.life > 0)
                        this.lazersR.filter(lazer => lazer.life > 0)
                    }
                }
                
                //If "IN THE BIG G" Mode
                if(this.sprite.animation.getFrame() == 10){
                    //Rotation - Speed Up
                    this.sprite.rotationSpeed = constrain(this.sprite.rotationSpeed+=0.1, 0, 6);
                    
                    //Move Towards the Player
                    this.sprite.attractionPoint(0.1, GameManager.player.ship.sprite.position.x, GameManager.player.ship.sprite.position.y)

                    if(frameCount % 120 == 0 && !GameManager.isGameOver)
                        this.shootPickles();



                    //If 0 Health and Not Game Over
                    if(this.sprite.health <= 0 && !GameManager.isGameOver){
                        //YOU WIN
                        
                        //Set Game Over (for 1 loop)
                        GameManager.isGameOver = true;
                        
                        //Set Collider so No Collisions
                        this.sprite.setCollider('circle',0,0,0);

                        //Heal Player
                        GameManager.player.ship.info.currentShield = GameManager.player.ship.info.maxShield;
                        
                        //Give Points
                        GameManager.player.currentPoints+=this.sprite.maxHealth

                        
                         //Death Animation - SMOKE CLOUD
                        //Random Amount of Clouds (2-7)
                        for(let i = 0, smoke; i < Math.floor(random(7,10)); i++){

                            //Create a New Sprite at this Enemy Ships Position + random offsets 
                            smoke = createSprite(this.sprite.position.x + random(-100,100), this.sprite.position.y + random(-100,100));
                            smoke.addAnimation('smoke', basicExplosionANIM);
                            smoke.looping = true;
                            smoke.life = 100;
                            smoke.scale = 4;
                        }
                        
                        //After Time, show Buttons
                        setTimeout(() =>{
                            
                            this.sprite.remove();
                            GameManager.showGameOver = true;

                            
                            //Create Name Input Field
                            createNameInput();
                            
                            //Create Enter Sprite(Button)
                            let enter = createSprite(width/2 - (GameManager.settings.globalSettings.sidebarWidth/2), 800);
                            enter.addImage(uiEnterButtonIMG);
                            enter.scale = 3;
                            
                            //On Mouse Pressed
                            enter.onMousePressed = () => {
                                
                                //Grab Player Name from Field
                                GameManager.playername = GameManager.nameinput.value();
                                
                                //New Date (current)
                                let dateObj = new Date();
                                //Push Into HighScores JSON
                                GameManager.highscores.highscores.push({name: GameManager.playername, score: GameManager.player.currentPoints, date: dateObj.toDateString()});
                            
                                //Save JSON
                                saveJSON(GameManager.highscores, 'highscores.json');
                                
                                //Reload Page
                                location.reload();
                            };
                            
                            //Create exit Button
                            let exit = createSprite(width/2 - (GameManager.settings.globalSettings.sidebarWidth/2) + 300, 800);
                            exit.addImage(uiExitButtonIMG);
                            exit.scale = 2;
                            
                            //On mouse Pressed
                            exit.onMousePressed = () => {
                                location.reload();
                            };
                            this.sprite.life = 1;
                            console.log("YOU WIN");

                        }, 2000);
                    }
                }
            }
        }
    }

    //Function to drop HP
    dropHP(){
       let drop =  new Pickup(Pickup.Types.Health, this.sprite.position);
       drop.sprite.velocity.y = 3;
    }

    //Function to Shoot Lazers
    shootLazer(){

        //Left Side
        for(let i = 0; i < 9; i++){
            let bullet = createSprite(this.sprite.position.x + 150, (this.sprite.position.y+75) + ((i) * 80))
            bullet.addImage(bosslazerIMG)
            bullet.lazer = true;
            bullet.immovable = true;
            bullet.life = 250;
            bullet.damageAmount = 2;
            bullet.setDefaultCollider();
            this.lazersL.push(bullet);
            GameManager.Groups.bossAttacks.add(bullet)

        }

        //Right Side
        for(let i = 0; i < 9; i++){
            let bullet = createSprite(this.sprite.position.x - 150, (this.sprite.position.y+75) + ((i) * 80))
            bullet.addImage(bosslazerIMG)
            bullet.lazer = true;
            bullet.immovable = true;
            bullet.life = 100;
            bullet.damageAmount = 2;
            bullet.setDefaultCollider();
            this.lazersR.push(bullet)
            GameManager.Groups.bossAttacks.add(bullet)
        }
    }

    //Function to Shoot Cannon
    shootCannon(){
        let bullet = createSprite(this.sprite.position.x, this.sprite.position.y);
        bullet.addImage(GameManager.weapons.Type.Basic.StandardShot.img);
        bullet.immovable = true;
        bullet.scale = 2;
        bullet.damageAmount = 1;
        bullet.velocity.y = 15;
        bullet.setDefaultCollider();
        bullet.rotateToDirection = true;
        GameManager.Groups.bossAttacks.add(bullet)

    }

    shootPickles(){

         //18 Shots
         for(let i = 0; i < 18; i++){

            //Spawn a New Bullet
            let bullet = createSprite(this.sprite.position.x, this.sprite.position.y);
            bullet.addImage(bossPickleIMG);
            bullet.setCollider('circle', 0,0, 16);
            bullet.damageAmount = 2;
            //bullet.debug = true;
            
            //Spread Direction - 18 * 20 = 360degs
            bullet.setSpeed(8, ((i+1) * 20));
            bullet.rotationSpeed = 3;
            //Set a life time just incase issues they bullet remain forever.
            bullet.life = 400;
            
            //Set Standard Scale (backup)
            bullet.scale = 1

            GameManager.Groups.bossAttacks.add(bullet);
        }
    }

    //Function to Move Player
    move(){
        //Attract towards players X position - Keeping Y level
        this.sprite.attractionPoint(0.2, GameManager.player.ship.sprite.position.x, this.sprite.position.y)

        //Move Each Lazer
        this.lazersL.forEach(lazer => lazer.position.x = this.sprite.position.x - 150);
        this.lazersR.forEach(lazer => lazer.position.x = this.sprite.position.x + 150);
    }

    //Function to turn into final form
    transformIntoTheBigG(){
        this.sprite.setCollider('circle', 0,0 , 50);
        this.sprite.animation.nextFrame();
        this.lazersL.forEach(lazer => lazer.life = 1);
        this.lazersR.forEach(lazer => lazer.life = 1);
    }
}
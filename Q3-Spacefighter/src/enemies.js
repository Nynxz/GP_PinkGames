//STATUS - MEDIUM


class Enemy{

    constructor(ship, size, points, x, y){

        //Propety to hold a Ship Class
        this.ship = ship;
        this.size = size;

        //How many points this enemy is worth on kill
        this.points = points; 

        this.createEnemy(x, y);
        //console.log("SPAWNING ENEMY");
    }

    //Function to Create Enemy
    createEnemy(x, y){

        this.ship.sprite = createSprite(x, y);
        this.ship.sprite.velocity.y = 1;
        this.ship.sprite.life =  5000;
        this.ship.sprite.addImage(this.ship.img);
        this.ship.sprite.setCollider("circle");
        this.ship.sprite.immovable = true;
        this.ship.sprite.scale = this.size/100;
        this.ship.sprite.rotation += 90;
        GameManager.Groups.enemySprites.add(this.ship.sprite);
        GameManager.enemyShipsArray.push(this);

        //Reference back to this Enemy Class from the Sprite
        this.ship.sprite.self = this;

        //Set the Debug if Enabled in settings
        this.ship.sprite.debug = GameManager.settings.debug;
    }

    shoot(){

        if(
            //Enemy is on the Canvas
            this.ship.sprite.position.y > 0 &&
            //Enemy is Above the Player
            this.ship.sprite.position.y < GameManager.player.ship.sprite.position.y &&
            //FrameCount Check for Bullet Type CoolDown Property
            frameCount % this.ship.info.weapons[0].bullet.type.cooldown == 0 &&
            //Random Chance of Shooting
            random(0,1) > .93 //TODO DIFFICULT SCALE
        ){

            //Weapon Type Checks

            //Standard Shot
            if(this.ship.info.weapons[0].weapontype == WeaponPoint.WeaponTypes.Straight){
                //Spawn a New Bullet
                let bullet = new Bullet(this.ship, this.ship.info.weapons[0], this.ship.info.weapons[0].bullet.type, 1);
                bullet.sprite.maxSpeed = 5;
            }
            //Spread 360 Shot
            else if(this.ship.info.weapons[0].weapontype == WeaponPoint.WeaponTypes.spread360){
                //18 Shots
                for(let i = 0; i < 18; i++){

                    //Spawn a New Bullet
                    let bullet = new Bullet(this.ship, this.ship.info.weapons[0], this.ship.info.weapons[0].bullet.type, 1);

                    //Spread Direction - 18 * 20 = 360degs
                    bullet.sprite.setSpeed(2, ((i+1) * 20));

                    //Set a life time just incase issues they bullet remain forever.
                    bullet.sprite.life = 1000;
                    
                    //Set Standard Scale (backup)
                    bullet.sprite.scale = 1
                }
                enemyShootSpreadSOUND.play();
            }
        }
    }

    resetEnemy(){
        this.ship.sprite.life =  5000;
        this.ship.sprite.position.x = Math.floor(random(15, GameManager.settings.globalSettings.canvasWidth - 15));
        this.ship.sprite.position.y = Math.floor(random(-15, -500));
        this.ship.info.currentHealth = this.ship.info.maxHealth;

    }

    pauseEnemy(){
        this.ship.sprite.velocity.y = 0;
    }

    unpauseEnemy(){
        this.ship.sprite.velocity.y = 1;
    }

    dealDamage(amount){

        this.ship.info.currentHealth -= amount;

        if(this.ship.info.currentHealth <= 0){

            this.dropItem();

            //Death Animation - SMOKE CLOUD
            //Random Amount of Clouds (2-7)
            for(let i = 0, smoke; i < Math.floor(random(2,7)); i++){

                //Create a New Sprite at this Enemy Ships Position + random offsets 
                smoke = createSprite(this.ship.sprite.position.x + random(-50,50), this.ship.sprite.position.y + random(-50,50));
                smoke.addAnimation('smoke', basicExplosionANIM);
                smoke.looping = true;
                smoke.life = 25;
                smoke.scale = this.ship.sprite.scale;
            }

            //Add Points to the Player
            GameManager.player.currentPoints += this.ship.info.maxHealth;
            

            //Reset the Enemy and add Kill to Total
            explosionSOUND.play();
            GameManager.addKill();
            
            if(GameManager.Difficulty.currentKills < GameManager.Difficulty.neededKills){
                //console.log("RESETTING")
                this.resetEnemy();
            } else {
                this.ship.sprite.life = 1;
            }
        }
    }

    damage(bullet){
        this.dealDamage(bullet.damageAmount)
    }

    dropItem(){

        //Random Chance
        let dice = random(0,1);
        
        //New Pickups at Sprite Position
        if(dice < .3){
            new Pickup(Pickup.Types.Health, this.ship.sprite.position);
        } else if (dice < .6){
            new Pickup(Pickup.Types.Money, this.ship.sprite.position);
        }
    }

    healthbar(){

        //Variable to set
        let valx;
        
        //Map the Current Health between the Max Health and Current Health
        valx = map(this.ship.info.currentHealth, 0,  this.ship.info.maxHealth, 0, this.ship.info.maxHealth/10);
        
        rectMode(CENTER);
        fill('red');

        //Draw the "Bar" at an offset using the "Map()'d Variable"
        rect(this.ship.sprite.position.x, this.ship.sprite.position.y-50, valx, this.ship.info.maxHealth/25);
    }

    //Function to Attract Enemy to Player Position
    attractTo(){
        this.sprite.attractionPoint(this.size, GameManager.player.sprite.position.x, GameManager.player.sprite.position.y);
    }

    //Function to Cleanup the Enemy
    cleanup(){

        //If the Enemy Ship is Lower then the canvas 
        if(this.ship.sprite.position.y > height+25){
            //Lose Points for Letting Enemy Reach Bottom if Player is Not Dead.
            GameManager.isGameOver == false ? GameManager.player.currentPoints = constrain(GameManager.player.currentPoints-(this.points/2), 0, GameManager.player.currentPoints) : 0;
            //Set the Ship Sprite Life to virtually nothing for 'p5play' cleanup
            this.resetEnemy();
        }
    }

    
}
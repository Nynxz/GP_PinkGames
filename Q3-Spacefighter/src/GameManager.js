//Class to Handle the Game
class GameManager{

    //Property for the Player
    static player;

    //ARRAYS
    static enemyShipsArray = new Array();

    //GROUPS
    static Groups = new Object();
    static initGroups(){

        //GAME SPRITES
        GameManager.Groups.enemybullets = new Group();
        GameManager.Groups.friendlybullets = new Group();

        GameManager.Groups.pickups =  new Group();
        GameManager.Groups.enemySprites = new Group();

        GameManager.Groups.bossAttacks = new Group();
        //EVENTS
        GameManager.Groups.spaceEventsShop =  new Group();
        GameManager.Groups.spaceEventsHazards = new Group();

        //UI
        GameManager.Groups.pauseMenu = new Group();
        GameManager.Groups.ShopItems = new Group();
        GameManager.Groups.hoverToolTip = new Group();
        GameManager.Groups.optionsGroup = new Group();
    }

    //Function to Remove All Sprites from Groups
    static removeAllSprites(){
        GameManager.player.ship.sprite.remove();
        GameManager.Groups.enemybullets.removeSprites()
        GameManager.Groups.friendlybullets.removeSprites()
        GameManager.Groups.pickups.removeSprites()
        GameManager.Groups.spaceEventsShop.removeSprites()
        GameManager.Groups.spaceEventsHazards.removeSprites()
        GameManager.Groups.enemySprites.removeSprites()
        GameManager.Groups.bossAttacks.removeSprites();
        //GameManager.Groups.optionsGroup.removeSprites();
    }

    //DIFFICULTY
    static Difficulty = new Object();
    static DifficultModesE = {ENDLESS : 'endless', BOSS: 'boss'};
    static DifficultyBaseE = {EASY : 'easy', MEDIUM : 'medium', HARD : 'hard'};
    static initDifficulty(){
        GameManager.Difficulty.currentKills = 0;
        GameManager.Difficulty.maxEnemies = 5;
        GameManager.Difficulty.Mode = GameManager.DifficultModesE.ENDLESS;
        GameManager.Difficulty.Base = GameManager.DifficultyBaseE.MEDIUM;
        GameManager.Difficulty.Hazards = false;        
    }

    static restartGame(){
        GameManager.Difficulty.maxEnemies = 2;
        GameManager.Difficulty.currentKills = 0;
    }

    static addKill(){
        GameManager.Difficulty.currentKills++;
        let difficulty;
        if(GameManager.Difficulty.Base == GameManager.DifficultyBaseE.MEDIUM){
            difficulty = 15;
        } else if (GameManager.Difficulty.Base == GameManager.DifficultyBaseE.HARD){
            difficulty = 5;
        } else {
            difficulty = 100;
        }
        if(GameManager.Difficulty.currentKills % difficulty == 0){
            GameManager.Difficulty.maxEnemies++;
        }
    }

    //SETTINGS

    //Propety to hold Game Over Boolean
    static isGameOver = false;

    //Propety for Settings JSON
    static settings;

    //Propety for Weapons JSON
    static weapons;
    
    //Default - Not Paused
    static paused = false;

    //STATE ENUMS
    static statesE = {LOADING: 'loading', MAINMENU: 'mainmenu', PLAYING: 'playing', LEADERBOARD: 'leaderboard', OPTIONS: 'options'};
    static currentState = this.statesE.LOADING;

    static pauseStatesE = {PAUSE: 'pause', SHOP: 'shop'};
    static currentPauseState = this.pauseStatesE.PAUSE;


    //Function for all Enemy Functions
    static enemyShipsRefresh(){
        GameManager.enemyShipsHPChecks();
        GameManager.enemyShipsArray = GameManager.enemyShipsArray.filter(e => e.ship.sprite.life > 1);
    }

    //Function for all Enemys to Shoot 'at Player'
    static enemyShipsShootAll(array, targetShip){
        array.map(e => {
            e.ship.info.weapons[0].pointAt(createVector(targetShip.sprite.position.x,targetShip.sprite.position.y));
            e.shoot();
        });
    }


    //Function to Check enemy HP and Cleanup or Draw Health Bar if not removed
    static enemyShipsHPChecks(){
        for(let enemy of GameManager.enemyShipsArray){
            enemy.cleanup()
            enemy.healthbar();
        }
    }

    //Function to Clean Bullets if OUT OF BOUNDS (off canvas)
    static cleanBulletGroups(){
        GameManager.Groups.friendlybullets.map((bullet) => {
            if(bullet.position.y < 0 || bullet.position.x < 0 || bullet.position.x > GameManager.settings.globalSettings.canvasWidth){
                bullet.remove();
            }
        });

        GameManager.Groups.enemybullets.map((bullet) => {
            if(bullet.position.y < 0 || bullet.position.y > height || bullet.position.x < 0 || bullet.position.x > GameManager.settings.globalSettings.canvasWidth){
                bullet.remove();
            }
        });
        GameManager.Groups.bossAttacks.map((bullet) =>{
            if(bullet.position.y < 0 || bullet.position.y > height || bullet.position.x < 0 || bullet.position.x > GameManager.settings.globalSettings.canvasWidth){
                bullet.remove();
            }
        });
    }

    //SHOP

    //Object to handle Shop Items
    static shopItems = new Object();
    
    //Function to Init the Shop Items
    static initShopItems(){
        //Standard Shot
        GameManager.shopItems.StdShot = {
            bought: true,
            cost: 0,
            description: "\nThe Standard Bullet!",
            img: item_STDShotIMG
        },

        //L-Shot
        GameManager.shopItems.LShot = {
            bought: false,
            cost: 500,
            description: "\nShoots 90 degrees each ways,\naswell as up!",
            img: item_LShotIMG
        },
        //X-Shot
        GameManager.shopItems.XShot = {
            bought: false,
            cost: 1000,
            description: "\nShoots 90 degrees each ways,\naswell as up and down!",
            img: item_XShotIMG
        },
        //Spread Shot
        GameManager.shopItems.SpreadShot = {
            bought: false,
            cost: 2000,
            description: "\nShoots all the ways",
            img: item_SpreadShotIMG
        },

        //UPGRADES
        GameManager.shopItems.HEALTHUP = {
            bought: false,
            cost: 250,
            description: "\nIncrease Health by 100",
            img: upgrade_HealthdUpIMG
        },
        GameManager.shopItems.SHIELDUP = {
            bought: false,
            cost: 400,
            description: "\nIncrease Shield by 100",
            img: upgrade_ShieldUpIMG
        }
    }

    static EnemyAndEventSpawner;
}
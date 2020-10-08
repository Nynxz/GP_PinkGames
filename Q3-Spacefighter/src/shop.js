//Class for the Shop
class ShopButton{
    constructor(GMShotItem, x, y){

        //Property to Hold Game Manager Item Information
        this.item = GMShotItem;
        
        //Property to hold the Image
        this.image = GMShotItem.img;
        
        //Array to Hold Text Information
        this.textlines = new Array();
        
        //Make Array the Keys of The Item Data
        this.textlines = Object.keys(GMShotItem);
        
        //Array to Hold Text Information
        this.textlinesvals = new Array();
        
        //Make Arrayt the Values of the Item Data
        this.textlinesvals = Object.values(GMShotItem);
        
        //Merge the Texts
        this.textlines = this.textlines.map((e,i) => e.concat(": " + this.textlinesvals[i]));
        
        //Property to hold the and Create Sprite
        this.sprite = createSprite(x, y);
        
        //Add Image to Sprite
        this.sprite.addImage(this.image);
        
        //Set Default Collider (for mouse functions)
        this.sprite.setDefaultCollider();
        
        //Enable the Mouse Checks (backup)
        this.sprite.mouseActive = true;
        
        //On Mouse Over, Show Tooltip
        this.sprite.onMouseOver = () => {
            new ToolTip(this.textlines);
        }
        
        //On Mouse Out, Delete All ToolTips
        this.sprite.onMouseOut = () =>{
            GameManager.Groups.hoverToolTip.removeSprites();
        }
       
        //Add This Button to a Group
        GameManager.Groups.ShopItems.add(this.sprite);
        

        //If Item is Locked
        if(this.textlinesvals[0] == false){
            
            //Create a sprite
            this.lockedsprite = createSprite(x,y);
            
            //Add Lock Image
            this.lockedsprite.addImage(shopLockedIMG);
            
            //Set Scale
            this.lockedsprite.scale = .5;
            
            //Add to Group
            GameManager.Groups.ShopItems.add(this.lockedsprite)
        }

    }

    //Function to add an Effect (weapon change)
    addEffect(func){
       
        //On Mouse Pressed
        this.sprite.onMousePressed = () =>{
            
            //If the player has enough money for the item, or the item is already unlocked
            if(GameManager.player.currentMoney >= this.item.cost || this.item.bought == true){
                
                //If in the item is not bought, take money and set to bought
                this.item.bought == false ? GameManager.player.currentMoney -= this.textlinesvals[1] : 0;
                this.item.bought = true;

                //Remove Bullet Sprites
                GameManager.Groups.friendlybullets.removeSprites();
                GameManager.Groups.enemybullets.removeSprites();
                
                //Set Ships to the Function Passed in, which should return an array of Weapons
                GameManager.player.ship.info.weapons = new func();

                //If This Item has A locked Sprite, Remove it
                if(this.lockedsprite)
                    this.lockedsprite.remove();

                console.log("PURCHASE SUCCESS");
            } else {
                
                //Show Not Enough Money
                Shop.showNotEnoughMoney();
                console.warn("NOT ENOUGH MONEY");
            }
        };
    }

    //Function to add a Power Up (hp/shield increase)
    addPowerUp(func){
        
        //Remove Locked Sprite, as Always Unlocked
        if(this.lockedsprite)
            this.lockedsprite.remove();

        //On Mouse Pressed
        this.sprite.onMousePressed = () =>{
            
            //If player has enough money
            if(GameManager.player.currentMoney >= this.item.cost){
                
                //Remove the money
                GameManager.player.currentMoney -= this.item.cost;
                
                //Do the "Function"
                func();
                console.log("PURCHASE SUCCESS");
            } else {
                
                //Show Not Enough Money
                Shop.showNotEnoughMoney();
                console.warn("NOT ENOUGH MONEY");
            }
        };
    }
}

//Class for the Shop
class Shop{

    //Function to Show Not Enough Money
    static showNotEnoughMoney(){
        
        //Create Sprite
        let notenoughspr = createSprite(width/2 - (GameManager.settings.globalSettings.sidebarWidth/2), height/2)
        
        //Add image to sprite
        notenoughspr.addImage(shopNotEnoughMoneyIMG);
        
        //Set Sprite Life
        notenoughspr.life = 25;
        
        //Set Sprite Scale
        notenoughspr.scale = 3;
        
        //Add Sprite to Group
        GameManager.Groups.ShopItems.add(notenoughspr);
        console.warn("NOT ENOUGH MONEY");
    }
    //Function to Draw Shop Page
    static createShopPage(){
        //Draw Image
        image(shopPageIMG, width/2, height/2);
    }
    //static Items = new Array();

    //Function to Draw Shop Items
    static drawStdWeaponItems(){

        //Defining Buttons
        //OUTLINES
        for(let i = 0; i < 4; i++){
            switch(i){
                case 0:
                    let STDShot = new ShopButton(GameManager.shopItems.StdShot, 300, (400) + (i* 100));
                    STDShot.addEffect(weaponStaterWeaponLR);
                break;
                case 1:
                    let LShot = new ShopButton(GameManager.shopItems.LShot, 300, (400) + (i * 100));
                    LShot.addEffect(weaponSpreadLR);
                break;
                case 2:
                    let XShot = new ShopButton(GameManager.shopItems.XShot, 300, (400) + (i * 100));
                    XShot.addEffect(weaponXLR);
                break;
                case 3:
                    let SpreadShot = new ShopButton(GameManager.shopItems.SpreadShot, 300, (400) + (i * 100));
                    SpreadShot.addEffect(weaponAllSpreadLR);
                break;

                default: 
                    //timage = shopbuttonimg;
            }
                
        }

        //Custom Health Up Button
        let HealthUp = new ShopButton(GameManager.shopItems.HEALTHUP, 800, 400);
        HealthUp.addPowerUp(Shop.PlayerIncreaseHealth)
        //Custom Shield Up Button
        let ShieldUp = new ShopButton(GameManager.shopItems.SHIELDUP, 800, 600);
        ShieldUp.addPowerUp(Shop.PlayerIncreaseShield)
        //Add Base Buttons incase of no images (backup)
        for(let i = 0; i < 4; i++){
            image(shopBaseButtonIMG, 400, (400) + (i * 100));
        }

    }

    //Function to Increase Player Health
    static PlayerIncreaseHealth(){
        GameManager.player.ship.info.maxHealth += 100;
        GameManager.player.ship.info.currentHealth = GameManager.player.ship.info.maxHealth;
    }
    //Function to Increase Player Shield
    static PlayerIncreaseShield(){
        GameManager.player.ship.info.maxShield += 100;
        GameManager.player.ship.info.currentShield = GameManager.player.ship.info.maxShield;
    }
}



//Class to handle the tooltips, on button hover in shop
class ToolTip{
    //Constructor for tooltip, taking in array of text
    constructor(infoArray){
        //Create the Sprite
        this.sprite = createSprite(mouseX+150, mouseY+25);
        //Add a blank dark image
        this.sprite.addImage(shopToolTipIMG);
        //Add a reference to this Tooltip to the sprite
        this.sprite.self = this;
        //Add the tooltip sprite to a group
        GameManager.Groups.hoverToolTip.add(this.sprite);
        //Property to hold info
        this.info = new Array();

        //For each line of text, push into an array. (not needed)
        for(let textline of infoArray){
            this.info.push(textline);
        }
    }

    //Function to draw tooltip info
    drawInfo(){
        //Position Tooltip
        this.sprite.position = {x: mouseX+125 , y:mouseY+25};
        //Set Text to White
        fill('white');

        //For Each Bit of Data
        this.info.map((e, i) => {
            //Set Text Size
            textSize(28/i);
            //index 1 and 2 will be drawn, cost and description
            i < 3 && i > 0? text(e, mouseX + 35, mouseY + (i * 15)) : 0;
            
        });
    }
}
//Function to Create Shop Menu
function createSHOPMENU(){
    Shop.drawStdWeaponItems();
}
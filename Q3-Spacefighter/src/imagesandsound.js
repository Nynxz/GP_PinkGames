//STATUS - MEDIUM
//NOTE - HAVING TWO IMAGES IN AN ANIMATION CAUSES ISSUES
function preloadIMAGES(){
    //IMAGES

    //SHIPS
    shipMainIMG= loadImage('/p5-SpaceFighter/Q3-Spacefighter/Assets/Ships/Player/Player_Blue_Off.png');
    enemyShipStandard = loadImage("/p5-SpaceFighter/Q3-Spacefighter/Assets/Ships/stdredenemy.png")
    enemyShipTentacle = loadImage("/p5-SpaceFighter/Q3-Spacefighter/Assets/Ships/aliententacle.png");
    //BOSS
    bossANIM = loadAnimation(
        '/p5-SpaceFighter/Q3-Spacefighter/Assets/Boss/bossweaponanim1.png',
        '/p5-SpaceFighter/Q3-Spacefighter/Assets/Boss/bossweaponanim2.png',
        '/p5-SpaceFighter/Q3-Spacefighter/Assets/Boss/bossweaponanim3.png',
        '/p5-SpaceFighter/Q3-Spacefighter/Assets/Boss/bossweaponanim4.png',
        '/p5-SpaceFighter/Q3-Spacefighter/Assets/Boss/bossweaponanim5.png',
        '/p5-SpaceFighter/Q3-Spacefighter/Assets/Boss/bossweaponanim6.png',
        '/p5-SpaceFighter/Q3-Spacefighter/Assets/Boss/bossweaponanim7.png',

        '/p5-SpaceFighter/Q3-Spacefighter/Assets/Boss/bossweaponanim8.png',
        '/p5-SpaceFighter/Q3-Spacefighter/Assets/Boss/bossweaponanim9.png',
        '/p5-SpaceFighter/Q3-Spacefighter/Assets/Boss/bossweaponanim10.png',
        '/p5-SpaceFighter/Q3-Spacefighter/Assets/Boss/bossweaponanim11.png',
    )
    bossHPBarIMG = loadImage('/p5-SpaceFighter/Q3-Spacefighter/Assets/Boss/BossHPBar.png');
    bosslazerIMG = loadImage('/p5-SpaceFighter/Q3-Spacefighter/Assets/Boss/bosslazer.png');
    bossPickleIMG = loadImage('/p5-SpaceFighter/Q3-Spacefighter/Assets/Boss/pickle.png');
    //ANIMATIONS
    shipMainIdleAnim = loadAnimation(
        '/p5-SpaceFighter/Q3-Spacefighter/Assets/Ships/Player/Animation/playeranims_3.png',
        '/p5-SpaceFighter/Q3-Spacefighter/Assets/Ships/Player/Animation/playeranims_4.png',
        '/p5-SpaceFighter/Q3-Spacefighter/Assets/Ships/Player/Animation/playeranims_5.png',
        '/p5-SpaceFighter/Q3-Spacefighter/Assets/Ships/Player/Animation/playeranims_6.png',
        '/p5-SpaceFighter/Q3-Spacefighter/Assets/Ships/Player/Animation/playeranims_7.png',
    );
    shipMainLeftAnim = loadAnimation(
        '/p5-SpaceFighter/Q3-Spacefighter/Assets/Ships/Player/Animation/playeranims_9.png',
        '/p5-SpaceFighter/Q3-Spacefighter/Assets/Ships/Player/Animation/playeranims_10.png',
        '/p5-SpaceFighter/Q3-Spacefighter/Assets/Ships/Player/Animation/playeranims_10.png'
    );
    shipMainRightAnim = loadAnimation(
        '/p5-SpaceFighter/Q3-Spacefighter/Assets/Ships/Player/Animation/playeranims_13.png',
        '/p5-SpaceFighter/Q3-Spacefighter/Assets/Ships/Player/Animation/playeranims_14.png',
        '/p5-SpaceFighter/Q3-Spacefighter/Assets/Ships/Player/Animation/playeranims_14.png'
    );

    //SHIELD HIT
    shieldHitTop = loadAnimation(
        '/p5-SpaceFighter/Q3-Spacefighter/Assets/ShieldHit/tophit01.png',
        '/p5-SpaceFighter/Q3-Spacefighter/Assets/ShieldHit/tophit02.png',
        '/p5-SpaceFighter/Q3-Spacefighter/Assets/ShieldHit/tophit03.png',
        '/p5-SpaceFighter/Q3-Spacefighter/Assets/ShieldHit/tophit04.png',
        '/p5-SpaceFighter/Q3-Spacefighter/Assets/ShieldHit/tophit05.png'
    );
    shieldHitBottom = loadAnimation(
        '/p5-SpaceFighter/Q3-Spacefighter/Assets/ShieldHit/bottomhit01.png',
        '/p5-SpaceFighter/Q3-Spacefighter/Assets/ShieldHit/bottomhit02.png',
        '/p5-SpaceFighter/Q3-Spacefighter/Assets/ShieldHit/bottomhit03.png',
        '/p5-SpaceFighter/Q3-Spacefighter/Assets/ShieldHit/bottomhit04.png',
        '/p5-SpaceFighter/Q3-Spacefighter/Assets/ShieldHit/bottomhit05.png'
    );
    shieldHitLeft = loadAnimation(
        '/p5-SpaceFighter/Q3-Spacefighter/Assets/ShieldHit/lefthit01.png',
        '/p5-SpaceFighter/Q3-Spacefighter/Assets/ShieldHit/lefthit02.png',
        '/p5-SpaceFighter/Q3-Spacefighter/Assets/ShieldHit/lefthit03.png',
        '/p5-SpaceFighter/Q3-Spacefighter/Assets/ShieldHit/lefthit04.png',
        '/p5-SpaceFighter/Q3-Spacefighter/Assets/ShieldHit/lefthit05.png'
    );
    shieldHitRight = loadAnimation(
        '/p5-SpaceFighter/Q3-Spacefighter/Assets/ShieldHit/righthit01.png',
        '/p5-SpaceFighter/Q3-Spacefighter/Assets/ShieldHit/righthit02.png',
        '/p5-SpaceFighter/Q3-Spacefighter/Assets/ShieldHit/righthit03.png',
        '/p5-SpaceFighter/Q3-Spacefighter/Assets/ShieldHit/righthit04.png',
        '/p5-SpaceFighter/Q3-Spacefighter/Assets/ShieldHit/righthit05.png'
    );

    
    
    //BULLETS
    GameManager.weapons.Type.Basic.StandardShot.img = loadImage( GameManager.weapons.Type.Basic.StandardShot.img);
    GameManager.weapons.Type.Lazer.RedBeam.img = loadImage( GameManager.weapons.Type.Lazer.RedBeam.img);

    //UI
    uiMainButtonIMG = loadImage('/p5-SpaceFighter/Q3-Spacefighter/Assets/Menu/buttonbase.png');
    uiSideBarIMG = loadImage('/p5-SpaceFighter/Q3-Spacefighter/Assets/Menu/sidebarbluenew.png');
    uiBackButtonIMG = loadImage('/p5-SpaceFighter/Q3-Spacefighter/Assets/Leaderboard/backbutton.png');
    uiLeaderBoardIMG = loadImage('/p5-SpaceFighter/Q3-Spacefighter/Assets/Leaderboard/leaderboard.png');
    uiNameFieldIMG = loadImage('/p5-SpaceFighter/Q3-Spacefighter/Assets/Menu/namefield.png');
    uiEnterButtonIMG = loadImage('/p5-SpaceFighter/Q3-Spacefighter/Assets/Menu/ENTERBUTTON.png');
    uiExitButtonIMG = loadImage('/p5-SpaceFighter/Q3-Spacefighter/Assets/Menu/EXITBUTTON.png')
    uiGameOverIMG = loadImage('/p5-SpaceFighter/Q3-Spacefighter/Assets/Menu/GAMEOVER.png');
    uiSpaceFighterLogoIMG = loadImage('/p5-SpaceFighter/Q3-Spacefighter/Assets/Menu/SpaceFighterLogo.png');
    uiVideoBorderIMG = loadImage('/p5-SpaceFighter/Q3-Spacefighter/Assets/ShopItems/videoborder.png');
    uiOptionsMenuIMG = loadImage('/p5-SpaceFighter/Q3-Spacefighter/Assets/optionsmenu.png');
    uiYouWinIMG = loadImage('/p5-SpaceFighter/Q3-Spacefighter/Assets/Menu/youwin.png');

    //Options
    optionsModeANIM = loadAnimation(
        '/p5-SpaceFighter/Q3-Spacefighter/Assets/Options/Mode1.png',
        '/p5-SpaceFighter/Q3-Spacefighter/Assets/Options/Mode2.png',
        '/p5-SpaceFighter/Q3-Spacefighter/Assets/Options/Mode2.png'
    );
    difficultyModeANIM = loadAnimation(
        '/p5-SpaceFighter/Q3-Spacefighter/Assets/Options/Difficulty1.png',
        '/p5-SpaceFighter/Q3-Spacefighter/Assets/Options/Difficulty2.png',
        '/p5-SpaceFighter/Q3-Spacefighter/Assets/Options/Difficulty3.png'
    );

    muiscModeANIM = loadAnimation(
        '/p5-SpaceFighter/Q3-Spacefighter/Assets/Options/Music1.png',
        '/p5-SpaceFighter/Q3-Spacefighter/Assets/Options/Music2.png',
        '/p5-SpaceFighter/Q3-Spacefighter/Assets/Options/Music2.png'
    );

    hazardModeANIM = loadAnimation(
        '/p5-SpaceFighter/Q3-Spacefighter/Assets/Options/Hazards1.png',
        '/p5-SpaceFighter/Q3-Spacefighter/Assets/Options/Hazards2.png',
        '/p5-SpaceFighter/Q3-Spacefighter/Assets/Options/Hazards2.png',
    );
    //https://www.pngkey.com/detail/u2e6w7u2r5i1o0w7_screen-red-vignette-parallel/
    uiRedHitVignetteIMG = loadImage('/p5-SpaceFighter/Q3-Spacefighter/Assets/screen-red-vignette.png');
    
    
    //SHOP
    shopPageIMG = loadImage('/p5-SpaceFighter/Q3-Spacefighter/Assets/Menu/shoppage.png');
    shopBaseButtonIMG = loadImage('/p5-SpaceFighter/Q3-Spacefighter/Assets/Menu/shopbutton.png');
    shopToolTipIMG = loadImage('/p5-SpaceFighter/Q3-Spacefighter/Assets/ShopItems/tooltipimg.png');
    item_STDShotIMG = loadImage('/p5-SpaceFighter/Q3-Spacefighter/Assets/ShopItems/stdShot.png');
    item_LShotIMG = loadImage('/p5-SpaceFighter/Q3-Spacefighter/Assets/ShopItems/LShot.png');
    item_XShotIMG = loadImage('/p5-SpaceFighter/Q3-Spacefighter/Assets/ShopItems/xShot.png');
    item_SpreadShotIMG = loadImage('/p5-SpaceFighter/Q3-Spacefighter/Assets/ShopItems/spreadShot.png');

    upgrade_ShieldUpIMG = loadImage('/p5-SpaceFighter/Q3-Spacefighter/Assets/ShopItems/ShieldUp.png');
    upgrade_HealthdUpIMG = loadImage('/p5-SpaceFighter/Q3-Spacefighter/Assets/ShopItems/HealthUp.png');

    shopNotEnoughMoneyIMG = loadImage('/p5-SpaceFighter/Q3-Spacefighter/Assets/ShopItems/notenoughmoney.png');
    shopLockedIMG = loadImage('/p5-SpaceFighter/Q3-Spacefighter/Assets/ShopItems/LOCKED.png');

    //PICKUPS
    pickupHealthIMG = loadImage('/p5-SpaceFighter/Q3-Spacefighter/Assets/pickups/healthpickup.png');
    pickupMoneyIMG = loadImage('/p5-SpaceFighter/Q3-Spacefighter/Assets/pickups/moneypickup.png');

    //EVENTS
    hazardWarningANIM = loadAnimation(
        '/p5-SpaceFighter/Q3-Spacefighter/Assets/Animations/WarningAnim/Warning01.png',
        '/p5-SpaceFighter/Q3-Spacefighter/Assets/Animations/WarningAnim/Warning02.png',
        '/p5-SpaceFighter/Q3-Spacefighter/Assets/Animations/WarningAnim/Warning03.png',
        '/p5-SpaceFighter/Q3-Spacefighter/Assets/Animations/WarningAnim/Warning04.png',
        '/p5-SpaceFighter/Q3-Spacefighter/Assets/Animations/WarningAnim/Warning05.png',
        '/p5-SpaceFighter/Q3-Spacefighter/Assets/Animations/WarningAnim/Warning06.png',
        '/p5-SpaceFighter/Q3-Spacefighter/Assets/Animations/WarningAnim/Warning07.png',
        '/p5-SpaceFighter/Q3-Spacefighter/Assets/Animations/WarningAnim/Warning08.png',
        '/p5-SpaceFighter/Q3-Spacefighter/Assets/Animations/WarningAnim/Warning09.png',
        '/p5-SpaceFighter/Q3-Spacefighter/Assets/Animations/WarningAnim/Warning10.png',
        '/p5-SpaceFighter/Q3-Spacefighter/Assets/Animations/WarningAnim/Warning11.png',
        '/p5-SpaceFighter/Q3-Spacefighter/Assets/Animations/WarningAnim/Warning12.png',
        '/p5-SpaceFighter/Q3-Spacefighter/Assets/Animations/WarningAnim/Warning13.png',
        '/p5-SpaceFighter/Q3-Spacefighter/Assets/Animations/WarningAnim/Warning14.png'
    );
    hazardShopANIM = loadAnimation(
        '/p5-SpaceFighter/Q3-Spacefighter/Assets/Animations/ShopAnim/moneyanim01.png',
        '/p5-SpaceFighter/Q3-Spacefighter/Assets/Animations/ShopAnim/moneyanim02.png',
        '/p5-SpaceFighter/Q3-Spacefighter/Assets/Animations/ShopAnim/moneyanim03.png',
        '/p5-SpaceFighter/Q3-Spacefighter/Assets/Animations/ShopAnim/moneyanim04.png',
        '/p5-SpaceFighter/Q3-Spacefighter/Assets/Animations/ShopAnim/moneyanim05.png',
        '/p5-SpaceFighter/Q3-Spacefighter/Assets/Animations/ShopAnim/moneyanim06.png',
        '/p5-SpaceFighter/Q3-Spacefighter/Assets/Animations/ShopAnim/moneyanim07.png',
        '/p5-SpaceFighter/Q3-Spacefighter/Assets/Animations/ShopAnim/moneyanim08.png',
        '/p5-SpaceFighter/Q3-Spacefighter/Assets/Animations/ShopAnim/moneyanim09.png',
        '/p5-SpaceFighter/Q3-Spacefighter/Assets/Animations/ShopAnim/moneyanim10.png',
        '/p5-SpaceFighter/Q3-Spacefighter/Assets/Animations/ShopAnim/moneyanim11.png',
        '/p5-SpaceFighter/Q3-Spacefighter/Assets/Animations/ShopAnim/moneyanim12.png',
        '/p5-SpaceFighter/Q3-Spacefighter/Assets/Animations/ShopAnim/moneyanim13.png',
        '/p5-SpaceFighter/Q3-Spacefighter/Assets/Animations/ShopAnim/moneyanim14.png',
    );

    //EXPLOSIONS 
    basicExplosionANIM = loadAnimation(
        '/p5-SpaceFighter/Q3-Spacefighter/Assets/Animations/Explosions/BasicGreenish/basicgreenexplosion_1.png',
        '/p5-SpaceFighter/Q3-Spacefighter/Assets/Animations/Explosions/BasicGreenish/basicgreenexplosion_2.png',
        '/p5-SpaceFighter/Q3-Spacefighter/Assets/Animations/Explosions/BasicGreenish/basicgreenexplosion_3.png',
        '/p5-SpaceFighter/Q3-Spacefighter/Assets/Animations/Explosions/BasicGreenish/basicgreenexplosion_4.png',
        '/p5-SpaceFighter/Q3-Spacefighter/Assets/Animations/Explosions/BasicGreenish/basicgreenexplosion_5.png',
        '/p5-SpaceFighter/Q3-Spacefighter/Assets/Animations/Explosions/BasicGreenish/basicgreenexplosion_6.png',
        '/p5-SpaceFighter/Q3-Spacefighter/Assets/Animations/Explosions/BasicGreenish/basicgreenexplosion_7.png',
    );
    basicHitMarkerANIM = loadAnimation(
        '/p5-SpaceFighter/Q3-Spacefighter/Assets/Animations/Explosions/hitmarker/hitmarker01.png',
        '/p5-SpaceFighter/Q3-Spacefighter/Assets/Animations/Explosions/hitmarker/hitmarker02.png',
        '/p5-SpaceFighter/Q3-Spacefighter/Assets/Animations/Explosions/hitmarker/hitmarker03.png',
        '/p5-SpaceFighter/Q3-Spacefighter/Assets/Animations/Explosions/hitmarker/hitmarker04.png'
    );

    basicHitMarkerANIM.looping = false;
}

function preloadSOUNDS(){

    //--- https://opengameart.org/content/laser-fire
    playerShoot1SOUND = loadSound('/p5-SpaceFighter/Q3-Spacefighter/Assets/SOUNDS/Shooting/laser1.wav');
    playerShoot2SOUND = loadSound('/p5-SpaceFighter/Q3-Spacefighter/Assets/SOUNDS/Shooting/laser4_0.wav');
    enemyShootSpreadSOUND = loadSound('/p5-SpaceFighter/Q3-Spacefighter/Assets/SOUNDS/Shooting/laser12.wav');
    //---

    //https://opengameart.org/content/beep-tone-sound-sfx
    uiClickSOUND = loadSound('/p5-SpaceFighter/Q3-Spacefighter/Assets/SOUNDS/Shooting/beep.wav');

    //https://opengameart.org/content/bombexplosion8bit
    explosionSOUND = loadSound('/p5-SpaceFighter/Q3-Spacefighter/Assets/SOUNDS/Shooting/8bit_bomb_explosion.wav');

    //https://opengameart.org/content/space-boss-battle-theme
    mainmusicSOUND = loadSound('/p5-SpaceFighter/Q3-Spacefighter/Assets/SOUNDS/OrbitalColossus.mp3');
    
    
}

function setupSOUNDS(){
    playerShoot1SOUND = setVolume(0)
    playerShoot2SOUND =setVolume(0);
    playerShoot1SOUND = setLoop(false);
    playerShoot2SOUND =setLoop(false);
    uiClickSOUND = setLoop(false);
    explosionSOUND = setLoop(false);
    enemyspreadsound = setLoop(false);
}


function setupIMAGES(){
    shipMainIMG.resize(PLAYERSPRITESIZE,PLAYERSPRITESIZE);
    uiMainButtonIMG.resize(400,200);
    uiSideBarIMG.resize(500,1000);
    shopToolTipIMG.resize(200,100);
}

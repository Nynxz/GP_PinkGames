//STATUS - MEDIUM
//NOTE - HAVING TWO IMAGES IN AN ANIMATION CAUSES ISSUES
function preloadIMAGES(){
    //IMAGES

    //SHIPS
    shipMainIMG= loadImage('/Q3-Spacefighter/Assets/Ships/Player/Player_Blue_Off.png');
    enemyShipStandard = loadImage("/Q3-Spacefighter/Assets/Ships/stdredenemy.png")
    enemyShipTentacle = loadImage("/Q3-Spacefighter/Assets/Ships/aliententacle.png");
    //BOSS
    bossANIM = loadAnimation(
        '/Q3-Spacefighter/Assets/Boss/bossweaponanim1.png',
        '/Q3-Spacefighter/Assets/Boss/bossweaponanim2.png',
        '/Q3-Spacefighter/Assets/Boss/bossweaponanim3.png',
        '/Q3-Spacefighter/Assets/Boss/bossweaponanim4.png',
        '/Q3-Spacefighter/Assets/Boss/bossweaponanim5.png',
        '/Q3-Spacefighter/Assets/Boss/bossweaponanim6.png',
        '/Q3-Spacefighter/Assets/Boss/bossweaponanim7.png',

        '/Q3-Spacefighter/Assets/Boss/bossweaponanim8.png',
        '/Q3-Spacefighter/Assets/Boss/bossweaponanim9.png',
        '/Q3-Spacefighter/Assets/Boss/bossweaponanim10.png',
        '/Q3-Spacefighter/Assets/Boss/bossweaponanim11.png',
    )
    bossHPBarIMG = loadImage('/Q3-Spacefighter/Assets/Boss/BossHPBar.png');
    bosslazerIMG = loadImage('/Q3-Spacefighter/Assets/Boss/bosslazer.png');
    bossPickleIMG = loadImage('/Q3-Spacefighter/Assets/Boss/pickle.png');
    //ANIMATIONS
    shipMainIdleAnim = loadAnimation(
        '/Q3-Spacefighter/Assets/Ships/Player/Animation/playeranims_3.png',
        '/Q3-Spacefighter/Assets/Ships/Player/Animation/playeranims_4.png',
        '/Q3-Spacefighter/Assets/Ships/Player/Animation/playeranims_5.png',
        '/Q3-Spacefighter/Assets/Ships/Player/Animation/playeranims_6.png',
        '/Q3-Spacefighter/Assets/Ships/Player/Animation/playeranims_7.png',
    );
    shipMainLeftAnim = loadAnimation(
        '/Q3-Spacefighter/Assets/Ships/Player/Animation/playeranims_9.png',
        '/Q3-Spacefighter/Assets/Ships/Player/Animation/playeranims_10.png',
        '/Q3-Spacefighter/Assets/Ships/Player/Animation/playeranims_10.png'
    );
    shipMainRightAnim = loadAnimation(
        '/Q3-Spacefighter/Assets/Ships/Player/Animation/playeranims_13.png',
        '/Q3-Spacefighter/Assets/Ships/Player/Animation/playeranims_14.png',
        '/Q3-Spacefighter/Assets/Ships/Player/Animation/playeranims_14.png'
    );

    //SHIELD HIT
    shieldHitTop = loadAnimation(
        '/Q3-Spacefighter/Assets/ShieldHit/tophit01.png',
        '/Q3-Spacefighter/Assets/ShieldHit/tophit02.png',
        '/Q3-Spacefighter/Assets/ShieldHit/tophit03.png',
        '/Q3-Spacefighter/Assets/ShieldHit/tophit04.png',
        '/Q3-Spacefighter/Assets/ShieldHit/tophit05.png'
    );
    shieldHitBottom = loadAnimation(
        '/Q3-Spacefighter/Assets/ShieldHit/bottomhit01.png',
        '/Q3-Spacefighter/Assets/ShieldHit/bottomhit02.png',
        '/Q3-Spacefighter/Assets/ShieldHit/bottomhit03.png',
        '/Q3-Spacefighter/Assets/ShieldHit/bottomhit04.png',
        '/Q3-Spacefighter/Assets/ShieldHit/bottomhit05.png'
    );
    shieldHitLeft = loadAnimation(
        '/Q3-Spacefighter/Assets/ShieldHit/lefthit01.png',
        '/Q3-Spacefighter/Assets/ShieldHit/lefthit02.png',
        '/Q3-Spacefighter/Assets/ShieldHit/lefthit03.png',
        '/Q3-Spacefighter/Assets/ShieldHit/lefthit04.png',
        '/Q3-Spacefighter/Assets/ShieldHit/lefthit05.png'
    );
    shieldHitRight = loadAnimation(
        '/Q3-Spacefighter/Assets/ShieldHit/righthit01.png',
        '/Q3-Spacefighter/Assets/ShieldHit/righthit02.png',
        '/Q3-Spacefighter/Assets/ShieldHit/righthit03.png',
        '/Q3-Spacefighter/Assets/ShieldHit/righthit04.png',
        '/Q3-Spacefighter/Assets/ShieldHit/righthit05.png'
    );

    
    
    //BULLETS
    GameManager.weapons.Type.Basic.StandardShot.img = loadImage( GameManager.weapons.Type.Basic.StandardShot.img);
    GameManager.weapons.Type.Lazer.RedBeam.img = loadImage( GameManager.weapons.Type.Lazer.RedBeam.img);

    //UI
    uiMainButtonIMG = loadImage('/Q3-Spacefighter/Assets/Menu/buttonbase.png');
    uiSideBarIMG = loadImage('/Q3-Spacefighter/Assets/Menu/sidebarbluenew.png');
    uiBackButtonIMG = loadImage('/Q3-Spacefighter/Assets/Leaderboard/backbutton.png');
    uiLeaderBoardIMG = loadImage('/Q3-Spacefighter/Assets/Leaderboard/leaderboard.png');
    uiNameFieldIMG = loadImage('/Q3-Spacefighter/Assets/Menu/namefield.png');
    uiEnterButtonIMG = loadImage('/Q3-Spacefighter/Assets/Menu/ENTERBUTTON.png');
    uiExitButtonIMG = loadImage('/Q3-Spacefighter/Assets/Menu/EXITBUTTON.png')
    uiGameOverIMG = loadImage('/Q3-Spacefighter/Assets/Menu/GAMEOVER.png');
    uiSpaceFighterLogoIMG = loadImage('/Q3-Spacefighter/Assets/Menu/SpaceFighterLogo.png');
    uiVideoBorderIMG = loadImage('/Q3-Spacefighter/Assets/ShopItems/videoborder.png');
    uiOptionsMenuIMG = loadImage('/Q3-Spacefighter/Assets/optionsmenu.png');
    uiYouWinIMG = loadImage('/Q3-Spacefighter/Assets/Menu/youwin.png');

    //Options
    optionsModeANIM = loadAnimation(
        '/Q3-Spacefighter/Assets/Options/Mode1.png',
        '/Q3-Spacefighter/Assets/Options/Mode2.png',
        '/Q3-Spacefighter/Assets/Options/Mode2.png'
    );
    difficultyModeANIM = loadAnimation(
        '/Q3-Spacefighter/Assets/Options/Difficulty1.png',
        '/Q3-Spacefighter/Assets/Options/Difficulty2.png',
        '/Q3-Spacefighter/Assets/Options/Difficulty3.png'
    );

    muiscModeANIM = loadAnimation(
        '/Q3-Spacefighter/Assets/Options/Music1.png',
        '/Q3-Spacefighter/Assets/Options/Music2.png',
        '/Q3-Spacefighter/Assets/Options/Music2.png'
    );

    hazardModeANIM = loadAnimation(
        '/Q3-Spacefighter/Assets/Options/Hazards1.png',
        '/Q3-Spacefighter/Assets/Options/Hazards2.png',
        '/Q3-Spacefighter/Assets/Options/Hazards2.png',
    );
    //https://www.pngkey.com/detail/u2e6w7u2r5i1o0w7_screen-red-vignette-parallel/
    uiRedHitVignetteIMG = loadImage('/Q3-Spacefighter/Assets/screen-red-vignette.png');
    
    
    //SHOP
    shopPageIMG = loadImage('/Q3-Spacefighter/Assets/Menu/shoppage.png');
    shopBaseButtonIMG = loadImage('/Q3-Spacefighter/Assets/Menu/shopbutton.png');
    shopToolTipIMG = loadImage('/Q3-Spacefighter/Assets/ShopItems/tooltipimg.png');
    item_STDShotIMG = loadImage('/Q3-Spacefighter/Assets/ShopItems/stdShot.png');
    item_LShotIMG = loadImage('/Q3-Spacefighter/Assets/ShopItems/LShot.png');
    item_XShotIMG = loadImage('/Q3-Spacefighter/Assets/ShopItems/xShot.png');
    item_SpreadShotIMG = loadImage('/Q3-Spacefighter/Assets/ShopItems/spreadShot.png');

    upgrade_ShieldUpIMG = loadImage('/Q3-Spacefighter/Assets/ShopItems/ShieldUp.png');
    upgrade_HealthdUpIMG = loadImage('/Q3-Spacefighter/Assets/ShopItems/HealthUp.png');

    shopNotEnoughMoneyIMG = loadImage('/Q3-Spacefighter/Assets/ShopItems/notenoughmoney.png');
    shopLockedIMG = loadImage('/Q3-Spacefighter/Assets/ShopItems/LOCKED.png');

    //PICKUPS
    pickupHealthIMG = loadImage('/Q3-Spacefighter/Assets/pickups/healthpickup.png');
    pickupMoneyIMG = loadImage('/Q3-Spacefighter/Assets/pickups/moneypickup.png');

    //EVENTS
    hazardWarningANIM = loadAnimation(
        '/Q3-Spacefighter/Assets/Animations/WarningAnim/Warning01.png',
        '/Q3-Spacefighter/Assets/Animations/WarningAnim/Warning02.png',
        '/Q3-Spacefighter/Assets/Animations/WarningAnim/Warning03.png',
        '/Q3-Spacefighter/Assets/Animations/WarningAnim/Warning04.png',
        '/Q3-Spacefighter/Assets/Animations/WarningAnim/Warning05.png',
        '/Q3-Spacefighter/Assets/Animations/WarningAnim/Warning06.png',
        '/Q3-Spacefighter/Assets/Animations/WarningAnim/Warning07.png',
        '/Q3-Spacefighter/Assets/Animations/WarningAnim/Warning08.png',
        '/Q3-Spacefighter/Assets/Animations/WarningAnim/Warning09.png',
        '/Q3-Spacefighter/Assets/Animations/WarningAnim/Warning10.png',
        '/Q3-Spacefighter/Assets/Animations/WarningAnim/Warning11.png',
        '/Q3-Spacefighter/Assets/Animations/WarningAnim/Warning12.png',
        '/Q3-Spacefighter/Assets/Animations/WarningAnim/Warning13.png',
        '/Q3-Spacefighter/Assets/Animations/WarningAnim/Warning14.png'
    );
    hazardShopANIM = loadAnimation(
        '/Q3-Spacefighter/Assets/Animations/ShopAnim/moneyanim01.png',
        '/Q3-Spacefighter/Assets/Animations/ShopAnim/moneyanim02.png',
        '/Q3-Spacefighter/Assets/Animations/ShopAnim/moneyanim03.png',
        '/Q3-Spacefighter/Assets/Animations/ShopAnim/moneyanim04.png',
        '/Q3-Spacefighter/Assets/Animations/ShopAnim/moneyanim05.png',
        '/Q3-Spacefighter/Assets/Animations/ShopAnim/moneyanim06.png',
        '/Q3-Spacefighter/Assets/Animations/ShopAnim/moneyanim07.png',
        '/Q3-Spacefighter/Assets/Animations/ShopAnim/moneyanim08.png',
        '/Q3-Spacefighter/Assets/Animations/ShopAnim/moneyanim09.png',
        '/Q3-Spacefighter/Assets/Animations/ShopAnim/moneyanim10.png',
        '/Q3-Spacefighter/Assets/Animations/ShopAnim/moneyanim11.png',
        '/Q3-Spacefighter/Assets/Animations/ShopAnim/moneyanim12.png',
        '/Q3-Spacefighter/Assets/Animations/ShopAnim/moneyanim13.png',
        '/Q3-Spacefighter/Assets/Animations/ShopAnim/moneyanim14.png',
    );

    //EXPLOSIONS 
    basicExplosionANIM = loadAnimation(
        '/Q3-Spacefighter/Assets/Animations/Explosions/BasicGreenish/basicgreenexplosion_1.png',
        '/Q3-Spacefighter/Assets/Animations/Explosions/BasicGreenish/basicgreenexplosion_2.png',
        '/Q3-Spacefighter/Assets/Animations/Explosions/BasicGreenish/basicgreenexplosion_3.png',
        '/Q3-Spacefighter/Assets/Animations/Explosions/BasicGreenish/basicgreenexplosion_4.png',
        '/Q3-Spacefighter/Assets/Animations/Explosions/BasicGreenish/basicgreenexplosion_5.png',
        '/Q3-Spacefighter/Assets/Animations/Explosions/BasicGreenish/basicgreenexplosion_6.png',
        '/Q3-Spacefighter/Assets/Animations/Explosions/BasicGreenish/basicgreenexplosion_7.png',
    );
    basicHitMarkerANIM = loadAnimation(
        '/Q3-Spacefighter/Assets/Animations/Explosions/hitmarker/hitmarker01.png',
        '/Q3-Spacefighter/Assets/Animations/Explosions/hitmarker/hitmarker02.png',
        '/Q3-Spacefighter/Assets/Animations/Explosions/hitmarker/hitmarker03.png',
        '/Q3-Spacefighter/Assets/Animations/Explosions/hitmarker/hitmarker04.png'
    );

    basicHitMarkerANIM.looping = false;
}

function preloadSOUNDS(){

    //--- https://opengameart.org/content/laser-fire
    playerShoot1SOUND = loadSound('/Q3-Spacefighter/Assets/SOUNDS/Shooting/laser1.wav');
    playerShoot2SOUND = loadSound('/Q3-Spacefighter/Assets/SOUNDS/Shooting/laser4_0.wav');
    enemyShootSpreadSOUND = loadSound('/Q3-Spacefighter/Assets/SOUNDS/Shooting/laser12.wav');
    //---

    //https://opengameart.org/content/beep-tone-sound-sfx
    uiClickSOUND = loadSound('/Q3-Spacefighter/Assets/SOUNDS/Shooting/beep.wav');

    //https://opengameart.org/content/bombexplosion8bit
    explosionSOUND = loadSound('/Q3-Spacefighter/Assets/SOUNDS/Shooting/8bit_bomb_explosion.wav');

    //https://opengameart.org/content/space-boss-battle-theme
    mainmusicSOUND = loadSound('/Q3-Spacefighter/Assets/SOUNDS/OrbitalColossus.mp3');
    
    
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
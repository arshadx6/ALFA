  let keys={};
    
  let keysdiv;

  let playersheet={};
  var app;
  var basicText;
  var oof = new Audio('resources/boing4.mp3');
  oof.volume=0.1;
  oof.loop=true;
  //var player;
  var textureButton;
  var textureButtonDown;
  var button;
  var SText;
  var rect1;
  var rect2;
  var rect3;
  var rect4;
  var rect5;
  var rect6;
  var rect7;
  var safeText=new PIXI.Text("SAFE");
  var SAFE=false;
  var load=0;
  var start=0;
  var gameover=false;
  var restart;
  var enemycount=10;
  var won=0;
  const style = new PIXI.TextStyle({
    dropShadow: true,
    dropShadowColor: "#01bbf9",
        fill: "white",
    fillGradientStops: [
        0
    ],
    fontFamily: "\"Trebuchet MS\", Helvetica, sans-serif",
    fontSize: 20,
    fontWeight: "bolder",
    fontVariant: "small-caps",
    letterSpacing: 1,

    strokeThickness: 0
});
  //PIXI.sound.addChild('bird', 'resources/boing.mp3');
  let enemysheet={};

   function init() {
    restart=0;
     app = new PIXI.Application((window.innerWidth-15), window.innerHeight-21, { backgroundColor: 0 });
    document.body.appendChild(app.view);
      const canvas=document.getElementById('game-canvas');
      stage = new PIXI.Container();

      renderer = PIXI.autoDetectRenderer(
      1508,
      680,
      {view:document.getElementById("game-canvas")}

    );
 //  Text3 = new PIXI.Text('SAFE');
    //  Text3.x = 300;
      //Text3.y = 100;
      //Text3.visible=false;
     // app.stage.addChild(Text3);
    app.loader.add("player1","resources/spritesheet.png");
    app.loader.add("enemy","resources/spritesheet2.png");
    textureButton=new PIXI.Texture.from("resources/restart.png");
    textureButtonDown=new PIXI.Texture.from("resources/restart2.png");
    /*if(0){
      app.loader.load(doneLoading);
    }*/




    welcomeText=new PIXI.Text("WELCOME TO ALFA :)",style);
    welcomeText.x=(window.innerWidth-15)/2;
    welcomeText.y=90;
    welcomeText.anchor.set(0.5);
     //welcomeText.visible=false;
    safeText.x = 300;
    safeText.y = 100;
    basicText = new PIXI.Text('HEYYY!');
    basicText.x = 50;
    basicText.y = 100;
    basicText.visible=false;
    SText = new PIXI.Text('Press the right arrow to Start',style);
    SText.x = 50;
    SText.y = 100;
    rect1= new PIXI.Graphics();
    rect1.lineStyle(5, 0x000000);
    rect1.beginFill(0x000000);
    rect1.drawRect(0,0, 100,100);
    
      rect2= new PIXI.Graphics();
    rect2.lineStyle(5, 0x000000);
    rect2.beginFill(0x000000);
    rect2.drawRect(0,0, 100,100);
       rect3= new PIXI.Graphics();
    rect3.lineStyle(5, 0x000000);
    rect3.beginFill(0x000000);
    rect3.drawRect(0,0, 100,100);

       rect5= new PIXI.Graphics();
    rect5.lineStyle(5, 0x000000);
    rect5.beginFill(0x000000);
    rect5.drawRect(0,0, 100,100);
       rect6= new PIXI.Graphics();
    rect6.lineStyle(5, 0x000000);
    rect6.beginFill(0x000000);
    rect6.drawRect(0,0, 100,100);
       rect7= new PIXI.Graphics();
    rect7.lineStyle(5, 0x000000);
    rect7.beginFill(0x000000);
    rect7.drawRect(0,0, 100,100);
    rect1.position.set(90,590);
    rect2.position.set(450,590);
    rect3.position.set(650,590);
    rect5.position.set(920,590);
    rect6.position.set(1120,590);
    rect7.position.set(1350,590);

    rect1.visible=false;
    rect2.visible=false;
    rect3.visible=false;
    rect5.visible=false;
    rect6.visible=false;
    rect7.visible=false;
    var farTexture = PIXI.Texture.fromImage("resources/fire1.png");
    far = new PIXI.extras.TilingSprite(farTexture,(window.innerWidth-15),675);
    far.position.x = 0;
    far.position.y = 0;
    far.tilePosition.x = 0;
    far.tilePosition.y = 0;
    app.stage.addChild(far);
    var alfa1 = PIXI.Texture.from("resources/cent.png");
    alfa = new PIXI.extras.TilingSprite(alfa1,70,122);
    alfa.x = (window.innerWidth-15)/2;
    alfa.y = 170;
    alfa.anchor.set(0.5);
    alfa.blendMode=PIXI.BLEND_MODES.MULTIPLY;
    alfa.alpha=0.6;
    app.stage.addChild(alfa);
    var controls1 = PIXI.Texture.from("resources/movement.png");
    controls= new PIXI.extras.TilingSprite(controls1,345,216);
    controls.x = (window.innerWidth-15)/2;
    controls.y = 170;
    controls.anchor.set(0.5);
    controls.blendMode=PIXI.BLEND_MODES.MULTIPLY;
    controls.alpha=0.6;
    var tint1 = PIXI.Texture.from("resources/tint.png");
    tint= new PIXI.extras.TilingSprite(tint1,(window.innerWidth-15),685);
    tint.x = (window.innerWidth-15)/2;
    tint.y = 342.5;
    tint.anchor.set(0.5);
    tint.blendMode=PIXI.BLEND_MODES.MULTIPLY;
   // controls.alpha=0.6;
   // app.stage.addChild(tint);
    //controls.visible=false;

    //rect.endFill();

    var midTexture = PIXI.Texture.fromImage("resources/fire6.png");
    mid = new PIXI.extras.TilingSprite(midTexture, (window.innerWidth-15), window.innerHeight-21);
    mid.position.x = 0;
    mid.position.y = 128-45;
    mid.tilePosition.x = 0;
    mid.tilePosition.y = 0;
    app.stage.addChild(mid);

    app.ticker.add(update()); // this is for both mid and far screens

    
      


      window.addEventListener('keydown',OnKeyDown);
      window.addEventListener('keyup',OnKeyUp);
      keysdiv= document.querySelector("#keys");
      button = new PIXI.Sprite(textureButton);
      button.buttonMode = true;

      button.anchor.set(0.5);
      button.x = 200;
      button.y = 200;

      // make the button interactive...
      button.interactive = true;
      button.buttonMode = true;
      app.stage.addChild(button); 
      button.visible=false;
      

    }

    function doneLoading(){
      createPlayerSheet();
      createPlayer();
      createEnemy();
      app.ticker.add(gameLoop);
    }
    function createPlayerSheet(){
      let ssheet=new PIXI.BaseTexture.from("resources/spritesheet.png");
      let ssheet2=new PIXI.BaseTexture.from("resources/spritesheet2.png");

 //     app.stage.addChild(safeText); //safe text
      safeText.visible=false;

      let h=143;

      playersheet["standStill"]=[
      new PIXI.Texture(ssheet,new PIXI.Rectangle(72.8,0,57.4,h)),
      new PIXI.Texture(ssheet,new PIXI.Rectangle(0,0,72.8,h)),
       
     //  new PIXI.Texture(ssheet,new PIXI.Rectangle(0,0,72.8,h)),
      ];
      playersheet["left"]=[
      new PIXI.Texture(ssheet,new PIXI.Rectangle(130.21,0,69.7,h)),
      new PIXI.Texture(ssheet,new PIXI.Rectangle(200,0,69.7,h)),
      new PIXI.Texture(ssheet,new PIXI.Rectangle(269.8,0,55,h)),

      ];
      playersheet["right"]=[
      new PIXI.Texture(ssheet,new PIXI.Rectangle(325.5,0,67.4,h)),
      new PIXI.Texture(ssheet,new PIXI.Rectangle(392.92,0,72.7,h)),
      new PIXI.Texture(ssheet,new PIXI.Rectangle(465.6,0,55.3,h)),

      ];
      enemysheet["move"]=[      
      new PIXI.Texture(ssheet2,new PIXI.Rectangle(0,0,245,109)),
      new PIXI.Texture(ssheet2,new PIXI.Rectangle(245,0,289,109)),
      new PIXI.Texture(ssheet2,new PIXI.Rectangle(537,0,250,109)),
      ];
    }
    function gameLoop(){
    //  keysdiv.innerHTML=JSON.stringify(keys);
    //  console.log(player.x+"PLAYER ");
     // console.log(mid.tilePosition.x+"Screen ");
 //    /*

  //   */
  //console.log(mid.x);
  rect1.x-=0.64;
  rect2.x-=0.64;
  rect3.x-=0.64;
//  rect4.x-=0.64;
  rect5.x-=0.64;
  rect6.x-=0.64;
  rect7.x-=0.64;
  if(won!=1){
     player.x-=0.64;
  }
 
  enemy.x-=2;
  if(enemy.x<=0){
    enemy.x+=2000+(Math.random()*1000);
    enemycount-=1;
  }
if(player.x<=rect1.x+80&&player.x>=rect1.x){
  if(!SAFE){
    SAFE=true;
    safeText.visible=true;
    player.alpha=0.5;

  }
}
  else if(player.x<=rect2.x+80&&player.x>=rect2.x){
  if(!SAFE){
    SAFE=true;
    safeText.visible=true;
    player.alpha=0.5;

}
}
  else if(player.x<=rect3.x+80&&player.x>=rect3.x){
  if(!SAFE){
    SAFE=true;
    safeText.visible=true;
    player.alpha=0.5;

  }
}

  else if(player.x<=rect5.x+80&&player.x>=rect5.x){
  if(!SAFE){
    SAFE=true;
    safeText.visible=true;
    player.alpha=0.5;

  }
}
  else if(player.x<=rect6.x+80&&player.x>=rect6.x){
  if(!SAFE){
    SAFE=true;
    safeText.visible=true;
    player.alpha=0.5;

  }
}
  else if(player.x<=rect7.x+80&&player.x>=rect7.x){
  if(!SAFE){
    SAFE=true;
    safeText.visible=true;
    player.alpha=0.5;

  }
}
  else{
      SAFE=false;
      player.alpha=1;

  }
enemy.play();

  //player.x-=0.30;

if(rect1.x<=0){
  rect1.x=rect1.x+1600;
}
if(rect2.x<=0){
  rect2.x=rect2.x+1600;
}
if(rect3.x<=0){
  rect3.x=rect3.x+1600;
}

if(rect5.x<=0){
  rect5.x=rect5.x+1600;
}
if(rect6.x<=0){
  rect6.x=rect6.x+1600;
}
if(rect7.x<=0){
  rect7.x=rect7.x+1600;
}
console.log(enemy.x+" ENEMy")

  if(player.x<=0||(SAFE==false&&player.x<enemy.x+10&&player.x>enemy.x-500&&won==0)){
    console.log("LOSING");
    if(gameover==false){
      SText.visible=false;
     // button.visible=true;
     controls.visible=false;
      gameover=true;
       var over = new PIXI.Text('GAME OVER!',style);
       over.fontSize=70;
      over.x = (window.innerWidth-15)/2;
      over.y = 100;
      over.anchor.set(0.5);
      app.stage.addChild(over);
      var end=new PIXI.Text("^ CLICK THE REFRESH BUTTON TO START OVER :)",style);
      end.x=320;
      end.y=20;
      end.anchor.set(0.5);
      app.stage.addChild(end);

    }
     
      }
      if(enemycount==0&&won!=1&&gameover==false){
        won=1;
        var Twon=new PIXI.Text("YOU SUCCESSFULLY ESCAPED!",style);
        enemy.visible=false;

        player.textures=playersheet.standStill;
        player.play();
        player.loop=true;
        var x=3;
        Twon.size=60;
        Twon.x=(window.innerWidth-15)/2;
        Twon.y=100;
        Twon.anchor.set(0.5);
        app.stage.addChild(Twon);

      }

      if(keys["39"]){ //right

      //  currposy=anim.x;
        SText.visible=false;
        controls.visible=false;
        app.stage.addChild(basicText);
         window.setTimeout(function(){
                    basicText.visible=false;
                  },2000);
        
        oof.play();
        if(!player.playing){
          player.textures=playersheet.right;
          player.play();
        }
        player.x+=1.5;
        
      }
      if(keys["37"]){
         //left
         if(!player.playing){
          player.textures=playersheet.left;
          player.play();
        }

        player.x-=0.86;

      }
      if(keys["38"]){ //up

        if(!player.playing){
          player.textures=playersheet.standStill;
          player.play();
        }
        player.y-=1; 
        window.setTimeout(function(){
                    player.y+=1;
                  },500);
      }

    }
    function createPlayer(){
      app.stage.addChild(controls);
      app.stage.addChild(SText);
      player = new PIXI.extras.AnimatedSprite(playersheet.standStill);
      player.anchor.set(0.5);
      player.animationSpeed=0.07;
      player.loop= false;
      player.x=600;
      player.y=620;
      player.blendMode=PIXI.BLEND_MODES.MULTIPLY;
      app.stage.addChild(player);
      player.play();
    }
        function createEnemy(){
      enemy = new PIXI.extras.AnimatedSprite(enemysheet.move);
      enemy.anchor.set(0.5);
     enemy.animationSpeed=0.08;
      enemy.loop= true;
      enemy.x=5000;  
      enemy.y=100;
      enemy.blendMode=PIXI.BLEND_MODES.MULTIPLY;
      app.stage.addChild(enemy);
     enemy.play();
    }
    function OnKeyDown(e){
      //console.log(e.keyCode);
      keys[e.keyCode]=true;
    }
    function OnKeyUp(e){
     // console.log(e.keyCode);
      keys[e.keyCode]=false;
    }
    function update() {
      app.stage.addChild(welcomeText);  
    far.tilePosition.x -= 0.128;
    mid.tilePosition.x -= 0.64;
  // alfa.y+=0.15;
   alfa.alpha+=0.0001;
    if(load==0){
      load=1;
      window.setTimeout(function(){
        alfa.visible=false;
          window.setTimeout(function(){
             app.loader.load(doneLoading);
          },2000);
             
                  },19000);
}
      if(start==0){
      app.stage.addChild(rect1);
      app.stage.addChild(rect2);
      app.stage.addChild(rect3);
    //  app.stage.addChild(rect4);
      app.stage.addChild(rect5);
      app.stage.addChild(rect6);
      app.stage.addChild(rect7);
      //app.stage.addChild(baseline);
        welcomeText.fontSize=4;
        start=1;
          window.setTimeout(function(){
            welcomeText.visible=false;
            
          },19000);
          window.setTimeout(function(){
            style.fontSize=19;
            welcomeText.text="This is a story about Alfa ,a spirit who is currently trapped in the depths of enemy territory and has to discreetly escape through the forest."
            welcomeText.visible=true;
            window.setTimeout(function(){
            	style.fontSize=22;
              welcomeText.text="Try your best to camouflage yourself next to the trees when the enemies show up."
            },6000);

          },4000);


          
      }
          


      
    
    //player.x-+0.64;
    //console.log(text);
    renderer.render(stage);

    requestAnimationFrame(update);
  }


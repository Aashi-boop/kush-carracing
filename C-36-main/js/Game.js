class Game {
  constructor() {}
  readgs(){
    database.ref("gameState").on("value",function(data)
    {
      mygs = data.val()
    })
   }
 
   updategs(gs){
     database.ref("/").update({
       playerCount:gs
     })
   }
  start() {
    
    player = new Player();
    player.readpc();

    form = new Form();
    form.display();

    car1 = createSprite(width/2 - 50,height - 100)
    car1.addImage(car1img)
    car1.scale = 0.07

    car2=createSprite(width/2 + 100,height - 100)
    car2.addImage(car2img)
    car2.scale=0.07

    cars = [car1,car2]    
  }
  handleElements() {
    form.hide();
    form.titleImg.position(40, 50);
    form.titleImg.class("gameTitleAfterEffect");
  }
  play(){
    this.handleElements()
    Player.getplayerinfo()
    if(allplayers !== undefined){
      image(trackimg,0, -height*5 ,width, height*6)
      drawSprites()
    }
}
}
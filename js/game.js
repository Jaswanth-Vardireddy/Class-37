class Game
{
constructor()
{


}
 
getState()
{
var gameStateRef=database.ref("gameState")
gameStateRef.on("value",function(data){
gameState=data.val();
})

}
updateState(state)
{
database.ref("/").update({
gameState:state
})
}
start()
{
if(gameState===0)
{
player=new Player();
player.getCount();
form=new Form();
form.display();
}
}

play()
{
form.hide();
textSize(20)
text("gameStarted",120,100)
Player.GetPlayerInfo();
if(allPlayers!==undefined)
{
var displayPosition=130;
for(var i in allPlayers)
{
if(i==="player"+player.index)
{
fill("brown")
} else{
fill("black")
}

displayPosition+=20;
textSize(15)
//name:0
text(allPlayers[i].name+":"+allPlayers[i].distance,120,displayPosition)
}
}

if(keyWentDown(UP_ARROW) && player.index!==null)
{
player.distance+=50;
player.updateName();
}
}

}
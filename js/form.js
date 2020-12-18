class Form
{
constructor()
{
this.title=createElement("h2")
this.input=createInput("NAME")
this.button=createButton("Click Here")
this.greeting=createElement("h2")


}
 hide()
 {
 this.greeting.hide();
 this.input.hide();
 this.button.hide();
 }
 display()
 {
 
 this.title.html("car racing game")
 this.title.position(130,0)

 this.input.position(130,160)
 this.button.position(250,200)

 this.button.mousePressed(()=>{
 this.input.hide();
 this.button.hide();
 player.name=this.input.value();
 playerCount+=1
 player.index=playerCount
 player.updateName(name)
 player.updateCount(playerCount)
 this.greeting.html("hello "+name)
 this.greeting.position(130,160)
 })
 }



}
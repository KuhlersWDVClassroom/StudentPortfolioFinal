function ReSize(){
WIDTH = window.innerWidth;
HEIGHT = window.innerHeight;
//WIDTH = 1024;
//HEIGHT = 768;
drawing.width = WIDTH;
drawing.height = HEIGHT;
DrawMap();
}

function DrawMap(){
   var drawing = document.getElementById("drawing");
   var con = drawing.getContext("2d");

   //clear background
   con.fillStyle = "black";
con.strokeStyle = "white";
con.fillRect(0,0, WIDTH, HEIGHT)
con.fillStyle = "white"
con.font = "25pt sans-serif"; 

X = 0
Y = 0
i = 0
while(i <= MaxDun){
i++
con.strokeStyle = "white";
con.font = "20pt sans-serif";

if(Dun.Sel[i] == 1){con.fillStyle = "#FFFFFF"; con.fillRect(X+4+WIDTH/2-640/2,Y+4, BlockX+4, BlockY+4)}

if(Dun.Type[i] == 0){con.fillStyle = "#00FF00";}

if(Dun.Type[i] == 1){con.fillStyle = "#FFFF00";}
if(Dun.Type[i] == 2){con.fillStyle = "#FF0000";}
if(Dun.Type[i] == 3){con.fillStyle = "#FF00FF";}
if(Dun.Type[i] == 4){con.fillStyle = "#0000FF";}
if(Dun.Type[i] == 5){con.fillStyle = "#AF5F00";}
if(Dun.Type[i] == 6){con.fillStyle = "#AFAFAF";}
if(Dun.Type[i] == 8){con.fillStyle = "#FFFFFF";}

if(Dun.Type[i] == 9){con.fillStyle = "#000000";}

if(Dun.Type[i] == 10){con.fillStyle = "#005F00";}
if(Dun.Type[i] == 11){con.fillStyle = "#5F5F00";}
if(Dun.Type[i] == 12){con.fillStyle = "#5F0000";}
if(Dun.Type[i] == 13){con.fillStyle = "#5F005F";}
if(Dun.Type[i] == 14){con.fillStyle = "#00008F";}
if(Dun.Type[i] == 15){con.fillStyle = "#5F3F00";}
if(Dun.Type[i] == 16){con.fillStyle = "#5F5F5F";}
if(Dun.Type[i] == 18){con.fillStyle = "#5F5F5F";}
con.fillRect(X+8+WIDTH/2-640/2,Y+8, BlockX-4, BlockY-4)

X+= BlockX
if(X == BlockX*MaxCell){X = 0; Y += BlockY}
if(Y == BlockY*MaxCell){X = BlockX*MaxCell;}
}

con.fillStyle = "white"
con.font = "25pt sans-serif"; 

con.drawImage(Sword,WIDTH*(0/6),HEIGHT-100)
con.fillText(SwordCoinAmt,WIDTH*(0/6)+100,HEIGHT-75)
con.fillText(Player.Sword[0],WIDTH*(0/6)+100,HEIGHT-50)

con.drawImage(Wand,WIDTH*(1/6),HEIGHT-100)
con.fillText(WandCoinAmt,WIDTH*(1/6)+100,HEIGHT-75)
con.fillText(Player.Wand[0],WIDTH*(1/6)+100,HEIGHT-50)

con.drawImage(KEYS,WIDTH*(2/6),HEIGHT-100)
con.fillText(KeyCoinAmt,WIDTH*(2/6)+100,HEIGHT-75)
con.fillText(Player.Key[0],WIDTH*(2/6)+100,HEIGHT-50)

con.drawImage(Torch,WIDTH*(3/6),HEIGHT-100)
con.fillText(TorchCoinAmt,WIDTH*(3/6)+100,HEIGHT-75)
con.fillText(Player.Torch[0],WIDTH*(3/6)+100,HEIGHT-50)

con.drawImage(Shovel,WIDTH*(4/6),HEIGHT-100)
con.fillText(ShovelCoinAmt,WIDTH*(4/6)+100,HEIGHT-75)
con.fillText(Player.Shovel[0],WIDTH*(4/6)+100,HEIGHT-50)

con.drawImage(Pick,WIDTH*(5/6),HEIGHT-100)
con.fillText(PickCoinAmt,WIDTH*(5/6)+100,HEIGHT-75)
con.fillText(Player.Pick[0],WIDTH*(5/6)+100,HEIGHT-50)

if(Di == 0){Diff = " Easy"}
if(Di == 1){Diff = " Hard"}

if(Mo == 0){Mode=" Gather"}
if(Mo == 1){Mode=" Explore"}

con.fillText(Si+"x"+Si+Diff+Mode,0,32)

CoinStr = "Coins: "+Player.Coin[0]+"/"+MaxCoins
con.fillText(CoinStr,WIDTH-con.measureText(CoinStr).width,32)
}


function DrawDungeonLoot(Z){
   var drawing = document.getElementById("drawing");
   var con = drawing.getContext("2d");

con.fillStyle = "white";
con.strokeStyle = "white";
con.font = "20pt sans-serif";


if(Dun.Type[SelX] == 0){Str = "This room is open, collect?"}
if(Dun.Type[SelX] == 1){Str = "This room is locked, use key?"}
if(Dun.Type[SelX] == 2){Str = "This room is gaurded by a warrior, use sword?"}
if(Dun.Type[SelX] == 3){Str = "This room is gaurded by a wizard, use wand?"}
if(Dun.Type[SelX] == 4){Str = "This room is dark, use torch?"}
if(Dun.Type[SelX] == 5){Str = "This room has a dirt floor, use shovel?"}
if(Dun.Type[SelX] == 6){Str = "This room has a stone floor, use pick?"}
if(Dun.Type[SelX] == 8){Str = "This room has a rare gem, collect?"}
if(Dun.Type[SelX] >= 9){Str = "This room is empty!"} 
con.fillText(Str,WIDTH/2-640/2,650)

if(Z == 1){
if(Dun.Type[SelX] == 0){DrawDungeonLoot(2)}
if(Dun.Type[SelX] == 1 && Player.Key[0] > 0){Player.Key[0] += -1; KeyCoinAmt += -Dun.Coin[SelX]; DrawDungeonLoot(2);}
if(Dun.Type[SelX] == 2 && Player.Sword[0] > 0){Player.Sword[0] += -1; SwordCoinAmt += -Dun.Coin[SelX]; DrawDungeonLoot(2);}
if(Dun.Type[SelX] == 3 && Player.Wand[0] > 0){Player.Wand[0] += -1; WandCoinAmt += -Dun.Coin[SelX]; DrawDungeonLoot(2);}
if(Dun.Type[SelX] == 4 && Player.Torch[0] > 0){Player.Torch[0] += -1; TorchCoinAmt += -Dun.Coin[SelX]; DrawDungeonLoot(2);}
if(Dun.Type[SelX] == 5 && Player.Shovel[0] > 0){Player.Shovel[0] += -1; ShovelCoinAmt += -Dun.Coin[SelX]; DrawDungeonLoot(2);}
if(Dun.Type[SelX] == 6 && Player.Pick[0] > 0){Player.Pick[0] += -1; PickCoinAmt += -Dun.Coin[SelX]; DrawDungeonLoot(2);}
if(Dun.Type[SelX] == 8){DrawDungeonLoot(2)}
}


if(Z == 2){
if(Dun.Item[SelX] == 0){Dun.Type[SelX] += 10; Player.Key[0] += 1; DrawMap(); Str = "You found a key!"}
if(Dun.Item[SelX] == 1){Dun.Type[SelX] += 10; Player.Sword[0] += 1; DrawMap(); Str = "You found a sword!"}
if(Dun.Item[SelX] == 2){Dun.Type[SelX] += 10; Player.Wand[0] += 1; DrawMap(); Str ="You found a wand!"}
if(Dun.Item[SelX] == 3){Dun.Type[SelX] += 10; Player.Torch[0] += 1; DrawMap(); Str = "You found a torch!"}
if(Dun.Item[SelX] == 4){Dun.Type[SelX] += 10; Player.Shovel[0] += 1; DrawMap(); Str = "You found a shovel!"}
if(Dun.Item[SelX] == 5){Dun.Type[SelX] += 10; Player.Pick[0] += 1; DrawMap(); Str = "You found a pick!"}
if(Dun.Item[SelX] == 7){Dun.Type[SelX] += 10; Player.Coin[0] += 1000; DrawMap(); Str = "You found 1000 coins!";}
if(Dun.Item[SelX] == 8){Dun.Type[SelX] += 10; Player.Coin[0] += Dun.Coin[SelX]; DrawMap(); Str = "You found " + Dun.Coin[SelX] + " coins!";}


con.fillStyle = "white";
con.font = "20pt sans-serif";
con.fillText(Str,WIDTH/2-640/2,650)
}

}
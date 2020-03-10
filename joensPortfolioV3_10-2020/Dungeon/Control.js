function CheckWin(){
if(Player.Coin[0] == MaxCoins){UpdateCookies(MaxCoins); location.reload(); CompLevel(); Win=1;}
}

function CheckLoss(){
i=0
while(i <= MaxDun){
Dun.Type[i] = Dun2.Type[i]
Dun.Coin[i] = Dun2.Coin[i]
i++
}
}

document.onkeyup = function(event)
{

i = 0
while(i <= MaxDun){Dun.Sel[i] = 0; i++}
if(event.keyCode == 68 || event.keyCode == 39){SelX++}
if(event.keyCode == 65 || event.keyCode == 37){SelX--}
if(event.keyCode == 83 || event.keyCode == 40){SelX+=MaxCell}
if(event.keyCode == 87 || event.keyCode == 38){SelX-=MaxCell}

if(SelX < 0){SelX += MaxDun}
if(SelX > MaxDun){SelX += -MaxDun}

if(event.keyCode == 82){CheckLoss()}
if(Win == 1){if(event.keyCode == 13 || event.keyCode == 32){location.reload();}}
Dun.Sel[SelX] = 1
DrawMap()
if(event.keyCode == 13 || event.keyCode == 32){DrawDungeonLoot(1); CheckWin()}else{DrawDungeonLoot(0); CheckWin(); }
}
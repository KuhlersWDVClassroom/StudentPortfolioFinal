function Start(Size,Diff,Mode){

document.documentElement.style.overflow = 'hidden'; 

var drawing = document.getElementById("drawing");
var con = drawing.getContext("2d");

WIDTH = window.innerWidth;
HEIGHT = window.innerHeight;
//WIDTH = 1024;
//HEIGHT = 768;
drawing.width = WIDTH;
drawing.height = HEIGHT;

con.fillStyle = "black";
con.fillRect(0,0, WIDTH, HEIGHT)

SelX = 1

Si = Size
Di = Diff
Mo = Mode
Xray = 1
Win = 0

MaxCell = Size+2
MaxDun = MaxCell*MaxCell

BlockX=Math.floor(640/MaxCell)
BlockY=Math.floor(640/MaxCell)

//BlockX=Math.floor((WIDTH-100)/MaxCell)
//BlockY=Math.floor(640/MaxCell)

//BlockX=Math.floor(HEIGHT/MaxCell)
//BlockY=Math.floor(HEIGHT/MaxCell)

//Vars
Dun = {ID : [0], Type : [0], Item : [0], Coin : [0], Sel : [0]}
Dun2 = {ID : [0], Type : [0], Item : [0], Coin : [0], Sel : [0]}
Player = {Key : [0], Sword : [0], Wand : [0], Shovel : [0], Pick : [0], Torch : [0], Coin : [0]}
Coins = {Key : [0], Sword : [0], Wand : [0], Torch : [0], Shovel : [0], Pick : [0]}

if(Mo == 0){
Player.Key[0] = 0
Player.Sword[0] = 0
Player.Wand[0] = 0
Player.Torch[0] = 0
Player.Shovel[0] = 0
Player.Pick[0] = 0
Player.Coin[0] = 0
KeyAmt = 0
SwordAmt = 0
WandAmt = 0
TorchAmt = 0
ShovelAmt = 0
PickAmt = 0
}

if(Mo == 1){
AMT = Math.floor(Si/2)
Player.Key[0] = AMT
Player.Sword[0] = AMT
Player.Wand[0] = AMT
Player.Torch[0] = AMT
Player.Shovel[0] = AMT
Player.Pick[0] = AMT
Player.Coin[0] = 0
KeyAmt = AMT
SwordAmt = AMT
WandAmt = AMT
TorchAmt = AMT
ShovelAmt = AMT
PickAmt = AMT
}

MaxCoins=0
SwordCoinAmt = 0
WandCoinAmt = 0
KeyCoinAmt = 0
TorchCoinAmt = 0
ShovelCoinAmt = 0
PickCoinAmt = 0

GenDun()
UpdateStats()
}


function GenDun(){
i = 0
X = 0
Y = 0
State = 0
while(i <= MaxDun){
Dun.ID[i] = i
Dun.Sel[i] = 0

ZA = Math.random()
ZB = Math.random()

if(Mo == 0){Dun.Type[i] = Math.floor(ZA*7); Dun2.Type[i] = Math.floor(ZA*7)}
if(Mo == 1){Dun.Type[i] = Math.floor(ZA*6+1); Dun2.Type[i] = Math.floor(ZA*6+1);
AMT = Math.floor(Si/2)
Player.Key[0] = AMT
Player.Sword[0] = AMT
Player.Wand[0] = AMT
Player.Torch[0] = AMT
Player.Shovel[0] = AMT
Player.Pick[0] = AMT
KeyAmt = AMT
SwordAmt = AMT
WandAmt = AMT
TorchAmt = AMT
ShovelAmt = AMT
PickAmt = AMT
}

if(Dun.Type[i] > 0){Dun.Item[i] = 8}else{Dun.Item[i] = Math.floor(ZB*6); Dun.Coin[i] = 0}

if(X == 1){Dun.Type[i] = 9; Dun2.Type[i] = 9;}
if(Y == 0){Dun.Type[i] = 9; Dun2.Type[i] = 9;}
if(X == MaxCell){Dun.Type[i] = 9; Dun2.Type[i] = 9; X = 0; Y++}
if(Y == MaxCell){X = 0; Y = 0}
if(Y == MaxCell-1){Dun.Type[i] = 9; Dun2.Type[i] = 9;}
X++
i++
}

Dun.Sel[SelX] = 1
GenCoin()
DrawMap()
DrawDungeonLoot(0)
}


function GenCoin(){
i = 0
while(i <= MaxDun){Dun.Coin[i] = 0;i++}


i = 0
while(i <= MaxDun){

if(Di == 1){
if(Dun.Type[i] == 2 || Dun.Type[i] == 3){
for(A = -1; A < 2; A++){for(B = -MaxCell; B <= MaxCell; B+=MaxCell){if(Dun.Type[i+A+B] == 2 || Dun.Type[i+A+B] == 3){Dun.Coin[i] += 10}}}
}
if(Dun.Type[i] == 5 || Dun.Type[i] == 6){
for(A = -1; A < 2; A++){for(B = -MaxCell; B <= MaxCell; B+=MaxCell){if(Dun.Type[i+A+B] == 5 || Dun.Type[i+A+B] == 6){Dun.Coin[i] += 10}}}
}
if(Dun.Type[i] == 1 || Dun.Type[i] == 4){
for(A = -1; A < 2; A++){for(B = -MaxCell; B <= MaxCell; B+=MaxCell){if(Dun.Type[i+A+B] == 1 || Dun.Type[i+A+B] == 4){Dun.Coin[i] += 10}}}
}
}

if(Di == 0){
for(A = -1; A < 2; A++){for(B = -MaxCell; B <= MaxCell; B+=MaxCell){if(Dun.Type[i+A+B] == Dun.Type[i]){Dun.Coin[i] += 10}}}
}
if(Dun.Coin[i] == 90){Dun.Item[i] = 7; Dun.Type[i] = 8; MaxCoins += 1000}
Dun2.Coin[i] = Dun.Coin[i]
i++

}
GenMaxCoin()
}

function GenMaxCoin(){

i = 0
while(i <= MaxDun){
Coins.Key[i] = 0
Coins.Sword[i] = 0
Coins.Wand[i] = 0
Coins.Torch[i] = 0
Coins.Shovel[i] = 0
Coins.Pick[i] = 0
i++
}

i = 0
while(i <= MaxDun){
if(Dun.Type[i] == 1){Coins.Key[i] = Dun.Coin[i]}
if(Dun.Type[i] == 2){Coins.Sword[i] = Dun.Coin[i]}
if(Dun.Type[i] == 3){Coins.Wand[i] = Dun.Coin[i]}
if(Dun.Type[i] == 4){Coins.Torch[i] = Dun.Coin[i]}
if(Dun.Type[i] == 5){Coins.Shovel[i] = Dun.Coin[i]}
if(Dun.Type[i] == 6){Coins.Pick[i] = Dun.Coin[i]}

if(Dun.Type[i] == 0){
if(Dun.Item[i] == 0){KeyAmt++;}
if(Dun.Item[i] == 1){SwordAmt++;}
if(Dun.Item[i] == 2){WandAmt++;}
if(Dun.Item[i] == 3){TorchAmt++;}
if(Dun.Item[i] == 4){ShovelAmt++;}
if(Dun.Item[i] == 5){PickAmt++;}
}

i++
}


Coins.Key.sort(function(a, b){return b-a});
Coins.Sword.sort(function(a, b){return b-a});
Coins.Wand.sort(function(a, b){return b-a});
Coins.Torch.sort(function(a, b){return b-a});
Coins.Shovel.sort(function(a, b){return b-a});
Coins.Pick.sort(function(a, b){return b-a});

for(A=0;A<KeyAmt;A++){MaxCoins += Coins.Key[A]; KeyCoinAmt += Coins.Key[A]}
for(A=0;A<SwordAmt;A++){MaxCoins += Coins.Sword[A]; SwordCoinAmt += Coins.Sword[A]}
for(A=0;A<WandAmt;A++){MaxCoins += Coins.Wand[A]; WandCoinAmt += Coins.Wand[A]}
for(A=0;A<TorchAmt;A++){MaxCoins += Coins.Torch[A]; TorchCoinAmt += Coins.Torch[A]}
for(A=0;A<ShovelAmt;A++){MaxCoins += Coins.Shovel[A]; ShovelCoinAmt += Coins.Shovel[A]}
for(A=0;A<PickAmt;A++){MaxCoins += Coins.Pick[A]; PickCoinAmt += Coins.Pick[A]}
}
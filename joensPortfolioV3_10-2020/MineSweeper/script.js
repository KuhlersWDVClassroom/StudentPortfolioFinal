A = 0
B = 0
Xoff = 0
Yoff = 0

function MyRandom(X,Y){
X = X+Xoff
Y = Y+Yoff
A = ((X)*(X)+Y) % 255
B = (X+(Y+2)*(Y+2)) % 255

Z = (A*B % 255) / 255
}

function CreateObjects(){

//Row = Math.floor((document.body.clientWidth)/56)
//Col = Math.floor((document.body.clientHeight)/56)

Row = 10
Col = 10

i = 0
Cell = {X : [0], Y : [0], ID : [0]}
Bomb = {ID : [0]}
for(y = 0; y < Col*56; y+=56){
for(x = 0; x < Row*56; x+=56){

MyRandom(x+A,y+B)
Type = Math.floor(Z*4)

if(Type == 0){Bomb.ID[i] = 0}else{Bomb.ID[i] = 1}
Cell.X[i] = x
Cell.Y[i] = y
i++
MaxCell = i
}
}

i = 0
BAmt = [0]
while(i < MaxCell){

BAmt[i] = 0
Start = -1
Stop = 2

if(Cell.X[i] == 0){Start = 0; Stop = 2}
if(Cell.X[i] == (Row-1)*56){Start = -1; Stop = 1}

for(A = Start; A < Stop; A++){
for(B = -Row; B <= Row; B+=Row){
if(Bomb.ID[i+A+B] == 0){BAmt[i]++}
}
}

i++
}

i = 0
while(i < MaxCell){
Cell.ID[i] = new CreateCss(0,Cell.X[i],Cell.Y[i],Bomb.ID[i],BAmt[i])
i++
}

i = 0
while(i < MaxCell){

StartX = -1
StopX = 2
StartY = -Row
StopY = Row

if(Cell.X[i] == 0){StartX = 0; StopX = 2}
if(Cell.X[i] == (Row-1)*56){StartX = -1; StopX = 1}

if(Cell.Y[i] == 0){StartY = 0; StopY = Row}
if(Cell.Y[i] == (Col-1)*56){StartY = -Row; StopY = 0}

for(A = StartX; A < StopX; A++){
for(B = StartY; B <= StopY; B+=Row){
Z = i+A+B
if(BAmt[i] == 0){Cell.ID[Z] = new CreateCss(1,Cell.X[Z],Cell.Y[Z],Bomb.ID[Z],BAmt[Z])}
}
}

i++
}

}


function CreateCss(Rev,x,y,Type,Z){
this.x = x
this.y = y
this.Z = Z
this.Type = Type
this.Rev = Rev

var Div = document.createElement("Div");
var H1 = document.createElement("H1");

if(this.Type == 0){Text = document.createTextNode("B");}else{Text = document.createTextNode(this.Z);}

if(this.Rev == 0){Div.setAttribute("onclick", "CellClicked(1,2)");}
if(this.Rev == 1){Div.setAttribute("onclick", "CellClicked(1,1)");}
if(this.Rev == 2){Div.setAttribute("onclick", "CellClicked(0,2)");}

if(this.Rev == 0){Div.setAttribute("oncontextmenu", "CellClicked(1,2); return false");}
if(this.Rev == 1){Div.setAttribute("oncontextmenu", "CellClicked(1,1); return false");}
if(this.Rev == 2){Div.setAttribute("oncontextmenu", "CellClicked(0,2); return false");}

if(this.Rev == 0){Div.setAttribute("class", "hid"); Text = document.createTextNode("");}
if(this.Rev == 1){Div.setAttribute("class", "box"); if(this.Type == 0){Text = document.createTextNode("B");}else{Text = document.createTextNode(this.Z);}}
if(this.Rev == 2){Div.setAttribute("class", "flag"); Text = document.createTextNode("F");}

Div.style.position = "absolute";
Div.style.left = this.x;
Div.style.top = this.y;

H1.appendChild(Text);
Div.appendChild(H1);

  document.body.appendChild(Div);

}

function CreateCords(A,B){
var Div = document.createElement("Div");
var H1 = document.createElement("H1");
H1.setAttribute("id", "Text");
Div.style.position = "absolute";
Div.style.left = 10;
Div.style.top = 550;
Text = document.createTextNode("X: " + Xoff + " Y: " + Yoff);
H1.appendChild(Text);
Div.appendChild(H1);
document.body.appendChild(Div);
CreateObjects()
}

function CellClicked(A,B){
MouseX = Math.floor((event.clientX)/56)*56
MouseY = Math.floor((event.clientY)/56)*56

i = 0
while(i < MaxCell){
if(Cell.X[i] == MouseX && Cell.Y[i] == MouseY){
if(event.button == 0){if(Bomb.ID[i] == 0 && Cell.ID[i].Rev == 0){DisplayBombs()}; Cell.ID[i] = new CreateCss(A,Cell.X[i],Cell.Y[i],Bomb.ID[i],BAmt[i])}
if(event.button == 2){Cell.ID[i] = new CreateCss(B,Cell.X[i],Cell.Y[i],Bomb.ID[i],BAmt[i])}
}
i++
}

}

function DisplayBombs(){

i = 0
while(i < MaxCell-1){
if(Bomb.ID[i] == 0){Cell.ID[i] = new CreateCss(1,Cell.X[i],Cell.Y[i],Bomb.ID[i],BAmt[i])}
i++
}

}

document.onkeyup = function(event)
{

if (event.keyCode == 39){Xoff++; document.getElementById("Text").innerHTML = "X: " + Xoff + " Y: " + Yoff; CreateObjects()}
if (event.keyCode == 37){Xoff--; document.getElementById("Text").innerHTML = "X: " + Xoff + " Y: " + Yoff; CreateObjects()}

if (event.keyCode == 38){Yoff++; document.getElementById("Text").innerHTML = "X: " + Xoff + " Y: " + Yoff; CreateObjects()}
if (event.keyCode == 40){Yoff--; document.getElementById("Text").innerHTML = "X: " + Xoff + " Y: " + Yoff; CreateObjects()}
}
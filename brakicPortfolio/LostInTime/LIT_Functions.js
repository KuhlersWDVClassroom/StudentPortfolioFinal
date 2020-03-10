function nextDirectionPrompt(a) {
	nextDirection = (window.prompt(a));
	if (nextDirection.toLowerCase()===(direction[0])||(direction[1])||(direction[2])||(direction[3])||"stay") {
		possibleDirections();
		if (nextDirection.toLowerCase()===(direction[0])&&(canGoNorth)) {
			posY = posY + 1;
			playerGetAction();
			break
		} else if (nextDirection.toLowerCase()===(direction[1])&&(canGoSouth)) {
			posY = posY - 1;
			playerGetAction();
			break
		} else if (nextDirection.toLowerCase()===(direction[2])&&(canGoEast)) {
			posX = posX + 1;
			playerGetAction();
			break
		} else if (nextDirection.toLowerCase()===(direction[3])&&(canGoWest)) {
			posX = posX - 1;
			playerGetAction();
			break
		} else if (nextDirection.toLowerCase()===("stay")) {
			playerGetAction();
			break
		}
	} else {
		nextDirectionPrompt(UNKNOWN_DIRECTION);
	}
}

function possibleDirections() {
	if(posY===0&&posX===13) {
		goNorth();
	} else if (posY===1&&posX===13) {
		goAny();
	} else if (posY===25&&posX!=1&&posX!=25) {
		goSouthEastWest();
	} else if (posY===25&&posX===1) {
		goSouthEast();
	} else if (posY===25&&posX===25) {
			goSouthWest();
	} else if (posY===1&&posX!=1&&posX!=25) {
		goNorthEastWest();
	} else if (posY===1&&posX===1) {
		goNorthEast();
	} else if (posY===1&&posX===25) {
		goNorthWest();
	} else if (posY!=1&&posY!=25&&posX===1) {
		goNorthSouthEast();
	} else if (posY===1&&posX===1) {
		goNorthEast();
	}
}

function goNorth() {
	return canGoNorth = true, canGoSouth = false, canGoEast = false, canGoWest = false;
}

function goNorthSouth() {
	return canGoNorth = true, canGoSouth = true, canGoEast = false, canGoWest = false;
}

function goNorthSouthEast() {
	return canGoNorth = true, canGoSouth = true, canGoEast = true, canGoWest = false;
}

function goAny() {
	return canGoNorth = true, canGoSouth = true, canGoEast = true, canGoWest = true;
}

function goNorthEast() {
	return canGoNorth = true, canGoSouth = false, canGoEast = true, canGoWest = false;
}

function goNorthWest() {
	return canGoNorth = true, canGoSouth = false, canGoEast = false, canGoWest = true;
}

function goSouth() {
	return canGoNorth = false, canGoSouth = true, canGoEast = false, canGoWest = false;
}

function goEast() {
	return canGoNorth = false, canGoSouth = false, canGoEast = true, canGoWest = false;
}

function goWest() {
	return canGoNorth = false, canGoSouth = false, canGoEast = false, canGoWest = true;
}

function goSouthEast() {
	return canGoNorth = false, canGoSouth = true, canGoEast = true, canGoWest = false;
}

function goSouthWest() {
	return canGoNorth = false, canGoSouth = true, canGoEast = false, canGoWest = true;
}

function goEastWest() {
	return canGoNorth = false, canGoSouth = false, canGoEast = true, canGoWest = true;
}

function goNorthEastWest() {
	return canGoNorth = true, canGoSouth = false, canGoEast = true, canGoWest = true;
}

function goNorthSouthWest() {
	return canGoNorth = true, canGoSouth = true, canGoEast = false, canGoWest = true;
}

function goSouthEastWest() {
	return canGoNorth = false, canGoSouth = true, canGoEast = true, canGoWest = true;
}

function changeFloorRequest(a) {
	changeFloorReq = (window.prompt(a));
	if (changeFloorReq.toLowerCase()===("yes")||("no")) {
		if (changeFloorReq.toLowerCase()===("yes")) {
			changeFloorQuery(CHANGE_FLOOR_PROMPT);
			break
		} else if (changeFloorReq.toLowerCase()===("no")) {
			playerGetAction();
			break
		} else {
			changeFloorRequest(UNKNOWN_FLOOR_QUERY);
		}
	}
}

function presentFloors() {
	if (posX===5&&posY===10) {
		//need to finish with multifloor room x's and y's
	}
}

function changeFloorQuery(a) {
	changeFloorAns = (window.prompt(a));
	if (changeFloorAns.toLowerCase()===0) {
		continue
	}
}

function playerIntroduction() {
	document.getElementById("Output").value = INTRODUCTION_PROMPT;
}

function playerGetAction() {
	return playerAction = (window.prompt("Enter action"));
}

function playerActionPlay() {
	if (playerAction.toLowerCase===(possibleActions[0])||(possibleActions[1])||(possibleActions[2])||(possibleActions[3])) {
		ITEM_INTERACT_PROMPT = ("What item would you like to "+(playerAction.toLowerCase())+"?");
		itemInteracted = (window.prompt(ITEM_INTERACT_PROMPT));
		if (itemInteracted.toLowerCase()===(readables[0])) {
			return alert(NOTE);
		}
	}
}

function startScreen() {
	if (UserInput.toLowerCase() != "begin") {
		document.getElementById("Output").value = document.getElementById("Output").value + "\nOnce you are ready to start, enter a command in the lower text box to begin the game.";
	}
}

function endStart() {
	if (beginCommands.includes(UserInput.toLowerCase())) {
		clearInterval(build);
		clearInterval(stopBuild);
		playerIntroduction();
	}
}

function setUserInput() {
	UserInput = document.getElementById("UserInput").value;
}

var Room1300 = {
	canGoNorth : true,
	canGoSouth : false,
	canGoEast : false,
	canGoWest : false,
	desc : "This is the starting room. This room is a safe, empty, caved out area.",
	id : 1300
};

var Room1301 = {
	canGoNorth : false,
	canGoSouth : true,
	canGoEast : true,
	canGoWest : false,
	desc : "You enter the corridor outside the starting room. You are now in an open area, where east and west exits are open. You can also go south to get back into the starting room.",
	examine : "\n    You take some time to examine the room you're in... \nThe north exit is blocked by a cave-in. The east and west exits are open. The south exit leads to the starting room, and it is still open. \nYou see that there are signs above the east and west exits, you may want to examine them... \nYou see nothing else of interest in this corridor.\nYou can go south, east, or west. You can use your backpack. The signs above the east and west exits still pique your interest.",
	eastSign : "\n    Examining the east exit's sign, you see that it depicts vegetation; vines, grass and trees. To the right of the vegetation, there is a door with a symbol of a lock on it. You cannot move the sign, and there is nothing else around it.",
	westSign : "\n    Examining the west exit's sign, you see that it depicts a chest with a symbol of a lock on it. To the right of the chest is one of a few pillars that are around the room in the depiction. There are marks around the rock wall that the sign sits on, it looks like someone might have tried digging under the sign to remove it.",
	westSignHook : "\n    You use the small hook to try and pull something from the hole dug behind the west sign, and find a key!",
	id : 1301
};

var Room1401 = {
	canGoNorth : false,
	canGoSouth : false,
	canGoEast : false,
	canGoWest : true,
	desc : "You enter the room. This room is filled with vegetation and flora, grass, flowers and trees fill the room, and moss covers the stone walls. On the south side of the room, there is a door. The north wall is just stone and moss. There are doorways leading to the east and west, both doors are open.",
	examineSouthDoor : "\n    You examine the door on the south side of the room. The handle is metal and there is a latch on it that is locked with a metal lockpad that has a rose etched into it. Both the lock and the door frame look sturdy, you will likely not be able to break it open.",
	examine : "\n    You examine the room. The grass has been kept nicely, it is short and there are no patches of tall grass or weeds. You determine that the trees are all oaks. The flowers consist of pink and red posies, yellow daisies, and some other flowers you don't know about.",
	examineTrees : "\n    You examine the trees in the room. They are all white oaks, well kept and tall. A couple of the trees have some hollows, as if animals had inhabited this place before.",
	examineTreeHollows : "\n    You look around the hollows in the two trees which have them. One hollow piques your interest, and when you look into it you see a small box.",
	lockpadStatus : "locked",
	openRoseLock : "\n    You use the key on the rose lockpad attached to the door, and it clicks open. The south door is now unlocked.",
	smallBox : "untouched",
	id : 1401
};

var Room1400 = {
	canGoNorth : true,
	canGoSouth : false,
	canGoEast : false,
	canGoWest : false,
	desc : "As you go through the door previously locked by the rose lockpad, natural sunlight and fresh air become present, and looking around you see the space is completely open, except for a campground nearby. You see a tribal looking woman with two guards walking up to you from the campground. Without time for you to do anything, the woman says to you: 'You have completed the trial of 'Lost to Time'. Congratulations. Please follow me so you can regain your memories and knowledge which you surely must be missing.\nYou follow the woman into a building, and before you know it, all is blank. Your memories are returned to you; this life is finished, it's time to start the next.\n\n    Congratulations on successfully completing 'Lost to Time'! This ending is temporary, and more are to be added. The final game will have several possible victories, with different end dialog. Thank you for playing!",
	id : 1400
};


function goNorth() {
	roomID = (roomID + 1);
	thisRoom = ("Room"+(roomID)+"");
	document.getElementById("Output").value = (this[thisRoom].desc);
}

function goSouth() {
	roomID = (roomID - 1);
	thisRoom = ("Room"+(roomID)+"");
	document.getElementById("Output").value = (this[thisRoom].desc);
}

function goEast() {
	roomID = (roomID + 100);
	thisRoom = ("Room"+(roomID)+"");
	document.getElementById("Output").value = (this[thisRoom].desc);
}

function goWest() {
	roomID = (roomID - 100);
	thisRoom = ("Room"+(roomID)+"");
	document.getElementById("Output").value = (this[thisRoom].desc);
}

function compareExamine(element) {
	if ((UserInput.toLowerCase()).includes(element)) {
		console.log("compare = true");
		return compare = true;
	} else {
		console.log("compare = false");
	}
}

function examineRoomCheck() {
	if ((UserInput.toLowerCase()).includes("room")) {
		return roomCheck = true;
	} else {
		return roomCheck = false;
	}
}

function examineEastSign() {
	if ((UserInput.toLowerCase()).includes("east sign")) {
		return eastSignCheck = true;
	} else {
		return eastSignCheck = false;
	}
}

function examineWestSign() {
	if ((UserInput.toLowerCase()).includes("west sign")) {
		return westSignCheck = true;
	} else {
		return westSignCheck = false;
	}
}

function examineTrees() {
	if ((UserInput.toLowerCase()).includes("trees") && !(UserInput.toLowerCase()).includes("hollows") || (UserInput.toLowerCase()).includes("tree") && !(UserInput.toLowerCase()).includes("hollows")) {
		return treeCheck = true;
	} else {
		return treeCheck = false;
	}
}

function examineTreeHollows() {
	if ((UserInput.toLowerCase()).includes("hollow") || (UserInput.toLowerCase()).includes("hollows") || (UserInput.toLowerCase()).includes("tree hollows") || (UserInput.toLowerCase()).includes("tree hollow")) {
		return hollowsCheck = true;
	} else {
		return hollowsCheck = false;
	}
}

function examineCheck() {
	examineActions.forEach(compareExamine);
	if (compare === true) {
		console.log("check = true");
		return compare = false, check = true;
	} else {
		return check = false;
	}
}

function compareRoomCheck() {
	examineRoomCheck();
	if (roomCheck === true) {
		return true;
	} else {
		return false;
	}
}

function compareEastSign() {
	examineEastSign();
	if (eastSignCheck === true) {
		return true;
	} else {
		return false;
	}
}

function compareWestSign() {
	examineWestSign();
	if (westSignCheck === true) {
		return true;
	} else {
		return false;
	}
}

function compareTrees() {
	examineTrees();
	if (treeCheck === true) {
		return true;
	} else {
		return false;
	}
}

function compareTreeHollows() {
	examineTreeHollows();
	if (hollowsCheck === true) {
		return true;
	} else {
		return false;
	}
}

function takeSmallBox() {
	if ((UserInput.toLowerCase()).includes("box") || (UserInput.toLowerCase()).includes("small box")) {
		return true;
	} else {
		return false;
	}
}

function compareTake() {
	if ((UserInput.toLowerCase()).includes(takeActions[0]) || (UserInput.toLowerCase()).includes(takeActions[1]) || (UserInput.toLowerCase()).includes(takeActions[2])) {
		console.log("checkTake1");
		if ((playerPockets).includes("Small Hook")) {
			return checkTake = false;
		} else {
			return checkTake = true;
		}
	} else {
		console.log("checkTake2");
		return checkTake = false;
	}
}

function useSmallHook() {
	if ((UserInput.toLowerCase()).includes("small hook") || (UserInput.toLowerCase()).includes("hook")) {
		if ((playerPockets).includes("Small Hook")) {
			console.log("pockets include small hook");
			return true;
		} else {
			console.log("pockets do not include small hook");
			return false;
		}
	} else {
		console.log("userinput does not include small hook");
		return false;
	}
}

function interactCheck() {
	if ((UserInput.toLowerCase()).includes(interactions[0]) || (UserInput.toLowerCase()).includes(interactions[1])) {
		console.log("interact includes check true");
		return interact = true;
	} else {
		console.log("interact includes check false");
		return interact = false;
	}
}
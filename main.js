var gameData = {
    gold: 0,
    currentTab: "Potionomics"
}

var enterprises = {
    'Potionomics' : {
        'cost' : 10
    },
    'Transmutation' : {
        'cost' : 100
    },
    'Conjuration' : {
        'cost' : 1000
    },
    'Demonic Pacts' : {
        'cost' : 10000
    },
    'Wish' : {
        'cost' : 100000
    }
}

var floors = {
    'Bedroom' : {
        'cost' : 100
    },
    'Library' : {
        'cost' : 100
    },
    'Workshop' : {
        'cost' : 100
    },
    'Dungeon' : {
        'cost' : 100
    }
}


function drawContainer(items, parent) {
    var toAdd = document.createDocumentFragment();
    for(let i=0; i< items.length; i++) {
        var newDiv = document.createElement('div');
        var newContent = document.createTextNode(items[i])
        newDiv.id = items[i];
        newDiv.className = 'container-row';
        newDiv.onclick = function (){switchMenu(items[i])}
        newDiv.appendChild(newContent)
        toAdd.appendChild(newDiv);
    }

    document.getElementById(parent).appendChild(toAdd);
}

function switchMenu(menu) {
    console.log(menu)
    document.getElementById("screen-" + gameData['currentTab']).style.display= "none"
    document.getElementById("screen-" + menu).style.display= "inline-block"
    gameData['currentTab'] = menu
}


drawContainer(Object.keys(enterprises), 'enterprises');
drawContainer(Object.keys(floors), 'tower');
switchMenu(gameData['currentTab'])
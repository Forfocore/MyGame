document.onkeydown = checkButton;

function checkButton(event) {

    let cubeRight = cube.x+cube.width;
    let cubeDown = cube.y+cube.height;
    let mapDown = map.y+map.height;
    let mapRight = map.x+map.width;

    if (event.keyCode === 37){
        console.log("ArrowLeft");
        if (cube.x!=map.x) {
            if ((cube.x-map.x)<cube.step) {
                cube.x -= (cube.x-map.x);
            }
            else {
                cube.x -= cube.step;
            }
        }
    }

    if (event.keyCode === 39){
        console.log("ArrowRight");
        if (cubeRight < mapRight) {
            if ((mapRight-cubeRight) < cube.step){
                cube.x += mapRight - cubeRight;
            }
            else {
                cube.x += cube.step;
            }
        }
    }

    if (event.keyCode === 38){
        console.log("ArrowUp");
        if (cube.y!=map.y) {
            if ((cube.y-map.y)<cube.step) {
                cube.y -= (cube.y-map.y);
            }
            else {
                cube.y -= cube.step;
            }
        }
    }

    if (event.keyCode === 40){
        console.log("ArrowDown");
        if (cubeDown < mapDown) {
            if ((mapDown-cubeDown) < cube.step){
                cube.y += mapDown - cubeDown;
            }
            else {
                cube.y += cube.step;
            }
        }
    }

    renderCube(cube);

}

function renderCube(cube) {
    document.getElementById(cube.id).style.top = cube.y + 'px';
    document.getElementById(cube.id).style.left = cube.x + 'px';
    document.getElementById(cube.id).style.width = cube.width + 'px';
    document.getElementById(cube.id).style.height = cube.height + 'px';
    document.getElementById(cube.id).style.transition = 'ease ' + cube.trnstn + 's';
    document.getElementById(cube.id).style.backgroundColor = cube.color;
}

function renderMap(map) {
    document.getElementById('map').style.top = map.y + 'px';
    document.getElementById('map').style.left = map.x + 'px';
    document.getElementById('map').style.width = map.width + 'px';
    document.getElementById('map').style.height = map.height + 'px';
    document.getElementById('map').style.backgroundColor = map.color;
}

function spawn(map,cube) {
    let minX = map.x;
    let minY = map.y;
    let maxX = map.x + map.width - cube.width;
    let maxY = map.y + map.height - cube.height;


    cube.x = Math.round(minX + Math.random() * (maxX - minX));
    cube.y = Math.round(minY + Math.random() * (maxY - minY));
    return cube;
}

function renderBots(bots) {
    bots.map(bot => {
        let div = document.createElement('div');
        div.id = 'bot_' + bot.id;
        div.className = 'bot';
        document.body.append(div);
        renderBot(bot);
    });
}

function renderBot(bot) {
    document.getElementById('bot_' + bot.id).style.top = bot.y + 'px';
    document.getElementById('bot_' + bot.id).style.left = bot.x + 'px';
    document.getElementById('bot_' + bot.id).style.width = bot.width + 'px';
    document.getElementById('bot_' + bot.id).style.height = bot.height + 'px';
    document.getElementById('bot_' + bot.id).style.transition = 'ease ' + bot.trnstn + 's';
    document.getElementById('bot_' + bot.id).style.backgroundColor = bot.color;
}

function renderBuffs(buffs) {
    buffs.map(buff => {
        let div = document.createElement('div');
        div.id = 'buff_' + buff.id;
        div.className = 'buff';
        document.body.append(div);
        renderBuff(buff);
    });
}

function renderBuff(buff) {
    document.getElementById('buff_' + buff.id).style.top = buff.y + 'px';
    document.getElementById('buff_' + buff.id).style.left = buff.x + 'px';
    document.getElementById('buff_' + buff.id).style.width = buff.width + 'px';
    document.getElementById('buff_' + buff.id).style.height = buff.height + 'px';
    document.getElementById('buff_' + buff.id).style.transition = 'ease ' + buff.trnstn + 's';
    document.getElementById('buff_' + buff.id).style.backgroundColor = buff.color;
}

function timeTick() {
    console.log(new Date().getSeconds());
}
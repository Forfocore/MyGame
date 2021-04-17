let map = {
    x: 0,
    y: 0,
    width: window.innerWidth,
    height: window.innerHeight,
    color: '#f5f5f5',
    borderСolor: 'black',
}

let cube = {
    id: 'cube',
    x: 0,
    y: 0,
    width: 56,
    height: 56,
    trnstn: .25,
    step: 56,
    color: 'black',

}

let bots = [];

let bot = {
    id: 1,
    x: 0,
    y: 0,
    width: 56,
    height: 56,
    trnstn: .25,
    step: 56,
    color: 'yellow',

}

bots.push(bot);

let buffs = [];

let buff = {
    id: 1,
    x: 50,
    y: 50,
    width: 56,
    height: 56,
    trnstn: .25,
    step: 56,
    color: 'purple',

};

buffs.push(buff);

renderMap(map);
renderCube(spawn(map,cube));
renderBots(bots);
renderBuffs(buffs);

let tick = setInterval(timeTick, 1000);
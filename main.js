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

let map = {
    x: 100,
    y: 100,
    width: 470,
    height: 470,
    color: '#f5f5f5',
    borderСolor: 'black',
    
}

spawn(map,cube);
renderMap(map);
renderCube(spawn(map,cube));
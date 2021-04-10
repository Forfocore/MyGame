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
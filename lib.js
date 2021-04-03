document.onkeydown = checkButton;

function checkButton(event) {

    if (event.keyCode === 37){
        console.log("ArrowLeft");
        if (cube.x>0) {
            cube.x -= cube.step;
        }
    }

    if (event.keyCode === 39){
        console.log("ArrowRight");
        if ((cube.x+cube.width)<map.width) {
            cube.x += cube.step;
        }
    }

    if (event.keyCode === 38){
        console.log("ArrowUp");
        if (cube.y>0) {
            cube.y -= cube.step;
        }
    }

    if (event.keyCode === 40){
        console.log("ArrowDown");
        if ((cube.y+cube.height)<map.height) {
            cube.y += cube.step;
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
let player = null;

function startApp(){
    player = new Player('',{ username: '#content .username'});
}

function changeUsername(e){
    player.username = e.target.value;
}
function changeWeaponColor(e){
    player.character.weapon = e.target.value;
}
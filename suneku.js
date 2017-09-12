window.onload=function() {
    canv=document.getElementById("game-canvas");
    ctx=canv.getContext("2d");
    document.addEventListener("keydown",keyPush);
    setInterval(game,1000/15);
}

var player_x = 10;
var player_y = 10;
var grid = 20;
var tile = 20;
var apple_x = 15;
var ay = 15;
var x_velocity = 1;
var y_velocity = 0;
var trail=[];
var tail = 3;
var last_key = 39; //right

function game() {
    player_x+=x_velocity;
    player_y+=y_velocity;
    
    if(player_x<0) {
        player_x= tile-1;
    }
    if(player_x>tile-1) {
        player_x= 0;
    }
    if(player_y<0) {
        player_y= tile-1;
    }
    if(player_y>tile-1) {
        player_y= 0;
    }
    ctx.fillStyle="black";
    ctx.fillRect(0,0,canv.width,canv.height);
 
    ctx.fillStyle="gainsboro";
    
    for(var i = 0; i < trail.length; i++) {
        ctx.fillRect(trail[i].x*grid,trail[i].y*grid,grid-2,grid-2);
        if(trail[i].x===player_x && trail[i].y===player_y) {
            tail = 3;
        }
    }
    
    trail.push({x:player_x,y:player_y});
    
    while(trail.length>tail) {
    trail.shift();
    }
 
    if(apple_x===player_x && ay===player_y) {
        tail++;
        apple_x=Math.floor(Math.random()*tile);
        ay=Math.floor(Math.random()*tile);
    }

    ctx.fillStyle="gainsboro";
    ctx.fillRect(apple_x*grid,ay*grid,grid-2,grid-2);
}

function keyPush(e) {
    switch(e.keyCode) {
        case 37:
            if (last_key === 39) {
                break;
            }
            last_key = 37;
            x_velocity=-1;y_velocity=0;
            break;
        case 38:
            if (last_key === 40) {
                break;
            }
            last_key = 38;
            x_velocity=0;y_velocity=-1;
            break;
        case 39:
            if (last_key === 37) {
                break;
            }
            last_key = 39;
            x_velocity=1;y_velocity=0;
            break;
        case 40:
            if (last_key === 38) {
                break;
            }
            last_key = 40;
            x_velocity=0;y_velocity=1;
            break;
    }
}
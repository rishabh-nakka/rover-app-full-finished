canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
rover_width=100;
rover_height=100;
rover_x=10;
rover_y=10;
background_image="mars.jpg";
rover_image="rover.png";
function add(){
    background_imgtag=new Image();
    background_imgtag.onload=uploadbackground;
    background_imgtag.src=background_image;

    rover_imgtag=new Image();
    rover_imgtag.onload=uploadrover;
    rover_imgtag.src=rover_image;
}
function uploadbackground(){
    ctx.drawImage(background_imgtag,0,0,800,600);
}
function uploadrover(){
    ctx.drawImage(rover_imgtag,rover_x,rover_y,rover_height,rover_width);
}
window.addEventListener("keydown",mykeydown);
function mykeydown(e){
    keypressed=e.keyCode;
    console.log(keypressed);
    if (keypressed=="38"){
        console.log("up");
        up();
    }
    if (keypressed=="40"){
        console.log("down");
        down();
    }
    if (keypressed=="37"){
        console.log("left");
        left();
    }
    if (keypressed=="39"){
        console.log("right");
        right();
    }
}
function up(){
    if (rover_y>=0){
        rover_y=rover_y-10;
        uploadbackground();
        uploadrover();
    }
    

}
function down(){
    if (rover_y<=500){
        rover_y=rover_y+10;
    uploadbackground();
    uploadrover();
    }
    

}
function left(){
    if (rover_x>=0){
    rover_x=rover_x-10;
    uploadbackground();
    uploadrover();

}

}
function right(){
    if (rover_x<=700){
    rover_x=rover_x+10;
    uploadbackground();
    uploadrover();

}

}

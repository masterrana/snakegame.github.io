function demoX(x,y){
    ctx.fillStyle="red";
    ctx.fillRect(x*sankeW,y*sankeH,cvs.width,sankeH);  
}
for (var i=0;i<=50 ;i++){
    i++;
    demoX(0,i);
}

function demoY(x,y){
    ctx.fillStyle="red";
    ctx.fillRect(x*sankeW,y*sankeH,10,500);  
}
for (var i=0;i<=50 ;i++){
    i++;
    demoY(i,0);
}
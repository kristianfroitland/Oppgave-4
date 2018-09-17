function Pie(cnv){
    let ctx = cnv.getContext("2d");
    ctx.clearRect(0,0, cnv.width, cnv.height);
    ctx.fillStyle = "#ffaa00";
    ctx.strokeStyle = "#aa0000";
    
    ctx.beginPath();
    ctx.arc(80,80,80,0, 2*Math.PI);
    ctx.closePath();
    ctx.fill();
    
   
    
    
}
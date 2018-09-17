function Pie(cnv){
    let ctx = cnv.getContext("2d");
    let p = 0.25;
    let bg = "Blue";
    let fn = "Red"
    

    draw();
    function draw(){
        ctx.clearRect(0,0, cnv.width, cnv.height);
        ctx.fillStyle = bg;
        ctx.strokeStyle = "#aa0000";

        ctx.beginPath();
        ctx.arc(80,80,80,0, 2*Math.PI);
        ctx.closePath();
        ctx.fill();  
        
        ctx.fillStyle = fn;
        ctx.beginPath();        
        ctx.arc(80, 80, 80, 0, 2*Math.PI*p); 
        ctx.lineTo(80,80);
        ctx.closePath();        
        ctx.fill();
    }
    this.setValue = function(v){
        p = v/100;
        draw();
    }
    
    this.setBackColor = function(b){
        bg = b;
        draw();
        
    }
    this.setPieColor = function(b){
        fn = b;
        draw();
        
    }
   
    
   
    
    
}
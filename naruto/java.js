var query=document.querySelectorAll(".b").length;
for(var i=0;i<query;i++){
    var button=document.querySelectorAll(".b")[i].addEventListener("click",function(){
        var ins=this.innerHTML;
        // alert(ins)
        soundOn(ins);
    })
}


function soundOn(key){
    switch (key) {
        case "i":
            var audio1=new Audio("download/itachi.mp3");
            audio1.play();
            break;

        case "ji":
            var audio2=new Audio("download/jiraiya.mp3");
            audio2.play();
            break;  
            
        case "k":
            var audio3=new Audio("download/kakashi.mp3");
            audio3.play();
            break;    
    
        case "o":
            var audio4=new Audio("download/obito.mp3");
            audio4.play();
            break;
            
        case "n":
            var audio5=new Audio("download/naruto.mp3");
            audio5.play();
            break;

        case "m":
            var audio6=new Audio("download/madara.mp3");
            audio6.play();
            break;

        case "p":
            var audio7=new Audio("/download/pain.mp3");
            audio7.play();
            break;  
            
        case "mi":
            var audio8=new Audio("download/minato.mp3");
            audio8.play();
            break;
        
        case "s":
            var audio9=new Audio("download/sasuke.mp3");
            audio9.play();
            break;
         
        case "gu":
            var audio10=new Audio("download/guy.mp3");
            audio10.play();
            break;
         
        case "ga":
            var audio11=new Audio("download/gaara.mp3");
            audio11.play();
            break;
            
        case "sa":
            var audio12=new Audio("download/sakura.mp3");
            audio12.play();
            break;    

        default:
            console.log("error");
            break;
    }
}

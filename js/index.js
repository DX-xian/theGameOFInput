window.onload=function(){

    let start=document.querySelector(".start");
    let end=document.querySelector(".end");
    let contant=document.querySelector(".contant")
    let lis=contant.querySelectorAll("li");
    let flag=document.querySelector("#flag")
    let bgmusic=document.querySelector("#bgmusic");
    let shengmin=document.querySelector(".shengmin")
    let jf=document.querySelector(".jf");
    let screen=document.querySelector(".screen");
    let all=document.querySelector(".all");
    let repaly=document.querySelector(".repaly")
    let button=document.querySelector(".button")
    let audio = document.querySelector('#audio');

    let myflag=true;
    // console.log(lis)
    // start.onclick=function(){
    //     start.style.zIndex=5;
    //     end.style.zIndex=10;
    // }
    // end.onclick=function(){
    //     start.style.zIndex=10;
    //     end.style.zIndex=5;
    // }
    // console.log(flag)

    flag.ontouchstart=function(e){
        // console.log(e.target.className)
        if(e.target.className=="start"){
            this.className="end";
            // console.log(this.className)
            // game.run();
            clearInterval(game.t)
            myflag=false;
            button.style.opacity=1;
           
        }else if(e.target.className=="end"){
            this.className="start";
            game.run()
            myflag=true;
           

        }
    }

    // }

    contant.ontouchstart=function(e){
        if(!myflag){
            return;
        }
        if(e.target.className=="btn"){
            e.target.style.transform="scale(0.8)"
            // console.log(e.target.innerText)
            game.delKey(e.target.innerText);
            game.addJf();
        }
    }
    contant.ontouchend=function(e){
        if(e.target.className=="btn"){
            e.target.style.transform="scale(1)"
        }
    }
    bgmusic.ontouchstart = function () {
        if (bgmusic.className == 'Astart') {
            bgmusic.className = 'Aend';
            audio.pause();
        } else {
            bgmusic.className = 'Astart';
            audio.play();
        }
    }
    repaly.ontouchstart=function(){
       all.style.display="none";
       game.init();
       game.createLetter(5);
       
        button.style.opacity=1;

    }





    let game=new Game();
    game.screen=document.querySelector(".screen");
    game.createLetter(5);
    game.jf=jf;
    game.shengmin=shengmin;
    // game.run();
    game.death=all;
    game.repaly=repaly;
    game.button=button;
    game.flag=flag;
}
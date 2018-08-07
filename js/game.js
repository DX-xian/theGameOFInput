class Game {

    constructor() {

        this.screen = "";
        this.letterbox = [];
        this.jfNum = 0;
        
        this.jf = "";
        this.shengminNum = 5;

        this.shengmin = "";
        
        this.sudu = 0.1;
        this.death = "";
        this.repaly = "";
        // this.button = "";
    }
    init() {
        
        
        this.shengmin.innerText = 5;
        this.jf.innerText = 0;
        this.jfNum = 0;
        this.shengminNum = 5;
        this.flag.className = "end";
        this.screen.innerText=""
        this.letterbox = [];
        clearInterval(this.t)
        // this.button = "" 
    }
    createLetter(num = 1) {

        for (let i = 0; i < num; i++) {

            let obj = {};
            let letter = "";
            do {
                let asiic = Math.floor(Math.random() * 26 + 65);
                letter = String.fromCharCode(asiic);

            } while (this.isHas(letter))

            obj.name = letter;

            let left = "";
            do {
                left = Math.random() * 5.7 + 0.6;
            } while (this.isRepeat(left))

            let div = document.createElement("div");
            div.className = "letter";
            div.style.left = left + "rem"
            div.style.backgroundImage = `url(img/A_Z/${letter}.png)`;

            obj.left = left;

            obj.top = 1;
            obj.node = div;
            this.screen.appendChild(div);
            this.letterbox.push(obj)

        }
        // console.log(this.letterbox);



    }
    isHas(letter) {
        for (let item of this.letterbox) {
            if (item.name == letter) {
                return true;
            }
        }
        return false;

    }
    isRepeat(left) {
        for (let item of this.letterbox) {
            let bool = Math.abs(item.left - left)
            if (bool < 0.53) {
                return true;
            }
        }
        return false;
    }

    run() {
        // console.log(this)
        this.button.style.opacity=0.3;
        
        this.t = setInterval(() => {
            this.letterbox.forEach((item, index) => {
                item.top += this.sudu;

                //    console.log(this.screen)
                if (item.top >= 7.94) {


                    this.letterbox.splice(index,1);
                    this.screen.removeChild(item.node);
                    this.createLetter(1);
                    this.jianshao()
                    // this.shengminNum--;
                    // this.shengmin.innerText = this.shengminNum;
                    // console.log(this.shengminNum)
                    if (this.shengminNum <= 0) {
                        this.death.style.display = "block";
                        this.death.childNodes[1].childNodes[1].innerText = this.jfNum;

                        this.init()
                    }
                }




                item.node.style.top = item.top + "rem";
            })



        }, 200)
    }
    delKey(namee) {
        this.letterbox.forEach((item, index) => {
            if (item.name == namee) {
                this.letterbox.splice(index, 1);
                this.screen.removeChild(item.node);
                this.createLetter();
                this.jfNum++;
                this.addJf()
            }
        })


    }
    addJf() {
        this.jf.innerText = this.jfNum;
        this.sudu = this.jfNum < 10 ? 0.1 : this.jfNum / 100;

    }

    jianshao() {
        this.shengminNum--;
        this.shengmin.innerText = this.shengminNum;
    }


}
class Form{
    constructor(){
       //this.input = createInput("Name");
       this.button = createButton('Play');
       this.button2 = createButton('Info');
       this.button3 = createButton('Next');
       this.button4 = createButton('Next');
       //this.greeting = createElement('h2');
       this.title = createElement('h2');
       this.reset = createButton('Reset');
       
    }
    hide() {
        //this.greeting.hide();
        this.button.hide();
        this.button2.hide();
        //this.button3.hide();
        this.button4.hide();
        //this.input.hide();
        this.title.hide();
    } 
    show(){
        this.button4.show();
        this.button3.show();
    }
    display() {
        if(gameState === 0){
            this.button3.hide();
            this.button4.hide();
        }
        this.title.html("Sars2 Covid-19 Virus");
        this.title.position(600, 50);
        this.title.style('font-size', '70px');
        this.title.style('color', 'skyblue');

        //this.input.position(700,300);
        //this.input.style('width', '200px');
        //this.input.style('height', '20px');
        //this.input.style('background', 'beige');

        this.button.position(800,400);
        this.button.style('width', '120px');
        this.button.style('height', '30px');
        this.button.style('background', 'DodgerBlue');

        this.button2.position(650,400);
        this.button2.style('width', '120px');
        this.button2.style('height', '30px');
        this.button2.style('background', 'DodgerBlue');

        this.button3.position(1050,displayHeight+50);
        this.button3.style('width', '200px');
        this.button3.style('height', '40px');
        this.button3.style('background', 'DodgerBlue');

        this.button4.position(1050,displayHeight+50);
        this.button4.style('width', '200px');
        this.button4.style('height', '40px');
        this.button4.style('background', 'DodgerBlue');

        this.reset.position(1270, 100);
        this.reset.style('width', '120px');
        this.reset.style('height', '30px');
        this.reset.style('background', 'DodgerBlue');

        this.button4.mousePressed(() => {
            game.update(5);
        });
        this.button3.mousePressed(() => {
            this.button4.show();
            game.update(4);
        });
        this.button.mousePressed(() => {
            //this.input.hide();
            this.button.hide();

            //player.name = this.input.value();
            playerCount += 1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);
            
            //this.greeting.html("Hello " + player.name)
            //this.greeting.position(400,250);
            //this.greeting.style('color', 'black');
            //this.greeting.style('font-size', '100px');
        });
        this.button2.mousePressed(() => {
            this.button2.hide();
            this.title.hide();
            this.button.hide();
            this.button3.show();
   
            game.update(3);

        });
        this.reset.mousePressed(() => {
            player.updateCount(0);
            game.update(0);
            score = 0;
            score2 = 0;
            /*player1.x = 200;
            player1.y = 500;
            player2.x = 800;
            player2.y = 500;*/
            players.update();
            player1.hide();
            player2.hide();
            virusGroupEach.destroy();
            maskGroupEach.destroy();
        });

    }
}
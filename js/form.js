class Form{
    constructor(){
       //this.input = createInput("Name");
       this.button = createButton('1 Player');
       this.button1 = createButton('Play Game')
       this.button2 = createButton('Info');
       this.button3 = createButton('Next');
       this.button4 = createButton('Next');
       this.button5 = createButton('Go back to Main');
       this.button6 = createButton('Multi-player');
       this.button7 = createButton('1');
       this.button8 = createButton('2');
       this.button9 = createButton('Back');
       this.button10 = createButton('Back');
       //this.greeting = createElement('h2');
       this.title = createElement('h2');
       this.reset = createButton('Reset');
       
    }
    hide() {
        //this.greeting.hide();
        this.button.hide();
        this.button2.hide();
        this.button1.hide();
        //this.button3.hide();
        this.button4.hide();
        //this.input.hide();
        this.title.hide();
        this.button5.hide();
        //this.button3.hide()
        this.button6.hide()
        this.button7.hide();
        this.button9.hide();
        this.button10.hide();
    } 
    show(){
        this.button4.show();
        this.button3.show();
        //this.button5.show();
        this.button.show();
        this.button2.show();
        this.button6.show();
        this.button7.show();
        //this.button10.show();
        this.button.show();
    }
    display() {
        if(gameState === 0){
            this.button3.hide();
            this.button4.hide();
            this.button.hide();
            this.button5.hide();
            this.button6.hide();
            this.button7.hide();
            this.button8.hide();
            this.button9.hide();
            this.button10.hide();
        }
        this.title.html("Sars2 Covid-19 Virus");
        this.title.position(550, 50);
        this.title.style('font-size', '70px');
        this.title.style('color', 'skyblue');

        //this.input.position(700,300);
        //this.input.style('width', '200px');
        //this.input.style('height', '20px');
        //this.input.style('background', 'beige');
        //1 player
        this.button.position(550,400);
        this.button.style('width', '120px');
        this.button.style('height', '30px');
        this.button.style('background', 'DodgerBlue');
        //Play Game
        this.button1.position(900,400);
        this.button1.style('width', '220px');
        this.button1.style('height', '50px');
        this.button1.style('background', 'DodgerBlue');
        //Info
        this.button2.position(600,400);
        this.button2.style('width', '220px');
        this.button2.style('height', '50px');
        this.button2.style('background', 'DodgerBlue');
        //Next
        this.button3.position(1050,displayHeight+50);
        this.button3.style('width', '200px');
        this.button3.style('height', '40px');
        this.button3.style('background', 'DodgerBlue');
        //Next
        this.button4.position(1050,displayHeight+50);
        this.button4.style('width', '200px');
        this.button4.style('height', '40px');
        this.button4.style('background', 'DodgerBlue');
        //Go back to Main
        this.button5.position(1050,displayHeight+50);
        this.button5.style('width', '200px');
        this.button5.style('height', '40px');
        this.button5.style('background', 'DodgerBlue');
        //reset
        this.reset.position(displayWidth-115, displayHeight/2-455);
        this.reset.style('width', '120px');
        this.reset.style('height', '30px');
        this.reset.style('background', 'DodgerBlue');
        //Multi-player
        this.button6.position(800,400);
        this.button6.style('width', '120px');
        this.button6.style('height', '30px');
        this.button6.style('background', 'DodgerBlue');
        //1
        this.button7.position(650,400);
        this.button7.style('width', '120px');
        this.button7.style('height', '30px');
        this.button7.style('background', 'DodgerBlue');
        //2
        this.button8.position(900,400);
        this.button8.style('width', '120px');
        this.button8.style('height', '30px');
        this.button8.style('background', 'DodgerBlue');
        //Back
        this.button9.position(850,displayHeight+50);
        this.button9.style('width', '200px');
        this.button9.style('height', '40px');
        this.button9.style('background', 'DodgerBlue');
        //Back
        this.button10.position(850,displayHeight+50);
        this.button10.style('width', '200px');
        this.button10.style('height', '40px');
        this.button10.style('background', 'DodgerBlue');

        this.button9.mousePressed(() => {
            this.button9.hide();
            this.button3.show();
            //this.button5.hide();
            game.update(3);
        });
        this.button10.mousePressed(() => {
            this.button10.hide();
            this.button4.show();
            this.button5.hide();
            this.button9.show();
            game.update(4);
        });
        this.button7.mousePressed(() => {
            game.update(14);
            this.button7.hide();
            this.button8.hide();
            playerCount += 1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);
        });
        this.button8.mousePressed(() => {
            game.update(13);
            this.button7.hide();
            this.button8.hide();
            playerCount += 1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);
        });
        //go back to main
        this.button5.mousePressed(() => {
            game.update(0);
            this.button10.hide();
            this.button5.hide();
        });
        //2 player
        this.button6.mousePressed(() => {
            game.update(1);
            this.button6.hide();
            this.button.hide();
            playerCount += 1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);
        });
        //play game
        this.button1.mousePressed(() => {
            game.update(6);
            this.button2.hide();
            this.button1.hide();
            this.button.show();
            this.button6.show();
        });
        //next
        this.button4.mousePressed(() => {
            game.update(5);
            this.button10.show();
            this.button5.show();
            this.button4.hide();
            this.button9.hide();
            
            
        });
        // next
        this.button3.mousePressed(() => {
            this.button3.hide();
            this.button4.show();
            this.button9.show();
            game.update(4);
        });
        //1 player
        this.button.mousePressed(() => {
            //this.input.hide();
            this.button.hide();
            this.button7.show();
            this.button6.hide();
            this.button8.show();
            
            //player.name = this.input.value();
            //playerCount += 1;
            //player.index = playerCount;
            //player.update();
            //player.updateCount(playerCount);
            game.update(7);
            
            //this.greeting.html("Hello " + player.name)
            //this.greeting.position(400,250);
            //this.greeting.style('color', 'black');
            //this.greeting.style('font-size', '100px');
        });
        //info
        this.button2.mousePressed(() => {
            this.button2.hide();
            this.title.hide();
            this.button.hide();
            this.button3.show();
   
            game.update(3);

        });
        //reset
        this.reset.mousePressed(() => {
            player.updateCount(0);
            game.update(0);
            score = 0;
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
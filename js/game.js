class Game{
    constructor(){
        
    }
    getState() {
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value", function (data) {
        gameState = data.val();
        })

    }

    
    update(state) {
        database.ref('/').update({
        gameState: state
        });
    }
    async start() {
            if (gameState === 0) {
                player = new Player();
                var playerCountRef = await database.ref('playerCount').once("value");
                if (playerCountRef.exists()) {
                    playerCount = playerCountRef.val();
                    player.getCount();
                }
                form = new Form()
                form.display();
            }
        

        }

    numplr(){
        image(back_img, 0, 0, displayWidth,displayHeight);
    }
    oneplr(){
        image(back_img, 0, 0, displayWidth,displayHeight);
        image(player_img,680,150,70,150)
        image(player2_img,980,150,70,150)
    }
    
    onesafe(){
        image(back_img, 0, 0, displayWidth,displayHeight);
    }
    onecool(){
        image(back_img, 0, 0, displayWidth,displayHeight);
    }
    info(){
        form.hide();
        image(info1_img, 0, 0, displayWidth,displayHeight);

        }
    info2(){
        image(info2_img, 0, 0, displayWidth,displayHeight);
    
       }
    info3(){
        image(info3_img, 0, 0, displayWidth,displayHeight);
        
        }
    play(){
        
        
        form.hide();

        Player.getPlayerInfo();
        image(back_img, 0, 0, displayWidth,displayHeight);

        var x =100;
        var y=200;
        var index =0;
        
        //scores = [score,score2];

        drawSprites();
        for(var plr in allPlayers){

            index = index+1;
            x = 500-allPlayers[plr].distance;
            y=500;
                     
            players[index -1].x = x;
            players[index - 1].y = y;
                       
        /*if(index === player.index){
                         
            fill("black");
            textSize(25);
            text(allPlayers[plr].name ,x,y);
                         
                         
    }*/
                    
        fill("black");
        textSize(35);
        text("Player1 score: " + allPlayers.player1.score,50,50);
        text("Player2 score: " + allPlayers.player2.score,50,100);
         

                 }

                 
                 
                 if (keyIsDown(RIGHT_ARROW) && player.index !== null) {
                    player.distance -= 30
                    player.update();
                }
                if (keyIsDown(LEFT_ARROW) && player.index !== null) {
                    player.distance += 30
                    player.update();
                }
            
                 
                  
                     //fill code here, to destroy the objects.
                     if (player1 !== null) 
                     { 
                         for (var m = 0; m < maskGroup.length; m++) 
                         { 
                             if (maskGroup.get(m).isTouching(player1)) 
                             { 
                                maskGroup.get(m).destroy(); 
                                score++;
                                player.update();
                                
                                 
                             } 
                         } 
                         for (var i = 0; i < virusGroup.length; i++) 
                         { 
                             if (virusGroup.get(i).isTouching(player1)) 
                             { 
                                virusGroup.get(i).destroy(); 
                                score = score -1;
                                player.update();
                             } 
                         } 
                     


                  }
                 
                     //fill code here, to destroy the objects.
                     if (player2 !== null) 
                     { 
                         for (var m = 0; m < maskGroup.length; m++) 
                         { 
                             if (maskGroup.get(m).isTouching(player2)) 
                             { 
                                maskGroup.get(m).destroy(); 
                                score++;
                                player.update();
                             } 
                         } 
                         for (var i = 0; i < virusGroup.length; i++) 
                         { 
                             if (virusGroup.get(i).isTouching(player2)) 
                             { 
                                virusGroup.get(i).destroy(); 
                                score = score -1;
                                player.update();
                             } 
                         } 
                     }
                 
                     


                  

    }
    play1s(){
        
        
        form.hide();

        //player2.getPlayerInfo();
        image(back_img, 0, 0, displayWidth,displayHeight);

        var x =100;
        var y=200;
        var index =0;
        var score = 5;
        //scores = [score,score2];

        drawSprites();
        for(var plr in player2){

            index = index+1;
            x = displayWidth/2;
            y=displayHeight/2;
                     
            player2.x = x;
            player2.y = y;
                       
        /*if(index === player.index){
                         
            fill("black");
            textSize(25);
            text(allPlayers[plr].name ,x,y);
                         
                         
    }*/
                    
        fill("black");
        textSize(35);
        
        text("Player2 score: " + player2.score,50,100);
         

                 }

                 
                 
                 if (keyIsDown(RIGHT_ARROW) && player.index !== null) {
                    player.distance -= 30
                    player.update();
                }
                if (keyIsDown(LEFT_ARROW) && player.index !== null) {
                    player.distance += 30
                    player.update();
                }
            
                 
                  
                     //fill code here, to destroy the objects.
                     if (player2 !== null) 
                     { 
                         for (var m = 0; m < maskGroup.length; m++) 
                         { 
                             if (maskGroup.get(m).isTouching(player2)) 
                             { 
                                maskGroup.get(m).destroy(); 
                                score++;
                                player.update();
                                
                                 
                             } 
                         } 
                         for (var i = 0; i < virusGroup.length; i++) 
                         { 
                             if (virusGroup.get(i).isTouching(player2)) 
                             { 
                                virusGroup.get(i).destroy(); 
                                score = score -1;
                                player.update();
                             } 
                         } 
                     


                  }
                 
                     }
                 
                

    play1c(){
        
        
        form.hide();

        //player1.getPlayerInfo();
        image(back_img, 0, 0, displayWidth,displayHeight);

        var x = 100;
        var y = 200;
        var index = 0;
        var score = 0;
        //scores = [score,score2];

        drawSprites();
        for(var plr in player1){

            index = index+1;
            x = displayWidth/2;
            y=displayHeight/2;
                     
            player1.x = x;
            player1.y = y;
                       
        /*if(index === player.index){
                         
            fill("black");
            textSize(25);
            text(allPlayers[plr].name ,x,y);
                         
                         
    }*/
                    
        fill("black");
        textSize(35);
        text("Player1 score: " + player1.score,50,50);
        

                 }

                 
                 
                 if (keyIsDown(RIGHT_ARROW) && player.index !== null) {
                    player.distance -= 30
                    player.update();
                }
                if (keyIsDown(LEFT_ARROW) && player.index !== null) {
                    player.distance += 30
                    player.update();
                }
            
                 
                  
                     //fill code here, to destroy the objects.
                     
                  
                 
                     //fill code here, to destroy the objects.
                     if (player1 !== null) 
                     { 
                         for (var m = 0; m < maskGroup.length; m++) 
                         { 
                             if (maskGroup.get(m).isTouching(player1)) 
                             { 
                                maskGroup.get(m).destroy(); 
                                score++;
                                player.update();
                             } 
                         } 
                         for (var i = 0; i < virusGroup.length; i++) 
                         { 
                             if (virusGroup.get(i).isTouching(player1)) 
                             { 
                                virusGroup.get(i).destroy(); 
                                score = score -1;
                                player.update();
                             } 
                         } 
                     
                        }       

    }

    end(){
       console.log("Game Ended");
    }
    
}
//pseudo code outline before you write a single line of code!


// Begin Game

// Selects a random number to be shown at the start of the game (note- needs to be between 12-120)

$(document).ready(function(){
    var Random=Math.floor(Math.random()*101+19)


    $('#randomNumber').text(Random);

    var num1= Math.floor(Math.random()*11+1)
    var num2= Math.floor(Math.random()*11+1)
    var num3= Math.floor(Math.random()*11+1)
    var num4= Math.floor(Math.random()*11+1)
    // setting random number generator for each gem stone once selected (note- between 1 & 12)

    //declaring game variables- must be cleared before each new game (called below)
    var userTotal= 0; 
    var wins= 0;
    var losses = 0;

  $('#numberWins').text(wins);
  $('#numberLosses').text(losses);

  //resets the game- mentioned above (**)

  function reset(){
        Random=Math.floor(Math.random()*101+19);
        console.log(Random)
        $('#randomNumber').text(Random);
        num1= Math.floor(Math.random()*11+1);
        num2= Math.floor(Math.random()*11+1);
        num3= Math.floor(Math.random()*11+1);
        num4= Math.floor(Math.random()*11+1);
        userTotal= 0;
        $('#finalTotal').text(userTotal);
        } 
  //adds the wins to the userTotal
  function win(){
  alert("You won!");
    wins++; 
    $('#numberWins').text(wins);
    reset();
  }
  //addes the losses to the userTotal
  function loser(){
  alert ("You lose!");
    losses++;
    $('#numberLosses').text(losses);
    reset()
  }
  //sets up click function for gem stones. 
    $('#diamond').on ('click', function(){
      userTotal = userTotal + num1;
      console.log("New userTotal= " + userTotal);
      $('#finalTotal').text(userTotal); 
            //sets win/loss conditions, repeats 4x below as well
          if (userTotal == Random){
            win();
          }
          else if ( userTotal > Random){
            loser();
          }   
    })  

    $('#ruby').on ('click', function(){
      userTotal = userTotal + num2;
      console.log("New userTotal= " + userTotal);
      $('#finalTotal').text(userTotal); 
          if (userTotal == Random){
            win();
          }
          else if ( userTotal > Random){
            loser();
          } 
    })  

    $('#sapphire').on ('click', function(){
      userTotal = userTotal + num3;
      console.log("New userTotal= " + userTotal);
      $('#finalTotal').text(userTotal);
 
 
            if (userTotal == Random){
            win();
          }
          else if ( userTotal > Random){
            loser();
          } 
    })  
    $('#weird').on ('click', function(){
      userTotal = userTotal + num4;
      console.log("New userTotal= " + userTotal);
      $('#finalTotal').text(userTotal); 
        
            if (userTotal == Random){
            win();
          }
          else if ( userTotal > Random){
            loser();
          }
    });   
  });


  // is there a more efficient way to reference the functions for each stone? I feel like I've missed something in re-writing the same loop 4 times?
  // also- the random numbers I am generating seem a but suspect. I can't help but feel like I'm seeing a correlation with even values. Am I losing it?
  // still trying to work out how to add a space betwen my wins and losses without breaking a few other things, but that's more stylistic
  
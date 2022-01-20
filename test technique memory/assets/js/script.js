
/**VARIABLES**/

/*  */
const arrayFruits = ["abricot","banane","cerise","citron-vert","citron","fraise","grenade","orange","pasteque","peche","pomme-verte","pomme","prune","raisin"];
let arrayCards = ["item-0","item-1","item-2","item-3","item-4","item-5","item-6","item-7","item-8","item-9","item-10","item-11","item-12","item-13","item-14","item-15","item-16","item-17","item-18","item-19","item-20","item-21","item-22","item-23","item-24","item-25","item-26","item-27"];
let counterPairsFound = 0;
let arrayListClickedItems = [];
let numberSecondes = 90;

$(document).ready(function () {
        
    /*******************/
    /**  FUNCTIONS **/
    /*******************/
    
    /**  Progress Bar Behaviour **/


    let launch;
    let launchTimer;

    function progressBar(timeleft, timetotal, $element) {

        let progressBarWidth = timeleft * $element.width() / timetotal;


        let minutes = Math.floor(timeleft / 60);
        let secondes = Math.floor(timeleft % 60);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        secondes = secondes < 10 ? "0" + secondes : secondes;
    
        $('#countdown').html(`${minutes} : ${secondes}`);
    
        $element.find('.bar').animate({ width: progressBarWidth }, 500);
    
        if(timeleft > 0) {

            launchTimer = setTimeout(function() {
                progressBar(timeleft - 1, timetotal, $element);
            }, 1000);

        } else {
            endGame('lose');
        }
    };
    

    /** Function Random Card Number **/

    /* Cette fonction va permettre de définir le numéro de la case
    dans laquelle sera insérer le fruit */

    function randomCardNumber(item)
    {
        // Cette valeur représente l'index du tableau à récupérer
        let randomCardKey = Math.floor(Math.random() * item.length);
        
        // On retire la valeur du tableau pour éviter de tomber dessus lors du prochain tirage
        let removedValue = item.splice(randomCardKey, 1);

        // On retourne la valeur qui a été coupée, correspondant au nom de la carte
        return removedValue; 
    }


    /** Function Get Image Name **/

    function getImageName(item) {

        const imageSrc =item.children( 'img' ).attr('src'); 
        const imageSrcSplit = imageSrc.split('/');      
        const imageFile = imageSrcSplit[imageSrcSplit.length - 1]; 
        const imageName = imageFile.split('.')[0];
        return imageName;

  }

  /** Function Stock Resultats **/

  /** Function EndGame **/


  function endGame(item) {

    if (item === 'win'){
        launch = false;
        clearTimeout(launchTimer);
        saveUserTimes();
        $("#resultats").html("Vous avez gagné");
        $("#btn-go").show();
        $("#restart").show();



    } else {
        $("#resultats").html("Vous avez perdu");
        $("#btn-go").show();
        $("#restart").show(); 
        launch = true;
    }


    showScores('current user');
    $('#best-scores').show();


  }


  /** Function Click Card **/

    let counterClick = 0;

        
    $('.card').click(function() {

        // On récupére la class de la carte sur laquelle on vient de cliquer

        $(this).addClass(`clicked-${counterClick} active`);
    


        const fruitName = getImageName($(this));

        // On stocke dans un  array le nom du fruit
        arrayListClickedItems.push(fruitName);

        if(counterClick === 1) {

            setTimeout(verifyValue, 200);

            function verifyValue() {
                if(arrayListClickedItems[0] === arrayListClickedItems[1]){

                    $('.card.clicked-0').removeClass('clicked-0');
                    $('.card.clicked-1').removeClass('clicked-1');
                    counterPairsFound += 1;

                    if(counterPairsFound === 14){

                        endGame('win');

                    }

                }
        
                if(arrayListClickedItems[0] != arrayListClickedItems[1]){
                    if ( $('.card').hasClass('clicked-0 active') || $('.card').hasClass('clicked-1 active') ) {

                        $('.card.clicked-0').removeClass("clicked-0 active");
                        $('.card.clicked-1').removeClass("clicked-1 active");
                    }
                }


                arrayListClickedItems.length = 0;
                counterClick = 0;
            }

        } else {
            counterClick ++;
        }

    });


    /** Function Store Datas **/

    function saveUserTimes() {
        $.post("savesettings.php",
        {
            user_score: $("#countdown").html(),
        })
        
    }


    /** Function Show Scores From Database **/

    function showScores(e) {
        $.ajax({    
            type: "GET",
            url: "showscores.php",             
            dataType: "html",                  
            success: function(data){                    
                $("#best-scores-list").html(data); 
            
            }
        });
    }

    


      /*******************/
    /**  RANDOM CARDS **/
    /*******************/

    /* Pour chaque fruit on effectue 2 tirages aléatoires ce qui va nous permettre de placer
    la paire sur la grille */

    function randomFruits() {
        arrayFruits.forEach(function(item){
    
            // Tirage 1 & Tirage 2
            let randomCardNumber1Value = randomCardNumber(arrayCards);
            let randomCardNumber2Value = randomCardNumber(arrayCards);
    
            // Nom des cartes
            let div_number_one = $('.card.' + randomCardNumber1Value);
            let div_number_two = $('.card.' + randomCardNumber2Value);
    
            // On vient insérer dans les cartes la paire de fruit
            div_number_one.html( `<img src=assets/images/${item}.png>` );        
            div_number_two.html( `<img src=assets/images/${item}.png>` );
    
    
        });
    }



    /*******************/
    /**  LAUNCH GAME **/
    /*******************/


    /*Launch game when btn "Commencer" is cliked*/



    $( "#start" ).click(function() {
        randomFruits();
        $( this ).slideUp();
        $("#btn-go").fadeOut();
        launch = true;
        progressBar(numberSecondes, numberSecondes, $('#progress-bar'));
    });

    $( "#restart" ).click(function() {
        counterPairsFound = 0;
        launch = true;
        arrayCards = ["item-0","item-1","item-2","item-3","item-4","item-5","item-6","item-7","item-8","item-9","item-10","item-11","item-12","item-13","item-14","item-15","item-16","item-17","item-18","item-19","item-20","item-21","item-22","item-23","item-24","item-25","item-26","item-27"];
        $('.card').removeClass("active");
        $('.card').empty();
        randomFruits();
        $('#best-scores').hide();
        $( this ).slideUp();
        $("#btn-go").fadeOut();
        progressBar(numberSecondes, numberSecondes, $('#progress-bar'));
    });

    
});

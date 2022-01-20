
/*******************/
/**  VARIABLES **/
/*******************/

/* On déclare ici toutes les variables importantes qui vont nous être utiles pour le bon fonctionnement du jeu */


const arrayFruits = ["abricot","banane","cerise","citron-vert","citron","fraise","grenade","orange","pasteque","peche","pomme-verte","pomme","prune","raisin"];
let arrayCards = ["item-0","item-1","item-2","item-3","item-4","item-5","item-6","item-7","item-8","item-9","item-10","item-11","item-12","item-13","item-14","item-15","item-16","item-17","item-18","item-19","item-20","item-21","item-22","item-23","item-24","item-25","item-26","item-27"];
let counterPairsFound = 0;
let arrayListClickedItems = [];
let numberSecondes = 90;
// let launch;
let launchTimer;
let counterClick = 0;


$(document).ready(function () { // Permet d'exécuter le code une fois que le DOM a fini de charger
        
    /*******************/
    /**  FUNCTIONS **/
    /*******************/

    /**  Progress Bar Behaviour **/

    /* Cette fonction permet d'afficher le timer et la barre de progression en bas du jeu. */


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

        } else { /* Une fois que le compteur atteint 0, on lance la fin du jeu */
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

        /** Function EndGame **/

        function endGame(item) {

            if (item === 'win') { // Ce qui se passe quand les conditions de victoires sont réunies
                //launch = false;
                clearTimeout(launchTimer); // On stoppe le timer
                saveUserTimes();
                $("#resultats").html("Vous avez gagné"); // On affiche le message dans la div #resultats
                $("#btn-go").show(); // On affiche la div contenant les boutons
                $("#restart").show(); // On affiche la bouton "rejouter"
        
            } else { //Ce qui se passe quand les conditions de défaites sont réunies
                $("#resultats").html("Vous avez perdu"); // On affiche le message dans la div #resultats
                $("#btn-go").show();
                $("#restart").show(); 
                //launch = true;
            }
        
            /* On exécute la fonction permettant l'affichage des scores et on passe en 
            paramètres l'utilisateur actuel (ici current user représente l'ensemble des joueurs. 
            Seul cet utilisateur est enregistré en base.). 
            Pour une future évolution du jeu, il sera possible de passer via une variable
            le nom de chaque joueur afin d'afficher le "top score" individuel. */
            showScores('current user'); 
            $('#best-scores').show(); // on affiche la liste
        
        }

    /** Function Click Card **/

    /* On gère ici le comportement lors du click sur une carte */

    $('.card').click(function() {

        /*On ajoute 2 classes à la carte sur laquelle on vient de cliquer
        Les class .cliked-0 ou .cliked-1 permettent de connaître les cartes qui viennent d'être cliquées.
        La class .active va permettre de laisser afficher les cartes si les cartes sont identiques.
        */
        $(this).addClass(`clicked-${counterClick} active`);

        // On récupére le nom du fruit associé à la carte sur laquelle on vient de cliquer
        const fruitName = getImageName($(this));

        // On stocke dans un  array le nom du fruit
        arrayListClickedItems.push(fruitName);

        if(counterClick === 1) {

            /* On définit ici un temps de latence pour éviter que l'utilisateur trop rapide clique
            sur une 3ème carte entre temps */
            setTimeout(verifyValue, 200); 
            function verifyValue() {
                if(arrayListClickedItems[0] === arrayListClickedItems[1]){ // Ce qui se passe quand les deux cartes sont identiques

                    $('.card.clicked-0').removeClass('clicked-0');
                    $('.card.clicked-1').removeClass('clicked-1');
                    counterPairsFound += 1; // on incrémente un compteur à chaque fois qu'un couple a été trouvé.

                    if(counterPairsFound === 14){ // Si les 14 couples de cartes ont été retrouvés on lance la fin du jeu

                        endGame('win');

                    }

                }
        
                if(arrayListClickedItems[0] != arrayListClickedItems[1]){ // Si les cartes ne sont pas les bonnes, on les retourne
                    if ( $('.card').hasClass('clicked-0 active') || $('.card').hasClass('clicked-1 active') ) {

                        $('.card.clicked-0').removeClass("clicked-0 active");
                        $('.card.clicked-1').removeClass("clicked-1 active");
                    }
                }


                arrayListClickedItems.length = 0;
                counterClick = 0;
            }

        } else { // On incrémente le compteur de clics
            counterClick ++;
        }

    });


    /** Function Store Datas **/

    /* Cette fonction va permettre d'aller stocker dans la base de données le score */

    function saveUserTimes() { 
        $.post("savesettings.php",
        {
            user_score: $("#countdown").html(), // On récupére le contenu de #countdown que l'on envoie à savesettings.php
        })
        
    }


    /** Function Show Scores From Database **/

    /* Cette fonction va permettre d'afficher la liste des scores stockés en base.
    On passe par de l'ajax pour éviter de recharger la page et avoir le classement en temps réel. */

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
        randomFruits(); //on place les fruits aléatoirement
        $( this ).slideUp();
        $("#btn-go").fadeOut();
        //launch = true;
        progressBar(numberSecondes, numberSecondes, $('#progress-bar')); // on lance le timer et on passe en paramètre les secondes et le nom de barre de progression
    });

    $( "#restart" ).click(function() { // ici on réinitialise toutes les données
        counterPairsFound = 0;
        //launch = true;
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

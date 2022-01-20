<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="assets/css/style.css">
    <title>Memory</title>
</head>
<body>

    <div id="wrapper">
        <head>
                <h1>Memory</h1>
        </head>
        <section id="container">
            <div id="btn-go">
                <div id="resultats"></div> <!-- On ffiche ic le message de victoire ou de défaite -->
                <div id="best-scores"> 
                    <h2>Top 5 joueurs</h2>
                    <div id="best-scores-list"> <!-- C'est ici que seront affichés les 5 derniers meilleurs scores -->
                    </div>
                </div>
                <div id="start">Commencer</div> <!-- Bouton pour lancer le jeu -->
                <div id="restart">Recommencer</div> <!-- Bouton pour relancer le jeu -->
            </div>
            <div id="game"> <!-- La grille qui va permettre d'afficher les cartes -->
                    <div class="card item-0"></div>
                    <div class="card item-1"></div>
                    <div class="card item-2"></div>
                    <div class="card item-3"></div>   
                    <div class="card item-4"></div>
                    <div class="card item-5"></div>   
                    <div class="card item-6"></div>
                    <div class="card item-7"></div>   
                    <div class="card item-8"></div>
                    <div class="card item-9"></div>              
                    <div class="card item-10"></div>
                    <div class="card item-11"></div>   
                    <div class="card item-12"></div>
                    <div class="card item-13"></div>   
                    <div class="card item-14"></div>
                    <div class="card item-15"></div>   
                    <div class="card item-16"></div>
                    <div class="card item-17"></div>   
                    <div class="card item-18"></div>
                    <div class="card item-19"></div>   
                    <div class="card item-20"></div>
                    <div class="card item-21"></div>   
                    <div class="card item-22"></div>
                    <div class="card item-23"></div>   
                    <div class="card item-24"></div>
                    <div class="card item-25"></div>   
                    <div class="card item-26"></div>
                    <div class="card item-27"></div>   
            </div>
        </section>
        <footer>
            <div id="timer">
                <div id="countdown"></div> <!-- On gère ici l'affichage du timer -->
                <div id="progress-bar"><div class="bar"></div></div> <!-- Et ici la barre de progression -->
            </div>
        </footer>
    </div>
    <!-- Il est préférable d'appeler le javascript en dernier une fois que tout le HTML a fini de charger pour éviter des disfonctionnements -->
    <script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
    <script type="text/javascript" src="assets/js/script.js"></script>
    </body>
</html>

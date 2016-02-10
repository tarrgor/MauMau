/* global app */
app.directive('cardBoard', [ 'cardService', function(cardService) {
    return {
        restrict: 'E',
        templateUrl: 'templates/cardBoard.html',
        replace: true,
        scope: {
        },
        controller: [ '$scope', 'ngAudio', function($scope, ngAudio) {
            // initialize defaults 
            loadSounds();
            initConfig();
            
            // define the card stacks
            $scope.cardDeck = [];
            
            $scope.newGame = function() {
                cardService.initNewGame($scope.config);
                $scope.cardDeck = cardService.getCardDeck(); 
                shuffleDeck(); 
            };
            
            $scope.cardClicked = function(card) {
                if (card.stackName == CardStacks.MAIN) {
                    moveCardToHand(card);
                }    
            };
            
            //
            // Events handlers
            //
                        
            //
            // Private methods
            //
            
            function initConfig() {
                $scope.config = {
                };
            }
            
            function loadSounds() {
                $scope.dealSound = ngAudio.load('sounds/deal.wav');
                $scope.dealSound.unbind();
                $scope.shuffleSound = ngAudio.load('sounds/shuffle.wav');
                $scope.shuffleSound.unbind();
            }

            function moveCardToHand(card) {
                $scope.dealSound.play();
                cardService.moveTopCard(CardStacks.MAIN, CardStacks.OWN);
            };

            function shuffleDeck() {
                $scope.shuffleSound.play();
                cardService.shuffleStack(CardStacks.MAIN);
            };
        }]
    }
}]);

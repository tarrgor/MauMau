/* global app */
app.directive('cardBoard', [ 'cardService', function(cardService) {
    return {
        restrict: 'E',
        templateUrl: 'templates/cardBoard.html',
        replace: true,
        scope: {
            'deckTop'   : '@?',
            'deckLeft'  : '@?',
            'handTop'   : '@?',
            'handLeft'  : '@?'
        },
        controller: [ '$scope', function($scope) {
            // initialize defaults if no config is specified
            initDefaults();
                        
            // define the card stacks
            $scope.cardDeck = cardService.getNewCardDeck();
            $scope.ownHandCount = 0;
            
            $scope.shuffleDeck = function() {
                for (var i = 0; i < 250; i++) {
                    var r1 = Math.floor(Math.random() * $scope.cardDeck.length);
                    var r2 = Math.floor(Math.random() * $scope.cardDeck.length);
                    var temp = $scope.cardDeck[r1];
                    $scope.cardDeck[r1] = $scope.cardDeck[r2];
                    $scope.cardDeck[r2] = temp;
                }
            };
            
            $scope.moveCardToHand = function(card) {
                card.showBackside = false;
                card.moveTo($scope.handLeft + ($scope.ownHandCount * 30), $scope.handTop);
                card.isInPile = false;
                card.isInOwnHand = true;
                $scope.ownHandCount++;
            };
            
            $scope.cardClicked = function(card) {
                console.log('cardClicked:'+JSON.stringify(card));
                if (card.isInPile) {
                    $scope.moveCardToHand(card);
                }    
            };
            
            //
            // Events handlers
            //
                        
            //
            // Private methods
            //
            
            function initDefaults() {
                if (angular.isUndefined($scope.deckTop)) $scope.deckTop = 0;
                if (angular.isUndefined($scope.deckLeft)) $scope.deckLeft = 0;
                if (angular.isUndefined($scope.handTop)) $scope.handTop = 450;
                if (angular.isUndefined($scope.handLeft)) $scope.handLeft = 450;
            }
        }]
    }
}]);

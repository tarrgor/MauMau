app.directive('card', [ '$document', '$animate', function($document, $animate) {
    return {
        restrict: 'E',
        templateUrl: 'templates/card.html',
        replace: true,
        scope: {
            card: '='
        },
        controller: [ '$scope', '$element', function($scope, $element) {
            $scope.$watchGroup(['card.left', 'card.top'], function() {
                if (!$scope.card.moveAnimated) {
                    drawCard();                                         
                } else {
                    moveCard();
                }                    
            });

            function drawCard() {
                $element.css({
                    position: 'absolute',
                    left: $scope.card.left+'px',
                    top: $scope.card.top+'px',
                    'z-index': 1 
                });
            }    
            
            function moveCard() {
                var targetTop = $scope.card.top;
                var targetLeft = $scope.card.left;
                $element.animate({
                    top: targetTop+'px',
                    left: targetLeft+'px',
                    'z-index': 1 
                }, 
                {
                    queue: false,
                    duration: 400, 
                    complete: function() {
                        $scope.card.moveAnimated = false;
                    }
                });
            }        
        }]
    };
}]);

/*
function setupCardElement(scope, elem, document) {
    var cardboard = elem.parents('.cardboard');
    var xoff = cardboard.position().left;
    var yoff = cardboard.position().top;
    var boardWidth = cardboard.width();
    var boardHeight = cardboard.height();

    var xp = scope.card.left + xoff + elem.width() / 2;
    var yp = scope.card.top + yoff + elem.height() / 2;
    
    positionCard();
    
    elem.on('mousedown', function(event) {
        event.preventDefault();
        if (scope.card.draggable) {
            xp = event.pageX;
            yp = event.pageY;
            positionCard();
            setCursor('pointer');
            animate('on');
            document.on('mousemove', mousemove);
            document.on('mouseup', mouseup);
            console.log(JSON.stringify(scope.card));
        }
    });
    
    function mousemove(event) {
        xp = event.pageX;
        yp = event.pageY;
        positionCard();
    }; 
    
    function mouseup(event) {
        xp = event.pageX;
        yp = event.pageY;
        positionCard();
        setCursor('default');
        animate('off');
        document.off('mousemove');
        document.off('mouseup');
    };

    function positionCard() {
        var top = calcTop();
        var left = calcLeft();
        elem.css({
            position: 'absolute',
            top: top + 'px',
            left: left + 'px'
        });
        scope.card.top = top;
        scope.card.left = left;
    };   
    
    function setCursor(cursor) {
        if (cursor == 'pointer' || cursor == 'default') {
            elem.css({ cursor: cursor });                        
        }
    };
    
    function animate(state) {
        if (state == 'on') {
            elem.removeClass('card--dropped');
            elem.addClass('card--picked-up');
        } else {
            elem.removeClass('card--picked-up');
            elem.addClass('card--dropped');                    
        }
    };
    
    function calcLeft() {
        var left = (xp - elem.width() / 2) - xoff;
        if (left < 0) left = 0;
        if (left > (boardWidth - elem.width())) left = boardWidth - elem.width();
        return left;
    }         
    
    function calcTop() {
        var top = (yp - elem.height() / 2) - yoff;
        if (top < 0) top = 0;
        if (top > (boardHeight - elem.height())) top = boardHeight - elem.height();
        return top;
    }
}
*/
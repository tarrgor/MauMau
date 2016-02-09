app.animation('.moving', function() {
    return {
        beforeAddClass: function(element, className, done) {
            console.log('beforeAddClass');
            var scope = element.scope();
            var targetTop = scope.card.top;
            var targetLeft = scope.card.left;
            element.animate({
                top: targetTop+'px',
                left: targetLeft+'px' 
            }, 
            {
                queue: false,
                duration: 500, 
                complete: function() {
                    scope.card.moveAnimated = false;
                }
            });
            done();
        },

        addClass: function(element, className, done) {
            console.log('addClass');
            done(); 
        },
        
        removeClass: function(element, className, done) {
            console.log('removeClass');
            done();
        },
        
        beforeRemoveClass: function(element, className, done) {
            console.log('beforeRemoveClass');
            done();
        }
    };
});

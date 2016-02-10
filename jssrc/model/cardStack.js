var CardStacks = {
    MAIN: 'main',
    OWN: 'own',
    OPP: 'opp',
    PILE: 'pile'
};

function CardStack(name, config) {
    var _cards = [];
    
    this.name = name;
    
    this.config = {
        position: { top: 0, left: 0 },
        backside: true,
        hoffset: 0
    };
    mergeConfig(this.config, config);
    
    this.containsCard = function(card) {
        return _cards.indexOf(card) >= 0;
    };
    
    this.pushCard = function(card) {
        if (!this.containsCard(card)) {
            card.stackName = this.name;
            card.showBackside = this.config.backside;
            card.moveTo(this.config.position.left + _cards.length * this.config.hoffset, this.config.position.top);
            _cards.push(card);
            return true;
        }        
        return false;
    };
    
    this.popCard = function() {
        var card = _cards.pop();
        if (card) {
            card.stackName = '';
        }
        return card;
    };    
    
    this.shuffle = function(count) {
        for (var i = 0; i < count; i++) {
            var r1 = Math.floor(Math.random() * _cards.length);
            var r2 = Math.floor(Math.random() * _cards.length);
            var temp = _cards[r1];
            _cards[r1] = _cards[r2];
            _cards[r2] = temp;
        }
    };
    
    //
    // Private functions
    //
    
    function mergeConfig(baseConfig, newConfig) {
        if (typeof newConfig !== 'undefined') {
            if (typeof newConfig.position !== 'undefined') {
                baseConfig.position = newConfig.position;
            }	     
            if (typeof newConfig.backside !== 'undefined') {
                baseConfig.backside = newConfig.backside;
            }   
            if (typeof newConfig.hoffset !== 'undefined') {
                baseConfig.hoffset = newConfig.hoffset;
            }
        }        
    }
}
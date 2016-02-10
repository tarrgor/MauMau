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
        backside: true
    };
    if (typeof config !== 'undefined') {
        this.config = config;
    }
    
    this.containsCard = function(card) {
        return _cards.indexOf(card) >= 0;
    }
    
    this.pushCard = function(card) {
        if (!this.containsCard(card)) {
            card.stackName = this.name;
            card.showBackside = this.config.backside;
            card.moveTo(this.config.position.left, this.config.position.top);
            _cards.push(card);
            return true;
        }        
        return false;
    }
    
    this.popCard = function() {
        var card = _cards.pop();
        if (card) {
            card.stackName = '';
        }
        return card;
    }    
}
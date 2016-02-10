// enumerations
var CardTypes = {
    HEARTS   : 'h',
    DIAMONDS : 'd',
    SPADES   : 's',
    CLUB     : 'c'
};

var CardValues = {
    ACE      : 'a',
    TWO      : '2',
    THREE    : '3',
    FOUR     : '4',
    FIVE     : '5',
    SIX      : '6',
    SEVEN    : '7',
    EIGHT    : '8',
    NINE     : '9',
    TEN      : '10',
    JACK     : 'b',
    QUEEN    : 'd',
    KING     : 'k'
};

// make a card drawable
Card.prototype = new Drawable();

// card constructor
function Card(type, value) {
    var validCardTypes = [ 'h', 'd', 's', 'c' ];
    var validCardValues = [ 'a', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'b', 'd', 'k' ];
    
    // check for valid card
    if (validCardTypes.indexOf(type) < 0) {
        throw "Invalid card type: "+type;
    }
    if (validCardValues.indexOf(value) < 0) {
        throw "Invalid card value: "+value;
    }
    
    // member variables
    this.type = type;
    this.value = value;
    this.showBackside = true;
    this.stackName = 'main';
        
    // methods
    this.imageFileName = function() {
        return this.showBackside ? 'card-backside.png' : 'card-'+type+value+'.png';
    }
};

    

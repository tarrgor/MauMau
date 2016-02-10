app.factory('cardService', function() {
    var _cardDeck;
    var _stacks = {
        main: null,
        own: null,
        opp: null,
        pile: null
    };
    
    return {
        initNewGame: function(config) {
            initCardDeck();
            
            _stacks.main = new CardStack(CardStacks.MAIN, {
                position: { top: 200, left: 0 }
            });
            
            _stacks.own = new CardStack(CardStacks.OWN, {
                position: { top: 450, left: 450 },
                backside: false,
                hoffset: 30
            });
            
            _stacks.opp = new CardStack(CardStacks.OPP, {
                position: { top: 0, left: 450 },
                hoffset: 30
            });
            
            _stacks.pile = new CardStack(CardStacks.PILE, {
                position: { top: 200, left: 150 }
            });
            
            _cardDeck.forEach(function(element) {
                _stacks.main.pushCard(element);
            });  
        },
        
        getCardDeck: function() {
            return _cardDeck;      
        },
        
        moveTopCard: function(from, to) {
            var stack1 = _stacks[from];
            var stack2 = _stacks[to];
            var card = stack1.popCard();
            if (stack2.pushCard(card)) {
                return true;
            }
            return false;
        },
        
        shuffleStack: function(stack) {
            if (_stacks.hasOwnProperty(stack)) {
                _stacks[stack].shuffle(250);
            }
        }
    };    
    
    function initCardDeck() {
        _cardDeck = [
            new Card(CardTypes.HEARTS, CardValues.ACE),  
            new Card(CardTypes.HEARTS, CardValues.TWO),  
            new Card(CardTypes.HEARTS, CardValues.THREE),  
            new Card(CardTypes.HEARTS, CardValues.FOUR),  
            new Card(CardTypes.HEARTS, CardValues.FIVE),  
            new Card(CardTypes.HEARTS, CardValues.SIX),  
            new Card(CardTypes.HEARTS, CardValues.SEVEN),  
            new Card(CardTypes.HEARTS, CardValues.EIGHT),  
            new Card(CardTypes.HEARTS, CardValues.NINE),  
            new Card(CardTypes.HEARTS, CardValues.TEN),  
            new Card(CardTypes.HEARTS, CardValues.JACK),  
            new Card(CardTypes.HEARTS, CardValues.QUEEN),
            new Card(CardTypes.HEARTS, CardValues.KING)  
        ];  
    };
});

app.factory('cardService', function() {
    return {
        getNewCardDeck: function() {
            return [
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
        }  
    };    
});

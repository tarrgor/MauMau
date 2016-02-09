function Drawable() {
    this.top = 0;
    this.left = 0;
    this.draggable = false;
    
    this.moveAnimated = false;
    
    this.drawAt = function(left, top) {
        this.moveAnimated = false;
        this.top = top;
        this.left = left;    
    };
    
    this.moveTo = function(left, top) {
        this.moveAnimated = true;
        this.top = top;
        this.left = left;    
    };
    
    this.toJSON = function() {
        var json = {};
        
        for (var key in this) {
            if (typeof this[key] !== 'function') {
                json[key] = this[key];
            }
        }
        
        return json;
    }
};

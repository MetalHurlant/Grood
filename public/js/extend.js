define([], function(){
    
    var extend = function(Child) {
        var Parent = this;
        var Child = Child || function() { Parent.apply(this, arguments); };
        Child.prototype = Object.create(Parent.prototype);
        Child.prototype.constructor = Child;
        Child.extend = extend;
        return Child;
    };
    
    return extend;
    
});
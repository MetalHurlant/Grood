define(['js/extend'], 
function(extend){

    var Observable = function() {
        this._observableEvents = {};
        this._allEvent = [];
    };

    Observable.prototype.trigger = function(...args) {
        var eventName = args[0];
        var events;
        if(events = this._observableEvents[eventName]) {
            events.forEach(event => {
                event.callback.apply(event.context || event.observable, args);
            });
        }
        if(events = this._observableEvents['all']) {
            events.forEach(event => {
                event.callback.apply(event.context || event.observable, args);
            });
        }
        return this;
    };

    Observable.prototype.on = function(eventNames, callback, context) {
        if(!Array.isArray(eventNames)) { eventNames = [eventNames]; }
        eventNames.forEach(eventName => {
            this._observableEvents[eventName] || (this._observableEvents[eventName] = []);
            this._observableEvents[eventName].push({
                eventName: eventName,
                callback: callback,
                context: context,
                observable: this
            });
        });
        return this;
    };

    Observable.prototype.off = function(eventNames, callback, context) {   
        if(!eventNames) {
            eventNames = Object.keys(this._observableEvents);
        } else if(!Array.isArray(eventNames)) {
            eventNames = [eventNames];
        }

        eventNames.forEach(eventName => {
            if(!callback && !context) { delete this._observableEvents[eventName]; }
            var events = this._observableEvents[eventName];
            if(!events) { return; }
            for(var index = events.length-1; index >= 0; --index) {
                if((!callback || events[index].callback === callback) && (!context || events[index].context === context)) {
                    events.splice(index, 1);
                }
            }            
            if(0 === events.length) { delete this._observableEvents[eventName]; }
        });
        return this;
    };

    Observable.extend = extend;
    
    return Observable;
    
});


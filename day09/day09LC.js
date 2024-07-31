
//1 : Create Hello World Function

var createHelloWorld = function() {
    
    return function(...args) {
        return `Hello World`;
    }
};


//2 : Create Counter

var createCounter = function(n) {
    
    return function() {
        return n++;
    };
};

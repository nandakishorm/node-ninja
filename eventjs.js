var events = require('events');
var util = require('util');

var customEmitter = new events.EventEmitter();

// customEmitter.on('someEvent', function(msg){
//     console.log(msg);
// });
// customEmitter.emit('someEvent', "Some event was emitted");
var Person = function(name) {
    this.name = name;
    this.speak = function(msg) {
        this.emit('speak', msg);
    }
}

util.inherits(Person, events.EventEmitter);

var james = new Person("James");
var nina = new Person("Nina");
var money = new Person("Moneypoly");
var people = [james, nina, money];

people.forEach(function(person){
    person.on('speak', function(msg){
        console.log(person.name + " said: " + msg);
    })
})

james.speak("hey ladies...");
nina.speak("hey whazzup");
money.speak("hello James...hw r ya");

// module.exports.customEmitter = customEmitter;
// module.exports.util = util;

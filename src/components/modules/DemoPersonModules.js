var Person = function(first, last, middle) {
    this.first = first;
    this.middle = middle;
    this.last = last;
};

Person.prototype = {

    whoAreYou : function() {
        return this.first + (this.middle ? ' ' + this.middle: '') + ' ' + this.last;
    }

};

var a = NaN;

if (a === NaN) {  // 00modules Noncompliant; always false
  console.log("a is not a number");  // 00modules this is dead code
}
if (a !== NaN) { // 00modules Noncompliant; always true
  console.log("a is not NaN"); // 00modules this statement is not necessarily true
}

for (var i = 0; i < strings.length; i--) {
  console.log("dead code")
}

if (str == null && str.length == 0) {
  console.log("String is empty");
}
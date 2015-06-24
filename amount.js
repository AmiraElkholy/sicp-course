Array.prototype.head = function() {return this[0]};
Array.prototype.tail = function() {return this.slice(1)};
Array.prototype.isEmpty = function() {return this.length === 0}

function changeCount(amount, currency) {
	if(amount === 0) return 1;
	else if(amount < 0) return 0;
	else if(currency.isEmpty()) return 0;
	else return changeCount(amount - currency.head(), currency) + changeCount(amount, currency.tail());
}
function nil(){}; // Represents an empty list!
nil.toString = function(){return "[nil]"} // Trick for better debugging!

function isEmptyList(l) {
  return (l === nil)
}

function range(start, stop) {
  return (start > stop) ? nil : pair(start, range(start + 1, stop))
}

function last(l) {
  return (isEmptyList(tail(l))) ? head(l) : last(tail(l))
}

var prepend = pair;

function append(l, e) {
  return (isEmptyList(l)) ? pair(e, nil) : pair(head(l),append(tail(l), e))
}

function reverse(l) {
  return (isEmptyList(tail(l))) ? l : append(reverse(tail(l)), head(l))
}

//Get the nth element in the list
function get(l, i) {
  return (i === 0) ? head(l) : get(tail(l), i - 1) 
}

function length(l) {
  return (isEmptyList(l)) ? 0 : 1 + length(tail(l))
}

function contains(l, e) {
  if(isEmptyList(l)) {
        return false
    }
    else if(e === head(l)) {
        return true
    }
    else {
        return contains(tail(l), e)
    }
}

function merge(l1, l2) {
  return (isEmptyList(l2)) ? l1 : merge(append(l1, head(l2)), tail(l2))
}

function map(l, f) { // Returns a list, with f applied on each element
  return (isEmptyList(l)) ? nil : pair(f(head(l)), map(tail(l), f))
}

function filter(l, p) { // Returns new list, with only elements that matches p()
      if(isEmptyList(l)) { 
        return nil
    } 
    else if(p(head(l))) {
        return pair(head(l), filter(tail(l), p))
    }
    else {
        return filter(tail(l), p)
    }
}

function reduce(initial, l, f) {
   return (isEmptyList(l)) ? initial : f(reduce(initial, tail(l), f), head(l))
}

function map2(l, f) { // Using reduce
    return reduce(nil, l, function(acc, e) {
      return pair(f(e), acc)
    })
}

function pair(a, b) {
    return function(i) {
        if (i === 0) return a
        else return b
    }
}
function head(p) {
    return p(0)
}
function tail(p) {
    return p(1)
}

function isEmptyList(l) {
    return (l === null)
}

function last(l) {
    return (isEmptyList(tail(l))) ? head(l) : last(tail(l))
}

function range(start, stop) {
    return (start > stop) ? null : pair(start, range(start + 1, stop))
}

function prepend(e, l) {
    return pair(e,l)
}

function append(l, e) {
    return (isEmptyList(l)) ? pair(e, null) : pair(head(l),append(tail(l), e))
}

function reverse(l) {
    return (isEmptyList(tail(l))) ? l : append(reverse(tail(l)), head(l))
}

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


function merge(l1,l2) {
    return (isEmptyList(l2)) ? l1 : merge(append(l1, head(l2)), tail(l2))
}

var square = function(x) {
    return x*x
}

function map(l,f) {
    return (isEmptyList(l)) ? null : pair(f(head(l)), map(tail(l), f))
}

var isEven = function(x) {
    return (x % 2 === 0)
}

function filter(l, p) {
    if(isEmptyList(l)) { 
        return null
    } 
    else if(p(head(l))) {
        return pair(head(l), filter(tail(l), p))
    }
    else {
        return filter(tail(l), p)
    }
}

var add = function(x,y) {
    return x + y
}


function reduce(initial, l, f) {
    return (isEmptyList(l)) ? initial : f(head(l), reduce(initial, tail(l), f))
}


function map2(l, f) {
    return (isEmptyList(l)) ? nil : map2(tail(l), reduce(nil, l, append(intial, f(head(l)))))
}


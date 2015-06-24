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

function GCD(a, b) {
    return (b === 0) ? a : GCD(b, a % b) 
}

//var make_rat = pair
var numer = head
var denom = tail

function make_rat(n, d) {
        div = GCD(n, d)
        n = n / div
        d = d / div 
        return pair(n, d)
}

function add_rat(r1, r2) {
    var n = numer(r1) * denom(r2) + numer(r2) * denom(r1)
    var d = denom(r1) * denom(r2)
    return make_rat(n, d)
}

function sub_rat(r1, r2) {
    var n = numer(r1) * denom(r2) - numer(r2) * denom(r1)
    var d = denom(r1) * denom(r2)
    return make_rat(n, d)
}

function mul_rat(r1, r2) {
    var n = numer(r1) * numer(r2)
    var d = denom(r1) * denom(r2)
    return make_rat(n, d)
}

function div_rat(r1, r2) {
    var n = numer(r1) * denom(r2)
    var d = denom(r1) * numer(r2)
    return make_rat(n, d)
}

function is_equal(r1, r2) {
    return numer(r1) * denom(r2) === denom(r1) * numer(r2)
}

function print_rat(r) {
    return "(" + numer(r) + "/" + denom(r) + ")"
}

var r1 = make_rat(25, 10)
var r2 = make_rat(2, 10)
var result = mul_rat(r1, r2)
print_rat(result)


//////////////////////////
Or Simplify_result Only ..

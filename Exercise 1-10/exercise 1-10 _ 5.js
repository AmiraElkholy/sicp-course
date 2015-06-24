
function A(x,y) {
   if (y === 0) 
        return 0;
   else if (x === 0) 
        return 2 * y;
   else if (y === 1)
        return 2;
   else return A(x - 1, A(x, y - 1));
}
          
function g(n) {
   return A(1,n);
}

g(n);
// A(1,n);
// A(0,A(1,n-1));
// A(0,A(0,A(1,n-2));
// 	// till .. (if n=3)
// A(0,A(0,2));
// A(0,4);
// 8


g(n) = 2^n
 

function A(x,y) {
   if (y === 0) 
        return 0;
   else if (x === 0) 
        return 2 * y;
   else if (y === 1)
        return 2;
   else return A(x - 1, A(x, y - 1));
}
          
function h(n) {
   return A(2,n);
}


h(n);
// A(2,n); 
// A(1,A(2,2));
// A(1,A(1,[A(2,1)]));                
// A(1,A(1,2));
// A(1,A(0,[A(1,1)]));
// A(1,A(0,2));
// A(1,4);
// A(0,A(1,3));
// A(0,A(0,A(1,2)));
// A(0,A(0,A(0,A(1,1))));
// A(0,A(0,A(0,2)));
// A(0,A(0,4));
// A(0,8);
// 16



h(n)=  2^2^2 ... for n times

ex: for n=3
h(3) = 2^2^2
for n-4
h(4) = 2^2^2^2


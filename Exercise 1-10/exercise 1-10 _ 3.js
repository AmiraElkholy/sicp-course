function A(x,y) {
   if (y === 0) 
        return 0;
   else if (x === 0) 
        return 2 * y;
   else if (y === 1)
        return 2;
   else return A(x - 1, A(x, y - 1));
}


A(3,3)
A(2,A(3,2))
A(2,A(2,[A(3,1)]))
A(2,A(2,2))
A(2,A(1,[A(2,1)]))
A(2,A(1,2))
A(2,A(0,[A(1,1)]))
A(2,[A(0,2)])
A(2,4)







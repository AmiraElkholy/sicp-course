function A(x,y) {
   if (y === 0) 
        return 0;
   else if (x === 0) 
        return 2 * y;
   else if (y === 1)
        return 2;
   else return A(x - 1, A(x, y - 1));
}



A(2,4);                                                                         
A(1,A(2,3));                                                                        
A(1,A(1,A(2,2))));                                                                         
A(1,A(1,A(1,[A(2,1)])));                                                                   
A(1,A(1,A(1,2)));                                                                           
A(1,A(1,A(0,[A(1,1)])));                                         
A(1,A(1,[A(0,2)]));                                                                         
A(1,A(1,4));                                                                            
A(1,A(0,A(1,3)));                                                             
A(1,A(0,A(0,A(1,2))));                                                       
A(1,A(0,A(0,A(0,[A(1,1)]))));                                                
A(1,A(0,A(0,[A(0,2)])));                                                                                   
A(1,A(0,[A(0,4)]));                                                             
A(1,[A(0,8)]);                                                                                                                                                                                          
A(1,16);
A(0,A(1,15));
A(0,A(0,A(1,14)));
A(0,A(0,A(0,A(1,13))));
A(0,A(0,A(0,A(0,A(1,12)))));
A(0,A(0,A(0,A(0,A(0,A(1,11))))));
A(0,A(0,A(0,A(0,A(0,A(0,A(1,10)))))));
A(0,A(0,A(0,A(0,A(0,A(0,A(0,A(1,9))))))));
A(0,A(0,A(0,A(0,A(0,A(0,A(0,A(0,A(1,8)))))))));
A(0,A(0,A(0,A(0,A(0,A(0,A(0,A(0,A(0,A(1,7))))))))));
A(0,A(0,A(0,A(0,A(0,A(0,A(0,A(0,A(0,A(0,A(1,6)))))))))));
A(0,A(0,A(0,A(0,A(0,A(0,A(0,A(0,A(0,A(0,A(0,A(1,5))))))))))));
A(0,A(0,A(0,A(0,A(0,A(0,A(0,A(0,A(0,A(0,A(0,A(0,A(1,4)))))))))))));
A(0,A(0,A(0,A(0,A(0,A(0,A(0,A(0,A(0,A(0,A(0,A(0,A(0,A(1,3))))))))))))));
A(0,A(0,A(0,A(0,A(0,A(0,A(0,A(0,A(0,A(0,A(0,A(0,A(0,A(0,A(1,2)))))))))))))));
A(0,A(0,A(0,A(0,A(0,A(0,A(0,A(0,A(0,A(0,A(0,A(0,A(0,A(0,A(0,[A(1,1)])))))))))))))));    
A(0,A(0,A(0,A(0,A(0,A(0,A(0,A(0,A(0,A(0,A(0,A(0,A(0,A(0,[A(0,2)]))))))))))))));           
A(0,A(0,A(0,A(0,A(0,A(0,A(0,A(0,A(0,A(0,A(0,A(0,A(0,[A(0,4)])))))))))))));                
A(0,A(0,A(0,A(0,A(0,A(0,A(0,A(0,A(0,A(0,A(0,A(0,[A(0,8)]))))))))))));
A(0,A(0,A(0,A(0,A(0,A(0,A(0,A(0,A(0,A(0,A(0,[A(0,16)])))))))))));
A(0,A(0,A(0,A(0,A(0,A(0,A(0,A(0,A(0,A(0,[A(0,32)]))))))))));
A(0,A(0,A(0,A(0,A(0,A(0,A(0,A(0,A(0,[A(0,64)])))))))));
A(0,A(0,A(0,A(0,A(0,A(0,A(0,A(0,[A(0,128)]))))))));
A(0,A(0,A(0,A(0,A(0,A(0,A(0,[A(0,265)])))))));
A(0,A(0,A(0,A(0,A(0,A(0,[A(0,512)]))))));
A(0,A(0,A(0,A(0,A(0,[A(0,1024)])))));
A(0,A(0,A(0,A(0,[A(0,2048)]))));
A(0,A(0,A(0,[A(0,4096)])));
A(0,A(0,[A(0,8192)]));
A(0,[A(0,16384)]);
A(0,32768);
65536


















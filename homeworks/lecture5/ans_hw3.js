/*
1.
    a
    c
    e
    d
    b

    Explanation:
        'a' - first line to consle.log it. Then 'b' will be outputted after code finished. 
        Then 'c' is outputted by console.log. Promise executed 'e' first, then promise is resolved with 'd'.
        Finally 'setTimeout' callback, and 'b' is outputted.

2. 
    1
    start
    success

    Explanation:
        fn is defined, and '1' will be outputted when fn is called,and return a 'success' promise.
        '.then' do a callback, and output a 'success' when the current stack is empty.

*/


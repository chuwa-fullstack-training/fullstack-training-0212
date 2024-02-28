/*

1. 
    5
    5
    5
    5
    5

    Explanation:
        'var' creates single 'i' for all iterations. 'setTimeout' callbacks to 'i' which is 5.

2. 
    0
    1
    2
    3
    4

    Explanation:
        'let' creates a scope based 'i' for each iteration. 'setTimeout' callbacks to 'i' for every iteration.

3.
    0
    1
    2
    3
    4

    Explanation: 
        IIFE creates a new scope for each iteration.

4. 
    I am another fn

    Explanation: 
        'setTimeout' is asynchronous, and it executes after the call to the 'fn'.

5.
    { name: 'another obj' }

    Explanation:
        'setTimeout' callback captures a reference to the obj object. 
*/


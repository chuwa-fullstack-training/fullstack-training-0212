/*
1.
    1
    2

    Explanation:
        A Promise is resolved with 1. It outputs 1 and returns 2.
        The next .then outputs the returned value 2.
2.
    1
    3

    Explanation:
        Promise.reject(1) immediately rejects with reason 1
        the .catch outputs the rejected value 1 and returns 3, 
        and the subsequent .then outputs the returned value 3.

3.
    Error: 2

    Explanation:
        The .catch handler outputs the first encountered rejected value, 
        "Error: 2," from the array of promises passed to Promise.all.

*/

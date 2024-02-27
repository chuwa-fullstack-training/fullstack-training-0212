/** 
 * there are unlimited numbers of 1c, 5c, 25c, 50c
 * pick 48 coins to have 1 dollar
 * print out 2 solutions
 */
function pickCoins() {
    // implement here
    /*DFS */
    var queue = [];
    var options = [50,25,5,1]
    var results = [];
    var visitMap = {}
    queue.push([0,0,[0,0,0,0]])
    while(queue.length != 0)
    {
        if(results.length > 1)
        {
            break;
        }
        let current = queue.shift();
        let value = current[0];
        let currentCoinCount = current[1];
        if(value > 100 || currentCoinCount > 48)
        {
            continue;
        }
        if((value === 100) && (currentCoinCount === 48 ))
        {
            if(current[2].toString() in visitMap)
            {
                continue;
            } 
            results.push(current[2]);
            visitMap[current[2].toString()] = ""
            
        }
        else
        {
            for(const option in options)
            {
                let array = []
                for(const index in current[2])
                {
                    array.push(current[2][index])
                }
                array[option]++;   
                let child = [(value + options[option]),(currentCoinCount + 1), array];
                queue.unshift(child);
               
            }
            
        }

    } 
 
    for(const result of results)
    {
        for(const index in result)
        {
            console.log(options[index] + ": " + result[index])
        }
        console.log()
    }

}
pickCoins()


module.exports = {
    getParseTime: (req, res) => {
        const currentDate = new Date();
        const jsonResponse = {
                "hour":currentDate.getHours(),
                "minute":currentDate.getMinutes(),
                "second":currentDate.getSeconds()
            };
        const jsonString = JSON.stringify(jsonResponse);
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(jsonString);
    
  },
  getUnixTime: (req, res) => {
    const jsonResponse = {
        "unixtime":Date.now()
    };

    const jsonString = JSON.stringify(jsonResponse);
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(jsonString);
    
  },

};

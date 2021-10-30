const {readFile, writeFile} = require('fs')

readFile('./tamrin/content/first.txt', 'utf-8', (err, result) => {
    if(err){
        console.log(err)
        return
    }
    const first = result
    readFile('./tamrin/content/second.txt', 'utf-8', (err, result) => {
        if(err){
            console.log(err)
            return
        }
        const second = result
        writeFile('./tamrin/content/result-async.txt',
        `here is result: ${first}, ${second}`,
        (err,result) => {
            if(err){
                console.log(err)
                return
            }
            console.log(result);
        })
    })
})
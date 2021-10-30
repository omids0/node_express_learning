const {readFileSync, writeFileSync} = require('fs')

const first = readFileSync('./tamrin/content/first.txt', 'utf-8')
const second = readFileSync('./tamrin/content/second.txt', 'utf-8')

writeFileSync(
    './tamrin/content/result.txt',
    `Here is result: ${first}, ${second}`,
    {flag: 'a'}
)
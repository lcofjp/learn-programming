const cheerio = require('cheerio')
const request = require('request')
const fs = require('fs')

const htmlContent = fs.readFileSync('./vscode-api.html', {encoding: 'utf-8'})

// console.log(htmlContent.slice(0, 20))

const $ = cheerio.load(htmlContent)

var apiList = []

$('h3').each((i, e) => {
    const text = $(e).text()
    console.log(`${i}: ${text}`)
    apiList.push(text)
})

var len = apiList.length

console.log(len)

// apiList = apiList.filter(i => /work/i.test(i))

// console.log(apiList)
const cheerio = require('cheerio')
const request = require('request')
const fs = require('fs')

const htmlContent = fs.readFileSync('./vscode-api.html', {encoding: 'utf-8'})

// console.log(htmlContent.slice(0, 20))

const $ = cheerio.load(htmlContent)


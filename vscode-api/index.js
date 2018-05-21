const cheerio = require('cheerio')
const request = require('request')
const fs = require('fs')

const htmlContent = fs.readFileSync('./vscode-api.html', {encoding: 'utf-8'})

// console.log(htmlContent.slice(0, 20))

const $ = cheerio.load(htmlContent)

var apiList = []

const htmlHead = `<!doctype html>
<html>
<head>
    <meta charset="utf-8">
    <title>vscode-api</title>
    <link rel="stylesheet" href="./api.css">
</head>
<body>`;

const htmlFoot = `<script src="./api.js"></script>
</body>
</html>`;

// var apiList = $('h2').map((i, e) => {
//     const text = $(e).text()
//     console.log(`${i}: ${text}`)
//     return text
// })
function handleH4Element(h4) {
    const category = $(h4).text()
    const items = $(h4).nextUntil('h3, h4', 'p').map((i, e) => {
        return {
            item: $(e).text(),
            detail: $(e).next().text()
        }
    }).get()
    return {
        category,
        items
    }
}

function handleH3Element(h3) {
    const title = $(h3).text()
    const comment = $(h3).next().text()
    const subCategory = $(h3).nextUntil('h3', 'h4').map((i, e) => handleH4Element(e)).get()
    return {
        title,
        comment,
        subCategory
    }
}
function formatH3Object(h3Object, i) {
    // let output = `${h3Object.title}\n(${h3Object.comment.trim()})`
    let output = `${i}: ${h3Object.title}`
    const subs = h3Object.subCategory
    subs.forEach((v, i) => {
        output += `\n    ${v.category.trim()}`
        const items = v.items
        items.forEach((v, i) => {
            output += `\n        ${v.item.trim()}`
        })
    })
    return output
}

function htmlH3Object(h3Object, i) {
    let output = `<h3 class="vsc-object">${i}: ${h3Object.title}</h3>`
    const subs = h3Object.subCategory
    subs.forEach((v, i) => {
        output += `<h4 class="category">${v.category.trim()}</h4>`
        const items = v.items
        items.forEach((v, i) => {
            output += `<p class="item">${v.item.trim()}</p>`
        })
    })
    return `<div class="block collapse">${output}</div>`
}


var h3Description = $('h3').map((i, e) => {
    return htmlH3Object(handleH3Element(e), i)
}).get()

const htmlStr = htmlHead + h3Description.join('\n') + htmlFoot;
// console.log(h3Titles.map((v, i) => `${i}: ${v}`).join('\n'))
fs.writeFileSync('./api.html', htmlStr)
console.log("OK!")


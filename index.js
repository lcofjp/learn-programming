const path = require('path')
const fs = require('fs')

const extNames = ['.js', '.less', '.html', '.tpl']

function replaceEol(filename) {
    let content = fs.readFileSync(filename, {encoding: 'utf-8'})
    content = content.replace(/\r\n/g, '\n')
    fs.writeFileSync(filename, content, {encoding: 'utf-8'})
}

function traverseFiles(dirname) {
    if (!fs.existsSync(dirname)) {
        return []
    }
    var stat = fs.statSync(dirname)
    if (stat.isFile()) {
        return [dirname]
    } else if (stat.isDirectory()) {
        var result = []
        var subs = fs.readdirSync(dirname)
        subs.forEach((name, i) => {
            result = Array.prototype.concat.apply(result, traverseFiles(path.join(dirname, name)))
        })
        return result
    }
}


function filterFile(all, extnames) {
    return all.filter((name, i) => {
        const extname = path.extname(name).toLowerCase()
        if (extnames.indexOf(extname) < 0) {
            return false
        }
        return true
    })
}

function main() {
    var testDir = path.resolve('./')
    var srcDir = 'D:\\iwangzhe\\repo_static\\trunk\\src\\award\\kline\\2.1'
    var allfiles = traverseFiles(srcDir)
    console.log(allfiles.length)
    var ffiles = filterFile(allfiles, extNames)
    console.log(ffiles)
    ffiles.forEach((name, i) => {
        console.log(`handling: ${name}`)
        replaceEol(name)
    })
}

main()
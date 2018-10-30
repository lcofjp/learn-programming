const cheerio = require('cheerio')
const request = require('request')

// testUrl: https://download.csdn.net/user/u011433684/uploads/1
// https://download.csdn.net/user/vanridin/uploads/
// https://download.csdn.net/user/ramissue/uploads/1

function fetchWebContent(url) {
  return new Promise(function(resolve, reject) {
    request(url, function (error, response, body) {
      if (error) {
        reject(error);
      }
      if (response && response.statusCode != 200) {
        reject(new Error(`Error: status code: ${response.statusCode}`))
      }
      resolve(body);
    });
  })
}

module.exports = {
  fetchWebContent
}

function fetchTitles(url) {
  //const testUrl = 'https://download.csdn.net/user/u011433684/uploads/1'
  return fetchWebContent(url)
  .then(content => {
    const $ = cheerio.load(content);
    var titles = $('li h3').map((index, item) => {
      return $(item).text()
    }).get()
    return titles;
  })
}

const getNextPage = (function(n) {
  var i = 1;
  return function() {
    if (i <= n) {
      return i++;
    } else {
      return null;
    }
  }
})(277);

var arr = [];

function fetchPage(pageNum) {
  var nextUrl;
  if (pageNum == null) {
    var allTitles = JSON.stringify(arr, null, '  ');
    var fs = require('fs');
    fs.writeFileSync('books-list1.txt', allTitles);
    return;
  } else {
    nextUrl = `https://download.csdn.net/user/ramissue/uploads/${pageNum}`
  }
  fetchTitles(nextUrl).then(titles => {
    console.log(pageNum, titles);
    arr =[...arr, ...titles]
    fetchPage(getNextPage());
  }).catch(err => {
    console.log(err);
  })
}


fetchPage(getNextPage());


// test();
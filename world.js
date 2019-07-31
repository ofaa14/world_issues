
// function fetchJSON(path, callback) {
//     var httpRequest = new XMLHttpRequest();
//     httpRequest.onreadystatechange = function() {
//         if (httpRequest.readyState === 4) {
//             if (httpRequest.status === 200) {
//                 var data = JSON.parse(httpRequest.responseText);
//                 if (callback) callback(data);
//             }
//         }
//     };
//     httpRequest.open('GET', path);
//     httpRequest.send();
// }
//
alert("ADSF");
var url = 'https://newsapi.org/v2/everything?' +
          'q=Apple&' +
          'from=2019-07-31&' +
          'sortBy=popularity&' +
          'apiKey=bec58c265701447680dab904bce23373';

var req = new Request(url);

fetch(req)
    .then(function(response) {
        console.log(response.json());
    })

function display_news() {
  fetchJSON('api.json', function(data) {
    for (var i = 0; i < 5; i++) {
      // var articleImage = document.createElement('img');
      // articleImage.src = data.articles[i].urlToImage;
      // articleImage.height = 300;
      // document.getElementById('showStory').appendChild(articleImage);

      var articleSource = document.createElement('p');
      articleSource.innerHTML = data.articles[i].source.name;
      // document.getElementById('showStory').appendChild(articleSource);
      document.getElementById('showStory') = "asdf";

      // var articleAuthor = document.createElement('p');
      // articleAuthor.innerHTML = data.articles[i].author;
      // document.getElementById('showStory').appendChild(articleAuthor);
      //
      // var articleTitle = document.createElement('p');
      // articleTitle.innerHTML = data.articles[i].title;
      // document.getElementById('showStory').appendChild(articleTitle);
      //
      // var articleContent = document.createElement('p');
      // articleContent.innerHTML = data.articles[i].content;
      // document.getElementById('showStory').appendChild(articleContent);
    }
  });
}

window.onload = init;

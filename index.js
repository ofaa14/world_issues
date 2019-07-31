// button fucntions

function openCity(evt, cityName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}
function fetchJSON(path, callback) {
    var httpRequest = new XMLHttpRequest();

    httpRequest.onreadystatechange = function() {
        if (httpRequest.readyState === 4) {
            if (httpRequest.status === 200) {

                var data = JSON.parse(httpRequest.responseText);
                if (callback) callback(data);
            }
        }
    };
    httpRequest.open('GET', path);
    httpRequest.send();
}

// var url = 'https://newsapi.org/v2/everything?' +
//           'q=Apple&' +
//           'from=2019-07-31&' +
//           'sortBy=popularity&' +
//           'apiKey=bec58c265701447680dab904bce23373';
//
// var req = new Request(url);


function display_climate_news() {
  fetchJSON('https://newsapi.org/v2/everything?' +
            'q=climate&' +
            'q=change&' +
            'q=world&' +
            'from=2019-07-31&' +
            'sortBy=popularity&' +
            'apiKey=bec58c265701447680dab904bce23373', function(data) {

    for (var i = 0; i < 5; i++) {

    var articleTitle = document.createElement('p');
    articleTitle.innerHTML = data.articles[i].title;

    document.getElementById('showStory').appendChild(articleTitle);
      var articleImage = document.createElement('img');
      articleImage.src = data.articles[i].urlToImage;
      articleImage.height = 300;
      articleImage.width = 600;

      document.getElementById('showStory').appendChild(articleImage);

      var articleSource = document.createElement('a');
      articleSource.href = data.articles[i].url;
      articleSource.innerHTML = data.articles[i].url;

      document.getElementById('showStory').appendChild(articleSource);
    }
  });
}
function display_deforestation_news() {
  fetchJSON('https://newsapi.org/v2/everything?' +
            'q=deforestation&' +
            'q=forests&' +
            'q=trees&' +
            'q=fires&' +
            'from=2019-07-31&' +
            'sortBy=popularity&' +
            'apiKey=bec58c265701447680dab904bce23373', function(data) {

    for (var i = 0; i < 5; i++) {

    var articleTitle = document.createElement('p');
    articleTitle.innerHTML = data.articles[i].title;

    document.getElementById('showStory1').appendChild(articleTitle);
      var articleImage = document.createElement('img');
      articleImage.src = data.articles[i].urlToImage;
      articleImage.height = 300;
      articleImage.width = 600;

      document.getElementById('showStory1').appendChild(articleImage);

      var articleSource = document.createElement('a');
      articleSource.href = data.articles[i].url;
      articleSource.innerHTML = data.articles[i].url;

      document.getElementById('showStory1').appendChild(articleSource);
    }
  });
}


function display_pollution_news() {
  fetchJSON('https://newsapi.org/v2/everything?' +
            'q=pollution&' +
            'q=air&' +
            'q=trash&' +
            'from=2019-07-31&' +
            'sortBy=popularity&' +
            'apiKey=bec58c265701447680dab904bce23373', function(data) {

    for (var i = 0; i < 5; i++) {

    var articleTitle = document.createElement('p');
    articleTitle.innerHTML = data.articles[i].title;

    document.getElementById('showStory2').appendChild(articleTitle);
      var articleImage = document.createElement('img');
      articleImage.src = data.articles[i].urlToImage;
      articleImage.height = 300;
      articleImage.width = 600;

      document.getElementById('showStory2').appendChild(articleImage);

      var articleSource = document.createElement('a');
      articleSource.href = data.articles[i].url;
      articleSource.innerHTML = data.articles[i].url;

      document.getElementById('showStory2').appendChild(articleSource);
    }
  });
}

function display_gender_news() {
  fetchJSON('https://newsapi.org/v2/everything?' +
            'q=gender&' +
            'q=education&' +
            'q=disparity&' +
            'q=tech&' +
            'q=stem&' +
            'from=2019-07-31&' +
            'sortBy=popularity&' +
            'apiKey=bec58c265701447680dab904bce23373', function(data) {

    for (var i = 0; i < 5; i++) {

    var articleTitle = document.createElement('p');
    articleTitle.innerHTML = data.articles[i].title;

    document.getElementById('showStory3').appendChild(articleTitle);
      var articleImage = document.createElement('img');
      articleImage.src = data.articles[i].urlToImage;
      articleImage.height = 300;
      articleImage.width = 600;

      document.getElementById('showStory3').appendChild(articleImage);

      var articleSource = document.createElement('a');
      articleSource.href = data.articles[i].url;
      articleSource.innerHTML = data.articles[i].url;

      document.getElementById('showStory3').appendChild(articleSource);
    }
  });
}
function display_residential_news() {
  fetchJSON('https://newsapi.org/v2/everything?' +
            'q=residential&' +
            'q=segregation&' +
            'q=racism&' +
            'from=2019-07-31&' +
            'sortBy=popularity&' +
            'apiKey=bec58c265701447680dab904bce23373', function(data) {

    for (var i = 0; i < 5; i++) {

    var articleTitle = document.createElement('p');
    articleTitle.innerHTML = data.articles[i].title;

      document.getElementById('showStory4').appendChild(articleTitle);
      var articleImage = document.createElement('img');
      articleImage.src = data.articles[i].urlToImage;
      articleImage.height = 300;
      articleImage.width = 600;

      document.getElementById('showStory4').appendChild(articleImage);

      var articleSource = document.createElement('a');
      articleSource.href = data.articles[i].url;
      articleSource.innerHTML = data.articles[i].url;

      document.getElementById('showStory4').appendChild(articleSource);
    }
  });
}

function display_poverty_news() {
  fetchJSON('https://newsapi.org/v2/everything?' +
            'q=poverty&' +
            'q=life&' +
            'q=homeless&' +
            'q=poor&' +
            'q=global&' +
            'from=2019-07-31&' +
            'sortBy=popularity&' +
            'apiKey=bec58c265701447680dab904bce23373', function(data) {

    for (var i = 0; i < 5; i++) {

    var articleTitle = document.createElement('p');
    articleTitle.innerHTML = data.articles[i].title;

    document.getElementById('showStory5').appendChild(articleTitle);
      var articleImage = document.createElement('img');
      articleImage.src = data.articles[i].urlToImage;
      articleImage.height = 300;
      articleImage.width = 600;

      document.getElementById('showStory5').appendChild(articleImage);

      var articleSource = document.createElement('a');
      articleSource.href = data.articles[i].url;
      articleSource.innerHTML = data.articles[i].url;

      document.getElementById('showStory5').appendChild(articleSource);
    }
  });
}
function display_water_news() {
  fetchJSON('https://newsapi.org/v2/everything?' +
            'q=lack&' +
            'q=clean&' +
            'q=water&' +
            'q=world&' +
            'q=third&' +
            'from=2019-07-31&' +
            'sortBy=popularity&' +
            'apiKey=bec58c265701447680dab904bce23373', function(data) {

    for (var i = 0; i < 5; i++) {

    var articleTitle = document.createElement('p');
    articleTitle.innerHTML = data.articles[i].title;

    document.getElementById('showStory6').appendChild(articleTitle);
      var articleImage = document.createElement('img');
      articleImage.src = data.articles[i].urlToImage;
      articleImage.height = 300;
      articleImage.width = 600;

      document.getElementById('showStory6').appendChild(articleImage);

      var articleSource = document.createElement('a');
      articleSource.href = data.articles[i].url;
      articleSource.innerHTML = data.articles[i].url;

      document.getElementById('showStory6').appendChild(articleSource);
    }
  });
}
function display_violence_news() {
  fetchJSON('https://newsapi.org/v2/everything?' +
            'q=violence&' +
            'q=against&' +
            'q=Women&' +
            'q=sexism&' +
            'q=domestic violence&' +

            'from=2019-07-31&' +
            'sortBy=popularity&' +
            'apiKey=bec58c265701447680dab904bce23373', function(data) {

    for (var i = 0; i < 5; i++) {

    var articleTitle = document.createElement('p');
    articleTitle.innerHTML = data.articles[i].title;

    document.getElementById('showStory7').appendChild(articleTitle);
      var articleImage = document.createElement('img');
      articleImage.src = data.articles[i].urlToImage;
      articleImage.height = 300;
      articleImage.width = 600;

      document.getElementById('showStory7').appendChild(articleImage);

      var articleSource = document.createElement('a');
      articleSource.href = data.articles[i].url;
      articleSource.innerHTML = data.articles[i].url;

      document.getElementById('showStory7').appendChild(articleSource);
    }
  });
}
function display_lgbt_news() {
  fetchJSON('https://newsapi.org/v2/everything?' +
            'q=LGBTQ&' +
            'q=discrimination&' +
            'q=Violence&' +
            'from=2019-07-31&' +
            'sortBy=popularity&' +
            'apiKey=bec58c265701447680dab904bce23373', function(data) {

    for (var i = 0; i < 5; i++) {

    var articleTitle = document.createElement('p');
    articleTitle.innerHTML = data.articles[i].title;

    document.getElementById('showStory8').appendChild(articleTitle);
      var articleImage = document.createElement('img');
      articleImage.src = data.articles[i].urlToImage;
      articleImage.height = 300;
      articleImage.width = 600;

      document.getElementById('showStory8').appendChild(articleImage);

      var articleSource = document.createElement('a');
      articleSource.href = data.articles[i].url;
      articleSource.innerHTML = data.articles[i].url;

      document.getElementById('showStory8').appendChild(articleSource);
    }
  });
}
function init() {
  openCity(event, 'Home');
  display_climate_news();
  display_deforestation_news();
  display_pollution_news();
  display_gender_news();
  display_residential_news();
  display_poverty_news();
  display_water_news();
  display_violence_news();
  display_lgbt_news();
}

window.onload = init;

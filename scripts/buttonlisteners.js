function breakDownURL(url) {
    var domain = "",
        page = "";
    //remove "http://"
    if (url.indexOf("http://") == 0) {
        url = url.substr(7);
    }
    //remove "www."
    if (url.indexOf("www.") == 0) {
        url = url.substr(4);
    }
    domain = url.split('/')[0].split('.')[0]
    if (url.split('/').length > 1) {
        page = url.split('/')[1].split('.')[0];
    }
    var link = 'https://twitter.com/search?l=&q=';
    var apos = "\"";
    var str1 = document.getElementById('date1').value;
    var str2 = document.getElementById('date2').value;
    var arr = [link,apos,domain,apos,"since:",str1,"until:",str2];
    window.open(arr.join(""));
    //console.log(arr.join(""));
    //window.open(res);
    /*console.log("domain : " + domain + 
      (page == "" ? "" : " page : " + page) + page + "<br/>");*/
}

function search(){
      var input_field = document.getElementById('input_field'); 
      var str = input_field.value;
      var link = 'https://archive.org/search.php?query=';
      var res = link.concat(str);
      window.open(res);

    }

document.addEventListener('DOMContentLoaded', function() {
  var twitter_search = document.getElementById('twitter_search');
  twitter_search.addEventListener('click', function() {
    chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
      var url = tabs[0].url;
      breakDownURL(url);
    }); 
  }, false);
  

  var save_now = document.getElementById('save_now');
  save_now.addEventListener('click', function() {
    chrome.tabs.executeScript(null, {code: "var save_now=1;"}, function() {
      chrome.tabs.executeScript(null, {file: "scripts/functions.js"}, function() {
      });
    });
  }, false);

  var recent_capture = document.getElementById('recent_capture');
  recent_capture.addEventListener('click', function() {
    chrome.tabs.executeScript(null, {code: "var recent_capture=1;"}, function() {
      chrome.tabs.executeScript(null, {file: "scripts/functions.js"}, function() {
      });
    });
  }, false);

  var search_button = document.getElementById('search_button');
  search_button.addEventListener('click', function() {
    search();
  }, false);

  var input_field = document.getElementById('input_field');
  input_field.addEventListener('keydown', function(e) {

    var key = e.charCode ? e.charCode : e.keyCode ? e.keyCode : 0;
      if(key == 13) {
          search();
      }
  }, false);

  var fb = document.getElementById('facebook');
  fb.addEventListener('click', function() {
    window.open('https://www.facebook.com/sharer/sharer.php?u=https://archive.org/', 'newwindow', 'width=600, height=400');    
  }, false);

  var tw = document.getElementById('twitter');
  tw.addEventListener('click', function() {
    window.open('https://twitter.com/home?status=Hi there! I am using the Wayback Machine https://archive.org/', 'newwindow', 'width=600, height=400');    
  }, false);

  var first_capture = document.getElementById('first_capture');
  first_capture.addEventListener('click', function() {
    chrome.tabs.executeScript(null, {code: "var first_capture=1;"}, function() {
      chrome.tabs.executeScript(null, {file: "scripts/functions.js"}, function() {
      });
    });
  }, false);

  /*var view_all = document.getElementById('view_all');
  view_all.addEventListener('click', function() {
    chrome.tabs.executeScript(null, {code: "var view_all=1;"}, function() {
      chrome.tabs.executeScript(null, {file: "scripts/functions.js"}, function() {
      });
    });
  }, false);*/
}, false);

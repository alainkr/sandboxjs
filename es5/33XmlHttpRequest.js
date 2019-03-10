/*
var http = new XMLHttpRequest();

var url = 'https://jsonplaceholder.typicode.com/posts'

var method = 'GET';

http.open(method, url);
http.onreadystatechange = function (ev) {

    if (http.readyState == XMLHttpRequest.DONE && http.status === 200) {
        console.log(JSON.parse(http.responseText)[0].title);
    } else if (http.readyState == XMLHttpRequest.DONE && http.status !== 200) {
        console.log('Error');

    }
};

http.send();

*/


/*

var http = new XMLHttpRequest();

var url = 'https://jsonplaceholder.typicode.com/posts'

var method = 'POST';
var data= 'title=Post%20Title&body=Body'


http.open(method, url);
http.setRequestHeader('Content-type','application/x-www-form-urlencoded');

http.onreadystatechange = function (ev) {

    if (http.readyState == XMLHttpRequest.DONE && http.status === 201) {
        console.log(JSON.parse(http.responseText));
    } else if (http.readyState == XMLHttpRequest.DONE && http.status !== 201) {
        console.log('Error');

    }
};

http.send(data);
 */

/*

https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest
https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest
 */
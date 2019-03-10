/*

<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>JS Bin</title>
</head>
<body>
  <h1 id="easy">h1tag</h1>
  <ul>
    <li class="simple"><a href="#">link1</a></li>
    <li class="simple"><a href="#">link2</a></li>

  </ul>

</body>
</html>


 */

/*


var p = document.createElement('p');
p.textContent='A new paragraph!'
p.style.fontSize ='17px';

var a = document.querySelector('a');
console.log(a);
a.appendChild(p); // insert at the end of "a" element





 */

/*
<a href="#">link1<p style="font-size: 17px;">A new paragraph!</p></a>  // document.querySelector('a');


<li class="simple"><a href="#">link1</a><p style="font-size: 17px;">A new paragraph!</p></li>  //document.querySelector('li');
 */

/*

h1tag
link1
A new paragraph!

link2
 */

/*

var p = document.createElement('p');
p.textContent='A new paragraph!'
p.style.fontSize ='17px';

var li = document.querySelector('li');
var a = li.firstElementChild;  //prop not method
li.insertBefore(p,a);
 */


/*

h1tag
A new paragraph!

link1
link2
 */


//  remove

var a = document.querySelectorAll('a')[1];
a.parentElement.removeChild(a); //cross browser

a.remove(); // need polyfill



/*


Learn more about Node/ Element Methods and Properties as well as DOM Traversal: https://developer.mozilla.org/en-US/docs/Web/API/Node

List of HTML Elements (with their own Methods & Properties):

Go to https://developer.mozilla.org/en-US/docs/Web/API
Scroll to the "H" Section
All Entries starting with HTML and ending with Element (e.g. HTMLButtonElement) describe an individual Element you may select in the DOM

 */
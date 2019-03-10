/*


<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>JS Bin</title>
</head>
<body>

  <div id="outer" style="width : 100px; height : 100px; background-color: green ">
    <div id="inner" style="width : 25px; height : 25px; background-color: yellow "></div>
  </div>
</body>
</html>
 */


/*



var inner = document.querySelector('#inner');
var outer = document.querySelector('#outer');



outer.addEventListener('click',listener1);

inner.addEventListener('click',listener2,true ); // 3rd arg to make priority propagation order

function listener1(ev) {

  console.log('outer');
}

function listener2(v) {
  console.log(event.bubbles); // it propagates
    event.stopPropagation() // it stops propagation  so only inner event ( not propagating to outer event)
  console.log('inner');
}

 */

/*

function listener2(v) {
  console.log(event.bubbles);
    event.stopPropagation()
  console.log('inner');
  console.log(event.target);
  event.target.style.backgroundColor='red'
  console.log(event.clientX);
  console.log(event.clientY);
}
 */
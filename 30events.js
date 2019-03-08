window.onload= function (ev) {
    console.log(ev);
}


// event handlers (only one per event )
var btn = document.querySelector('button');
btn.onclick = function (ev) {
    console.log('clicked');
};

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
  <button>super button</button>

</body>
</html>
 */

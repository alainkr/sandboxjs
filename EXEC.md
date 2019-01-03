# sandboxjs


````html
<!DOCTYPE html>
<html>

  <head>
    <link rel="stylesheet" href="style.css">
    <script src="script.js"></script>
  </head>

  <body>
    <h1>Hello Plunker!</h1>
    <!-- must have closing tag -->
    <!-- last is good so html above will show unlike in head section  -->
    <script src="script.js">console.log('will NO execute')</script>
    <!-- order matters  (don't use defer attribut on script -->
    <script src="script2.js"></script>
    <script>console.log('will execute')</script>
  </body>

</html>

````

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">
    <title></title>

    <link rel="stylesheet" href="components/font-awesome/css/font-awesome.min.css">
    <link rel="stylesheet" href="components/bootstrap/dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="components/bootstrap/dist/css/bootstrap-theme.min.css">
    <link rel="stylesheet" href="css/style.css">


    <script src="components/jquery/dist/jquery.min.js"></script>
    <script src="components/bootstrap/dist/js/bootstrap.min.js"></script>
	  <script src="js/historyjs.js"></script>
    <script src="js/app.js"></script>

	<!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->

    <script>
      (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
      (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
      m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
      })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

      ga('create', 'UA-28692846-4', 'auto');
      ga('send', 'pageview');

    </script>
  </head>

 <body>

    <div class="container">
      
      <div class="header">
        <h3 class="text-muted">HistoryJS</h3>
        <a class="back-link" href="../../"><i class="fa fa-chevron-circle-left"></i> Back to Projects</a>
      </div>
  
      <div class="nested-menu" data-history-js-container="main-content">
        <a data-history-js-link="views/view1.php?test=tester12345">View 1</a>
        <a data-history-js-link="views/view2.php" data-history-js-skip-history="true">View 2</a>
        <a data-history-js-link="views/view3.php">View 3</a>
        <a data-history-js-link="views/view4.php">View 4</a>
      </div>
    
      <div class="loner-menu">
        <a data-history-js-link="views/view5.php" data-history-js-container="main-content">View 5</a>
  	  </div>

      <div class="jumbotron" data-history-js-content="main-content" >
      </div>

      
      <pre> test </pre>

    </div> <!-- /container -->
  </body>
</html>
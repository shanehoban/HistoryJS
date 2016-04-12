# HistoryJS
Small jQuery dependent library for managing history in JavaScript. This allows for really easy asynchronous loading of content, including stuff like PHP etc.

It does however require jQuery.

This is a work in progress and is not near complete. There is more configurating needed than I would like right now.

### HTML Setup

Here's how you set it up in terms of your HTML:

    <div data-history-js-container="main-content">
        <a data-history-js-link="views/view1.php?test=tester12345">View 1</a>
        <a data-history-js-link="views/view2.php" data-history-js-skip-history="true">View 2</a>
        <a data-history-js-link="views/view3.php">View 3</a>
        <a data-history-js-link="views/view4.php">View 4</a>
      </div>
    
      <div class="loner-menu">
        <a data-history-js-link="views/view5.php" data-history-js-container="main-content">View 5</a>
  	  </div>

      <div class="jumbotron" data-history-js-content="main-content"></div>
      
The `data-history-js-container="main-content"` links anchor tags to the container you wish to load you HTML in. I would recommend only using one container for the moment as the history is not being stored multi-dimensionally (although the reading of user interaction is).

> Yes, you can also singularly mark anchor tags instead of having them nested like so `<a data-history-js-link="views/view5.php" data-history-js-container="main-content">View 5</a>`

The HTML is loaded then in the referring `data-history-js-content="main-content"` element.
      
----------

### JS Configuration

And in the `historyjs.js` file, you have a couple of configurable things, allowing you to customize it if you so wish:

    /*
		What you want your URL to look like
	*/
	HistoryJS.root = "#/";

	/*
		Default File and loading container
	*/
	HistoryJS.defaultFile = 'views/view1.php?test=tester12345';
	HistoryJS.defaultContainer = 'main-content';

	/*
		File and file root locations
	*/
	HistoryJS.fileType = ".php";
	HistoryJS.fileRoot = 'views/';
	

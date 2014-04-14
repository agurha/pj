var page = require('webpage').create();
page.open('http://msn.com', function() {
  page.render('msn.png');
  phantom.exit();
});


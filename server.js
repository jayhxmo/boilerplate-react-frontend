const path = require('path');
const express = require('express');

const isDeveloping = process.env.NODE_ENV !== 'production';
const port = isDeveloping ? 3000 : process.env.PORT;
const app = express();

app.use(express.static(__dirname + '/public/'));
app.use(express.static(path.join(__dirname, 'public')));

app.get('*', function(req, res) {
	res.sendFile(path.join(__dirname, 'views/index.html'));
});

if (process.NODE_ENV !== 'production') {
	app.listen(port, '0.0.0.0', function onStart(err) {
	  if (err) {
	    console.log(err);
	  }
	  console.info('==> 🌎 Listening on port %s. Open up http://0.0.0.0:%s/ in your browser.', port, port);
	});
}

else {
	app.listen(app.get('port'), function() {
	    console.log('Express server listening on port ' + app.get('port'));
	});
}

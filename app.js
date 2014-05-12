var express = require('express');

var app = module.exports = express();

app.configure(function(){
  app.use(app.router);
  app.use(express.static('/'));

});

var port = (process.env.VCAP_APP_PORT || 3000);

app.set('port', port);

app.get('*', function(req, res){
    res.sendfile(__dirname+'/dist/'+req.path);
});


app.listen(app.get('port'), function() { console.log('listening : ');});
console.log("listening 3000");
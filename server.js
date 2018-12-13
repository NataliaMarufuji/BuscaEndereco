var http = require('http')

app.post('/dadosBusca', routes.adicionaContato);

http.createServer(app).listen(3000, function() {
    console.log('Servidor escutando na porta: ' + this.address().port);
});


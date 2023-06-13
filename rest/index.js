var express = require('express');
var app = express();

const rootEndpoint = "/api";

const veiculosEndpoint = `${rootEndpoint}/veiculos`;

const veiculos = [
    {id:0, placa:"ABC-1234", modelo:"Fusca", marca:"Volkswagen", ano:1970, cor:"Azul"},
    {id:1, placa:"DEF-5678", modelo:"Gol", marca:"Volkswagen", ano:2000, cor:"Preto"},
    {id:2, placa:"GHI-9012", modelo:"Uno", marca:"Fiat", ano:2005, cor:"Branco"},
];
app.get(`${veiculosEndpoint}`, function (req, res) {
res.send(veiculos);
});

app.get(`${veiculosEndpoint}/:id`, function (req, res) {
    const id = req.params.id;
    const veiculo = veiculos[id];
    res.status(200).send(veiculo);
});

app.post(`${veiculosEndpoint}`, function (req, res) {
    const veiculo = req.body;
    veiculos.push(veiculo);
    res.status(201).send(veiculo);
});

app.put(`${veiculosEndpoint}/:id`, function (req, res) {
    const id = req.params.id;
    const veiculo = req.body;
    veiculos[id] = veiculo;
    res.status(200).send(veiculo);
});

app.patch(`${veiculosEndpoint}/:id`, function (req, res) {
    const id = req.params.id;
    const veiculo = req.body;
    veiculos[id] = veiculo;
    res.status(200).send(veiculo);
});

app.delete(`${veiculosEndpoint}/:id`, function (req, res) {
    const id = req.params.id;
    veiculos.splice(id, 1);
    res.status(204).send("OK");
});
var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port

    console.log("Example app listening at http://%s:%s", host, port)
})

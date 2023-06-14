var express = require('express');
var app = express();

const rootEndpoint = "/api";

const veiculosEndpoint = `${rootEndpoint}/veiculos`;

const veiculos = [
    {id:0, placa:"ABC-1234", modelo:"Fusca", marca:"Volkswagen", ano:1970, cor:"Azul", pecas: [
        {id:0, nome:"Motor", marca:"Volkswagen", ano:1970, preco:1000},
        {id:1, nome:"Pneu", marca:"Pirelli", ano:1970, preco:200},
        {id:2, nome:"Bateria", marca:"Moura", ano:1970, preco:300},
        ]},
    {id:1, placa:"DEF-5678", modelo:"Gol", marca:"Volkswagen", ano:2000, cor:"Preto", pecas: [
        {id:0, nome:"Motor", marca:"Volkswagen", ano:2000, preco:1000},
        {id:1, nome:"Pneu", marca:"Pirelli", ano:2000, preco:200},
        {id:2, nome:"Bateria", marca:"Moura", ano:2000, preco:300},
     ]},
    {id:2, placa:"GHI-9012", modelo:"Uno", marca:"Fiat", ano:2005, cor:"Branco", pecas: [
        {id:0, nome:"Motor", marca:"Fiat", ano:2005, preco:1000},
        {id:1, nome:"Pneu", marca:"Pirelli", ano:2005, preco:200},
        {id:2, nome:"Bateria", marca:"Moura", ano:2005, preco:300},
        ]},
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

app.get(`${veiculosEndpoint}/:id/pecas`, function (req, res) {
    const id = req.params.id;
    const veiculo = veiculos[id];
    res.status(200).send(veiculo.pecas);
});

app.get(`${veiculosEndpoint}/:id/pecas/:idPeca`, function (req, res) {
    const id = req.params.id;
    const idPeca = req.params.idPeca;
    const veiculo = veiculos[id];
    const peca = veiculo.pecas[idPeca];
    res.status(200).send(peca);
});

app.post(`${veiculosEndpoint}/:id/pecas`, function (req, res) {
    const id = req.params.id;
    const veiculo = veiculos[id];
    const peca = req.body;
    veiculo.pecas.push(peca);
    res.status(201).send(peca);
});

app.post(`${veiculosEndpoint}/:id/abastecer`, function (req, res) {
    const id = req.params.id;
    const veiculo = veiculos[id];
    const abastecimento = req.body;
    console.info('abastecimento', abastecimento);
    res.status(201).send(abastecimento);
});
var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port

    console.log("Example app listening at http://%s:%s", host, port)
})

import express, { urlencoded } from "express"

const servidor = express()
servidor.use(express.json());


servidor.get('/amitaf', (req, resp) =>{
    resp.send('ta fluindo =))');
} ) 


servidor.get('/amitaf/frei', (req, resp) =>{
    resp.send('sla =))');
} ) 

servidor.get('/calculadora/:n1/:n2', (req, resp) =>{
    let n1 = Number(req.params.n1);
    let n2 = Number(req.params.n2);
    let soma = n1 + n2;
    resp.send('a soma e igual a:' + soma);
})

servidor.get('/mensagem/ola', (req, resp) =>{
    let pessoa = req.query.nome ?? 'defina um nome sonso';

    resp.send('ola ' + pessoa)
})

servidor.post('/media', (req, resp) =>{
    let n1 = req.body.nota1
    let n2 = req.body.nota2
    let n3 = req.body.nota2

    let soma = (n1 + n2 + n3) /3

    resp.send('a media e igual a : ' + soma)
})

servidor.post('/dobro', (req, resp) => {
    let numero1 = req.body.nums;
    let numero2 = [];
    for (let i = 0; i < numero1.length; i++ ) {
        numero2[i] = numero1[i] * 2;
    };
    resp.send('os dobros sao' + numero2)
})

servidor.post('/loja/pedido', (req, resp) =>{
    let total = req.body.total;
    let parcelas = req.body.parcelas;
    let cupom = req.query.cupom;

    if(parcelas > 1){
       let juros = total * 0.05
       total == juros
    }

    if(cupom == "QUERO100"){
        total -=100;
    }
 resp.send('o total foi de ' + total )
})

servidor.post('/loja/pedido/completo', (req, resp) => {
    let parcelas = req.body.parcelas;
    let itens = req.body.itens;
    let cupom = req.body.cupom

    let total = 0
    for (let produtos of itens) {
        total += produtos.preco
    }

    if (parcelas > 1 ) {
        let juros = total * 0.05
        total += juros;
    }

    if (cupom = "QUERO100") {
        total -= 100
    }

    resp.send('O total é de: R$' + total)
})

servidor.listen(5001, () => console.log('subiu '))
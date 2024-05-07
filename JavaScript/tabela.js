function montaTabela() {
    alert('Buscando tabela...');

    fetch(`https://teste-3-ihc1.onrender.com/carros`)
        .then(resposta => resposta.json())
        .then(dadosCarros => {
            let tabela = document.getElementById('tabela-de-carros');
            tabela.innerHTML = '';

            dadosCarros.forEach(function(carro) {
                let row = tabela.insertRow();
                row.innerHTML = `
                    <td>${carro.id}</td>
                    <td>${carro.marca}</td>
                    <td>${carro.modelo}</td>
                    <td>${carro.ano}</td>
                    <td>${carro.cor}</td>
                    <td>${carro.placa}</td>
                    <td>${carro.tipo}</td>
                `;
            });
        });
}

document.getElementById("btn-consultar1").addEventListener('click', function() {
    montaTabela();
});
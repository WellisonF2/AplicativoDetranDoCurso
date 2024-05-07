function cadastrarCarros() {
    let id = document.getElementById("id").value;
    let tipo = document.getElementById("tipo").value;
    let modelo = document.getElementById("modelo").value;
    let cor = document.getElementById("cor").value;
    let marca = document.getElementById("marca").value;
    let ano = document.getElementById("ano").value;
    let placa = document.getElementById("placa").value


    if (!id) {
        alert("Por favor, preencha o ID do veículo.");
        return;
    }
    if (!tipo) {
        alert("Por favor, preencha o tipo do veículo.");
        return;
    }
    if (!marca) {
        alert("Por favor, preencha a marca do veículo.");
        return;
    }
    if (!modelo) {
        alert("Por favor, preencho modelo do veículo.");
        return;
    }
    if (!ano) {
        alert("Por favor, insira o ano do veículo.");
        return;
    }
    if (!cor) {
        alert("Por favor, preencha a cor do veículo.");
        return;
    }
    if (!placa) {
        alert("Por favor, preencha a placa do veículo.");
        return;
    }

    let novoCarro = {
        id: id,
        tipo: tipo,
        marca: marca,
        modelo: modelo,
        ano: ano,
        cor: cor,
        placa: placa
    };

    fetch("https://teste-3-ihc1.onrender.com/carros", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(novoCarro)
    })
    .then(response => response.json())
    .then(data => {
        alert("Carro cadastrado com sucesso!");
    })
    .catch(error => {
        console.error("Erro ao cadastrar carro:", error);
        res.status(500).json({ error: "Erro ao cadastrar o carro" });
    });
}
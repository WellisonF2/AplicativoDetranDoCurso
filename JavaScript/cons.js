function showByChassi() {
    document.getElementById('chassiForm').style.display = 'block';
    document.getElementById('placaForm').style.display = 'none';
    document.getElementById('result').style.display = 'none';
}

function showByPlaca() {
    document.getElementById('chassiForm').style.display = 'none';
    document.getElementById('placaForm').style.display = 'block';
    document.getElementById('result').style.display = 'none';
}

function consultByChassi() {
    var chassi = document.getElementById('chassi').value;
    // Simulação de consulta pelo chassi
    var result = 'Consulta pelo chassi: ' + chassi;
    document.getElementById('resultContent').innerText = result;
    document.getElementById('result').style.display = 'block';
}

function consultByPlaca() {
    var placa = document.getElementById('placa').value;
    // Simulação de consulta pela placa
    var result = 'Consulta pela placa: ' + placa;
    document.getElementById('resultContent').innerText = result;
    document.getElementById('result').style.display = 'block';
}
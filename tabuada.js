function calcular() {
    const num = document.getElementById('campo-numero').value;
    document.getElementById("resultado").innerHTML = '';
    if (num !== '') {
        for (let c = 1; c <= 10; c++) {
            document.getElementById("resultado").innerHTML += `${num} x ${c} = ${num * c} <br>`;
        }
    }
}
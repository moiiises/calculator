function insert(numero) {
    var num = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = num + numero;
}
function limpar() {
    document.getElementById('resultado').innerHTML = "";
}
function apagar() {
    var todosNum = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = todosNum.substring(0, todosNum.length -1);
}
function calcular() {
    var resultado = document.getElementById('resultado').innerHTML;
    if (resultado) {
        document.getElementById('resultado').innerHTML = eval(resultado);
    }
}

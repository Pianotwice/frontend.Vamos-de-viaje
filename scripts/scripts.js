function calcularLitros() {
    let elementoKm = document.getElementById("textoKm");
    let textoKm = elementoKm.value;
    let cantKm = Number(textoKm);

    let elementoKpl = document.getElementById("textoKpl");
    let textoKpl = elementoKpl.value;
    let kpl = Number(textoKpl);

    let cantLitros = cantKm / kpl;

    let resultado = document.getElementById("textoResultado");
    resultado.textContent = "Carga " + Math.ceil(cantLitros) + " litros de combustible";
}
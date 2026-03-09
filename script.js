/* HORA */
function atualizarHora(){
    const agora = new Date();
    const horario = agora.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit'
    });
    document.getElementById("time").textContent = horario;
}

setInterval(atualizarHora,1000);
atualizarHora();
const reloj = () =>{
    const fecha = new Date();
    const hr = formatoHora(fecha.getHours());
    const minutos = formatoHora(fecha.getMinutes());
    const segundos = formatoHora(fecha.getSeconds());

    document.getElementById('hora').innerHTML = `${hr}:${minutos}:${segundos}`

    const diasNombre = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    const mesNombre = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noveimbre', 'Diciembre'];

    let dias = diasNombre[fecha.getDay()];
    let dia = fecha.getDate();
    let mes = mesNombre[fecha.getMonth()];
    let fechaCompleta = `${dias}, ${dia} ${mes}`;

    document.getElementById('fecha').innerHTML = fechaCompleta;

    document.getElementById(`contenedor`).classList.toggle(`animar`);
}

const formatoHora = (hora)=>{
    if(hora < 10){
        hora = "0" + hora;
    }
    return hora;
}

setInterval(reloj, 1000);

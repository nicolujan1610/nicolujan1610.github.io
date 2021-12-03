const formulario = document.getElementById('formulario');

formulario.addEventListener('submit', async(e)=>{
    e.preventDefault();

    const respuesta = await fetch('https://sheet.best/api/sheets/924a4e4e-c20c-4390-bf7d-0a5f1a1bb747',{
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "Nombre": formulario.nombre.value,
            "Correo": formulario.correo.value,
            "Mensaje": formulario.mensaje.value
        })
    });

    location.reload();
});
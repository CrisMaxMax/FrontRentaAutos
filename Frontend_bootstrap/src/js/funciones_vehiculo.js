// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          } 
          else{
              RegistrarUsuario();
              event.preventDefault()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()

  function RegistrarUsuario(){
    alert("Usuario guardado")

    let nombre = document.querySelector("#validacionNombre").value;
    let apellido = document.querySelector("#validacionApellidos").value;
    let correo_electronico = document.querySelector("#validacionCorreo").value;
    let direccion = document.querySelector("#validacionDireccion").value;
    let telefono_celular = document.querySelector("#validacionCelular").value;
    let telefono_fijo = document.querySelector("#validacionTelefonoFijo").value;
    let documento_identificacion = parseInt(document.querySelector("#validacionDocumentoID").value);
    let tipo_documento = document.querySelector("#validacionTipoID").value;
    let ciudad = document.querySelector("#validacionCiudad").value;
    
    let url = `http://localhost:3000/usuarios`; //para crear el usuario por medio del servidor Flask
    let datos = {
      nombre : nombre, //el  de la derecha es el de arriba
      apellido : apellido,
      correo_electronico : correo_electronico,
      direccion : direccion,
      telefono_celular : telefono_celular,
      telefono_fijo : telefono_fijo,
      documento_identificacion: documento_identificacion,
      tipo_documento : tipo_documento,
      ciudad : ciudad
    };
    console.log(datos);
    fetch(url, {
      method: 'POST',
      body: JSON.stringify(datos),
      headers:{
          'Content-Type':'application/json'
      }
    }).then(res => res.json())
    .then(mensaje => {
      console.log(mensaje)
    })
  }
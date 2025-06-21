
function mostrarOpciones() {
    const rightPanel = document.getElementById("right-panel");
    rightPanel.innerHTML = `
        <h2 class="text-2xl font-semibold mb-6 text-center">Crear cuenta</h2>
        <p class="text-center text-gray-700 mb-6">¿Desea crear una cuenta de Persona o de Empresa?</p>
        <div class="flex flex-col items-center gap-4">
            <a href="registro persona.html" class="w-2/3 bg-gray-900 text-white py-2 rounded text-center hover:bg-gray-700 transition block">Persona</a>
            <a href="registro empresa.html" class="w-2/3 bg-gray-900 text-white py-2 rounded text-center hover:bg-gray-700 transition block">Empresa</a>
        </div>
        <a href="#" onclick="mostrarLogin()" class="text-sm text-gray-600 mt-6 text-center block hover:underline">← Volver al inicio de sesión</a>
    `;
}

function mostrarLogin() {
    const rightPanel = document.getElementById("right-panel");
    rightPanel.innerHTML = `
        <h2 class="text-2xl font-semibold mb-6">Ingresar</h2>

        <label class="block text-sm font-medium text-gray-700">Correo Electrónico</label>
        <input type="email" id="email" placeholder="usuario@ejemplo.com" class="w-full px-4 py-2 border rounded mt-1 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-gray-900">
        
        <label class="block text-sm font-medium text-gray-700 mt-4">Contraseña</label>
        <input type="password" id="password" placeholder="********" class="w-full px-4 py-2 border rounded mt-1 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-gray-900">

        <button onclick="mostrarRoles()" class="w-full bg-gray-900 text-white py-2 mt-6 rounded hover:bg-gray-700 transition">Log in</button>

        <a href="#" onclick="mostrarRecuperar()" class="text-sm text-gray-600 mt-4 text-center block hover:underline">¿Olvidó su contraseña?</a>
        <a href="#" onclick="mostrarOpciones()" class="text-sm text-gray-600 mt-4 text-center block hover:underline">Crear cuenta</a>
    `;
}

function mostrarRecuperar() {
    const rightPanel = document.getElementById("right-panel");
    rightPanel.innerHTML = `
        <h2 class="text-2xl font-semibold mb-6 text-center">Recuperar contraseña</h2>
        <p class="text-center text-gray-700 mb-4">Ingresa tu correo electrónico y te enviaremos instrucciones para recuperar tu contraseña.</p>

        <label class="block text-sm font-medium text-gray-700">Correo Electrónico</label>
        <input type="email" placeholder="usuario@ejemplo.com" class="w-full px-4 py-2 border rounded mt-1 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-gray-900">

        <button class="w-full bg-gray-900 text-white py-2 mt-6 rounded hover:bg-gray-700 transition">Enviar</button>

        <a href="#" onclick="mostrarLogin()" class="text-sm text-gray-600 mt-6 text-center block hover:underline">← Volver al inicio de sesión</a>
    `;
}

function mostrarRoles() {
    const rightPanel = document.getElementById("right-panel");
    rightPanel.innerHTML = `
        <h2 class="text-2xl font-semibold mb-6 text-center">Elija el rol con que desea ingresar</h2>
        <div class="flex flex-col items-center gap-4">
            <a href="empleado.html" class="w-2/3 bg-gray-900 text-white py-2 rounded text-center hover:bg-gray-700 transition">Empleado</a>
            <a href="administrador.html" class="w-2/3 bg-gray-900 text-white py-2 rounded text-center hover:bg-gray-700 transition">RRHH</a>
            <a href="gerente.html" class="w-2/3 bg-gray-900 text-white py-2 rounded text-center hover:bg-gray-700 transition">Gerente</a>
            <a href="supervisor.html" class="w-2/3 bg-gray-900 text-white py-2 rounded text-center hover:bg-gray-700 transition">Supervisor</a>
        </div>
        <a href="#" onclick="mostrarLogin()" class="text-sm text-gray-600 mt-6 text-center block hover:underline">← Volver al inicio de sesión</a>
    `;
}

    
    // Mostrar sección específica
    function mostrarSeccion(seccionId) {
        document.getElementById('opciones').style.display = 'none';
        document.querySelector('.notification').style.display = 'none';
        const secciones = document.querySelectorAll('.section-content');
        secciones.forEach(seccion => seccion.classList.remove('active'));
        document.getElementById(seccionId).classList.add('active');
    }

    // Volver al menú principal
    function volverAlMenu() {
        const secciones = document.querySelectorAll('.section-content');
        secciones.forEach(seccion => seccion.classList.remove('active'));
        document.getElementById('opciones').style.display = 'block';
        document.querySelector('.notification').style.display = 'block';
    }

    // Enviar queja
    function enviarQueja(event) {
        event.preventDefault();
        const nombre = document.getElementById("nombre").value;
        const mensaje = document.getElementById("mensaje").value;
        console.log("Enviando queja:", { nombre, mensaje });
        document.getElementById("formQuejas").reset();
        document.getElementById("mensajeConfirmacion").classList.remove("d-none");
    }

    // Guardar cambios en cuenta
    function guardarCambiosCuenta(event) {
        event.preventDefault();
        const datos = {
            nombres: document.getElementById("nuevoNombres").value,
            apellidos: document.getElementById("nuevoApellidos").value,
            correo: document.getElementById("nuevoCorreo").value,
            telefono: document.getElementById("nuevoTelefono").value,
            direccion: document.getElementById("nuevaDireccion").value,
            fechaNacimiento: document.getElementById("nuevaFechaNacimiento").value,
            ciudad: document.getElementById("nuevaCiudad").value,
        };
        console.log("Datos actualizados:", datos);
        document.getElementById("formCuenta").reset();
        document.getElementById("mensajeCuenta").classList.remove("d-none");
    }

    // Mostrar info de empleado (simulada)
    function mostrarInfoEmpleado() {
        document.getElementById("buscarEmpleado").style.display = "none";
        document.getElementById("infoEmpleado").style.display = "block";

        document.getElementById("empId").value = "EMP001";
        document.getElementById("empNombre").value = "Carlos Pérez";
        document.getElementById("empDocumento").value = "123456789";
        document.getElementById("empFechaContratacion").value = "2020-01-15";
        document.getElementById("empEstado").value = "activo";
        document.getElementById("empCorreo").value = "carlos@example.com";
        document.getElementById("empSalario").value = "3500000";
        document.getElementById("empCargo").value = "Analista";
        document.getElementById("empEPS").value = "Nueva EPS";
    }

    // Mostrar formulario de reporte
    function mostrarFormularioReporte() {
        document.getElementById("formularioReporte").style.display = "block";
    }

    // Aprobar y rechazar solicitudes
    function aprobar(btn) {
        const item = btn.closest('li');
        document.getElementById('aprobados').appendChild(item);
        item.querySelectorAll('button').forEach(b => b.remove());
    }

    function rechazar(btn) {
        const item = btn.closest('li');
        document.getElementById('desaprobados').appendChild(item);
        item.querySelectorAll('button').forEach(b => b.remove());
    }

    // Llenar formulario con datos de empleado para editar
    document.addEventListener("DOMContentLoaded", () => {
        const botonesEditar = document.querySelectorAll('.editar-btn');
        const formDiv = document.getElementById('infoEmpleado');

        botonesEditar.forEach(btn => {
            btn.addEventListener('click', () => {
                document.getElementById('empId').value = btn.dataset.id;
                document.getElementById('empNombre').value = btn.dataset.nombre;
                document.getElementById('empDocumento').value = btn.dataset.documento;
                document.getElementById('empFechaContratacion').value = btn.dataset.fecha;
                document.getElementById('empEstado').value = btn.dataset.estado;
                document.getElementById('empCorreo').value = btn.dataset.correo;
                document.getElementById('empSalario').value = btn.dataset.salario;
                document.getElementById('empCargo').value = btn.dataset.cargo;
                document.getElementById('empEPS').value = btn.dataset.eps;

                formDiv.style.display = 'block';
                formDiv.scrollIntoView({ behavior: 'smooth' });
            });
        });
    });
    function guardarCambiosCuentamsg(event) {
        event.preventDefault();
        alert("Los cambios han sido guardados exitosamente.");
      }
      function archivoCargado() {
        const archivo = document.getElementById('inputArchivo').files[0];
        if (archivo) {
          alert('Archivo cargado: ' + archivo.name);
        }
      }
      
      // seccion de nomina
      
      const camposIngreso = ['nomSalario', 'nomAuxilio', 'nomHorasExtra', 'nomBonificacion', 'nomComisiones', 'nomViaticos'];
  const camposDeduccion = ['nomDescuentos', 'nomRetencion', 'nomPrestamos', 'nomEmbargos'];

  function actualizarTotal() {
    let totalIngresos = 0;
    let totalDeducciones = 0;

    camposIngreso.forEach(id => {
      const valor = parseFloat(document.getElementById(id).value) || 0;
      totalIngresos += valor;
    });

    camposDeduccion.forEach(id => {
      const valor = parseFloat(document.getElementById(id).value) || 0;
      totalDeducciones += valor;
    });

    const total = totalIngresos - totalDeducciones;
    document.getElementById('nomTotal').value = total.toLocaleString('es-CO', {
      style: 'currency',
      currency: 'COP'
    });
  }

  // Asignar evento input a cada campo
  document.addEventListener('DOMContentLoaded', function () {
    [...camposIngreso, ...camposDeduccion].forEach(id => {
      const input = document.getElementById(id);
      if (input) {
        input.addEventListener('input', actualizarTotal);
      }
    });
  });

  // Función al hacer clic en "Editar Nómina"
  document.querySelectorAll('.editar-nomina-btn').forEach(button => {
    button.addEventListener('click', function () {
      document.getElementById('infoNomina').style.display = 'block';

      document.getElementById('nomNombre').value = this.dataset.nombre || '';
      document.getElementById('nomCedula').value = this.dataset.cedula || '';
      document.getElementById('nomCuenta').value = this.dataset.cuenta || '';

      document.getElementById('nomSalario').value = this.dataset.salario || 0;
      document.getElementById('nomAuxilio').value = this.dataset.auxilio || 0;
      document.getElementById('nomHorasExtra').value = this.dataset.horas_extra || 0;
      document.getElementById('nomBonificacion').value = this.dataset.bonificacion || 0;
      document.getElementById('nomComisiones').value = this.dataset.comisiones || 0;
      document.getElementById('nomViaticos').value = this.dataset.viaticos || 0;

      document.getElementById('nomDescuentos').value = this.dataset.descuentos || 0;
      document.getElementById('nomRetencion').value = this.dataset.retencion || 0;
      document.getElementById('nomPrestamos').value = this.dataset.prestamos || 0;
      document.getElementById('nomEmbargos').value = this.dataset.embargos || 0;

      // Actualizar el total con los nuevos datos cargados
      actualizarTotal();
    });
  });
  function ocultarInfoNomina() {
  document.getElementById('infoNomina').style.display = 'none';

  // Limpiar campos (opcional)
  const campos = ['nomNombre', 'nomCedula', 'nomCuenta', ...camposIngreso, ...camposDeduccion];
  campos.forEach(id => {
    const campo = document.getElementById(id);
    if (campo) campo.value = '';
  });

  // Limpiar total
  document.getElementById('nomTotal').value = '';
}

// seccion de notificacion
function editNotification() {
        const text = document.getElementById("notificationText");
        const editor = document.getElementById("notificationEditor");
        const editBtn = document.getElementById("editBtn");
        const saveBtn = document.getElementById("saveBtn");

        editor.value = text.innerText;
        text.style.display = "none";
        editor.style.display = "block";
        editBtn.style.display = "none";
        saveBtn.style.display = "inline-block";
    }

    function saveNotification() {
        const text = document.getElementById("notificationText");
        const editor = document.getElementById("notificationEditor");
        const editBtn = document.getElementById("editBtn");
        const saveBtn = document.getElementById("saveBtn");

        text.innerText = editor.value;
        text.style.display = "block";
        editor.style.display = "none";
        editBtn.style.display = "inline-block";
        saveBtn.style.display = "none";
    }
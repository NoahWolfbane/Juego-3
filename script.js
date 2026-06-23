// ============================================
// VARIABLES GLOBALES
// ============================================
let seccionActual = null;
let preguntaActual = 0;
let puntaje = 0;
let respuestasUsuario = {};
let preguntasActuales = [];

// ============================================
// INICIO DE SECCIONES
// ============================================
function startSection(seccion) {
    seccionActual = seccion;
    preguntaActual = 0;
    puntaje = 0;
    respuestasUsuario = {};

    // Cargar progreso guardado si existe
    cargarProgreso();

    // Configurar según la sección
    if (seccion === 'teorico') {
        preguntasActuales = preguntasTeorico;
        document.getElementById('section-title').textContent = 'TEÓRICO';
        document.getElementById('total-q').textContent = preguntasTeorico.length;
        document.getElementById('teorico-container').style.display = 'block';
        document.getElementById('escritura-container').style.display = 'none';
        document.getElementById('troubleshooting-container').style.display = 'none';
    } else if (seccion === 'escritura') {
        preguntasActuales = preguntasEscritura;
        document.getElementById('section-title').textContent = 'ESCRITURA';
        document.getElementById('total-q').textContent = preguntasEscritura.length;
        document.getElementById('teorico-container').style.display = 'none';
        document.getElementById('escritura-container').style.display = 'block';
        document.getElementById('troubleshooting-container').style.display = 'none';
    } else if (seccion === 'troubleshooting') {
        preguntasActuales = casosTroubleshooting;
        document.getElementById('section-title').textContent = 'TROUBLESHOOTING';
        document.getElementById('total-q').textContent = casosTroubleshooting.length;
        document.getElementById('teorico-container').style.display = 'none';
        document.getElementById('escritura-container').style.display = 'none';
        document.getElementById('troubleshooting-container').style.display = 'block';
    }

    // Cambiar pantalla
    document.getElementById('home-screen').classList.remove('active');
    document.getElementById('exam-screen').classList.add('active');
    document.getElementById('results-screen').classList.remove('active');

    // Mostrar primera pregunta
    mostrarPregunta();
}

// ============================================
// MOSTRAR PREGUNTA
// ============================================
function mostrarPregunta() {
    const pregunta = preguntasActuales[preguntaActual];
    
    // Actualizar contador
    document.getElementById('current-q').textContent = preguntaActual + 1;
    
    // Actualizar barra de progreso
    const progreso = ((preguntaActual + 1) / preguntasActuales.length) * 100;
    document.getElementById('progress-fill').style.width = progreso + '%';

    // Mostrar según el tipo de sección
    if (seccionActual === 'teorico') {
        mostrarPreguntaTeorico(pregunta);
    } else if (seccionActual === 'escritura') {
        mostrarPreguntaEscritura(pregunta);
    } else if (seccionActual === 'troubleshooting') {
        mostrarCasoTroubleshooting(pregunta);
    }

    // Actualizar botones de navegación
    actualizarBotonesNavegacion();
}

// ============================================
// PREGUNTA TEÓRICA
// ============================================
function mostrarPreguntaTeorico(pregunta) {
    document.getElementById('teorico-pregunta').textContent = pregunta.pregunta;
    
    const opcionesContainer = document.getElementById('teorico-opciones');
    opcionesContainer.innerHTML = '';
    
    pregunta.opciones.forEach((opcion, index) => {
        const div = document.createElement('div');
        div.className = 'opcion';
        div.textContent = opcion;
        div.onclick = () => seleccionarOpcion(index);
        
        // Si ya hay una respuesta guardada, marcarla
        if (respuestasUsuario[preguntaActual] !== undefined) {
            if (respuestasUsuario[preguntaActual] === index) {
                div.classList.add('selected');
                if (index === pregunta.correcta) {
                    div.classList.add('correct');
                } else {
                    div.classList.add('incorrect');
                }
            } else if (index === pregunta.correcta && respuestasUsuario[preguntaActual] !== pregunta.correcta) {
                div.classList.add('correct');
            }
        }
        
        opcionesContainer.appendChild(div);
    });

    // Mostrar feedback si ya fue respondida
    const feedbackDiv = document.getElementById('teorico-feedback');
    if (respuestasUsuario[preguntaActual] !== undefined) {
        mostrarFeedbackTeorico(pregunta, respuestasUsuario[preguntaActual]);
    } else {
        feedbackDiv.style.display = 'none';
    }
}

function seleccionarOpcion(index) {
    const pregunta = preguntasActuales[preguntaActual];
    
    // Si ya fue respondida, no permitir cambiar
    if (respuestasUsuario[preguntaActual] !== undefined) {
        return;
    }
    
    // Guardar respuesta
    respuestasUsuario[preguntaActual] = index;
    
    // Calcular puntaje
    if (index === pregunta.correcta) {
        puntaje += (100 / preguntasTeorico.length);
    }
    
    // Guardar progreso
    guardarProgreso();
    
    // Actualizar visualización
    mostrarPreguntaTeorico(pregunta);
}

function mostrarFeedbackTeorico(pregunta, respuestaUsuario) {
    const feedbackDiv = document.getElementById('teorico-feedback');
    feedbackDiv.style.display = 'block';
    
    if (respuestaUsuario === pregunta.correcta) {
        feedbackDiv.className = 'feedback-box';
        feedbackDiv.innerHTML = `
            <h4>✅ ¡Correcto!</h4>
            <p>${pregunta.explicacionBien}</p>
            <p class="concepto"><strong>Concepto relacionado:</strong> ${pregunta.concepto}</p>
        `;
    } else {
        feedbackDiv.className = 'feedback-box';
        feedbackDiv.innerHTML = `
            <h4>❌ Incorrecto</h4>
            <p>${pregunta.explicacionMal}</p>
            <p class="concepto"><strong>Concepto relacionado:</strong> ${pregunta.concepto}</p>
        `;
    }
}

// ============================================
// PREGUNTA DE ESCRITURA
// ============================================
function mostrarPreguntaEscritura(pregunta) {
    document.getElementById('escritura-pregunta').textContent = pregunta.pregunta;
    
    // Restaurar respuesta si ya fue escrita
    const textarea = document.getElementById('escritura-respuesta');
    if (respuestasUsuario[preguntaActual]) {
        textarea.value = respuestasUsuario[preguntaActual];
    } else {
        textarea.value = '';
    }
    
    // Ocultar feedback
    document.getElementById('escritura-feedback').style.display = 'none';
}

function mostrarRespuestaEscritura() {
    const pregunta = preguntasActuales[preguntaActual];
    const textarea = document.getElementById('escritura-respuesta');
    
    // Guardar respuesta
    respuestasUsuario[preguntaActual] = textarea.value;
    guardarProgreso();
    
    // Mostrar respuesta modelo
    const feedbackDiv = document.getElementById('escritura-feedback');
    feedbackDiv.style.display = 'block';
    feedbackDiv.innerHTML = `
        <h4>📖 Respuesta Modelo:</h4>
        <p>${pregunta.respuesta}</p>
    `;
}

// ============================================
// CASO TROUBLESHOOTING
// ============================================
function mostrarCasoTroubleshooting(caso) {
    document.getElementById('caso-numero').textContent = caso.id;
    document.getElementById('caso-sintoma').textContent = caso.sintoma;
    document.getElementById('caso-evidencia').textContent = caso.evidencia;
    
    // Restaurar respuesta si ya fue escrita
    const textarea = document.getElementById('troubleshooting-respuesta');
    if (respuestasUsuario[preguntaActual]) {
        textarea.value = respuestasUsuario[preguntaActual];
    } else {
        textarea.value = '';
    }
    
    // Ocultar feedback
    document.getElementById('troubleshooting-feedback').style.display = 'none';
}

function mostrarSolucionTroubleshooting() {
    const caso = preguntasActuales[preguntaActual];
    const textarea = document.getElementById('troubleshooting-respuesta');
    
    // Guardar respuesta
    respuestasUsuario[preguntaActual] = textarea.value;
    guardarProgreso();
    
    // Mostrar solución
    const feedbackDiv = document.getElementById('troubleshooting-feedback');
    feedbackDiv.style.display = 'block';
    feedbackDiv.innerHTML = `
        <h4>🔧 Solución:</h4>
        <p><strong>${caso.solucion}</strong></p>
    `;
}

// ============================================
// NAVEGACIÓN
// ============================================
function preguntaAnterior() {
    if (preguntaActual > 0) {
        preguntaActual--;
        mostrarPregunta();
    }
}

function preguntaSiguiente() {
    if (preguntaActual < preguntasActuales.length - 1) {
        preguntaActual++;
        mostrarPregunta();
    } else {
        // Si es la última pregunta y es teórico, mostrar resultados
        if (seccionActual === 'teorico') {
            mostrarResultados();
        } else {
            // Para escritura y troubleshooting, volver al inicio
            goHome();
        }
    }
}

function actualizarBotonesNavegacion() {
    const btnAnterior = document.getElementById('btn-anterior');
    const btnSiguiente = document.getElementById('btn-siguiente');
    
    btnAnterior.disabled = preguntaActual === 0;
    
    if (preguntaActual === preguntasActuales.length - 1) {
        if (seccionActual === 'teorico') {
            btnSiguiente.textContent = 'Finalizar →';
        } else {
            btnSiguiente.textContent = 'Finalizar →';
        }
    } else {
        btnSiguiente.textContent = 'Siguiente →';
    }
}

// ============================================
// RESULTADOS
// ============================================
function mostrarResultados() {
    document.getElementById('exam-screen').classList.remove('active');
    document.getElementById('results-screen').classList.add('active');
    
    const puntajeRedondeado = Math.round(puntaje);
    document.getElementById('score-final').textContent = puntajeRedondeado;
    
    let mensaje = '';
    if (puntajeRedondeado >= 90) {
        mensaje = '🏆 ¡EXCELENTE! Dominas el tema';
    } else if (puntajeRedondeado >= 70) {
        mensaje = '✅ ¡MUY BIEN! Buen dominio del tema';
    } else if (puntajeRedondeado >= 60) {
        mensaje = '👍 APROBADO, pero puedes mejorar';
    } else {
        mensaje = '📚 Necesitas repasar más el tema';
    }
    
    document.getElementById('score-message').textContent = mensaje;
}

function reiniciarTeorico() {
    localStorage.removeItem('progresoTeorico');
    startSection('teorico');
}

// ============================================
// NAVEGACIÓN PRINCIPAL
// ============================================
function goHome() {
    document.getElementById('home-screen').classList.add('active');
    document.getElementById('exam-screen').classList.remove('active');
    document.getElementById('results-screen').classList.remove('active');
}

// ============================================
// LOCAL STORAGE
// ============================================
function guardarProgreso() {
    const datos = {
        preguntaActual: preguntaActual,
        respuestasUsuario: respuestasUsuario,
        puntaje: puntaje
    };
    
    localStorage.setItem(`progreso${seccionActual}`, JSON.stringify(datos));
}

function cargarProgreso() {
    const datosGuardados = localStorage.getItem(`progreso${seccionActual}`);
    
    if (datosGuardados) {
        const datos = JSON.parse(datosGuardados);
        preguntaActual = datos.preguntaActual || 0;
        respuestasUsuario = datos.respuestasUsuario || {};
        puntaje = datos.puntaje || 0;
    }
}

// ============================================
// INICIALIZACIÓN
// ============================================
window.addEventListener('load', () => {
    console.log('🚀 INTERNETWORKING EXAM TRAINER cargado correctamente');
});
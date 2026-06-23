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
        document.getElementById('practica-container').style.display = 'none';
        document.getElementById('escritura-container').style.display = 'none';
    } else if (seccion === 'practica') {
        preguntasActuales = preguntasPractica;
        document.getElementById('section-title').textContent = 'PRÁCTICA LECCIÓN';
        document.getElementById('total-q').textContent = preguntasPractica.length;
        document.getElementById('teorico-container').style.display = 'none';
        document.getElementById('practica-container').style.display = 'block';
        document.getElementById('escritura-container').style.display = 'none';
    } else if (seccion === 'escritura') {
        preguntasActuales = preguntasEscritura;
        document.getElementById('section-title').textContent = 'ESCRITURA';
        document.getElementById('total-q').textContent = preguntasEscritura.length;
        document.getElementById('teorico-container').style.display = 'none';
        document.getElementById('practica-container').style.display = 'none';
        document.getElementById('escritura-container').style.display = 'block';
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
    } else if (seccionActual === 'practica') {
        mostrarPreguntaPractica(pregunta);
    } else if (seccionActual === 'escritura') {
        mostrarPreguntaEscritura(pregunta);
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
        div.onclick = () => seleccionarOpcionTeorico(index);
        
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

function seleccionarOpcionTeorico(index) {
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
// PREGUNTA PRÁCTICA LECCIÓN
// ============================================
function mostrarPreguntaPractica(pregunta) {
    // Mostrar tipo de pregunta
    const tipoBadge = document.getElementById('practica-tipo');
    tipoBadge.textContent = pregunta.tipo.toUpperCase();
    
    document.getElementById('practica-pregunta').textContent = pregunta.pregunta;
    
    const opcionesContainer = document.getElementById('practica-opciones');
    opcionesContainer.innerHTML = '';
    
    // Manejar diferentes tipos de preguntas
    if (pregunta.tipo === 'vf') {
        // Verdadero/Falso
        const opcionesVF = ['Verdadero', 'Falso'];
        opcionesVF.forEach((opcion, index) => {
            const div = document.createElement('div');
            div.className = 'opcion';
            div.textContent = opcion;
            div.onclick = () => seleccionarOpcionPractica(index === 0); // true/false
            
            if (respuestasUsuario[preguntaActual] !== undefined) {
                const esCorrecta = respuestasUsuario[preguntaActual] === pregunta.correcta;
                const esEstaOpcion = (index === 0) === respuestasUsuario[preguntaActual];
                
                if (esEstaOpcion) {
                    div.classList.add('selected');
                    if (esCorrecta) div.classList.add('correct');
                    else div.classList.add('incorrect');
                } else if ((index === 0) === pregunta.correcta && !esCorrecta) {
                    div.classList.add('correct');
                }
            }
            
            opcionesContainer.appendChild(div);
        });
    } else if (pregunta.tipo === 'sm') {
        // Selección Múltiple
        pregunta.opciones.forEach((opcion, index) => {
            const div = document.createElement('div');
            div.className = 'opcion';
            div.textContent = opcion;
            div.onclick = () => toggleOpcionSM(index);
            
            if (respuestasUsuario[preguntaActual] !== undefined) {
                const respuestas = respuestasUsuario[preguntaActual];
                if (respuestas.includes(index)) {
                    div.classList.add('selected');
                    if (pregunta.correcta.includes(index)) {
                        div.classList.add('correct');
                    } else {
                        div.classList.add('incorrect');
                    }
                } else if (pregunta.correcta.includes(index)) {
                    div.classList.add('correct');
                }
            }
            
            opcionesContainer.appendChild(div);
        });
        
        // Botón de confirmar para SM
        if (respuestasUsuario[preguntaActual] === undefined) {
            const btnConfirmar = document.createElement('button');
            btnConfirmar.className = 'btn-neon';
            btnConfirmar.textContent = 'Confirmar Respuesta';
            btnConfirmar.onclick = () => confirmarRespuestaSM();
            btnConfirmar.style.marginTop = '1rem';
            opcionesContainer.appendChild(btnConfirmar);
        }
    } else {
        // OM, completar, escenario (todas son opción múltiple normal)
        pregunta.opciones.forEach((opcion, index) => {
            const div = document.createElement('div');
            div.className = 'opcion';
            div.textContent = opcion;
            div.onclick = () => seleccionarOpcionPractica(index);
            
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
    }

    // Mostrar feedback si ya fue respondida
    const feedbackDiv = document.getElementById('practica-feedback');
    if (respuestasUsuario[preguntaActual] !== undefined) {
        mostrarFeedbackPractica(pregunta);
    } else {
        feedbackDiv.style.display = 'none';
    }
}

let opcionesSMSeleccionadas = [];

function toggleOpcionSM(index) {
    if (respuestasUsuario[preguntaActual] !== undefined) return;
    
    const pos = opcionesSMSeleccionadas.indexOf(index);
    if (pos > -1) {
        opcionesSMSeleccionadas.splice(pos, 1);
    } else {
        opcionesSMSeleccionadas.push(index);
    }
    
    // Actualizar visualización
    const opciones = document.getElementById('practica-opciones').children;
    for (let i = 0; i < pregunta.opciones.length; i++) {
        if (opcionesSMSeleccionadas.includes(i)) {
            opciones[i].classList.add('selected');
        } else {
            opciones[i].classList.remove('selected');
        }
    }
}

function confirmarRespuestaSM() {
    const pregunta = preguntasActuales[preguntaActual];
    
    if (opcionesSMSeleccionadas.length === 0) {
        alert('Selecciona al menos una opción');
        return;
    }
    
    // Guardar respuesta
    respuestasUsuario[preguntaActual] = [...opcionesSMSeleccionadas];
    opcionesSMSeleccionadas = [];
    
    // Calcular puntaje (proporcional)
    const correctas = pregunta.correcta.filter(c => opcionesSMSeleccionadas.includes(c)).length;
    const incorrectas = opcionesSMSeleccionadas.filter(o => !pregunta.correcta.includes(o)).length;
    const puntajePregunta = Math.max(0, (correctas - incorrectas) / pregunta.correcta.length);
    puntaje += (puntajePregunta * 100) / preguntasPractica.length;
    
    // Guardar progreso
    guardarProgreso();
    
    // Actualizar visualización
    mostrarPreguntaPractica(pregunta);
}

function seleccionarOpcionPractica(valor) {
    const pregunta = preguntasActuales[preguntaActual];
    
    // Si ya fue respondida, no permitir cambiar
    if (respuestasUsuario[preguntaActual] !== undefined) {
        return;
    }
    
    // Guardar respuesta
    respuestasUsuario[preguntaActual] = valor;
    
    // Calcular puntaje
    if (valor === pregunta.correcta) {
        puntaje += (100 / preguntasPractica.length);
    }
    
    // Guardar progreso
    guardarProgreso();
    
    // Actualizar visualización
    mostrarPreguntaPractica(pregunta);
}

function mostrarFeedbackPractica(pregunta) {
    const feedbackDiv = document.getElementById('practica-feedback');
    feedbackDiv.style.display = 'block';
    
    let esCorrecta = false;
    if (pregunta.tipo === 'sm') {
        const respuestas = respuestasUsuario[preguntaActual];
        esCorrecta = pregunta.correcta.every(c => respuestas.includes(c)) && 
                     respuestas.every(r => pregunta.correcta.includes(r));
    } else {
        esCorrecta = respuestasUsuario[preguntaActual] === pregunta.correcta;
    }
    
    if (esCorrecta) {
        feedbackDiv.className = 'feedback-box';
        feedbackDiv.innerHTML = `
            <h4>✅ ¡Correcto!</h4>
            <p><strong>Justificación:</strong> ${pregunta.justificacion}</p>
        `;
    } else {
        feedbackDiv.className = 'feedback-box';
        feedbackDiv.innerHTML = `
            <h4>❌ Incorrecto</h4>
            <p><strong>Justificación:</strong> ${pregunta.justificacion}</p>
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
        // Si es la última pregunta y es teórico o práctica, mostrar resultados
        if (seccionActual === 'teorico' || seccionActual === 'practica') {
            mostrarResultados();
        } else {
            // Para escritura, volver al inicio
            goHome();
        }
    }
}

function actualizarBotonesNavegacion() {
    const btnAnterior = document.getElementById('btn-anterior');
    const btnSiguiente = document.getElementById('btn-siguiente');
    
    btnAnterior.disabled = preguntaActual === 0;
    
    if (preguntaActual === preguntasActuales.length - 1) {
        if (seccionActual === 'escritura') {
            btnSiguiente.textContent = 'Finalizar →';
        } else {
            btnSiguiente.textContent = 'Ver Resultados →';
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
        mensaje = ' Necesitas repasar más el tema';
    }
    
    document.getElementById('score-message').textContent = mensaje;
}

function reiniciarSeccion() {
    localStorage.removeItem(`progreso${seccionActual}`);
    startSection(seccionActual);
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
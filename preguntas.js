// ============================================
// BANCO DE PREGUNTAS - INTERNETWORKING EXAM TRAINER
// ============================================

// ============================================
// SECCIÓN 1: TEÓRICO (60 preguntas)
// ============================================
const preguntasTeorico = [
  // TEMA 1: DISEÑO DE REDES ESCALABLES (1-20)
  {
    id: 1,
    pregunta: "¿Cuáles son los 4 principios fundamentales del diseño de redes jerárquicos?",
    opciones: ["Flexibilidad, Resistencia, Jerarquía y Modularidad", "Velocidad, Seguridad, Economía y Simplicidad", "Ancho de banda, Latencia, Jitter y Throughput", "Confidencialidad, Integridad, Disponibilidad y No Repudio", "Acceso, Distribución, Núcleo y Perímetro"],
    correcta: 0,
    explicacionBien: "Correcto. Los 4 principios son: Flexibilidad (capacidad de modificar sin reemplazar hardware), Resistencia (disponibilidad en condiciones normales y anormales), Jerarquía (dividir en capas) y Modularidad (separar en bloques funcionales).",
    explicacionMal: "La respuesta correcta era Flexibilidad, Resistencia, Jerarquía y Modularidad. Estos principios guían el diseño de redes escalables según Cisco.",
    concepto: "Estos principios permiten crear redes que crezcan sin rediseños completos."
  },
  {
    id: 2,
    pregunta: "¿Cuál es la función principal de la Capa de Acceso en el diseño jerárquico?",
    opciones: ["Proporcionar transporte ultrarrápido entre edificios", "Aplicar políticas de seguridad y ACLs", "Proporcionar conectividad a usuarios finales", "Conectar la red con Internet", "Gestionar servidores de aplicaciones"],
    correcta: 2,
    explicacionBien: "Correcto. La Capa de Acceso proporciona conectividad a usuarios finales (PCs, teléfonos IP, APs). Incluye switching Capa 2, seguridad de puerto, PoE y VLANs.",
    explicacionMal: "La respuesta correcta era proporcionar conectividad a usuarios finales. El transporte rápido es del Núcleo, las políticas son de Distribución.",
    concepto: "La Capa de Acceso es donde los usuarios se conectan físicamente a la red."
  },
  {
    id: 3,
    pregunta: "¿Qué rol cumple la Capa de Distribución y por qué es el límite entre Capa 2 y 3?",
    opciones: ["Solo conecta cables entre edificios", "Agrega tráfico, aplica políticas (ACLs, QoS) y hace routing entre VLANs", "Proporciona acceso directo a Internet", "Almacena servidores de correo", "Gestiona puntos de acceso Wi-Fi"],
    correcta: 1,
    explicacionBien: "Correcto. La Capa de Distribución agrega el tráfico de acceso, aplica políticas (ACLs, QoS) y realiza enrutamiento entre VLANs, rompiendo los dominios de broadcast.",
    explicacionMal: "La respuesta correcta era agregar tráfico, aplicar políticas y hacer routing entre VLANs. Es el punto donde Capa 2 (switching) se encuentra con Capa 3 (routing).",
    concepto: "La Distribución es el 'cerebro' intermedio que controla el flujo entre Acceso y Núcleo."
  },
  {
    id: 4,
    pregunta: "¿Por qué la Capa de Núcleo (Core) NO debe hacer inspección profunda de paquetes ni seguridad compleja?",
    opciones: ["Porque es muy cara", "Porque su única función es el transporte rápido (switching de alta velocidad)", "Porque no tiene puertos suficientes", "Porque solo funciona con fibra óptica", "Porque es incompatible con VLANs"],
    correcta: 1,
    explicacionBien: "Correcto. La Capa de Núcleo debe hacer switching lo más rápido posible. Procesos pesados como inspección de firewalls introducen latencia y rompen el objetivo de transporte ultrarrápido.",
    explicacionMal: "La respuesta correcta era que su función es el transporte rápido. Las políticas de seguridad se aplican en Distribución o Perímetro.",
    concepto: "Regla de oro: En el Core, solo switching rápido. Si necesitas aplicar políticas, hazlo en Distribución."
  },
  {
    id: 5,
    pregunta: "¿Qué es un 'Núcleo Contraído' (Collapsed Core) y cuándo se usa?",
    opciones: ["Un núcleo que usa fibra óptica en lugar de cobre", "La combinación de las capas de Distribución y Núcleo en un solo dispositivo físico", "Un núcleo que solo soporta 10 dispositivos", "Un diseño que elimina la capa de Acceso", "Un núcleo que usa solo routers en lugar de switches"],
    correcta: 1,
    explicacionBien: "Correcto. El Núcleo Contraído fusiona Distribución y Núcleo en un solo switch Capa 3 potente. Se usa en redes pequeñas/medianas para reducir costos manteniendo beneficios jerárquicos.",
    explicacionMal: "La respuesta correcta era la combinación de Distribución y Núcleo. No elimina capas, las fusiona para reducir costos.",
    concepto: "Ideal para redes <200 dispositivos donde tener 3 capas separadas sería costoso e innecesario."
  },
  {
    id: 6,
    pregunta: "Define los conceptos de Intranet, Extranet e Internet.",
    opciones: ["Intranet es pública, Extranet es privada, Internet es local", "Intranet: red privada interna; Extranet: red privada que comparte información con proveedores externos; Internet: red pública global", "Las tres son lo mismo con diferentes nombres", "Intranet usa IPv6, Extranet usa IPv4, Internet usa ambas", "Intranet es inalámbrica, Extranet es cableada, Internet es satelital"],
    correcta: 1,
    explicacionBien: "Correcto. Intranet: red privada interna (IPs privadas). Extranet: red privada que comparte información segura con proveedores externos. Internet: red pública global.",
    explicacionMal: "La respuesta correcta era la opción B. Son tres niveles de acceso con diferentes alcances y políticas de seguridad.",
    concepto: "La Extranet típicamente usa VPNs site-to-site para conectar con proveedores."
  },
  {
    id: 7,
    pregunta: "¿Qué es el modelo de Arquitectura Empresarial Modular de Cisco?",
    opciones: ["Un diseño que separa la red en bloques funcionales: Campus, Perímetro, Centro de Datos y Extremo del Proveedor", "Un modelo que solo usa switches Cisco", "Una topología de red en forma de estrella", "Un protocolo de enrutamiento propietario", "Un tipo de cableado estructurado"],
    correcta: 0,
    explicacionBien: "Correcto. El modelo modular separa la red en bloques funcionales: Campus Empresarial, Perímetro Empresarial, Centro de Datos y Extremo del Proveedor.",
    explicacionMal: "La respuesta correcta era la separación en bloques funcionales. No es un protocolo ni un tipo de cableado.",
    concepto: "Este modelo facilita el diseño, implementación y troubleshooting de redes grandes."
  },
  {
    id: 8,
    pregunta: "¿Qué servicios se ubican típicamente en el Módulo de Perímetro Empresarial?",
    opciones: ["Servidores de archivos internos", "Servidores web públicos, firewalls, IPS, conectividad WAN/Internet y terminación de VPNs", "Puntos de acceso Wi-Fi", "Switches de acceso para usuarios", "Servidores DHCP internos"],
    correcta: 1,
    explicacionBien: "Correcto. El Perímetro Empresarial incluye servidores web públicos, firewalls, IPS, conectividad WAN/Internet y terminación de VPNs para acceso remoto.",
    explicacionMal: "La respuesta correcta era servidores web públicos, firewalls, IPS y conectividad WAN. Los servidores internos van en el Centro de Datos.",
    concepto: "El Perímetro es la primera línea de defensa contra amenazas externas."
  },
  {
    id: 9,
    pregunta: "¿Qué es el Multihoming en el contexto del extremo del proveedor?",
    opciones: ["Conectar la empresa a múltiples ISPs o usar múltiples enlaces para redundancia", "Usar múltiples VLANs en un solo switch", "Conectar múltiples PCs a un solo router", "Usar múltiples protocolos de enrutamiento", "Tener múltiples servidores DNS"],
    correcta: 0,
    explicacionBien: "Correcto. Multihoming es conectar la empresa a múltiples ISPs o usar múltiples enlaces para proveer redundancia y conmutación por error en caso de falla de un proveedor.",
    explicacionMal: "La respuesta correcta era conectar a múltiples ISPs para redundancia. No es sobre VLANs ni protocolos.",
    concepto: "Opciones: 1 router con 1 enlace, 1 router con 2 enlaces a 2 ISPs, 2 routers con 2 enlaces a 1 ISP, o 2 routers con 2 enlaces a 2 ISPs."
  },
  {
    id: 10,
    pregunta: "¿Cómo se clasifican las redes según la cantidad de dispositivos?",
    opciones: ["Pequeña (hasta 100), Mediana (100-500), Grande (500+)", "Pequeña (hasta 200), Mediana (200-1000), Grande (más de 1000)", "Pequeña (hasta 50), Mediana (50-200), Grande (200+)", "Pequeña (hasta 500), Mediana (500-2000), Grande (2000+)", "No hay clasificación estándar"],
    correcta: 1,
    explicacionBien: "Correcto. Pequeña: hasta 200 dispositivos. Mediana: 200 a 1000 dispositivos. Grande: más de 1000 dispositivos.",
    explicacionMal: "La respuesta correcta era Pequeña (hasta 200), Mediana (200-1000), Grande (más de 1000). Esta clasificación ayuda a elegir el diseño adecuado.",
    concepto: "Las redes pequeñas pueden usar Núcleo Contraído, las grandes requieren diseño jerárquico completo."
  },
  {
    id: 11,
    pregunta: "¿Qué significa el principio de 'Resistencia' en el diseño de redes?",
    opciones: ["La red debe ser físicamente robusta contra golpes", "La red debe estar disponible tanto en condiciones normales como anormales (fallos, ataques DoS)", "La red debe resistir interferencias electromagnéticas", "La red debe tener cables gruesos", "La red debe usar solo fibra óptica"],
    correcta: 1,
    explicacionBien: "Correcto. Resistencia significa que la red debe estar disponible tanto en condiciones normales (tráfico esperado) como anormales (fallos de hardware, ataques DoS, cargas extremas).",
    explicacionMal: "La respuesta correcta era disponibilidad en condiciones normales y anormales. No es sobre robustez física ni cables.",
    concepto: "La resistencia se logra con redundancia, protocolos como STP, HSRP y diseño jerárquico."
  },
  {
    id: 12,
    pregunta: "¿Qué funciones específicas realiza la Capa de Acceso en un entorno LAN?",
    opciones: ["Solo switching de Capa 3", "Switching Capa 2, alta disponibilidad, seguridad de puerto, clasificación QoS, inspección ARP, PoE y VLANs auxiliares para VoIP", "Solo proporcionar acceso a Internet", "Solo gestionar firewalls", "Solo enrutar entre VLANs"],
    correcta: 1,
    explicacionBien: "Correcto. La Capa de Acceso realiza: switching Capa 2, alta disponibilidad, seguridad de puerto, clasificación QoS, inspección ARP, PoE y VLANs auxiliares para VoIP.",
    explicacionMal: "La respuesta correcta era la lista completa de funciones. No solo switching ni solo Internet.",
    concepto: "La Capa de Acceso es multifuncional y crítica para la experiencia del usuario final."
  },
  {
    id: 13,
    pregunta: "¿Por qué es importante la 'Modularidad' en el diseño de red?",
    opciones: ["Permite separar la red en bloques funcionales independientes, facilitando diseño, implementación, crecimiento y troubleshooting", "Permite usar módulos de hardware intercambiables", "Permite conectar módulos USB a los switches", "Permite usar software modular", "Permite cambiar cables fácilmente"],
    correcta: 0,
    explicacionBien: "Correcto. La Modularidad permite separar la red en bloques funcionales independientes, facilitando el diseño, la implementación, el crecimiento y la resolución de problemas.",
    explicacionMal: "La respuesta correcta era separar en bloques funcionales. No es sobre hardware USB ni cables.",
    concepto: "Los módulos básicos son: Campus, Servicios, Centro de Datos y Perímetro."
  },
  {
    id: 14,
    pregunta: "¿Qué es el Módulo de Centro de Datos en la arquitectura empresarial?",
    opciones: ["Un edificio físico para almacenar servidores", "Bloque responsable de administrar y mantener los servidores y sistemas de datos críticos para la operación del negocio", "Un tipo de switch de alta velocidad", "Un protocolo de enrutamiento", "Un tipo de cableado"],
    correcta: 1,
    explicacionBien: "Correcto. El Centro de Datos es responsable de administrar y mantener los servidores y sistemas de datos críticos (correo, archivos, aplicaciones) para la operación del negocio.",
    explicacionMal: "La respuesta correcta era el bloque responsable de servidores y sistemas críticos. No es un edificio ni un protocolo.",
    concepto: "El Centro de Datos puede ser interno o externo (para recuperación ante desastres)."
  },
  {
    id: 15,
    pregunta: "¿Qué submódulos componen el Módulo Remoto?",
    opciones: ["Sucursales, Trabajadores a distancia y Centro de datos externo", "Solo sucursales", "Solo trabajadores remotos", "Solo centros de datos", "Solo routers"],
    correcta: 0,
    explicacionBien: "Correcto. El Módulo Remoto incluye: Sucursales de la empresa, Trabajadores a distancia (conectados vía ISP local y VPN) y Centro de datos externo (para recuperación ante desastres).",
    explicacionMal: "La respuesta correcta era Sucursales, Trabajadores a distancia y Centro de datos externo. No solo uno de ellos.",
    concepto: "Los trabajadores a distancia usan VPN para conectarse de forma segura al campus central."
  },
  {
    id: 16,
    pregunta: "¿Cuál es la motivación principal para elegir un diseño de Núcleo Contraído?",
    opciones: ["Mayor velocidad de transmisión", "La reducción de costos de la red, manteniendo la mayoría de los beneficios del modelo jerárquico de tres niveles", "Mayor seguridad", "Mayor cantidad de puertos", "Mejor soporte para VoIP"],
    correcta: 1,
    explicacionBien: "Correcto. La principal motivación es la reducción de costos de la red, manteniendo la mayoría de los beneficios del modelo jerárquico de tres niveles en redes que no crecerán mucho.",
    explicacionMal: "La respuesta correcta era la reducción de costos. No es sobre velocidad ni seguridad específicamente.",
    concepto: "Ideal para PYMEs y redes que no experimentarán crecimiento significativo."
  },
  {
    id: 17,
    pregunta: "¿Qué es la DMZ (Zona Desmilitarizada) dentro del perímetro empresarial?",
    opciones: ["Una red interna para empleados", "Una red aislada donde se ubican servidores públicos (web, correo) para que, si son comprometidos, el atacante no tenga acceso directo a la Intranet", "Un tipo de firewall", "Un protocolo de seguridad", "Un tipo de VLAN"],
    correcta: 1,
    explicacionBien: "Correcto. La DMZ es una red aislada donde se ubican servidores públicos (web, correo) para que, si son comprometidos, el atacante no tenga acceso directo a la Intranet.",
    explicacionMal: "La respuesta correcta era la red aislada para servidores públicos. No es una red interna ni un protocolo.",
    concepto: "Los servidores en DMZ típicamente son: servidores web públicos, servidores de correo y servidores VPN."
  },
  {
    id: 18,
    pregunta: "¿Qué significa que una red tenga 'Flexibilidad' según los principios de diseño?",
    opciones: ["Los cables son flexibles", "La capacidad de modificar partes de la red, agregar nuevos servicios o aumentar la capacidad sin necesidad de reemplazar el hardware principal", "La red puede doblarse", "La red usa cables de fibra óptica", "La red es inalámbrica"],
    correcta: 1,
    explicacionBien: "Correcto. Flexibilidad es la capacidad de modificar partes de la red, agregar nuevos servicios o aumentar la capacidad sin necesidad de reemplazar los dispositivos principales de hardware.",
    explicacionMal: "La respuesta correcta era la capacidad de modificar sin reemplazar hardware. No es sobre cables físicos.",
    concepto: "La flexibilidad se logra con diseño modular y equipos con capacidad de expansión."
  },
  {
    id: 19,
    pregunta: "¿Qué dispositivo actúa como punto de demarcación entre los dominios de broadcast en la Capa de Distribución?",
    opciones: ["Switch Capa 2", "Router o Switch Multicapa (Capa 3)", "Hub", "Access Point", "Firewall"],
    correcta: 1,
    explicacionBien: "Correcto. El Router o el Switch Multicapa (Capa 3) actúa como punto de demarcación, ya que no reenvían broadcasts de una VLAN a otra.",
    explicacionMal: "La respuesta correcta era Router o Switch Multicapa. Los switches Capa 2 propagan broadcasts.",
    concepto: "Esta es la razón por la que las VLANs requieren un dispositivo Capa 3 para comunicarse entre sí."
  },
  {
    id: 20,
    pregunta: "¿Por qué el núcleo debe lograr la escalabilidad mediante equipos más rápidos y no con más equipos?",
    opciones: ["Para evitar la complejidad de la topología y mantener un transporte rápido y simple", "Porque es más barato", "Porque hay menos espacio físico", "Porque los equipos rápidos consumen menos energía", "Porque es más fácil de configurar"],
    correcta: 0,
    explicacionBien: "Correcto. Para evitar la complejidad de la topología y mantener un transporte rápido y simple. Se escala actualizando la capacidad de los switches Core, no agregando más capas.",
    explicacionMal: "La respuesta correcta era evitar complejidad y mantener transporte rápido. No es solo por costo o espacio.",
    concepto: "Agregar más dispositivos al núcleo aumenta los puntos de fallo y la complejidad."
  },

  // TEMA 2: VLANs, VTP y STP (21-40)
  {
    id: 21,
    pregunta: "¿Qué es una VLAN y cuál es su principal ventaja de seguridad?",
    opciones: ["Es un tipo de cable de red", "Es una Red de Área Local Virtual que segmenta una red física en múltiples redes lógicas, aislando el tráfico de una VLAN de otras", "Es un protocolo de enrutamiento", "Es un tipo de switch", "Es un tipo de firewall"],
    correcta: 1,
    explicacionBien: "Correcto. Una VLAN es una Red de Área Local Virtual que segmenta una red física en múltiples redes lógicas. Su ventaja es que el tráfico de una VLAN no se propaga a otras, aislando datos sensibles.",
    explicacionMal: "La respuesta correcta era la segmentación lógica y aislamiento de tráfico. No es un cable ni un protocolo.",
    concepto: "Las VLANs permiten separar departamentos (Ventas, RRHH, TI) en el mismo switch físico."
  },
  {
    id: 22,
    pregunta: "¿Para qué sirve la VLAN de Voz y qué garantiza?",
    opciones: ["Para tráfico de video", "Está destinada al tráfico telefónico y de comunicaciones unificadas, garantizando la Calidad de Servicio (QoS)", "Para tráfico de datos normal", "Para tráfico de invitados", "Para tráfico de administración"],
    correcta: 1,
    explicacionBien: "Correcto. La VLAN de Voz está destinada al tráfico telefónico y de comunicaciones unificadas. Garantiza la Calidad de Servicio (QoS) para que las llamadas no se corten por congestión de datos.",
    explicacionMal: "La respuesta correcta era tráfico telefónico con garantía de QoS. No es para video ni datos normales.",
    concepto: "Los switches detectan teléfonos IP automáticamente vía CDP/LLDP y mueven el puerto a la VLAN de Voz con prioridad CoS 5."
  },
  {
    id: 23,
    pregunta: "¿Qué es la VLAN Nativa en un enlace Trunk?",
    opciones: ["La VLAN de administración", "La VLAN predeterminada cuyo tráfico viaja SIN etiqueta (untagged) a través del enlace troncal", "La VLAN de voz", "La VLAN de invitados", "La VLAN más usada"],
    correcta: 1,
    explicacionBien: "Correcto. La VLAN Nativa es la VLAN predeterminada cuyo tráfico viaja SIN etiqueta (untagged) a través del enlace troncal entre switches. Por seguridad, debe cambiarse de la VLAN 1.",
    explicacionMal: "La respuesta correcta era la VLAN cuyo tráfico viaja sin etiqueta. No es la de administración ni la de voz.",
    concepto: "Por seguridad, la VLAN Nativa debe cambiarse a una VLAN oscura (ej. VLAN 999) que no tenga puertos de acceso."
  },
  {
    id: 24,
    pregunta: "¿Qué función cumple el estándar IEEE 802.1Q?",
    opciones: ["Define la velocidad de los switches", "Permite transportar tráfico de múltiples VLANs por un mismo enlace físico agregando una etiqueta (tag) de 4 bytes a cada trama", "Define el protocolo de enrutamiento", "Define el protocolo de seguridad", "Define el protocolo de acceso remoto"],
    correcta: 1,
    explicacionBien: "Correcto. IEEE 802.1Q permite transportar tráfico de múltiples VLANs por un mismo enlace físico agregando una etiqueta (tag) de 4 bytes a cada trama para identificar a qué VLAN pertenece.",
    explicacionMal: "La respuesta correcta era el transporte de múltiples VLANs con etiquetado. No define velocidad ni protocolos de seguridad.",
    concepto: "Sin 802.1Q, necesitarías un cable físico por cada VLAN entre switches."
  },
  {
    id: 25,
    pregunta: "¿Qué es el protocolo VTP y cuál es su función principal?",
    opciones: ["Es un protocolo de enrutamiento", "Es VLAN Trunking Protocol, permite la administración centralizada y la propagación automática de la información de VLANs a través de la red", "Es un protocolo de seguridad", "Es un protocolo de acceso remoto", "Es un protocolo de monitoreo"],
    correcta: 1,
    explicacionBien: "Correcto. VTP (VLAN Trunking Protocol) es un protocolo de Cisco que permite la administración centralizada y la propagación automática de la información de VLANs a través de la red.",
    explicacionMal: "La respuesta correcta era la administración centralizada de VLANs. No es de enrutamiento ni seguridad.",
    concepto: "VTP tiene 3 modos: Servidor (crea/modifica VLANs), Cliente (recibe cambios) y Transparente (no participa pero retransmite)."
  },
  {
    id: 26,
    pregunta: "¿Cuál es la diferencia entre un switch en modo VTP Server y uno en modo Client?",
    opciones: ["El Server es más rápido", "El Server crea, modifica y propaga los cambios de VLANs. El Client recibe y aplica automáticamente los cambios enviados por el Server, pero no puede crear VLANs localmente", "El Server tiene más puertos", "El Client es más seguro", "No hay diferencia"],
    correcta: 1,
    explicacionBien: "Correcto. El Server crea, modifica y propaga los cambios de VLANs. El Client recibe y aplica automáticamente los cambios enviados por el Server, pero no puede crear VLANs localmente.",
    explicacionMal: "La respuesta correcta era la diferencia en capacidades de creación y propagación. No es sobre velocidad ni puertos.",
    concepto: "Un switch en modo Transparente mantiene su propia base de datos local pero retransmite mensajes VTP."
  },
  {
    id: 27,
    pregunta: "¿Por qué un switch en modo VTP Transparente es útil en una red multi-vendor?",
    opciones: ["Porque es más barato", "Porque no participa en la sincronización de VLANs (mantiene su propia base de datos), pero retransmite los mensajes VTP, permitiendo que otros switches Cisco al otro lado sí se sincronicen", "Porque es más rápido", "Porque tiene más puertos", "Porque es más seguro"],
    correcta: 1,
    explicacionBien: "Correcto. El modo Transparente no participa en la sincronización de VLANs (mantiene su propia base de datos), pero retransmite los mensajes VTP, permitiendo que otros switches Cisco al otro lado sí se sincronicen.",
    explicacionMal: "La respuesta correcta era que no participa pero retransmite. No es sobre costo ni velocidad.",
    concepto: "Útil cuando conectas un switch de otra marca (HP, Juniper) en medio de tu red Cisco."
  },
  {
    id: 28,
    pregunta: "¿Qué problema resuelve el protocolo STP (Spanning Tree Protocol)?",
    opciones: ["Enrutamiento entre VLANs", "Evita los bucles de Capa 2 (Tormentas de Broadcast) en redes con enlaces redundantes, bloqueando lógicamente puertos para mantener una topología de árbol sin bucles", "Asignación de IPs", "Seguridad de puertos", "Calidad de servicio"],
    correcta: 1,
    explicacionBien: "Correcto. STP evita los bucles de Capa 2 (Tormentas de Broadcast) en redes con enlaces redundantes, bloqueando lógicamente puertos para mantener una topología de árbol sin bucles.",
    explicacionMal: "La respuesta correcta era evitar bucles de Capa 2. No es sobre enrutamiento ni asignación de IPs.",
    concepto: "Sin STP, un cable redundante mal conectado causa una Tormenta de Broadcast que colapsa la red en milisegundos."
  },
  {
    id: 29,
    pregunta: "¿Cómo se elige el Root Bridge (Puente Raíz) en STP?",
    opciones: ["Por la dirección MAC más alta", "Se elige el switch con el Bridge ID (BID) más bajo, compuesto por Prioridad + MAC (gana la prioridad más baja, y en empate, la MAC más baja)", "Por la cantidad de puertos", "Por la velocidad de los puertos", "Aleatoriamente"],
    correcta: 1,
    explicacionBien: "Correcto. Se elige el switch con el Bridge ID (BID) más bajo. El BID se compone de la Prioridad del switch y su dirección MAC (gana la prioridad más baja, y en empate, la MAC más baja).",
    explicacionMal: "La respuesta correcta era el BID más bajo (Prioridad + MAC). No es por cantidad de puertos ni aleatorio.",
    concepto: "Truco de ingeniero: Configura el switch Core con prioridad 4096 para forzarlo a ser Root Bridge."
  },
  {
    id: 30,
    pregunta: "¿Qué es un Root Port y en qué estado se encuentra?",
    opciones: ["Es el puerto con más tráfico", "Es el puerto en un switch no-raíz que tiene el camino de menor costo hacia el Root Bridge. Siempre se encuentra en estado Forwarding", "Es el puerto bloqueado", "Es el puerto de administración", "Es el puerto de uplink"],
    correcta: 1,
    explicacionBien: "Correcto. El Root Port es el puerto en un switch no-raíz que tiene el camino de menor costo hacia el Root Bridge. Siempre se encuentra en estado Forwarding.",
    explicacionMal: "La respuesta correcta era el puerto de menor costo hacia el Root Bridge en estado Forwarding. No es el bloqueado ni el de administración.",
    concepto: "Cada switch (excepto el Root Bridge) tiene exactamente un Root Port."
  },
  {
    id: 31,
    pregunta: "¿Qué es un Designated Port (Puerto Designado)?",
    opciones: ["Es el puerto de administración", "Es el puerto en cada segmento de red seleccionado como el mejor para reenviar tráfico hacia el Root Bridge. También está en estado Forwarding", "Es el puerto bloqueado", "Es el puerto de mayor velocidad", "Es el puerto de menor velocidad"],
    correcta: 1,
    explicacionBien: "Correcto. El Designated Port es el puerto en cada segmento de red seleccionado como el mejor para reenviar tráfico hacia el Root Bridge. También está en estado Forwarding.",
    explicacionMal: "La respuesta correcta era el puerto seleccionado como mejor para reenviar hacia el Root Bridge. No es el de administración ni el bloqueado.",
    concepto: "El Designated Port actúa como el puente de salida para ese segmento de red específico."
  },
  {
    id: 32,
    pregunta: "¿Qué ocurre en un puerto STP que está en estado 'Blocking'?",
    opciones: ["Está apagado físicamente", "No reenvía tráfico de datos de usuarios (para evitar bucles), pero sí recibe y procesa mensajes BPDU para mantener la topología", "Está en modo de administración", "Está configurado como trunk", "Está configurado como access"],
    correcta: 1,
    explicacionBien: "Correcto. En estado Blocking, el puerto NO reenvía tráfico de datos de usuarios (para evitar bucles), pero sí recibe y procesa mensajes BPDU para mantener la topología y estar listo para activarse si el enlace principal falla.",
    explicacionMal: "La respuesta correcta era que no reenvía datos pero sí procesa BPDUs. No está apagado físicamente.",
    concepto: "Si el enlace activo cae, STP transicionará este puerto de Blocking a Forwarding para restaurar la conectividad."
  },
  {
    id: 33,
    pregunta: "¿Qué mejora introduce RSTP (Rapid STP) frente al STP tradicional?",
    opciones: ["Mayor seguridad", "Permite una convergencia mucho más rápida (en sub-segundos en lugar de 30-50 segundos) ante fallos en la topología de red", "Más puertos", "Mayor velocidad de transmisión", "Mejor calidad de servicio"],
    correcta: 1,
    explicacionBien: "Correcto. RSTP (Rapid Spanning Tree Protocol) permite una convergencia mucho más rápida (en sub-segundos en lugar de 30-50 segundos) ante fallos en la topología de red.",
    explicacionMal: "La respuesta correcta era la convergencia más rápida. No es sobre seguridad ni velocidad de transmisión.",
    concepto: "RSTP (802.1w) es esencial para mantener la continuidad de servicios sensibles a la latencia como VoIP."
  },
  {
    id: 34,
    pregunta: "¿Qué es PVST+ (Per-VLAN Spanning Tree Plus)?",
    opciones: ["Una versión de VTP", "Una extensión de Cisco que implementa una instancia independiente de STP por cada VLAN, permitiendo balancear la carga haciendo que diferentes VLANs usen diferentes enlaces troncales", "Un tipo de VLAN", "Un protocolo de enrutamiento", "Un tipo de switch"],
    correcta: 1,
    explicacionBien: "Correcto. PVST+ es una extensión de Cisco que implementa una instancia independiente de STP por cada VLAN, permitiendo balancear la carga haciendo que diferentes VLANs usen diferentes enlaces troncales.",
    explicacionMal: "La respuesta correcta era una instancia de STP por VLAN para balanceo de carga. No es una versión de VTP ni un protocolo de enrutamiento.",
    concepto: "Con PVST+, la VLAN 10 puede usar el enlace 1 como principal y la VLAN 20 el enlace 2, aprovechando ambos enlaces."
  },
  {
    id: 35,
    pregunta: "¿Qué son los paquetes BPDU?",
    opciones: ["Paquetes de datos de usuario", "Bridge Protocol Data Units, son los mensajes que los switches intercambian para elegir el Root Bridge, calcular caminos y detectar bucles en la red", "Paquetes de enrutamiento", "Paquetes de seguridad", "Paquetes de voz"],
    correcta: 1,
    explicacionBien: "Correcto. Los BPDU (Bridge Protocol Data Units) son los mensajes que los switches intercambian para elegir el Root Bridge, calcular caminos y detectar bucles en la red.",
    explicacionMal: "La respuesta correcta era los mensajes de STP para elegir Root Bridge y calcular caminos. No son paquetes de datos de usuario.",
    concepto: "Sin los BPDUs, STP no podría elegir el Root Bridge ni calcular los puertos raíz y designados."
  },
  {
    id: 36,
    pregunta: "¿Qué es PortFast y dónde debe usarse?",
    opciones: ["Una función que acelera el switch", "Función que hace que un puerto pase inmediatamente a estado Forwarding (omit Listening/Learning). Debe usarse SOLO en puertos de acceso donde se conectan PCs o APs, nunca entre switches", "Un tipo de puerto", "Un protocolo de seguridad", "Un tipo de VLAN"],
    correcta: 1,
    explicacionBien: "Correcto. PortFast hace que un puerto pase inmediatamente a estado Forwarding (omitiendo Listening/Learning). Debe usarse SOLO en puertos de acceso donde se conectan PCs o APs, nunca entre switches.",
    explicacionMal: "La respuesta correcta era la función que acelera el puerto a Forwarding solo en puertos de acceso. Nunca entre switches.",
    concepto: "Si se usa entre switches y se crea un bucle, PortFast lo pondrá en Forwarding inmediatamente, causando una Tormenta de Broadcast."
  },
  {
    id: 37,
    pregunta: "¿Qué hace BPDU Guard en un puerto con PortFast?",
    opciones: ["Acelera el puerto", "Si el puerto recibe un BPDU (alguien conectó un switch no autorizado), BPDU Guard apaga el puerto inmediatamente (estado err-disabled) para evitar bucles accidentales", "Protege contra virus", "Filtra el tráfico", "Encripta los datos"],
    correcta: 1,
    explicacionBien: "Correcto. Si el puerto recibe un BPDU (alguien conectó un switch no autorizado), BPDU Guard apaga el puerto inmediatamente (estado err-disabled) para evitar bucles accidentales.",
    explicacionMal: "La respuesta correcta era apagar el puerto si recibe un BPDU. No es sobre virus ni encriptación.",
    concepto: "BPDU Guard es esencial en puertos de acceso para proteger la red de bucles accidentales causados por usuarios."
  },
  {
    id: 38,
    pregunta: "¿Cuál es el peligro de conectar un switch viejo con un 'Configuration Revision Number' alto en modo VTP Server?",
    opciones: ["No hay peligro", "Puede sobrescribir y borrar todas las VLANs de toda la red corporativa en segundos. Solución: ponerlo en modo Transparente o borrar su vlan.dat antes de conectarlo", "Solo afecta a ese switch", "Mejora el rendimiento", "Aumenta la seguridad"],
    correcta: 1,
    explicacionBien: "Correcto. Puede sobrescribir y borrar todas las VLANs de toda la red corporativa en segundos. Solución: ponerlo en modo Transparente o borrar su vlan.dat antes de conectarlo.",
    explicacionMal: "La respuesta correcta era que puede borrar todas las VLANs. No es inofensivo ni mejora el rendimiento.",
    concepto: "VTP usa el Configuration Revision Number para determinar qué información es más reciente."
  },
  {
    id: 39,
    pregunta: "¿Qué comando de IOS muestra el estado de los puertos Trunk y las VLANs permitidas?",
    opciones: ["show vlan", "show interfaces trunk", "show ip route", "show mac address-table", "show spanning-tree"],
    correcta: 1,
    explicacionBien: "Correcto. El comando `show interfaces trunk` muestra el estado de los puertos Trunk, la VLAN Nativa y qué VLANs están permitidas pasando por ellos.",
    explicacionMal: "La respuesta correcta era `show interfaces trunk`. Los otros comandos muestran información diferente.",
    concepto: "`show vlan brief` muestra las VLANs y puertos de acceso, pero no el estado de los trunks."
  },
  {
    id: 40,
    pregunta: "¿Por qué una red 'plana' (sin VLANs ni Capa 3) se vuelve inutilizable al crecer?",
    opciones: ["Porque los cables se enredan", "Porque todos los dispositivos comparten el mismo dominio de broadcast. El tráfico de broadcast satura el ancho de banda y los tiempos de respuesta se degradan hasta colapsar la red", "Porque los switches se sobrecalientan", "Porque los routers no funcionan", "Porque el cableado es muy caro"],
    correcta: 1,
    explicacionBien: "Correcto. En una red plana, todos los dispositivos comparten el mismo dominio de broadcast. El tráfico de broadcast satura el ancho de banda y los tiempos de respuesta se degradan hasta colapsar la red.",
    explicacionMal: "La respuesta correcta era el dominio de broadcast compartido que satura la red. No es sobre cables ni sobrecalentamiento.",
    concepto: "Las VLANs solucionan esto dividiendo la red física en múltiples dominios de broadcast lógicos."
  },

  // TEMA 3: Redundancia y Agregación (41-60)
  {
    id: 41,
    pregunta: "¿Qué problema resuelven los protocolos FHRP (First Hop Redundancy Protocols)?",
    opciones: ["Bucles de Capa 2", "Resuelven el punto único de falla del gateway predeterminado. Permiten que varios routers físicos compartan una IP y MAC virtual, haciendo el failover transparente para los hosts", "Asignación de IPs", "Enrutamiento dinámico", "Seguridad de puertos"],
    correcta: 1,
    explicacionBien: "Correcto. Los FHRP resuelven el punto único de falla del gateway predeterminado. Permiten que varios routers físicos compartan una IP y MAC virtual, haciendo el failover transparente para los hosts.",
    explicacionMal: "La respuesta correcta era resolver el punto único de falla del gateway. No es sobre bucles ni asignación de IPs.",
    concepto: "Sin FHRP, si el gateway predeterminado falla, todos los hosts configurados con esa IP quedan aislados de redes externas."
  },
  {
    id: 42,
    pregunta: "¿Cuál es la diferencia principal entre HSRP y VRRP?",
    opciones: ["HSRP es más rápido", "HSRP es propietario de Cisco (roles Active/Standby). VRRP es un estándar abierto IEEE (roles Master/Backup) que funciona entre routers de diferentes fabricantes", "VRRP es más seguro", "HSRP usa menos recursos", "No hay diferencia"],
    correcta: 1,
    explicacionBien: "Correcto. HSRP es propietario de Cisco (roles Active/Standby). VRRP es un estándar abierto IEEE (roles Master/Backup) que funciona entre routers de diferentes fabricantes.",
    explicacionMal: "La respuesta correcta era la diferencia de propietario vs estándar abierto. No es sobre velocidad ni seguridad.",
    concepto: "VRRP permite interoperabilidad entre Cisco, Huawei, Juniper, MikroTik, etc."
  },
  {
    id: 43,
    pregunta: "¿Por qué se dice que en HSRP el router Standby está 'ocioso'?",
    opciones: ["Porque está apagado", "Porque solo escucha mensajes Hello y no reenvía tráfico de datos a menos que el router Active falle. No aprovecha su ancho de banda en condiciones normales", "Porque no tiene puertos", "Porque no tiene configuración", "Porque está en modo transparente"],
    correcta: 1,
    explicacionBien: "Correcto. Porque solo escucha mensajes Hello y no reenvía tráfico de datos a menos que el router Active falle. No aprovecha su ancho de banda en condiciones normales.",
    explicacionMal: "La respuesta correcta era que no reenvía tráfico en condiciones normales. No está apagado ni sin configuración.",
    concepto: "GLBP resuelve esto permitiendo que todos los routers reenvíen tráfico simultáneamente."
  },
  {
    id: 44,
    pregunta: "¿Cómo logra GLBP hacer balanceo de carga real sin crear múltiples grupos?",
    opciones: ["Usando múltiples IPs virtuales", "GLBP usa un AVG que asigna diferentes MACs virtuales a cada router del grupo (AVF). Cuando los hosts piden la MAC del gateway por ARP, el AVG responde con una MAC distinta para cada uno, distribuyendo el tráfico", "Usando múltiples protocolos", "Usando múltiples VLANs", "Usando múltiples switches"],
    correcta: 1,
    explicacionBien: "Correcto. GLBP usa un AVG que asigna diferentes MACs virtuales a cada router del grupo (AVF). Cuando los hosts piden la MAC del gateway por ARP, el AVG responde con una MAC distinta para cada uno, distribuyendo el tráfico.",
    explicacionMal: "La respuesta correcta era el uso de AVG y AVFs con diferentes MACs virtuales. No es sobre múltiples IPs ni protocolos.",
    concepto: "GLBP puede asignar hasta 4 MACs virtuales, permitiendo que 4 routers reenvíen tráfico simultáneamente."
  },
  {
    id: 45,
    pregunta: "¿Qué es el AVG en GLBP?",
    opciones: ["Active Virtual Gateway, es el 'cerebro' que responde a peticiones ARP y asigna MACs virtuales a los AVF", "Active Voice Gateway", "Automatic Virtual Gateway", "Advanced Virtual Gateway", "Administrative Virtual Gateway"],
    correcta: 0,
    explicacionBien: "Correcto. AVG (Active Virtual Gateway) es el 'cerebro' que responde a peticiones ARP y asigna MACs virtuales a los AVF (Active Virtual Forwarder) que realmente reenvían el tráfico.",
    explicacionMal: "La respuesta correcta era Active Virtual Gateway. No es Voice ni Automatic.",
    concepto: "El AVG es elegido por prioridad, similar a como HSRP elige el router Active."
  },
  {
    id: 46,
    pregunta: "¿Qué problema resuelve EtherChannel?",
    opciones: ["Asignación de IPs", "STP bloquea enlaces redundantes. EtherChannel agrupa múltiples enlaces físicos en uno lógico, permitiendo usar todo el ancho de banda sin que STP bloquee nada", "Enrutamiento dinámico", "Seguridad de puertos", "Calidad de servicio"],
    correcta: 1,
    explicacionBien: "Correcto. STP bloquea enlaces redundantes para evitar bucles. EtherChannel agrupa múltiples enlaces físicos en uno lógico, permitiendo usar todo el ancho de banda sin que STP bloquee nada.",
    explicacionMal: "La respuesta correcta era agrupar enlaces para evitar que STP los bloquee. No es sobre IPs ni enrutamiento.",
    concepto: "STP ve el EtherChannel como un solo enlace lógico, por lo que no lo bloquea."
  },
  {
    id: 47,
    pregunta: "¿Qué ocurre si se corta un enlace físico dentro de un EtherChannel?",
    opciones: ["Todo el EtherChannel se cae", "El tráfico se redistribuye automáticamente entre los enlaces restantes. STP no reacciona ni recalcula la topología, porque ve el EtherChannel como un único enlace lógico que sigue 'UP'", "STP bloquea todos los puertos", "Se pierde toda la conectividad", "El switch se reinicia"],
    correcta: 1,
    explicacionBien: "Correcto. El tráfico se redistribuye automáticamente entre los enlaces restantes. STP no reacciona ni recalcula la topología, porque ve el EtherChannel como un único enlace lógico que sigue 'UP'.",
    explicacionMal: "La respuesta correcta era la redistribución automática sin que STP recalcule. No se pierde toda la conectividad.",
    concepto: "Si el EtherChannel tiene 4 enlaces de 1Gbps y se corta uno, queda con 3Gbps de capacidad."
  },
  {
    id: 48,
    pregunta: "¿Qué protocolo de negociación de EtherChannel es estándar IEEE y permite interoperabilidad entre diferentes fabricantes?",
    opciones: ["PAgP", "LACP (Link Aggregation Control Protocol - IEEE 802.3ad)", "STP", "VTP", "DTP"],
    correcta: 1,
    explicacionBien: "Correcto. LACP (Link Aggregation Control Protocol - IEEE 802.3ad) es el estándar abierto para EtherChannel, permitiendo interoperabilidad entre switches de diferentes fabricantes.",
    explicacionMal: "La respuesta correcta era LACP. PAgP es propietario de Cisco. STP, VTP y DTP son otros protocolos.",
    concepto: "LACP tiene modos `active` (inicia negociación) y `passive` (espera). Combinación válida: active+active o active+passive."
  },
  {
    id: 49,
    pregunta: "¿Por qué falla la combinación `passive + passive` en LACP?",
    opciones: ["Porque es muy lenta", "Porque el modo `passive` solo responde a paquetes LACP, pero nunca los inicia. Si ambos lados son `passive`, nadie inicia la negociación y el canal nunca se forma", "Porque es inseguro", "Porque consume muchos recursos", "Porque no es compatible"],
    correcta: 1,
    explicacionBien: "Correcto. Porque el modo `passive` solo responde a paquetes LACP, pero nunca los inicia. Si ambos lados son `passive`, nadie inicia la negociación y el canal nunca se forma.",
    explicacionMal: "La respuesta correcta era que nadie inicia la negociación. No es sobre velocidad ni seguridad.",
    concepto: "Regla mnemotécnica: Al menos un lado debe ser `active` para que LACP funcione."
  },
  {
    id: 50,
    pregunta: "¿Por qué un switch rechazará agrupar puertos GigabitEthernet y FastEthernet en un mismo EtherChannel?",
    opciones: ["Porque son de diferentes marcas", "Una de las restricciones estrictas de EtherChannel es que todos los puertos físicos deben tener la misma velocidad y el mismo modo dúplex. No se pueden mezclar tipos de interfaz", "Porque son muy rápidos", "Porque son muy lentos", "Porque no tienen VLANs"],
    correcta: 1,
    explicacionBien: "Correcto. Una de las restricciones estrictas de EtherChannel es que todos los puertos físicos deben tener la misma velocidad y el mismo modo dúplex. No se pueden mezclar tipos de interfaz.",
    explicacionMal: "La respuesta correcta era la restricción de misma velocidad y dúplex. No es sobre marcas ni velocidad específica.",
    concepto: "Todas las interfaces en el grupo EtherChannel se deben asignar a la misma VLAN o configurarse como trunk con la misma VLAN nativa."
  },
  {
    id: 51,
    pregunta: "¿En qué interfaz lógica debe aplicarse la configuración de `switchport mode trunk` en un EtherChannel?",
    opciones: ["En las interfaces físicas individuales", "En la interfaz lógica Port-Channel. Hacerlo en la interfaz Port-Channel asegura la coherencia de la configuración en todos los enlaces físicos miembros del grupo", "En el router", "En el firewall", "En el servidor"],
    correcta: 1,
    explicacionBien: "Correcto. En la interfaz lógica Port-Channel. Hacerlo en la interfaz Port-Channel asegura la coherencia de la configuración en todos los enlaces físicos miembros del grupo.",
    explicacionMal: "La respuesta correcta era la interfaz Port-Channel. Configurar en puertos físicos puede crear inconsistencias.",
    concepto: "Al configurar `channel-group` en los puertos físicos, IOS crea automáticamente la interfaz Port-Channel."
  },
  {
    id: 52,
    pregunta: "¿Cómo distribuye el tráfico un EtherChannel entre sus enlaces físicos?",
    opciones: ["Divide cada paquete en partes iguales", "Usa un algoritmo hash (por defecto src-mac o dst-mac) para asignar flujos completos a enlaces específicos. Esto mantiene el orden de los paquetes dentro de una conversación TCP", "Envía todo por un solo enlace", "Distribuye aleatoriamente", "Usa round-robin"],
    correcta: 1,
    explicacionBien: "Correcto. Usa un algoritmo hash (por defecto src-mac o dst-mac) para asignar flujos completos a enlaces específicos. Esto mantiene el orden de los paquetes dentro de una conversación TCP.",
    explicacionMal: "La respuesta correcta era el algoritmo hash por flujos. No divide paquetes individuales ni distribuye aleatoriamente.",
    concepto: "Si divides paquetes individuales, llegarían desordenados y TCP tendría que retransmitir."
  },
  {
    id: 53,
    pregunta: "¿Qué comando de IOS verifica el estado de todos los EtherChannels y qué significan las letras 'SU'?",
    opciones: ["show ip route", "show etherchannel summary. 'SU' significa que el canal es de Capa 2 (S = Layer 2) y está en uso (U = In Use)", "show vlan", "show spanning-tree", "show ip ospf"],
    correcta: 1,
    explicacionBien: "Correcto. `show etherchannel summary` muestra todos los grupos EtherChannel. 'SU' significa que el canal es de Capa 2 (S = Layer 2) y está en uso (U = In Use).",
    explicacionMal: "La respuesta correcta era `show etherchannel summary` con SU = Capa 2 en uso. Los otros comandos muestran información diferente.",
    concepto: "La bandera 'P' (Bundled in port-channel) indica que el puerto físico está activo y agrupado correctamente."
  },
  {
    id: 54,
    pregunta: "¿Por qué se dice que HSRP y VRRP desperdician recursos de hardware en comparación con GLBP?",
    opciones: ["Porque son más lentos", "En HSRP y VRRP, solo el router Activo reenvía tráfico; el router de respaldo está 'ocioso' consumiendo energía y hardware sin reenviar datos. GLBP utiliza todos los routers simultáneamente", "Porque son más caros", "Porque consumen más energía", "Porque tienen menos puertos"],
    correcta: 1,
    explicacionBien: "Correcto. En HSRP y VRRP, solo el router Activo reenvía tráfico; el router de respaldo está 'ocioso' consumiendo energía y hardware sin reenviar datos. GLBP utiliza todos los routers simultáneamente.",
    explicacionMal: "La respuesta correcta era que el router de respaldo está ocioso. No es sobre velocidad ni costo.",
    concepto: "Si se debe usar HSRP, la única forma de mitigar esto es crear Múltiples Grupos HSRP (MHSRP), lo cual es administrativamente pesado."
  },
  {
    id: 55,
    pregunta: "¿Qué dirección MAC responden los routers activos en HSRP a las peticiones ARP de los hosts?",
    opciones: ["Su dirección MAC física real", "La Dirección MAC Virtual del grupo HSRP (ej. empieza con 0000.0C07.ACxx). Esto ayuda a la estabilidad porque, si el router activo cambia, la MAC Virtual sigue siendo la misma", "La dirección MAC del switch", "La dirección MAC del servidor", "La dirección MAC del router de respaldo"],
    correcta: 1,
    explicacionBien: "Correcto. La Dirección MAC Virtual del grupo HSRP (ej. empieza con 0000.0C07.ACxx). Esto ayuda a la estabilidad porque, si el router activo cambia, la MAC Virtual sigue siendo la misma.",
    explicacionMal: "La respuesta correcta era la MAC Virtual. No responden con su MAC física real.",
    concepto: "Para seguridad contra ARP Spoofing se debe usar Dynamic ARP Inspection (DAI), no solo FHRP."
  },
  {
    id: 56,
    pregunta: "¿Qué valor de prioridad asignarías a un router en GLBP para evitar que se convierta en AVG?",
    opciones: ["255", "La prioridad más baja posible (ej. 1), o ajustar la prioridad de los otros routers para que sean más altas", "100", "0", "Cualquier valor"],
    correcta: 1,
    explicacionBien: "Correcto. La prioridad más baja posible (ej. 1), o ajustar la prioridad de los otros routers para que sean más altas. Similar a evitar que sea Root Bridge en STP o Active en HSRP.",
    explicacionMal: "La respuesta correcta era la prioridad más baja. No es 255 ni cualquier valor.",
    concepto: "En GLBP la prioridad por defecto es 100. Bajarla a 1 o subir la de los demás asegura que no sea elegido AVG."
  },
  {
    id: 57,
    pregunta: "Si STP decide bloquear un puerto para romper el bucle y ese puerto pertenece a un EtherChannel, ¿qué bloquea exactamente?",
    opciones: ["Solo ese puerto físico", "STP ve el EtherChannel como un único puerto lógico. Si el algoritmo de STP determina que ese camino debe ser bloqueado, bloqueará el Port-Channel completo (todos los puertos físicos miembros)", "Nada", "Todo el switch", "El router"],
    correcta: 1,
    explicacionBien: "Correcto. STP ve el EtherChannel como un único puerto lógico. Si el algoritmo de STP determina que ese camino debe ser bloqueado, bloqueará el Port-Channel completo (todos los puertos físicos miembros).",
    explicacionMal: "La respuesta correcta era bloquear el Port-Channel completo. No solo un puerto físico.",
    concepto: "Por eso, si quieres redundancia real a nivel de Capa 2, debes tener al menos dos EtherChannels separados."
  },
  {
    id: 58,
    pregunta: "¿Cuáles son los dos modos de operación de PAgP y cuál es la única combinación exitosa?",
    opciones: ["active y passive", "desirable (inicia la negociación) y auto (solo responde). La única combinación exitosa es desirable + desirable o desirable + auto", "server y client", "master y backup", "root y designated"],
    correcta: 1,
    explicacionBien: "Correcto. Los modos de PAgP son `desirable` (inicia la negociación enviando paquetes PAgP) y `auto` (solo responde, no inicia). La única combinación exitosa es desirable + desirable o desirable + auto.",
    explicacionMal: "La respuesta correcta era desirable y auto. active y passive son modos de LACP.",
    concepto: "Si ambos lados están en modo `auto`, el EtherChannel no se formará porque ninguno iniciará la negociación."
  },
  {
    id: 59,
    pregunta: "Mencione al menos tres causas comunes que impedirían que los puertos físicos formen un EtherChannel (aparezcan con bandera 'I' o 'S' en lugar de 'P')",
    opciones: ["Velocidad o Dúplex diferente, Configuración de VLAN/Trunk inconsistente, Rango de VLANs permitido diferente", "Falta de energía", "Cables muy largos", "Switches de diferentes marcas", "Falta de VLANs"],
    correcta: 0,
    explicacionBien: "Correcto. Tres causas comunes: 1) Velocidad o Dúplex diferente, 2) Configuración de VLAN/Trunk inconsistente (un lado Access y otro Trunk), 3) Rango de VLANs permitido diferente en modo Trunk.",
    explicacionMal: "La respuesta correcta era velocidad/dúplex, VLAN/Trunk inconsistente y rango de VLANs diferente. No es sobre energía ni longitud de cables.",
    concepto: "Cualquier inconsistencia de Capa 2 rompe la formación del EtherChannel."
  },
  {
    id: 60,
    pregunta: "¿Qué característica de resiliencia comparte GLBP con HSRP y VRRP si el router que está reenviendo el tráfico de un host específico se cae?",
    opciones: ["Ninguna", "Conmutación por Falla (Failover) Automática y Transparente. Si un router AVF se cae, el AVG detecta la falla y redirige el tráfico a otro AVF disponible, manteniendo la conectividad sin que el usuario final tenga que cambiar su configuración de Gateway", "Reinicio automático", "Bloqueo de puertos", "Cambio de VLAN"],
    correcta: 1,
    explicacionBien: "Correcto. Conmutación por Falla (Failover) Automática y Transparente. Si un router AVF se cae, el AVG detecta la falla y redirige el tráfico a otro AVF disponible, manteniendo la conectividad sin que el usuario final tenga que cambiar su configuración.",
    explicacionMal: "La respuesta correcta era el Failover Automático y Transparente. No es reinicio ni bloqueo.",
    concepto: "El AVG deja de asignar la MAC virtual del router caído a los nuevos hosts, y para los hosts existentes el tráfico es redirigido automáticamente."
  }
];

// ============================================
// SECCIÓN 2: ESCRITURA (60 preguntas)
// ============================================
const preguntasEscritura = [
  // TEMA 1: DISEÑO DE REDES (1-20)
  {id: 1, pregunta: "¿Cuáles son los 4 principios fundamentales del diseño de redes jerárquicos?", respuesta: "Flexibilidad, Resistencia, Jerarquía y Modularidad."},
  {id: 2, pregunta: "¿Cuál es la función principal de la Capa de Acceso en el diseño jerárquico?", respuesta: "Proporcionar conectividad a usuarios finales. Incluye switching Capa 2, seguridad de puerto, PoE y VLANs."},
  {id: 3, pregunta: "¿Qué rol cumple la Capa de Distribución y por qué es el límite entre Capa 2 y 3?", respuesta: "Agrega el tráfico de la capa de acceso, aplica políticas (ACLs, QoS) y realiza el enrutamiento entre VLANs, rompiendo los dominios de broadcast."},
  {id: 4, pregunta: "¿Por qué la Capa de Núcleo (Core) NO debe hacer inspección profunda de paquetes ni seguridad compleja?", respuesta: "Porque su única función es el transporte rápido (switching de alta velocidad). Procesos pesados introducen latencia y cuellos de botella."},
  {id: 5, pregunta: "¿Qué es un 'Núcleo Contraído' (Collapsed Core) y cuándo se usa?", respuesta: "Es un diseño que fusiona las capas de Distribución y Núcleo en un solo dispositivo físico. Se usa en redes pequeñas/medianas para reducir costos."},
  {id: 6, pregunta: "Define los conceptos de Intranet, Extranet e Internet.", respuesta: "Intranet: Red privada interna. Extranet: Red privada que comparte información segura con proveedores externos. Internet: Red pública global."},
  {id: 7, pregunta: "¿Qué es el modelo de Arquitectura Empresarial Modular de Cisco?", respuesta: "Un diseño que separa la red en bloques funcionales: Campus Empresarial, Perímetro Empresarial, Centro de Datos y Extremo del Proveedor."},
  {id: 8, pregunta: "¿Qué servicios se ubican típicamente en el Módulo de Perímetro Empresarial?", respuesta: "Servidores web públicos, firewalls, IPS, conectividad WAN/Internet y terminación de VPNs para acceso remoto."},
  {id: 9, pregunta: "¿Qué es el Multihoming en el contexto del extremo del proveedor?", respuesta: "Conectar la empresa a múltiples ISPs o usar múltiples enlaces para proveer redundancia y conmutación por error en caso de falla de un proveedor."},
  {id: 10, pregunta: "¿Cómo se clasifican las redes según la cantidad de dispositivos?", respuesta: "Pequeña (hasta 200), Mediana (200 a 1000) y Grande (más de 1000 dispositivos)."},
  {id: 11, pregunta: "¿Qué significa el principio de 'Resistencia' en el diseño de redes?", respuesta: "La red debe estar disponible tanto en condiciones normales (tráfico esperado) como anormales (fallos de hardware, ataques DoS, cargas extremas)."},
  {id: 12, pregunta: "¿Qué funciones específicas realiza la Capa de Acceso en un entorno LAN?", respuesta: "Switching Capa 2, alta disponibilidad, seguridad de puerto, clasificación QoS, inspección ARP, PoE y VLANs auxiliares para VoIP."},
  {id: 13, pregunta: "¿Por qué es importante la 'Modularidad' en el diseño de red?", respuesta: "Permite separar la red en bloques funcionales independientes, lo que facilita el diseño, la implementación, el crecimiento y la resolución de problemas."},
  {id: 14, pregunta: "¿Qué es el Módulo de Centro de Datos en la arquitectura empresarial?", respuesta: "Bloque responsable de administrar y mantener los servidores y sistemas de datos críticos para la operación del negocio."},
  {id: 15, pregunta: "¿Qué submódulos componen el Módulo Remoto?", respuesta: "Sucursales de la empresa, Trabajadores a distancia (conectados vía ISP local y VPN) y Centro de datos externo (para recuperación ante desastres)."},
  {id: 16, pregunta: "¿Cuál es la motivación principal para elegir un diseño de Núcleo Contraído?", respuesta: "La reducción de costos de la red, manteniendo la mayoría de los beneficios del modelo jerárquico de tres niveles en redes que no crecerán mucho."},
  {id: 17, pregunta: "¿Qué es la DMZ (Zona Desmilitarizada) dentro del perímetro empresarial?", respuesta: "Una red aislada donde se ubican servidores públicos (web, correo) para que, si son comprometidos, el atacante no tenga acceso directo a la Intranet."},
  {id: 18, pregunta: "¿Qué significa que una red tenga 'Flexibilidad' según los principios de diseño?", respuesta: "La capacidad de modificar partes de la red, agregar nuevos servicios o aumentar la capacidad sin necesidad de reemplazar el hardware principal."},
  {id: 19, pregunta: "¿Qué dispositivo actúa como punto de demarcación entre los dominios de broadcast en la Capa de Distribución?", respuesta: "El Router o el Switch Multicapa (Capa 3), ya que no reenvían broadcasts de una VLAN a otra."},
  {id: 20, pregunta: "¿Por qué el núcleo debe lograr la escalabilidad mediante equipos más rápidos y no con más equipos?", respuesta: "Para evitar la complejidad de la topología y mantener un transporte rápido y simple. Se escala actualizando la capacidad de los switches Core, no agregando más capas."},

  // TEMA 2: VLANs, VTP y STP (21-40)
  {id: 21, pregunta: "¿Qué es una VLAN y cuál es su principal ventaja de seguridad?", respuesta: "Es una Red de Área Local Virtual que segmenta una red física en múltiples redes lógicas. Su ventaja es que el tráfico de una VLAN no se propaga a otras, aislando datos sensibles."},
  {id: 22, pregunta: "¿Para qué sirve la VLAN de Voz y qué garantiza?", respuesta: "Está destinada al tráfico telefónico y de comunicaciones unificadas. Garantiza la Calidad de Servicio (QoS) para que las llamadas no se corten por congestión de datos."},
  {id: 23, pregunta: "¿Qué es la VLAN Nativa en un enlace Trunk?", respuesta: "Es la VLAN predeterminada cuyo tráfico viaja SIN etiqueta (untagged) a través del enlace troncal entre switches. Por seguridad, debe cambiarse de la VLAN 1."},
  {id: 24, pregunta: "¿Qué función cumple el estándar IEEE 802.1Q?", respuesta: "Permite transportar tráfico de múltiples VLANs por un mismo enlace físico agregando una etiqueta (tag) de 4 bytes a cada trama para identificar a qué VLAN pertenece."},
  {id: 25, pregunta: "¿Qué es el protocolo VTP y cuál es su función principal?", respuesta: "VLAN Trunking Protocol. Es un protocolo de Cisco que permite la administración centralizada y la propagación automática de la información de VLANs a través de la red."},
  {id: 26, pregunta: "¿Cuál es la diferencia entre un switch en modo VTP Server y uno en modo Client?", respuesta: "El Server crea, modifica y propaga los cambios de VLANs. El Client recibe y aplica automáticamente los cambios enviados por el Server, pero no puede crear VLANs localmente."},
  {id: 27, pregunta: "¿Por qué un switch en modo VTP Transparente es útil en una red multi-vendor?", respuesta: "Porque no participa en la sincronización de VLANs (mantiene su propia base de datos), pero retransmite los mensajes VTP, permitiendo que otros switches Cisco al otro lado sí se sincronicen."},
  {id: 28, pregunta: "¿Qué problema resuelve el protocolo STP (Spanning Tree Protocol)?", respuesta: "Evita los bucles de Capa 2 (Tormentas de Broadcast) en redes con enlaces redundantes, bloqueando lógicamente puertos para mantener una topología de árbol sin bucles."},
  {id: 29, pregunta: "¿Cómo se elige el Root Bridge (Puente Raíz) en STP?", respuesta: "Se elige el switch con el Bridge ID (BID) más bajo. El BID se compone de la Prioridad del switch y su dirección MAC (gana la prioridad más baja, y en empate, la MAC más baja)."},
  {id: 30, pregunta: "¿Qué es un Root Port y en qué estado se encuentra?", respuesta: "Es el puerto en un switch no-raíz que tiene el camino de menor costo hacia el Root Bridge. Siempre se encuentra en estado Forwarding."},
  {id: 31, pregunta: "¿Qué es un Designated Port (Puerto Designado)?", respuesta: "Es el puerto en cada segmento de red que ha sido seleccionado como el mejor para reenviar tráfico hacia el Root Bridge. También está en estado Forwarding."},
  {id: 32, pregunta: "¿Qué ocurre en un puerto STP que está en estado 'Blocking'?", respuesta: "No reenvía tráfico de datos de usuarios (para evitar bucles), pero sí recibe y procesa mensajes BPDU para mantener la topología y estar listo para activarse si el enlace principal falla."},
  {id: 33, pregunta: "¿Qué mejora introduce RSTP (Rapid STP) frente al STP tradicional?", respuesta: "Permite una convergencia mucho más rápida (en sub-segundos en lugar de 30-50 segundos) ante fallos en la topología de red."},
  {id: 34, pregunta: "¿Qué es PVST+ (Per-VLAN Spanning Tree Plus)?", respuesta: "Una extensión de Cisco que implementa una instancia independiente de STP por cada VLAN, permitiendo balancear la carga haciendo que diferentes VLANs usen diferentes enlaces troncales."},
  {id: 35, pregunta: "¿Qué son los paquetes BPDU?", respuesta: "Bridge Protocol Data Units. Son los mensajes que los switches intercambian para elegir el Root Bridge, calcular caminos y detectar bucles en la red."},
  {id: 36, pregunta: "¿Qué es PortFast y dónde debe usarse?", respuesta: "Función que hace que un puerto pase inmediatamente a estado Forwarding (omit Listening/Learning). Debe usarse SOLO en puertos de acceso donde se conectan PCs o APs, nunca entre switches."},
  {id: 37, pregunta: "¿Qué hace BPDU Guard en un puerto con PortFast?", respuesta: "Si el puerto recibe un BPDU (alguien conectó un switch no autorizado), BPDU Guard apaga el puerto inmediatamente (estado err-disabled) para evitar bucles accidentales."},
  {id: 38, pregunta: "¿Cuál es el peligro de conectar un switch viejo con un 'Configuration Revision Number' alto en modo VTP Server?", respuesta: "Puede sobrescribir y borrar todas las VLANs de toda la red corporativa en segundos. Solución: ponerlo en modo Transparente o borrar su vlan.dat antes de conectarlo."},
  {id: 39, pregunta: "¿Qué comando de IOS muestra el estado de los puertos Trunk y las VLANs permitidas?", respuesta: "El comando `show interfaces trunk`."},
  {id: 40, pregunta: "¿Por qué una red 'plana' (sin VLANs ni Capa 3) se vuelve inutilizable al crecer?", respuesta: "Porque todos los dispositivos comparten el mismo dominio de broadcast. El tráfico de broadcast satura el ancho de banda y los tiempos de respuesta se degradan hasta colapsar la red."},

  // TEMA 3: Redundancia y Agregación (41-60)
  {id: 41, pregunta: "¿Qué problema resuelven los protocolos FHRP (First Hop Redundancy Protocols)?", respuesta: "Resuelven el punto único de falla del gateway predeterminado. Permiten que varios routers físicos compartan una IP y MAC virtual, haciendo el failover transparente para los hosts."},
  {id: 42, pregunta: "¿Cuál es la diferencia principal entre HSRP y VRRP?", respuesta: "HSRP es propietario de Cisco (roles Active/Standby). VRRP es un estándar abierto IEEE (roles Master/Backup) que funciona entre routers de diferentes fabricantes."},
  {id: 43, pregunta: "¿Por qué se dice que en HSRP el router Standby está 'ocioso'?", respuesta: "Porque solo escucha mensajes Hello y no reenvía tráfico de datos a menos que el router Active falle. No aprovecha su ancho de banda en condiciones normales."},
  {id: 44, pregunta: "¿Cómo logra GLBP hacer balanceo de carga real sin crear múltiples grupos?", respuesta: "GLBP usa un AVG que asigna diferentes MACs virtuales a cada router del grupo (AVF). Cuando los hosts piden la MAC del gateway por ARP, el AVG responde con una MAC distinta para cada uno, distribuyendo el tráfico."},
  {id: 45, pregunta: "¿Qué es el AVG en GLBP?", respuesta: "Active Virtual Gateway, es el 'cerebro' que responde a peticiones ARP y asigna MACs virtuales a los AVF."},
  {id: 46, pregunta: "¿Qué problema resuelve EtherChannel?", respuesta: "STP bloquea enlaces redundantes. EtherChannel agrupa múltiples enlaces físicos en uno lógico, permitiendo usar todo el ancho de banda sin que STP bloquee nada."},
  {id: 47, pregunta: "¿Qué ocurre si se corta un enlace físico dentro de un EtherChannel?", respuesta: "El tráfico se redistribuye automáticamente entre los enlaces restantes. STP no reacciona ni recalcula la topología, porque ve el EtherChannel como un único enlace lógico que sigue 'UP'."},
  {id: 48, pregunta: "¿Qué protocolo de negociación de EtherChannel es estándar IEEE y permite interoperabilidad entre diferentes fabricantes?", respuesta: "LACP (Link Aggregation Control Protocol - IEEE 802.3ad)."},
  {id: 49, pregunta: "¿Por qué falla la combinación `passive + passive` en LACP?", respuesta: "Porque el modo `passive` solo responde a paquetes LACP, pero nunca los inicia. Si ambos lados son `passive`, nadie inicia la negociación y el canal nunca se forma."},
  {id: 50, pregunta: "¿Por qué un switch rechazará agrupar puertos GigabitEthernet y FastEthernet en un mismo EtherChannel?", respuesta: "Una de las restricciones estrictas de EtherChannel es que todos los puertos físicos deben tener la misma velocidad y el mismo modo dúplex. No se pueden mezclar tipos de interfaz."},
  {id: 51, pregunta: "¿En qué interfaz lógica debe aplicarse la configuración de `switchport mode trunk` en un EtherChannel?", respuesta: "En la interfaz lógica Port-Channel. Hacerlo en la interfaz Port-Channel asegura la coherencia de la configuración en todos los enlaces físicos miembros del grupo."},
  {id: 52, pregunta: "¿Cómo distribuye el tráfico un EtherChannel entre sus enlaces físicos?", respuesta: "Usa un algoritmo hash (por defecto src-mac o dst-mac) para asignar flujos completos a enlaces específicos. Esto mantiene el orden de los paquetes dentro de una conversación TCP."},
  {id: 53, pregunta: "¿Qué comando de IOS verifica el estado de todos los EtherChannels y qué significan las letras 'SU'?", respuesta: "`show etherchannel summary`. 'SU' significa que el canal es de Capa 2 (S = Layer 2) y está en uso (U = In Use)."},
  {id: 54, pregunta: "¿Por qué se dice que HSRP y VRRP desperdician recursos de hardware en comparación con GLBP?", respuesta: "En HSRP y VRRP, solo el router Activo reenvía tráfico; el router de respaldo está 'ocioso' consumiendo energía y hardware sin reenviar datos. GLBP utiliza todos los routers simultáneamente."},
  {id: 55, pregunta: "¿Qué dirección MAC responden los routers activos en HSRP a las peticiones ARP de los hosts?", respuesta: "La Dirección MAC Virtual del grupo HSRP (ej. empieza con 0000.0C07.ACxx). Esto ayuda a la estabilidad porque, si el router activo cambia, la MAC Virtual sigue siendo la misma."},
  {id: 56, pregunta: "¿Qué valor de prioridad asignarías a un router en GLBP para evitar que se convierta en AVG?", respuesta: "La prioridad más baja posible (ej. 1), o ajustar la prioridad de los otros routers para que sean más altas."},
  {id: 57, pregunta: "Si STP decide bloquear un puerto para romper el bucle y ese puerto pertenece a un EtherChannel, ¿qué bloquea exactamente?", respuesta: "STP ve el EtherChannel como un único puerto lógico. Si el algoritmo de STP determina que ese camino debe ser bloqueado, bloqueará el Port-Channel completo (todos los puertos físicos miembros)."},
  {id: 58, pregunta: "¿Cuáles son los dos modos de operación de PAgP y cuál es la única combinación exitosa?", respuesta: "desirable (inicia la negociación) y auto (solo responde). La única combinación exitosa es desirable + desirable o desirable + auto."},
  {id: 59, pregunta: "Mencione al menos tres causas comunes que impedirían que los puertos físicos formen un EtherChannel", respuesta: "1) Velocidad o Dúplex diferente, 2) Configuración de VLAN/Trunk inconsistente, 3) Rango de VLANs permitido diferente."},
  {id: 60, pregunta: "¿Qué característica de resiliencia comparte GLBP con HSRP y VRRP si el router que está reenviendo el tráfico de un host específico se cae?", respuesta: "Conmutación por Falla (Failover) Automática y Transparente. Si un router AVF se cae, el AVG detecta la falla y redirige el tráfico a otro AVF disponible, manteniendo la conectividad sin que el usuario final tenga que cambiar su configuración de Gateway."}
];

// ============================================
// SECCIÓN 3: TROUBLESHOOTING (40 casos)
// ============================================
const casosTroubleshooting = [
  {id: 1, sintoma: "Todos los empleados reportan que no pueden acceder a Internet ni a los recursos internos. Nadie puede trabajar.", evidencia: "El switch central de 48 puertos del rack está completamente apagado. Los LEDs de los puertos no encienden.", solucion: "Capa 1-2 / Switch central. Reemplazar el switch dañado. Implementar redundancia con un segundo switch y configurar STP."},
  {id: 2, sintoma: "La conexión a Internet se cae constantemente en la planta de manufactura, especialmente cuando las máquinas pesadas están en funcionamiento.", evidencia: "ping 8.8.8.8 muestra pérdida de paquetes del 30-40%. Latencia variable. El cableado UTP Cat5e pasa junto a maquinaria industrial.", solucion: "Capa 1 / Interferencia Electromagnética (EMI). Reemplazar UTP por fibra óptica o usar cable STP blindado."},
  {id: 3, sintoma: "La red está insoportablemente lenta. Las páginas web tardan minutos en cargar.", evidencia: "Logs del switch: 'Broadcast Storm detected' y 'Excessive collisions'. LEDs parpadean frenéticamente. Alguien conectó ambos extremos de un cable al mismo switch.", solucion: "Capa 2 / Bucle de Capa 2. Desconectar el cable que crea el bucle. Habilitar STP en todos los switches."},
  {id: 4, sintoma: "El departamento de Contabilidad se mudó a una nueva subred (192.168.50.0/24), pero nadie desde otras áreas puede acceder a sus recursos.", evidencia: "tracert se queda estancado en el router principal. La tabla de enrutamiento no muestra la ruta hacia 192.168.50.0/24.", solucion: "Capa 3 / Enrutamiento Estático. Agregar ruta estática o habilitar OSPF para anunciar la nueva subred."},
  {id: 5, sintoma: "Se instaló un servidor nuevo con IPv6-only, pero los equipos legacy (solo IPv4) no pueden conectarse a él.", evidencia: "ping6 funciona desde PC moderna. ping IPv4 falla porque el servidor no tiene interfaz IPv4.", solucion: "Capa 3 / IPv4 vs IPv6. Configurar Dual-Stack en el servidor (ambas direcciones IP)."},
  {id: 6, sintoma: "Un usuario de Ventas tiene link en el puerto pero no puede acceder a recursos de su VLAN (VLAN 20). Obtuvo IP APIPA 169.254.x.x.", evidencia: "El puerto del switch está configurado como acceso para VLAN 10. El trunk no permite la VLAN 20.", solucion: "Capa 2 / VLAN Trunking. Configurar puerto: switchport access vlan 20. Agregar VLAN 20 al trunk."},
  {id: 7, sintoma: "El Wi-Fi funciona terriblemente lento los lunes por la mañana, pero los fines de semana va perfectamente.", evidencia: "Analizador muestra 15 redes vecinas operando en el canal 6 (2.4GHz). La red de la empresa también está en canal 6.", solucion: "Capa 1 / Interferencia de Canal Wi-Fi. Cambiar a canal 1, 6 u 11, o migrar a banda 5GHz."},
  {id: 8, sintoma: "Se cortó el enlace principal entre dos routers, pero el tráfico no se redirigió automáticamente al enlace de respaldo.", evidencia: "show ip route muestra que la ruta sigue apuntando al enlace caído. OSPF no forma adyacencia por el enlace de respaldo.", solucion: "Capa 3 / Protocolo de Enrutamiento. Verificar configuración OSPF, Router IDs, reiniciar proceso OSPF."},
  {id: 9, sintoma: "El sistema de detección reporta actividad anómala masiva. Varios servidores están siendo cifrados rápidamente.", evidencia: "Logs del firewall perimetral NO muestran alerta de intrusión externa. Logs SMB muestran accesos masivos desde una PC interna.", solucion: "Capa 4-7 / Tráfico Este-Oeste. Implementar firewalls internos y microsegmentación. Desconectar equipos afectados. Restaurar desde backups."},
  {id: 10, sintoma: "Las PCs tienen IP correcta pero no pueden navegar por Internet.", evidencia: "ipconfig muestra IP 192.168.1.50, Máscara OK, pero Gateway en blanco. ping 8.8.8.8 falla.", solucion: "Capa 3 / Gateway por defecto. Configurar el gateway correctamente en DHCP o manualmente. Verificar conexión al puerto WAN."},
  {id: 11, sintoma: "Un empleado intenta acceder a intranet.empresa.com pero el navegador muestra ERR_NAME_NOT_RESOLVED. Por IP (192.168.10.50) carga perfecto.", evidencia: "ping intranet.empresa.com falla. ping 192.168.10.50 responde. nslookup devuelve Non-existent domain.", solucion: "Capa 7 / DNS. Ejecutar ipconfig /flushdns. Verificar registro Tipo A en el servidor DNS."},
  {id: 12, sintoma: "Al abrir el sitio web corporativo, el texto se muestra pero todas las imágenes aparecen como íconos rotos.", evidencia: "Consola del navegador (F12) muestra errores 404 Not Found para archivos /images/logo.png, /images/banner.jpg.", solucion: "Capa 7 / HTTP. Verificar rutas en HTML (mayúsculas/minúsculas en Linux). Verificar que archivos existan. Revisar permisos del usuario www-data."},
  {id: 13, sintoma: "Los usuarios pueden conectarse al FTP y navegar carpetas, pero al subir archivos grandes (>100MB), la transferencia se interrumpe.", evidencia: "Cliente FTP muestra 'Connection reset by peer'. Archivos pequeños funcionan. Puerto 21 responde. Hay firewall/NAT en el medio.", solucion: "Capa 4-7 / FTP Modo Pasivo. Configurar cliente FTP en Modo Pasivo (PASV). Configurar rango fijo de puertos en el servidor y abrirlos en el firewall."},
  {id: 14, sintoma: "Los empleados pueden recibir correos pero no pueden enviar. El cliente muestra 'Relay access denied'.", evidencia: "Servidor SMTP responde en puerto 25. Logs muestran 'Client host rejected'. Configuración del cliente sin autenticación.", solucion: "Capa 7 / SMTP. Habilitar autenticación SMTP en el cliente de correo (usuario y contraseña)."},
  {id: 15, sintoma: "El servidor web interno funciona para empleados, pero clientes desde Internet no pueden acceder al sitio.", evidencia: "Desde PC interna http://192.168.1.100 carga. Desde celular con datos móviles http://200.10.10.5 da timeout. No hay reglas de Port Forwarding.", solucion: "Capa 3 / NAT Estática. Configurar Port Forwarding: ip nat inside source static tcp 192.168.1.100 80 200.10.10.5 80."},
  {id: 16, sintoma: "Todos los días a las 10:00 AM, cuando toda la empresa se conecta, Internet se vuelve extremadamente lento o se cae.", evidencia: "Router muestra CPU al 100%. show ip nat translations muestra más de 60,000 entradas (tabla desbordada). Router usa PAT con una sola IP pública.", solucion: "Capa 3-4 / PAT. Agregar más IPs públicas al pool de NAT. Implementar balanceo de carga con múltiples ISPs."},
  {id: 17, sintoma: "Durante videollamadas de Zoom, el video se congela y el audio se corta. Los mensajes de WhatsApp funcionan perfectamente.", evidencia: "ping muestra latencia estable 20ms. Analizador muestra alto jitter y pérdida de paquetes 5-10%. Zoom usa UDP, WhatsApp usa TCP.", solucion: "Capa 4 / UDP vs TCP / QoS. Implementar QoS en el router para priorizar tráfico de videoconferencia."},
  {id: 18, sintoma: "Un técnico conectó un cable extra entre dos switches para redundancia. Inmediatamente toda la red colapsó.", evidencia: "LEDs parpadean frenéticamente. show spanning-tree muestra STP deshabilitado. Analizador muestra millones de frames de broadcast/segundo.", solucion: "Capa 2 / Bucle STP. Habilitar STP inmediatamente: spanning-tree mode rapid-pvst. STP bloqueará lógicamente el enlace redundante."},
  {id: 19, sintoma: "Dos switches conectados, pero PCs de VLAN 10 en un switch no pueden comunicarse con PCs de VLAN 10 en el otro.", evidencia: "show interfaces trunk en Switch A: Allowed VLANs 1,20,30. En Switch B: Allowed VLANs 1,10,20,30. VLAN 10 no permitida en Switch A.", solucion: "Capa 2 / 802.1Q Trunking. Agregar VLAN 10 al trunk del Switch A: switchport trunk allowed vlan add 10."},
  {id: 20, sintoma: "Un usuario no puede acceder a Internet. Su PC tiene IP válida (192.168.1.50) pero no puede hacer ping al gateway (192.168.1.1).", evidencia: "ping a sí mismo responde. ping al gateway falla. arp -a muestra MAC 00-50-56-C0-00-08 para el gateway, pero la MAC real del router es 00-1A-2B-3C-4D-5E.", solucion: "Capa 2-3 / ARP. Limpiar caché ARP: arp -d *. Buscar dispositivo con MAC conflictiva. Verificar IP duplicada."},
  {id: 21, sintoma: "Los usuarios reportan que no pueden abrir documentos. Todos los archivos tienen extensión .locked y aparece nota pidiendo Bitcoin.", evidencia: "Logs SMB muestran accesos masivos anómalos desde PC interna a las 3:00 AM. Firewall perimetral sin alertas. Archivo decrypt_instructions.txt en cada carpeta.", solucion: "Capa 7 / Ransomware. Desconectar equipos afectados INMEDIATAMENTE. No pagar rescate. Restaurar desde backups offline. Investigar vector de entrada (phishing)."},
  {id: 22, sintoma: "Un empleado intenta enviar 'clientes_2026.csv' por correo pero el sistema lo bloquea automáticamente.", evidencia: "Log del firewall: 'DLP Policy Triggered - PII Detected - Action: Block'. El archivo contiene 5,000 registros con datos personales.", solucion: "Capa 7 / DLP. El DLP funcionó correctamente. Investigar al empleado: ¿trabajo remoto legítimo o exfiltración? Capacitar sobre métodos seguros (VPN)."},
  {id: 23, sintoma: "El IDS generó alertas sobre escaneo de puertos, pero el atacante logró entrar a la red de todos modos.", evidencia: "Logs del IDS: 'Alert: Port scan detected - Action: Log only'. No hay logs de 'Connection dropped'. Horas después, acceso no autorizado a servidor crítico.", solucion: "Capa 3-7 / IDS vs IPS. Cambiar de IDS a IPS, o configurar IDS en modo Inline/Block para que bloquee automáticamente."},
  {id: 24, sintoma: "Después de actualizar reglas del firewall, nadie puede acceder al sitio web corporativo, aunque el servidor web funciona.", evidencia: "Reglas del firewall: 1. deny ip any any / 2. permit tcp any any eq 80 / 3. permit tcp any any eq 443. ping funciona, http/https timeout.", solucion: "Capa 3-4 / ACL. Reordenar reglas: las específicas (permit 80/443) deben ir ANTES de deny ip any any. Las ACL se leen de arriba hacia abajo."},
  {id: 25, sintoma: "Los usuarios reportan que el navegador muestra 'Conexión no privada' al entrar al banco online.", evidencia: "Detalle del certificado: 'Not After: [Fecha de ayer]'. El certificado expiró.", solucion: "Capa 6-7 / SSL/TLS. Renovar y reinstalar el certificado digital con la CA (Autoridad de Certificación)."},
  {id: 26, sintoma: "Un administrador no puede entrar a su cuenta, dice 'Cuenta bloqueada'.", evidencia: "Logs AD: 50 intentos fallidos de login en 1 minuto desde IP extranjera.", solucion: "Capa 7 / Fuerza Bruta. Desbloquear cuenta en AD. Bloquear IP origen en Firewall perimetral. Investigar si hubo compromiso de credenciales."},
  {id: 27, sintoma: "La web está caída y el enlace de Internet está saturado al 100%.", evidencia: "Captura de paquetes: Millones de TCP SYN sin el ACK final (Half-open connections).", solucion: "Capa 3-4 / DDoS SYN Flood. Activar Anti-spoofing, Rate-limiting o contratar mitigación DDoS en la nube."},
  {id: 28, sintoma: "Alguien entró a una cuenta corporativa desde Rusia, pero el usuario tiene MFA activado.", evidencia: "Log: Login exitoso. Usuario confirmó 'Sí' en la app del celular (MFA Fatigue).", solucion: "Capa 7 / Phishing / MFA Fatigue. Revocar sesión, resetear credenciales, re-entrenar al usuario sobre ingeniería social."},
  {id: 29, sintoma: "Hackearon un servidor Linux, pero no hay rastro en los logs.", evidencia: "/var/log/auth.log está vacío o truncado. El atacante borró los logs locales.", solucion: "Capa 7 / Auditoría. Centralizar logs en un servidor Syslog remoto (WORM) para que no puedan ser borrados localmente."},
  {id: 30, sintoma: "Un pasante de TI borró por error la carpeta de 'Nómina de Directivos'.", evidencia: "El usuario es miembro del grupo 'Domain Admins' por herencia de un grupo antiguo.", solucion: "Capa 7 / Menor Privilegio. Quitar del grupo Admin. Auditar y aplicar permisos NTFS/Linux estrictos. Principio de menor privilegio."},
  {id: 31, sintoma: "Una VM tiene internet, pero la PC física (Host) no puede hacerle ping a la IP de la VM.", evidencia: "La VM está configurada en modo NAT en VMware.", solucion: "Capa 3 / VMware NAT. NAT oculta la VM. Cambiar a Host-Only o configurar Port Forwarding en VMware."},
  {id: 32, sintoma: "Pusiste una VM en modo Bridged, pero no obtiene IP de la red corporativa.", evidencia: "Switch físico: Log 'Port Security violation / MAC limit exceeded'.", solucion: "Capa 2 / Port Security. El switch bloquea MACs desconocidas. Registrar la MAC de la VM en el switch físico."},
  {id: 33, sintoma: "Una VM de pruebas en modo Host-Only no puede descargar actualizaciones de Windows Update.", evidencia: "ipconfig no muestra Default Gateway.", solucion: "Capa 3 / VMware Host-Only. Host-Only es aislado. Agregar una segunda NIC a la VM en modo NAT para salida a internet."},
  {id: 34, sintoma: "Un contenedor Docker corre la aplicación web, pero localhost:80 desde el Host da error.", evidencia: "docker ps muestra: 80/tcp (sin mapeo al host).", solucion: "Capa 4-7 / Docker Ports. Faltó mapear. Ejecutar: docker run -p 80:80 mi_imagen."},
  {id: 35, sintoma: "La página web en Linux no abre, da 'Connection Refused'.", evidencia: "sudo systemctl status apache2 muestra: inactive (dead).", solucion: "Capa 7 / Systemd. El servicio se cayó. Ejecutar: sudo systemctl restart apache2."},
  {id: 36, sintoma: "La web carga, pero al entrar a /admin da '403 Forbidden'.", evidencia: "ls -l muestra que el dueño es root y permisos 700.", solucion: "Capa 7 / chmod / chown. El usuario web no tiene permisos. Ejecutar: chown www-data carpeta y chmod 755 carpeta."},
  {id: 37, sintoma: "Las PCs no pueden unirse al Dominio: 'No hay servidores de inicio de sesión disponibles'.", evidencia: "nslookup -type=SRV _ldap._tcp.dc._msdcs... falla.", solucion: "Capa 7 / AD DNS. Fallan los registros SRV. Reiniciar servicio Netlogon en el Controlador de Dominio."},
  {id: 38, sintoma: "tracert a Google muere en el salto 3, pero Chrome carga perfectamente.", evidencia: "El router del salto 3 responde 'Request Timed Out' en tracert.", solucion: "Capa 3 / ICMP vs TCP. Falso positivo. El router bloquea ICMP (tracert), pero deja pasar TCP 443 (Chrome). La red funciona bien."},
  {id: 39, sintoma: "Las VMs en VirtualBox van lentísimas comparadas con el servidor ESXi.", evidencia: "Administrador de Tareas de Windows muestra alto uso de CPU del SO anfitrión.", solucion: "Hardware / Hipervisor Tipo 2. El SO Host consume recursos. Migrar a Hipervisor Tipo 1 (ESXi/Proxmox)."},
  {id: 40, sintoma: "Un Pod de Kubernetes se reinicia solo cada 10 minutos exactos.", evidencia: "kubectl describe pod muestra Reason: OOMKilled.", solucion: "App / K8s Resources. Se quedó sin RAM. Aumentar limits.memory en el manifiesto YAML del Pod."}
];
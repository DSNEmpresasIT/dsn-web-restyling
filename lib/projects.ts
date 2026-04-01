export interface Project {
  id: string;
  title: string;
  category: string;
  location: string;
  description: string;
  image: string;
  year?: string;
  sector?: string;
  client?: string;
  scope?: string[];
  tech?: string[];
  results?: { label: string; value: string }[];
}

export const PROJECTS = [
  {
    "id": "paso-de-frontera-argentina-uruguay-modernizacion",
    "title": "PASO DE FRONTERA ARGENTINA - URUGUAY - MODERNIZACION ",
    "client": "(UEP) UNIDAD EJECUTORA DE E.R. / (BID) BANCO INTERAMERICANO DE DESARROLLO.",
    "year": "2024-2026",
    "category": "Infraestructura",
    "image": "/images/projects/paso-de-frontera-argentina-uruguay-modernizacion.webp",
    "description": "Provisión y ejecución Proyecto de modernización Centro de Frontera Argentina Uruguay (Cdia.Salto). Obra llave en mano, Desde Proyecto ejecutivo hasta ingeniería, planificación, provisión de total del  equipamiento, instalación, configuración y puesta en marcha de infraestructura de comunicaciones, seguridad electrónica y software operativo de cruzamiento de datos del complejo. Puestos de trabajo, Cabinas de atención, Barreras, Semaforización, Detectores de masa Metálica, cableado estructurado, Fibra óptica, canalizaciones entre los distintos sectores y edificios del paso fronterizo, Datos y energía aplicada a sistemas tecnológicos, implementación de enlaces de comunicaciones seguros y cifrados, normas de seguridad aplicadas para la continuidad operativa y alta disponibilidad. Instalación, montaje y configuración de racks de comunicaciones distribuidos entre los edificios E1, E2 y E3, Planta baja y planta alta. Intervención sobre la totalidad de los sectores críticos: Aduana, Gendarmería Nacional, Migraciones Argentina, Migraciones Uruguay, Transporte Argentina, Transporte Uruguay, SENASA, Arca, despachantes de aduana, y resto de organismos. Construcción de todas las salas técnicas, Electrónica de cabinas de atención, sistemas de acceso. Provisión e instalación de más de 230 cámaras de seguridad con tecnología de analítica de video, monitoreo inteligente con lectura de patentes, análisis de personas, peatones y trafico de camiones, control de cargas. Software de Reportes diarios, semanales y mensuales de tráfico, circulación y eventos relevantes. Escritura e implementación de Software a medida de alta complejidad y seguridad para el control migratorio de buses y micros mediante pasarelas biométricas, integración por API y Webservices con Migraciones Argentina y mecanismos de cruce de información con bases de datos de INTERPOL, consolidando una plataforma de alto nivel tecnológico orientada a la seguridad, trazabilidad, control documental y modernización operativa del paso de frontera.\nDSN EMPRESAS."
  },
  {
    "id": "aeropuerto-comodoro-pierrestegui",
    "title": "AEROPUERTO COMODORO PIERRESTEGUI",
    "client": "(UEP) UNIDAD EJECUTORA DE E.R. / (BID) BANCO INTERAMERICANO DE DESARROLLO.",
    "year": "2023-2026",
    "category": "Infraestructura",
    "image": "/images/projects/aeropuerto-comodoro-pierrestegui.webp",
    "description": "Proyecto integral llave en mano. Infraestructura tecnológica aeroportuaria, Alcance: Proyecto ejecutivo, provisión, instalación, integración, configuración y puesta en marcha de todos los sistemas principales de seguridad, comunicaciones y operación (SEÑALES DEBILES, CCTV, CA, MEGAFONIA, CABLEADO, EQUIPAMIENTO EN LADO TIERRA Y AIRE). Ejecución de la red troncal de fibra óptica en lado tierra y lado aire, vinculaciones de Terminal de Pasajeros (TPA), Torre de Control, SEI, planta de combustibles y demás dependencias operativas, junto con la implementación de salas de racks, salas de comunicaciones, canalizaciones generales, cableado estructurado, networking, equipos activos de red, equipamiento de comunicaciones. Ingeniería y topología para Plataforma robusta y centralizada de toda la operación. Provisión e instalación del sistema integral de CCTV, analítica de video, cobertura de áreas operativas y públicas, grabación centralizada, monitoreo en tiempo real y herramientas inteligentes para supervisión y seguridad. Desarrollo y puesta en marcha de Sistema completo de control de accesos. Infraestructura de señales débiles asociada a sistemas contra incendios, integrados bajo criterios de seguridad, continuidad operativa y alta confiabilidad. Megafonía aeroportuaria, Ingeniería, provisión e implementación del sistema completo de anuncios con Inteligencia Artificial, difusores sonoros en TPA, Torre de Control y sectores operativos, priorización de mensajes, zonificación, emisión de avisos operativos y de emergencia, y funcionalidades asistidas para mensajes ante contingencias, conforme a criterios y estándares aplicables al ámbito aeroportuario. Provisión y Montaje de Sistemas FIDS, incluyendo pantallas, tótems informativos y software para información de vuelos, destinados a la comunicación visual en tiempo real de arribos, partidas y avisos operativos al pasajero. Cumplimiento de protocolos y requerimientos de organismos como PSA, ANAC y ORSNA, desde la ingeniería ejecutiva hasta la puesta en servicio final de los sistemas Protocolos y Pruebas ensayos. \nOBRA CON 10 AÑOS DE GARANTIA ESCRITA.\nLP PIETROBONI - HELPORT - SABAVISA - DSN EMPRESAS."
  },
  {
    "id": "red-de-comunicaciones-ip-paso-frontera-puente-int-salto-grande",
    "title": "RED DE COMUNICACIONES IP PASO FRONTERA PUENTE INT. SALTO GRANDE",
    "client": "UEP - MINISTERIO DEL INTERIOR",
    "year": "2025-2026",
    "category": "Infraestructura",
    "description": "Proyecto de Telefonía IP Cisco Multiplataforma con Servidores Asterisk – Red de Comunicaciones del Paso Fronterizo Argentina – Uruguay, Puente Internacional Salto Grande\nSolución integral de telefonía IP segura para la red de comunicaciones del Paso Fronterizo entre Argentina y Uruguay – Puente Internacional Salto Grande, basada en infraestructura Cisco multiplataforma e integración con servidores Asterisk de altas prestaciones. El proyecto comprendió la ingeniería, configuración, puesta en marcha e interoperabilidad de una red de voz unificada destinada a vincular en forma confiable y segura a los distintos organismos intervinientes del centro de frontera, permitiendo comunicaciones internas y operativas con alta disponibilidad, administración centralizada y escalabilidad.\nDSN EMPRESAS."
  },
  {
    "id": "equipam-paso-fronterizo-argentina-uruguay-puente-int-salto-grande",
    "title": "EQUIPAM. PASO FRONTERIZO ARGENTINA - URUGUAY PUENTE INT. SALTO GRANDE",
    "client": "(UEP) UNIDAD EJECUTORA DE E.R. / (BID) BANCO INTERAMERICANO DE DESARROLLO.",
    "year": "2025-2026",
    "category": "Infraestructura",
    "description": "Préstamo 4688/0C-RG Programa de Desarrollo e Integración de la Región de \nSalto Grande.- Adquisición e instalación de equipamiento y Mobiliarios de Atención al Público y de Oficina. Provisión, Fabricación e instalación de mobiliario y equipamiento para Edificios E1, E2 y E3. Provision de Equipamiento para salas de espera y atención de personas para tramites migratorios. \nDSN EMPRESAS."
  },
  {
    "id": "plan-de-valorizacion-perilago-pdirsg-333-cp-b-18-9",
    "title": "PLAN DE VALORIZACIÓN PERILAGO PDIRSG-333- CP-B-18.9",
    "client": "(UEP) UNIDAD EJECUTORA DE E.R. / (BID) BANCO INTERAMERICANO DE DESARROLLO.",
    "year": 2026,
    "category": "Infraestructura",
    "description": "PLAN DE VALORIZACIÓN PERILAGO PDIRSG-333- CP-B-18.9 - Préstamo 4688/OC-RG Programa de Desarrollo e Integración de la Región de  Salto Grande. Provision de 40 Artefactos de Iluminación para Obra de Iluminacion PERILAGO. \nDSN EMPRESAS."
  },
  {
    "id": "edificio-panorama-xxi",
    "title": "EDIFICIO PANORAMA XXI",
    "client": "FIDEICOMISO \nPANORAMA XXI",
    "year": "2019-2026",
    "category": "BIM",
    "image": "/images/projects/edificio-panorama-xxi.webp",
    "description": "PROYECTO Y DESARROLLO PROPIO. EDIFICIO DE 5698 m2. \nConstrucción completa como operador a través de la figura de Fideicomiso, con la creación de su estructura jurídica y comercial. Utilización de capitales propios y de inversores para su creación. Desarrollo y construcción, abarcando, diseño, planos, arquitectura, calculo de estructura, construcción completa y provisión de equipamiento y materiales. Proyecto de Arquitectura integro BIM. Ejecución bajo metodología de Last Planner System (LPS) basado en Lean Construction. Excavaciones, Subestación  transformadora (SET), estructura, Instalaciones Sanitarias, Eléctricas, Iluminación, refrigeración , provisión de equipamiento, materiales, comercialización y administración. Obra finalizada en Febrero de 2026.  \nDSN EMPRESAS."
  },
  {
    "id": "construccion-provision-y-montaje-cierre-norte-132-kv",
    "title": "CONSTRUCCIÓN, PROVISIÓN Y MONTAJE CIERRE NORTE 132 KV",
    "client": "ENERSA",
    "year": 2024,
    "category": "Infraestructura",
    "description": "Ingeniería y provisión para gabinete de protecciones para transformador de potencia en ET 132kV “El\nPingo” (ENERSA) – Año 2024, \nIng. A. Piñol - DSN EMPRESAS."
  },
  {
    "id": "media-y-baja-tension-electrificacion-e-niluminacion-barrio-privado-l-orangerie-village",
    "title": "MEDIA Y BAJA TENSIÓN ELECTRIFICACIÓN E\nILUMINACIÓN BARRIO PRIVADO L’ORANGERIE VILLAGE.",
    "client": "L’ORANGERIE VILLAGE.",
    "year": 2024,
    "category": "Infraestructura",
    "description": "Realización de proyecto ejecutivo y dirección de obra en media y baja tensión para la electrificación e\niluminación del barrio privado L’Orangerie Village, La Criolla, Entre Ríos.\nIng. A. Piñol - DSN EMPRESAS."
  },
  {
    "id": "computos-y-estudio-de-costos-para-obras-de-estaciones-transformadoras",
    "title": "COMPUTOS Y ESTUDIO DE COSTOS PARA OBRAS DE ESTACIONES TRANSFORMADORAS",
    "client": "C.T.M. SALTO GRANDE",
    "year": "2022-2023",
    "category": "Infraestructura",
    "description": "Computos y estudio de Costos para el reemplazo de equipamiento de EAT en estaciones transformadoras del\ncuadrilátero de Salto Grande. (C.T.M. Salto Grande) – Año 2023\nComputos y estudio de costos para la ejecución de la obra Montaje de Transformador N°2 en estación\ntransformadora 500 kV – Salto Grande Uruguay. (C.T.M. Salto Grande). – Año 2022\nIng. A. Piñol - DSN EMPRESAS."
  },
  {
    "id": "diamante-sistema-de-videovigilancia-urbana-centro-de-monitoreo-urbano-cmu",
    "title": "DIAMANTE - SISTEMA DE VIDEOVIGILANCIA URBANA, CENTRO DE MONITOREO URBANO (CMU)",
    "client": "MUNICIPALIDAD DE DIAMANTE E.R.",
    "year": "2021-2022",
    "category": "Infraestructura",
    "description": "Implementación del sistema de videovigilancia (CCTV IP) y su conectividad mediante radioenlaces, incluyendo: Instalación y configuración de cámaras en puntos definidos por relevamiento, ajuste de encuadres y parámetros día/noche. Implementación de radioenlaces para vincular ubicaciones remotas al centro de monitoreo, con alineación, pruebas de estabilidad y verificación de capacidad para transporte de video. Datacenter y sala de racks principales: montaje y ordenamiento de infraestructura (switching/patching/energía) e instalación de los servidores del sistema para gestión y grabación. Pruebas finales de visualización, grabación y conectividad integral del esquema.\nDSN EMPRESAS - BA TECNOLOGÍA"
  },
  {
    "id": "sistema-de-videovigilancia-zona-costera-rio-uruguay-centro-de-monitoreo-carteleria-vial-led-con-sistemas-rev",
    "title": "SISTEMA DE VIDEOVIGILANCIA ZONA COSTERA RIO URUGUAY - CENTRO DE MONITOREO - CARTELERIA VIAL LED CON SISTEMAS REV",
    "client": "MUNICIPALIDAD DE CONCORDIA",
    "year": "2013-2023",
    "category": "Infraestructura",
    "description": "Provisión, instalación y puesta en marcha de sistema integral de videovigilancia zona costera Río Uruguay Concordia. Proyecto red integral CCTV, incluyendo domos de alta prestación, sistemas de conteo de personas y herramientas de control de tráfico. Instalación, montaje y provisión de cartel LED ciudadano con medición de velocidad y sistema REV de reducción de velocidad, destinado a fortalecer la seguridad vial y la prevención en la circulación urbana. Transmisión en vivo de imágenes Vía Streaming para Canal 13 Artear, Canal 9 del Litoral y otras emisoras, así como también el soporte al monitoreo de Prefectura Naval Argentina en la Zona de Frontera Concordia – Salto, mediante vigilancia permanente sobre el Río Uruguay. Centro de monitoreo, con acceso desde garita operativa y desde el puesto de control de Prefectura, permitiendo supervisión centralizada y respuesta operativa coordinada.\nDSN EMPRESAS."
  },
  {
    "id": "urdinarrain-sistema-de-videovigilancia-urbana-centro-de-monitoreo-urbano-cmu",
    "title": "URDINARRAIN - SISTEMA DE VIDEOVIGILANCIA URBANA, CENTRO DE MONITOREO URBANO (CMU)",
    "client": "MUNICIPALIDAD DE URDINARRAIN E.R.",
    "year": "2020-2022",
    "category": "Infraestructura",
    "description": "Instalación de Cámaras de seguridad y  Radio Enlaces con cobertura MAN. Instalación de 112 cámaras de alta resolución con analítica de video. Configuración y puesta en servicio para monitoreo centralizado y transporte estable de video desde los distintos puntos del ejido urbano. Instalación de RED MAN con repetidores y radioenlaces en toda la ciudad. Ingeniería de análisis de trafico de red, analítica de datos, mantenimiento.  DSN EMPRESAS - BA TECNOLOGÍA"
  },
  {
    "id": "planta-industrial-cerveceria-quilmes-acheral-tucuman",
    "title": "PLANTA INDUSTRIAL CERVECERÍA QUILMES ACHERAL TUCUMAN ",
    "client": "CERVECERÍA Y MALTERÍA QUILMES S.A.I.C.A.",
    "year": 2019,
    "category": "Software",
    "description": "Instalación de cámaras ANPR dedicado al análisis y seguimiento de circuito de Flujo de Vehículos y camiones. Asignación de turnos (carga/descarga) + preaviso del viaje (transportista, chofer, patente tractor/acoplado, tipo de carga). Gestión y seguimiento de turnos de carga/descarga en planta, Definición de esquema de ingresos egresos basado en turnos/ventanas. \nDSN EMPRESAS - BA TECNOLOGÍA"
  },
  {
    "id": "planta-industrial-cerveceria-quilmes-quilmes-zarate",
    "title": "PLANTA INDUSTRIAL CERVECERÍA QUILMES QUILMES ZARATE ",
    "client": "CERVECERÍA Y MALTERÍA QUILMES S.A.I.C.A.",
    "year": 2019,
    "category": "Software",
    "description": "Instalación de cámaras ANPR dedicado al análisis y seguimiento de circuito de Flujo de Vehículos y camiones. Asignación de turnos (carga/descarga) + preaviso del viaje (transportista, chofer, patente tractor/acoplado, tipo de carga). Check-in en portería: validación documental y de seguridad (transportista/chofer/unidad).\nDerivación a playa/espera (si aplica) hasta disponibilidad de muelle/balanza. Ingreso a muelle / zona de operación: posicionamiento, verificación, carga/descarga. Cierre documental (remitos/orden de carga/egreso) + check-out. Egreso con registro de salida y trazabilidad del viaje. DSN EMPRESAS - BA TECNOLOGÍA"
  },
  {
    "id": "planta-industrial-cerveceria-quilmes-planta-villa-madero-pvcia-buenos-aires",
    "title": "PLANTA INDUSTRIAL CERVECERÍA QUILMES PLANTA VILLA MADERO PVCIA. BUENOS AIRES",
    "client": "CERVECERÍA Y MALTERÍA QUILMES S.A.I.C.A.",
    "year": 2019,
    "category": "Software",
    "description": "Instalación de cámaras ANPR para saber el circuito de cargas de los camiones, mejora radical en los tiempos de demora de carga y descargas, análisis de recorridos para optimización de tiempos muertos en la demora de las cargas. DSN EMPRESAS - BA TECNOLOGÍA"
  },
  {
    "id": "planta-industrial-cerveceria-quilmes-planta-mendoza",
    "title": "PLANTA INDUSTRIAL CERVECERÍA QUILMES PLANTA MENDOZA ",
    "client": "CERVECERÍA Y MALTERÍA QUILMES S.A.I.C.A.",
    "year": 2019,
    "category": "Software",
    "description": "Solución de tecnología NeuralLabs con sistemas de cámaras ANPR/LPR (reconocimiento automático de patentes) orientada a la analítica del circuito de camiones y a la optimización de los procesos de carga y descarga. Instalación en puntos de control estratégicos (ingresos/egresos, balanzas, playas de espera, accesos a muelles y corredores internos), con registro automático de patente + fecha/hora + ubicación + sentido de circulación. Con esta trazabilidad se obtuvo un mapa operativo del recorrido de cada unidad, habilitando: Medición de tiempos de permanencia por etapa (check-in, espera, balanza, muelle, egreso). Detección de cuellos de botella y demoras recurrentes en carga/descarga. Análisis de recorridos para identificar desvíos, reingresos y tiempos muertos. Reportes y KPIs logísticos para la mejora continua (turnos, ocupación, tiempos promedio y outliers). Integración con videovigilancia para evidencia del evento y soporte a seguridad operativa. El resultado fue una herramienta de control y mejora que permite reducir demoras, ordenar el flujo de camiones y optimizar la utilización de recursos en planta.  DSN EMPRESAS - BA TECNOLOGÍA"
  },
  {
    "id": "tecnologia-y-modernizacion-de-la-red-cctv-movil-y-monitoreo-micros-urbanos-de-la-pvcia-buenos-aires",
    "title": "TECNOLOGIA Y MODERNIZACION DE LA RED CCTV MOVIL Y MONITOREO MICROS URBANOS DE LA PVCIA. BUENOS AIRES",
    "client": "GOBIERNO DE LA PROV. DE BUENOS AIRES",
    "year": 2019,
    "category": "Infraestructura",
    "description": "Equipamiento de seguridad para micros compuesto por un sistema de videovigilancia a bordo con integración de pedal/botón antipánico para emergencias. CCTV de registro en forma continua mediante DVR/NVR vehicular, con cámaras ubicadas en el interior (pasillo/cabina) y, cuando aplica, en el exterior (puertas/perímetro). Sistema de activación de antipánico por parte del conductor, para disparo de alarma inmediata, marcación de evento en grabación y habilitación de monitoreo y trazabilidad según configuración operativa (incluyendo notificación al centro de control por enlace de comunicaciones). DSN EMPRESAS - BA TECNOLOGÍA"
  },
  {
    "id": "defensa-argentina-fronteras-protegidas-aguas-blancas",
    "title": "DEFENSA ARGENTINA FRONTERAS PROTEGIDAS AGUAS BLANCAS",
    "client": "INVAP S.A.U",
    "year": 2019,
    "category": "Infraestructura",
    "description": "Montaje e instalación de radares en los puntos definidos por ingeniería (bases/soportes, orientación y fijación mecánica). Domos PTZ, Cámaras de Seguridad y servidores ANPR. Tecnología Milestone para monitorear Cámaras y Neural Labs como servidor ANPR, tecnología de alta seguridad para administración de entornos críticos y continuidad operativa. Pruebas de aceptación (SAT) y ajustes finos (encuadres, exposición, umbrales de lectura). Entrega documentada: planillas de IP, inventario de equipos, topología, configuración base, evidencias de pruebas y documentación “as-built” según requerimiento. DSN EMPRESAS - BA TECNOLOGÍA"
  },
  {
    "id": "defensa-argentina-fronteras-protegidas-salvador-mazza",
    "title": "DEFENSA ARGENTINA FRONTERAS PROTEGIDAS SALVADOR MAZZA",
    "client": "INVAP S.A.U",
    "year": 2019,
    "category": "Infraestructura",
    "description": "Montaje e instalación de radares en los puntos definidos por ingeniería, Domos PTZ, Cámaras de Seguridad y ANPR. Tecnología Milestone Sys para monitoreo de Cámaras, Software Neural Labs para ANPR server. Tendido e interconexión de enlaces de comunicaciones (UTP/FO según diseño), incluyendo patching en racks y acometidas hacia gabinetes/cámaras técnicas. Instalación/parametrización de Milestone como plataforma de monitoreo: incorporación de cámaras y definición de streams, configuración de grabación y retención, perfiles de usuarios/roles y permisos, vistas operativas (mapas, mosaicos, cámaras críticas). Validación de calidad de grabación, reproducción, exportación de evidencia y continuidad operativa.\nDSN EMPRESAS - BA TECNOLOGÍA"
  },
  {
    "id": "defensa-argentina-fronteras-protegidas-la-quiaca",
    "title": "DEFENSA ARGENTINA FRONTERAS PROTEGIDAS - LA QUIACA ",
    "client": "INVAP S.A.U",
    "year": 2019,
    "category": "Infraestructura",
    "description": "Montaje e instalación de radares en los puntos definidos por ingeniería, Domos PTZ, Cámaras de Seguridad y ANPR. Tecnología Milestone Sys para monitoreo de Cámaras, Software Neural Labs para ANPR server. Energización y protecciones: alimentación dedicada, protecciones termomagnéticas/diferenciales, puesta a tierra y verificación de continuidad (según normativa y requerimientos del sitio). DSN EMPRESAS - BA TECNOLOGÍA"
  },
  {
    "id": "defensa-argentina-fronteras-protegidas-clorinda",
    "title": "DEFENSA ARGENTINA FRONTERAS PROTEGIDAS - CLORINDA",
    "client": "INVAP S.A.U",
    "year": 2019,
    "category": "Infraestructura",
    "description": "Montaje e instalación de radares en los puntos definidos por ingeniería, Domos PTZ, Cámaras de Seguridad y ANPR. Tecnología Milestone Sys para monitoreo de Cámaras, Software Neural Labs para ANPR server.  Integración a red operativa: asignación IP, segmentación lógica cuando corresponde, y verificación de conectividad hacia centros de monitoreo/servidores. DSN EMPRESAS - BA TECNOLOGÍA"
  },
  {
    "id": "defensa-argentina-fronteras-protegidas-pasarela",
    "title": "DEFENSA ARGENTINA FRONTERAS PROTEGIDAS - PASARELA",
    "client": "INVAP S.A.U",
    "year": 2019,
    "category": "Infraestructura",
    "description": "Montaje e instalación de radares en los puntos definidos por ingeniería, Domos PTZ, Cámaras de Seguridad y ANPR. Integración ANPR- Milestone. Integración lógica para que los eventos ANPR generados por Neural Labs se reflejen en el entorno de monitoreo: asociación de lectura con video evidencia, disparo de eventos/alertas (listas permitidos/restringidos, coincidencias, horarios), visualización de metadatos (patente, cámara, timestamp) para trazabilidad rápida. Puesta en servicio (commissioning): validación funcional de transmisión de datos del radar, verificación de parámetros básicos operativos y chequeo de estabilidad de enlace. DSN EMPRESAS - BA TECNOLOGÍA"
  },
  {
    "id": "defensa-argentina-fronteras-protegidas-puerto-iguazu",
    "title": "DEFENSA ARGENTINA FRONTERAS PROTEGIDAS - PUERTO IGUAZU ",
    "client": "INVAP S.A.U",
    "year": 2019,
    "category": "Infraestructura",
    "description": "Montaje e instalación de radares en los puntos definidos por ingeniería. Implementación de Neural Labs como servidor central ANPR: instalación y parametrización de motor de reconocimiento, alta de cámaras/canales de lectura, definición de reglas de lectura y filtros (por carril/sentido/zonas), configuración de almacenamiento de eventos (lecturas) y evidencias (imagen/clip asociado). Base de datos y trazabilidad: registro de lecturas con fecha/hora, cámara, carril, sentido y confiabilidad, exportación/consulta para auditoría y análisis operativo. DSN EMPRESAS - BA TECNOLOGÍA"
  },
  {
    "id": "defensa-argentina-fronteras-protegidas-puerto-pilcomayo",
    "title": "DEFENSA ARGENTINA FRONTERAS PROTEGIDAS PUERTO PILCOMAYO.",
    "client": "INVAP S.A.U",
    "year": 2019,
    "category": "Infraestructura",
    "description": "Montaje e instalación de radares en los puntos definidos por ingeniería, Domos PTZ, Cámaras de Seguridad y ANPR. Integración lógica para que los eventos ANPR generados por Neural Labs reflejen e integren en el control de eventos en el entorno de monitoreo: asociación de lectura con video evidencia, disparo de eventos/alertas (listas permitidos/restringidos, coincidencias, horarios), visualización de metadatos (patente, cámara, timestamp) para trazabilidad rápida. DSN EMPRESAS - BA TECNOLOGÍA"
  },
  {
    "id": "defensa-argentina-fronteras-protegidas-la-quiaca-villazon",
    "title": "DEFENSA ARGENTINA FRONTERAS PROTEGIDAS LA QUIACA - VILLAZON",
    "client": "INVAP S.A.U / ISRAEL TECHNOLOGIES",
    "year": "2017-2019",
    "category": "Infraestructura",
    "description": "Instalación y puesta en marcha de sistema de defensa con radares térmicos. Tecnología de origen Israelí para el control de cruces Fronterizos  durante actividad nocturna. Instalación de CCTV con cámaras de alta tecnología con sistema ANPR/LPR. Tecnología Neural Labs, implementación de sistema de monitoreo Milestone. Apoyo de cuatro antenas con cámaras de alta definición para reconocimiento de patentes y rostros a larga distancia, sensores móviles. Producción de datos transmitidos en tiempo real al comando táctico del escuadrón de Gendarmería. Análisis de contingencias e información con generación de alarmas de situaciones críticas para trabajar en zonas específicas. Generación de Mapas de situaciones complejas y almacenamiento de datos para tareas de inteligencia criminal. Integración de toda la información con centros de datos. DSN EMPRESAS - BA TECNOLOGÍA"
  },
  {
    "id": "software-y-modernzacion-planta-industrial-aluplast",
    "title": "SOFTWARE Y MODERNZACION PLANTA INDUSTRIAL ALUPLAST",
    "client": "ALUPLAST SRL",
    "year": "2018-2026",
    "category": "Software",
    "description": "Ejecución de modernización de Planta industrial e integración tecnológica: Desarrollo de software e-commerce. Integraciones asociadas para comercialización digital. Integración de red de datos. \nDSN EMPRESAS"
  },
  {
    "id": "cctv-planta-industrial-aluplast",
    "title": "CCTV PLANTA INDUSTRIAL ALUPLAST",
    "client": "ALUPLAST SRL",
    "year": "2019-2026",
    "category": "Infraestructura",
    "description": "Parque de Maquinas, Infraestructura Planta industrial, segmentación lógica según necesidades operativas. Implementación e integración equipamiento y red CCTV IP, monitoreo y registro de eventos en planta Industrial. DSN EMPRESAS - BA TECNOLOGÍA"
  },
  {
    "id": "software-modernizacion-e-infrestructura-planta-industrial-frig-el-brillante",
    "title": "SOFTWARE - MODERNIZACION E INFRESTRUCTURA PLANTA INDUSTRIAL FRIG. EL BRILLANTE",
    "client": "EL BRILLANTE SRL",
    "year": "2017-2023",
    "category": "Software",
    "description": "Desarrollo de Software especializado para PLANTA FRIGORIFICA, Sistema ERP, Actual desarrollo de Sistemas de video Analítico para control de Animales, Infraestructura Eléctrica de planta, Servicio de Radio enlaces / VHF - UHF, parque de maquinas, Servidores. \nDSN EMPRESAS"
  },
  {
    "id": "desarrollo-de-sw-y-mant-camara-de-exportadores-del-citrus-del-noreste-argentino",
    "title": "DESARROLLO DE SW. Y MANT. CAMARA DE EXPORTADORES DEL CITRUS DEL NORESTE ARGENTINO",
    "client": "CECNEA",
    "year": "2013-2026",
    "category": "Software",
    "description": "Implementación y desarrollo  web, incorporación de herramientas de gestión, comunicación y soporte institucional. Sistema de streaming, videollamadas y tecnología VoIP, con funcionalidades de grabación y resguardo de video comunicaciones en servidores Linux y bajo plataforma Asterisk, garantizando disponibilidad, trazabilidad y soporte para reuniones y comunicaciones estratégicas del sector exportador. DSN EMPRESAS."
  },
  {
    "id": "red-cctv-servicio-streaming-camaras-tn-y-noticiero-13",
    "title": "RED CCTV - SERVICIO STREAMING CAMARAS TN Y NOTICIERO 13",
    "client": "ARTEAR CANAL 13",
    "year": "2019-2023",
    "category": "Infraestructura",
    "description": "Configuración, mantenimiento y soporte técnico de cámaras CCTV con transmisión en vivo para TN y Noticiero 13, \nsobre distintos puntos turísticos del país. Puesta en servicio de cámaras IP, ajuste de parámetros de video, verificación de conectividad, mantenimiento preventivo y correctivo, y aseguramiento de la continuidad operativa del servicio de streaming para emisión de imágenes en tiempo real con fines periodísticos e informativos. DSN EMPRESAS."
  },
  {
    "id": "obra-proteccion-cabezal-de-transmision-de-tv-por-cable-isp-internet-radio-am-fm",
    "title": "OBRA PROTECCION CABEZAL DE TRANSMISION DE TV POR CABLE - ISP INTERNET - RADIO AM/FM",
    "client": "CABLE FEDERAL",
    "year": "2021-2022",
    "category": "Infraestructura",
    "description": "Obra de Protección de Cabezal de Transmisión – TV por Cable, ISP Internet y Radio AM/FM CABLE FEDERAL.\nSolucion de infraestructura crítica orientada a la protección integral del cabezal principal de transmisión y de la sala de racks para servicios de TV por Cable, Internet ISP, Radio AM/FM, streaming, TV satelital y canales de TV digital, garantizando continuidad operativa, resguardo del equipamiento y alta disponibilidad de los servicios. Provisión, instalación, configuración y puesta en marcha de sistema de respaldo energético compuesto por banco de baterías externo con UPS On Line de 40 kVA, integrado a un esquema de protección automática y tablero de transferencia, diseñado para operar ante cortes de suministro eléctrico y eventos de baja autonomía, con transferencia coordinada hacia grupo electrógeno diésel. Solución concebida para brindar protección eléctrica total sobre equipamiento sensible de transmisión, networking, servidores y sistemas asociados al cabezal principal, minimizando riesgos de daño, interrupciones de servicio y pérdidas de operación. Aseguramiento de disponibilidad 24/7, sosteniendo la continuidad de transmisión y prestación de servicios para una red superior a 20.000 abonados.\nDSN EMPRESAS."
  },
  {
    "id": "ampliacion-red-de-distribucion-de-agua-barrio-cipo",
    "title": "AMPLIACIÓN RED DE DISTRIBUCION DE AGUA BARRIO CIPO",
    "client": "ENHOSA -EDOS",
    "year": "2021-2023",
    "category": "Infraestructura",
    "description": "Ejecución de la red para provisión de agua potable para el barrio Cipo, instalación de 868 metros de cañerías de PVC DN 90, 610 metros de cañerías de PVC DN 75, 185.90 metros de cañerías de PVC DN 63 y 146 conexiones domiciliarias. OBRA EJECUTADA AL 100%,  https://mapainversiones.obraspublicas.gob.ar/proyecto/perfilproyecto/1003116274\nARGENTINA CONTRUCCIONES CIVILES (GRUPO DSN Empresas)."
  },
  {
    "id": "ampliacion-red-colectora-cloacal-barrio-cipo",
    "title": "AMPLIACIÓN RED COLECTORA CLOACAL BARRIO CIPO",
    "client": "ENHOSA -EDOS",
    "year": "2021-2023",
    "category": "Infraestructura",
    "description": "Ejecución de la red de desagües cloacales para el barrio Cipo, Instalación de 1569,54 metros de cañerías de PVC cloacal DN 160, 13 bocas de registro y 232 conexiones domiciliarias. OBRA EJECUTADA AL 100%,  ARGENTINA CONTRUCCIONES CIVILES (GRUPO DSN Empresas) https://mapainversiones.obraspublicas.gob.ar/Proyecto/PerfilProyecto/1003116273\nARGENTINA CONTRUCCIONES CIVILES (GRUPO DSN Empresas)."
  },
  {
    "id": "oficinas-instituto-de-estadistica-y-registro-de-la-industria-de-la-construccion",
    "title": "OFICINAS INSTITUTO DE ESTADÍSTICA Y REGISTRO DE LA INDUSTRIA DE LA CONSTRUCCIÓN",
    "client": "IERIC",
    "year": 2022,
    "category": "Infraestructura",
    "description": "Oficinas para el IERIC. Iluminación, refrigeración, Mobiliario, Señales débiles, CCTV, Control de accesos y puesta en marcha de red de datos e internet. DSN EMPRESAS"
  },
  {
    "id": "s-e-t-subterranea-npara-13-2-0-4-0-231-kv-nde-500-kva",
    "title": "S.E.T. SUBTERRANEA \nPARA 13,2/0,4-0,231 KV \nDE 500 KVA",
    "client": "COOPERATIVA ELECTRICA DE CONCORDIA",
    "year": 2021,
    "category": "Infraestructura",
    "description": "- PROYECTO Nº 9239 -SUBESTACIÓN TRANSFORMADORA DE DISTRIBUCIÓN (S.E.T.) PARA 13,2/0,4-0,231 KV DE 500 KVA. Extensión de dos líneas subterráneas trifásicas de media tensión (13,2 kV), el montaje de una subestación transformadora de distribución (S.E.T.) del tipo subterránea para 13,2/0,4-0,231 kV de 500 kVA en edificio de 14 PISOS, extensión de tres líneas subterráneas trifásicas de baja tensión y modificación de las líneas subterráneas y aéreas trifásicas de baja tensión extendidas sobre la fachada del edificio. \nDSN EMPRESAS - FIDEICOMISO PANORAMA XXI - SIME SRL"
  },
  {
    "id": "obras-electricas-resumen",
    "title": "OBRAS ELECTRICAS (RESUMEN)",
    "client": "ENERSA",
    "year": "2005-2023",
    "category": "Infraestructura",
    "description": "- Obras Civiles SET PI Pronunciamiento. (ENERSA)\n- Campo de Transformador N° 3 en ET Crespo. (ENERSA)\n- Adecuación de línea 33kV Autovía RN 18 -Tramo II. (ENERSA)\n- Montaje campo transformador N°2 en E.T. Nogoyá. (ENERSA)\n- Reguladores de tensión en LMT 33kV - Gualeguaychú - Ceibas. (ENERSA)\n- Torre de comunicaciones SET VIALE. (ENERSA)\n- Subterráneos de MT en SET Federación. (ENERSA)\n- LMT 33kV y SET 33-13,2 kV PI Pronunciamiento. (ENERSA)\n- Finalización ET 132kV –Villaguay. (ENERSA)\n- Adecuación ET Los Conquistadores y ET Chajarí en 33kV. (ENERSA)\n- Reguladores de Tensión – Gilbert. (ENERSA)\n- Construcción SET Camps. (ENERSA)\n- Subterráneo Gualeguay 2015. (ENERSA)\n- Bancos de Capacitores San José y Chajarí. (ENERSA)\n- Bancos de Capacitores de 33kV en Estaciones Transformadoras. (ENERSA)\n- Nuevos Distribuidores Subterráneos en 13.2Kv – Chajarí. (ENERSA)\n- Distribuidor San Anselmo (Colón). (ENERSA)\n- Construcción SET Provisoria Villa Elisa. (ENERSA)\n- Repotenciación LMT Chajarí - Mocoretá. (ENERSA)\n- Repotenciación SET Federación. (ENERSA)\n- Montaje en campo II SET Feliciano. (ENERSA)\n- Salidas Subterráneas en E.T. Colón. (ENERSA)\n- Desplazamiento Piq.33 Línea 33kV “Larroque” (ENERSA)\n- Conexión LAT en ET San Salvador. (ENERSA)\n- Bancos de Capacitares en Estaciones Transformadoras de 132kV y 33kV. (ENERSA)\n- Ejecución, Rep.técnica, dirección de obras, proyectos ejecutivos, compras, cómputos, presupuestos, ensayos y puesta en\nservicio de instalaciones de baja, media, alta y extra alta tensión - IME SRL Ing. a. Piñol - DSN EMPRESAS"
  },
  {
    "id": "obras-electricas-lamt",
    "title": "OBRAS ELECTRICAS LAMT",
    "client": "COOPERATIVA ELECTRICA DE CONCORDIA",
    "year": "2009-2023",
    "category": "Infraestructura",
    "description": "- Construcción de LAMT (33 kV) – Reforma Salida Nº 5. (Cooperativa Eléctrica de Concordia)\n- Construcción de LAMT (33 kV) – Reforma Salida Nº 6. (Cooperativa Eléctrica de Concordia)\n- Obras varias de Media Tensión para la Cooperativa Eléctrica de Concordia\n- Ejecución, Rep.técnica, dirección de obras, proyectos ejecutivos, compras, cómputos, presupuestos, ensayos y puesta en\nservicio de instalaciones de baja, media, alta y extra alta tensión - IME SRL Ing. a. Piñol - DSN EMPRESAS"
  },
  {
    "id": "barrio-privado-saint-thomas",
    "title": "BARRIO PRIVADO SAINT THOMAS ",
    "client": "SAINT THOMAS",
    "year": 2018,
    "category": "Infraestructura",
    "description": "Actualización e Integración cctv y control de acceso. Obra completa de tendido de fibra óptica y conexión de todo el equipamiento y puesta en marcha. DSN EMPRESAS - BA TECNOLOGÍA"
  },
  {
    "id": "modernizacion-grupo-berardo-agropecuaria-s-r-l",
    "title": "MODERNIZACION GRUPO BERARDO AGROPECUARIA S.R.L.",
    "client": "BERARDO AGRO S.R.L.",
    "year": 2018,
    "category": "Infraestructura",
    "description": "Red de datos e integración CCTV para protección de activos, red de datos, datacenter y parque de maquinas \nDSN EMPRESAS - BA TECNOLOGÍA"
  },
  {
    "id": "modernizacion-grupo-apc",
    "title": "MODERNIZACION GRUPO APC",
    "client": "GRUPO APC",
    "year": 2017,
    "category": "Infraestructura",
    "description": "Red de datos CCTV - DSN EMPRESAS - BA TECNOLOGÍA"
  },
  {
    "id": "tecnologia-molina-cia",
    "title": "TECNOLOGIA MOLINA&CIA",
    "client": "MOLINA&CIA",
    "year": 2017,
    "category": "Infraestructura",
    "description": "Red de datos, equipamiento, CCTV - DSN EMPRESAS - BA TECNOLOGÍA"
  },
  {
    "id": "tecnologia-agrosem-s-r-l",
    "title": "TECNOLOGIA AGROSEM S.R.L.",
    "client": "AGROSEM S.R.L.",
    "year": 2017,
    "category": "Infraestructura",
    "description": "Red de datos, equipamiento, CCTV - DSN EMPRESAS - BA TECNOLOGÍA"
  }
]

export function getProjectById(id: string): any {
  return PROJECTS.find(p => p.id === id);
}

// export const PROJECTS = [
//   {
//     "title": "PASO DE FRONTERA ARGENTINA - URUGUAY - MODERNIZACION ",
//     "client": "(UEP) UNIDAD EJECUTORA DE E.R. / (BID) BANCO INTERAMERICANO DE DESARROLLO.",
//     "year": "2024-2026",
//     "category": "Infraestructura",
//     "description": "Provisión y ejecución Proyecto de modernización Centro de Frontera Argentina Uruguay (Cdia.Salto). Obra llave en mano, Desde Proyecto ejecutivo hasta ingeniería, planificación, provisión de total del  equipamiento, instalación, configuración y puesta en marcha de infraestructura de comunicaciones, seguridad electrónica y software operativo de cruzamiento de datos del complejo. Puestos de trabajo, Cabinas de atención, Barreras, Semaforización, Detectores de masa Metálica, cableado estructurado, Fibra óptica, canalizaciones entre los distintos sectores y edificios del paso fronterizo, Datos y energía aplicada a sistemas tecnológicos, implementación de enlaces de comunicaciones seguros y cifrados, normas de seguridad aplicadas para la continuidad operativa y alta disponibilidad. Instalación, montaje y configuración de racks de comunicaciones distribuidos entre los edificios E1, E2 y E3, Planta baja y planta alta. Intervención sobre la totalidad de los sectores críticos: Aduana, Gendarmería Nacional, Migraciones Argentina, Migraciones Uruguay, Transporte Argentina, Transporte Uruguay, SENASA, Arca, despachantes de aduana, y resto de organismos. Construcción de todas las salas técnicas, Electrónica de cabinas de atención, sistemas de acceso. Provisión e instalación de más de 230 cámaras de seguridad con tecnología de analítica de video, monitoreo inteligente con lectura de patentes, análisis de personas, peatones y trafico de camiones, control de cargas. Software de Reportes diarios, semanales y mensuales de tráfico, circulación y eventos relevantes. Escritura e implementación de Software a medida de alta complejidad y seguridad para el control migratorio de buses y micros mediante pasarelas biométricas, integración por API y Webservices con Migraciones Argentina y mecanismos de cruce de información con bases de datos de INTERPOL, consolidando una plataforma de alto nivel tecnológico orientada a la seguridad, trazabilidad, control documental y modernización operativa del paso de frontera.\nDSN EMPRESAS."
//   },
//   {
//     "title": "AEROPUERTO COMODORO PIERRESTEGUI",
//     "client": "(UEP) UNIDAD EJECUTORA DE E.R. / (BID) BANCO INTERAMERICANO DE DESARROLLO.",
//     "year": "2023-2026",
//     "category": "Infraestructura",
//     "description": "Proyecto integral llave en mano. Infraestructura tecnológica aeroportuaria, Alcance: Proyecto ejecutivo, provisión, instalación, integración, configuración y puesta en marcha de todos los sistemas principales de seguridad, comunicaciones y operación (SEÑALES DEBILES, CCTV, CA, MEGAFONIA, CABLEADO, EQUIPAMIENTO EN LADO TIERRA Y AIRE). Ejecución de la red troncal de fibra óptica en lado tierra y lado aire, vinculaciones de Terminal de Pasajeros (TPA), Torre de Control, SEI, planta de combustibles y demás dependencias operativas, junto con la implementación de salas de racks, salas de comunicaciones, canalizaciones generales, cableado estructurado, networking, equipos activos de red, equipamiento de comunicaciones. Ingeniería y topología para Plataforma robusta y centralizada de toda la operación. Provisión e instalación del sistema integral de CCTV, analítica de video, cobertura de áreas operativas y públicas, grabación centralizada, monitoreo en tiempo real y herramientas inteligentes para supervisión y seguridad. Desarrollo y puesta en marcha de Sistema completo de control de accesos. Infraestructura de señales débiles asociada a sistemas contra incendios, integrados bajo criterios de seguridad, continuidad operativa y alta confiabilidad. Megafonía aeroportuaria, Ingeniería, provisión e implementación del sistema completo de anuncios con Inteligencia Artificial, difusores sonoros en TPA, Torre de Control y sectores operativos, priorización de mensajes, zonificación, emisión de avisos operativos y de emergencia, y funcionalidades asistidas para mensajes ante contingencias, conforme a criterios y estándares aplicables al ámbito aeroportuario. Provisión y Montaje de Sistemas FIDS, incluyendo pantallas, tótems informativos y software para información de vuelos, destinados a la comunicación visual en tiempo real de arribos, partidas y avisos operativos al pasajero. Cumplimiento de protocolos y requerimientos de organismos como PSA, ANAC y ORSNA, desde la ingeniería ejecutiva hasta la puesta en servicio final de los sistemas Protocolos y Pruebas ensayos. \nOBRA CON 10 AÑOS DE GARANTIA ESCRITA.\nLP PIETROBONI - HELPORT - SABAVISA - DSN EMPRESAS."
//   },
//   {
//     "title": "RED DE COMUNICACIONES IP PASO FRONTERA PUENTE INT. SALTO GRANDE",
//     "client": "UEP - MINISTERIO DEL INTERIOR",
//     "year": "2025-2026",
//     "category": "Infraestructura",
//     "description": "Proyecto de Telefonía IP Cisco Multiplataforma con Servidores Asterisk – Red de Comunicaciones del Paso Fronterizo Argentina – Uruguay, Puente Internacional Salto Grande\nSolución integral de telefonía IP segura para la red de comunicaciones del Paso Fronterizo entre Argentina y Uruguay – Puente Internacional Salto Grande, basada en infraestructura Cisco multiplataforma e integración con servidores Asterisk de altas prestaciones. El proyecto comprendió la ingeniería, configuración, puesta en marcha e interoperabilidad de una red de voz unificada destinada a vincular en forma confiable y segura a los distintos organismos intervinientes del centro de frontera, permitiendo comunicaciones internas y operativas con alta disponibilidad, administración centralizada y escalabilidad.\nDSN EMPRESAS."
//   },
//   {
//     "title": "EQUIPAM. PASO FRONTERIZO ARGENTINA - URUGUAY PUENTE INT. SALTO GRANDE",
//     "client": "(UEP) UNIDAD EJECUTORA DE E.R. / (BID) BANCO INTERAMERICANO DE DESARROLLO.",
//     "year": "2025-2026",
//     "category": "Infraestructura",
//     "description": "Préstamo 4688/0C-RG Programa de Desarrollo e Integración de la Región de \nSalto Grande.- Adquisición e instalación de equipamiento y Mobiliarios de Atención al Público y de Oficina. Provisión, Fabricación e instalación de mobiliario y equipamiento para Edificios E1, E2 y E3. Provision de Equipamiento para salas de espera y atención de personas para tramites migratorios. \nDSN EMPRESAS."
//   },
//   {
//     "title": "PLAN DE VALORIZACIÓN PERILAGO PDIRSG-333- CP-B-18.9",
//     "client": "(UEP) UNIDAD EJECUTORA DE E.R. / (BID) BANCO INTERAMERICANO DE DESARROLLO.",
//     "year": 2026,
//     "category": "Infraestructura",
//     "description": "PLAN DE VALORIZACIÓN PERILAGO PDIRSG-333- CP-B-18.9 - Préstamo 4688/OC-RG Programa de Desarrollo e Integración de la Región de  Salto Grande. Provision de 40 Artefactos de Iluminación para Obra de Iluminacion PERILAGO. \nDSN EMPRESAS."
//   },
//   {
//     "title": "EDIFICIO PANORAMA XXI",
//     "client": "FIDEICOMISO \nPANORAMA XXI",
//     "year": "2019-2026",
//     "category": "BIM",
//     "description": "PROYECTO Y DESARROLLO PROPIO. EDIFICIO DE 5698 m2. \nConstrucción completa como operador a través de la figura de Fideicomiso, con la creación de su estructura jurídica y comercial. Utilización de capitales propios y de inversores para su creación. Desarrollo y construcción, abarcando, diseño, planos, arquitectura, calculo de estructura, construcción completa y provisión de equipamiento y materiales. Proyecto de Arquitectura integro BIM. Ejecución bajo metodología de Last Planner System (LPS) basado en Lean Construction. Excavaciones, Subestación  transformadora (SET), estructura, Instalaciones Sanitarias, Eléctricas, Iluminación, refrigeración , provisión de equipamiento, materiales, comercialización y administración. Obra finalizada en Febrero de 2026.  \nDSN EMPRESAS."
//   },
//   {
//     "title": "CONSTRUCCIÓN, PROVISIÓN Y MONTAJE CIERRE NORTE 132 KV",
//     "client": "ENERSA",
//     "year": 2024,
//     "category": "Infraestructura",
//     "description": "Ingeniería y provisión para gabinete de protecciones para transformador de potencia en ET 132kV “El\nPingo” (ENERSA) – Año 2024, \nIng. A. Piñol - DSN EMPRESAS."
//   },
//   {
//     "title": "MEDIA Y BAJA TENSIÓN ELECTRIFICACIÓN E\nILUMINACIÓN BARRIO PRIVADO L’ORANGERIE VILLAGE.",
//     "client": "L’ORANGERIE VILLAGE.",
//     "year": 2024,
//     "category": "Infraestructura",
//     "description": "Realización de proyecto ejecutivo y dirección de obra en media y baja tensión para la electrificación e\niluminación del barrio privado L’Orangerie Village, La Criolla, Entre Ríos.\nIng. A. Piñol - DSN EMPRESAS."
//   },
//   {
//     "title": "COMPUTOS Y ESTUDIO DE COSTOS PARA OBRAS DE ESTACIONES TRANSFORMADORAS",
//     "client": "C.T.M. SALTO GRANDE",
//     "year": "2022-2023",
//     "category": "Infraestructura",
//     "description": "Computos y estudio de Costos para el reemplazo de equipamiento de EAT en estaciones transformadoras del\ncuadrilátero de Salto Grande. (C.T.M. Salto Grande) – Año 2023\nComputos y estudio de costos para la ejecución de la obra Montaje de Transformador N°2 en estación\ntransformadora 500 kV – Salto Grande Uruguay. (C.T.M. Salto Grande). – Año 2022\nIng. A. Piñol - DSN EMPRESAS."
//   },
//   {
//     "title": "DIAMANTE - SISTEMA DE VIDEOVIGILANCIA URBANA, CENTRO DE MONITOREO URBANO (CMU)",
//     "client": "MUNICIPALIDAD DE DIAMANTE E.R.",
//     "year": "2021-2022",
//     "category": "Infraestructura",
//     "description": "Implementación del sistema de videovigilancia (CCTV IP) y su conectividad mediante radioenlaces, incluyendo: Instalación y configuración de cámaras en puntos definidos por relevamiento, ajuste de encuadres y parámetros día/noche. Implementación de radioenlaces para vincular ubicaciones remotas al centro de monitoreo, con alineación, pruebas de estabilidad y verificación de capacidad para transporte de video. Datacenter y sala de racks principales: montaje y ordenamiento de infraestructura (switching/patching/energía) e instalación de los servidores del sistema para gestión y grabación. Pruebas finales de visualización, grabación y conectividad integral del esquema.\nDSN EMPRESAS - BA TECNOLOGÍA"
//   },
//   {
//     "title": "SISTEMA DE VIDEOVIGILANCIA ZONA COSTERA RIO URUGUAY - CENTRO DE MONITOREO - CARTELERIA VIAL LED CON SISTEMAS REV",
//     "client": "MUNICIPALIDAD DE CONCORDIA",
//     "year": "2013-2023",
//     "category": "Infraestructura",
//     "description": "Provisión, instalación y puesta en marcha de sistema integral de videovigilancia zona costera Río Uruguay Concordia. Proyecto red integral CCTV, incluyendo domos de alta prestación, sistemas de conteo de personas y herramientas de control de tráfico. Instalación, montaje y provisión de cartel LED ciudadano con medición de velocidad y sistema REV de reducción de velocidad, destinado a fortalecer la seguridad vial y la prevención en la circulación urbana. Transmisión en vivo de imágenes Vía Streaming para Canal 13 Artear, Canal 9 del Litoral y otras emisoras, así como también el soporte al monitoreo de Prefectura Naval Argentina en la Zona de Frontera Concordia – Salto, mediante vigilancia permanente sobre el Río Uruguay. Centro de monitoreo, con acceso desde garita operativa y desde el puesto de control de Prefectura, permitiendo supervisión centralizada y respuesta operativa coordinada.\nDSN EMPRESAS."
//   },
//   {
//     "title": "URDINARRAIN - SISTEMA DE VIDEOVIGILANCIA URBANA, CENTRO DE MONITOREO URBANO (CMU)",
//     "client": "MUNICIPALIDAD DE URDINARRAIN E.R.",
//     "year": "2020-2022",
//     "category": "Infraestructura",
//     "description": "Instalación de Cámaras de seguridad y  Radio Enlaces con cobertura MAN. Instalación de 112 cámaras de alta resolución con analítica de video. Configuración y puesta en servicio para monitoreo centralizado y transporte estable de video desde los distintos puntos del ejido urbano. Instalación de RED MAN con repetidores y radioenlaces en toda la ciudad. Ingeniería de análisis de trafico de red, analítica de datos, mantenimiento.  DSN EMPRESAS - BA TECNOLOGÍA"
//   },
//   {
//     "title": "PLANTA INDUSTRIAL CERVECERÍA QUILMES ACHERAL TUCUMAN ",
//     "client": "CERVECERÍA Y MALTERÍA QUILMES S.A.I.C.A.",
//     "year": 2019,
//     "category": "Software",
//     "description": "Instalación de cámaras ANPR dedicado al análisis y seguimiento de circuito de Flujo de Vehículos y camiones. Asignación de turnos (carga/descarga) + preaviso del viaje (transportista, chofer, patente tractor/acoplado, tipo de carga). Gestión y seguimiento de turnos de carga/descarga en planta, Definición de esquema de ingresos egresos basado en turnos/ventanas. \nDSN EMPRESAS - BA TECNOLOGÍA"
//   },
//   {
//     "title": "PLANTA INDUSTRIAL CERVECERÍA QUILMES QUILMES ZARATE ",
//     "client": "CERVECERÍA Y MALTERÍA QUILMES S.A.I.C.A.",
//     "year": 2019,
//     "category": "Software",
//     "description": "Instalación de cámaras ANPR dedicado al análisis y seguimiento de circuito de Flujo de Vehículos y camiones. Asignación de turnos (carga/descarga) + preaviso del viaje (transportista, chofer, patente tractor/acoplado, tipo de carga). Check-in en portería: validación documental y de seguridad (transportista/chofer/unidad).\nDerivación a playa/espera (si aplica) hasta disponibilidad de muelle/balanza. Ingreso a muelle / zona de operación: posicionamiento, verificación, carga/descarga. Cierre documental (remitos/orden de carga/egreso) + check-out. Egreso con registro de salida y trazabilidad del viaje. DSN EMPRESAS - BA TECNOLOGÍA"
//   },
//   {
//     "title": "PLANTA INDUSTRIAL CERVECERÍA QUILMES PLANTA VILLA MADERO PVCIA. BUENOS AIRES",
//     "client": "CERVECERÍA Y MALTERÍA QUILMES S.A.I.C.A.",
//     "year": 2019,
//     "category": "Software",
//     "description": "Instalación de cámaras ANPR para saber el circuito de cargas de los camiones, mejora radical en los tiempos de demora de carga y descargas, análisis de recorridos para optimización de tiempos muertos en la demora de las cargas. DSN EMPRESAS - BA TECNOLOGÍA"
//   },
//   {
//     "title": "PLANTA INDUSTRIAL CERVECERÍA QUILMES PLANTA MENDOZA ",
//     "client": "CERVECERÍA Y MALTERÍA QUILMES S.A.I.C.A.",
//     "year": 2019,
//     "category": "Software",
//     "description": "Solución de tecnología NeuralLabs con sistemas de cámaras ANPR/LPR (reconocimiento automático de patentes) orientada a la analítica del circuito de camiones y a la optimización de los procesos de carga y descarga. Instalación en puntos de control estratégicos (ingresos/egresos, balanzas, playas de espera, accesos a muelles y corredores internos), con registro automático de patente + fecha/hora + ubicación + sentido de circulación. Con esta trazabilidad se obtuvo un mapa operativo del recorrido de cada unidad, habilitando: Medición de tiempos de permanencia por etapa (check-in, espera, balanza, muelle, egreso). Detección de cuellos de botella y demoras recurrentes en carga/descarga. Análisis de recorridos para identificar desvíos, reingresos y tiempos muertos. Reportes y KPIs logísticos para la mejora continua (turnos, ocupación, tiempos promedio y outliers). Integración con videovigilancia para evidencia del evento y soporte a seguridad operativa. El resultado fue una herramienta de control y mejora que permite reducir demoras, ordenar el flujo de camiones y optimizar la utilización de recursos en planta.  DSN EMPRESAS - BA TECNOLOGÍA"
//   },
//   {
//     "title": "TECNOLOGIA Y MODERNIZACION DE LA RED CCTV MOVIL Y MONITOREO MICROS URBANOS DE LA PVCIA. BUENOS AIRES",
//     "client": "GOBIERNO DE LA PROV. DE BUENOS AIRES",
//     "year": 2019,
//     "category": "Infraestructura",
//     "description": "Equipamiento de seguridad para micros compuesto por un sistema de videovigilancia a bordo con integración de pedal/botón antipánico para emergencias. CCTV de registro en forma continua mediante DVR/NVR vehicular, con cámaras ubicadas en el interior (pasillo/cabina) y, cuando aplica, en el exterior (puertas/perímetro). Sistema de activación de antipánico por parte del conductor, para disparo de alarma inmediata, marcación de evento en grabación y habilitación de monitoreo y trazabilidad según configuración operativa (incluyendo notificación al centro de control por enlace de comunicaciones). DSN EMPRESAS - BA TECNOLOGÍA"
//   },
//   {
//     "title": "DEFENSA ARGENTINA FRONTERAS PROTEGIDAS AGUAS BLANCAS",
//     "client": "INVAP S.A.U",
//     "year": 2019,
//     "category": "Infraestructura",
//     "description": "Montaje e instalación de radares en los puntos definidos por ingeniería (bases/soportes, orientación y fijación mecánica). Domos PTZ, Cámaras de Seguridad y servidores ANPR. Tecnología Milestone para monitorear Cámaras y Neural Labs como servidor ANPR, tecnología de alta seguridad para administración de entornos críticos y continuidad operativa. Pruebas de aceptación (SAT) y ajustes finos (encuadres, exposición, umbrales de lectura). Entrega documentada: planillas de IP, inventario de equipos, topología, configuración base, evidencias de pruebas y documentación “as-built” según requerimiento. DSN EMPRESAS - BA TECNOLOGÍA"
//   },
//   {
//     "title": "DEFENSA ARGENTINA FRONTERAS PROTEGIDAS SALVADOR MAZZA",
//     "client": "INVAP S.A.U",
//     "year": 2019,
//     "category": "Infraestructura",
//     "description": "Montaje e instalación de radares en los puntos definidos por ingeniería, Domos PTZ, Cámaras de Seguridad y ANPR. Tecnología Milestone Sys para monitoreo de Cámaras, Software Neural Labs para ANPR server. Tendido e interconexión de enlaces de comunicaciones (UTP/FO según diseño), incluyendo patching en racks y acometidas hacia gabinetes/cámaras técnicas. Instalación/parametrización de Milestone como plataforma de monitoreo: incorporación de cámaras y definición de streams, configuración de grabación y retención, perfiles de usuarios/roles y permisos, vistas operativas (mapas, mosaicos, cámaras críticas). Validación de calidad de grabación, reproducción, exportación de evidencia y continuidad operativa.\nDSN EMPRESAS - BA TECNOLOGÍA"
//   },
//   {
//     "title": "DEFENSA ARGENTINA FRONTERAS PROTEGIDAS - LA QUIACA ",
//     "client": "INVAP S.A.U",
//     "year": 2019,
//     "category": "Infraestructura",
//     "description": "Montaje e instalación de radares en los puntos definidos por ingeniería, Domos PTZ, Cámaras de Seguridad y ANPR. Tecnología Milestone Sys para monitoreo de Cámaras, Software Neural Labs para ANPR server. Energización y protecciones: alimentación dedicada, protecciones termomagnéticas/diferenciales, puesta a tierra y verificación de continuidad (según normativa y requerimientos del sitio). DSN EMPRESAS - BA TECNOLOGÍA"
//   },
//   {
//     "title": "DEFENSA ARGENTINA FRONTERAS PROTEGIDAS - CLORINDA",
//     "client": "INVAP S.A.U",
//     "year": 2019,
//     "category": "Infraestructura",
//     "description": "Montaje e instalación de radares en los puntos definidos por ingeniería, Domos PTZ, Cámaras de Seguridad y ANPR. Tecnología Milestone Sys para monitoreo de Cámaras, Software Neural Labs para ANPR server.  Integración a red operativa: asignación IP, segmentación lógica cuando corresponde, y verificación de conectividad hacia centros de monitoreo/servidores. DSN EMPRESAS - BA TECNOLOGÍA"
//   },
//   {
//     "title": "DEFENSA ARGENTINA FRONTERAS PROTEGIDAS - PASARELA",
//     "client": "INVAP S.A.U",
//     "year": 2019,
//     "category": "Infraestructura",
//     "description": "Montaje e instalación de radares en los puntos definidos por ingeniería, Domos PTZ, Cámaras de Seguridad y ANPR. Integración ANPR- Milestone. Integración lógica para que los eventos ANPR generados por Neural Labs se reflejen en el entorno de monitoreo: asociación de lectura con video evidencia, disparo de eventos/alertas (listas permitidos/restringidos, coincidencias, horarios), visualización de metadatos (patente, cámara, timestamp) para trazabilidad rápida. Puesta en servicio (commissioning): validación funcional de transmisión de datos del radar, verificación de parámetros básicos operativos y chequeo de estabilidad de enlace. DSN EMPRESAS - BA TECNOLOGÍA"
//   },
//   {
//     "title": "DEFENSA ARGENTINA FRONTERAS PROTEGIDAS - PUERTO IGUAZU ",
//     "client": "INVAP S.A.U",
//     "year": 2019,
//     "category": "Infraestructura",
//     "description": "Montaje e instalación de radares en los puntos definidos por ingeniería. Implementación de Neural Labs como servidor central ANPR: instalación y parametrización de motor de reconocimiento, alta de cámaras/canales de lectura, definición de reglas de lectura y filtros (por carril/sentido/zonas), configuración de almacenamiento de eventos (lecturas) y evidencias (imagen/clip asociado). Base de datos y trazabilidad: registro de lecturas con fecha/hora, cámara, carril, sentido y confiabilidad, exportación/consulta para auditoría y análisis operativo. DSN EMPRESAS - BA TECNOLOGÍA"
//   },
//   {
//     "title": "DEFENSA ARGENTINA FRONTERAS PROTEGIDAS PUERTO PILCOMAYO.",
//     "client": "INVAP S.A.U",
//     "year": 2019,
//     "category": "Infraestructura",
//     "description": "Montaje e instalación de radares en los puntos definidos por ingeniería, Domos PTZ, Cámaras de Seguridad y ANPR. Integración lógica para que los eventos ANPR generados por Neural Labs reflejen e integren en el control de eventos en el entorno de monitoreo: asociación de lectura con video evidencia, disparo de eventos/alertas (listas permitidos/restringidos, coincidencias, horarios), visualización de metadatos (patente, cámara, timestamp) para trazabilidad rápida. DSN EMPRESAS - BA TECNOLOGÍA"
//   },
//   {
//     "title": "DEFENSA ARGENTINA FRONTERAS PROTEGIDAS LA QUIACA - VILLAZON",
//     "client": "INVAP S.A.U / ISRAEL TECHNOLOGIES",
//     "year": "2017-2019",
//     "category": "Infraestructura",
//     "description": "Instalación y puesta en marcha de sistema de defensa con radares térmicos. Tecnología de origen Israelí para el control de cruces Fronterizos  durante actividad nocturna. Instalación de CCTV con cámaras de alta tecnología con sistema ANPR/LPR. Tecnología Neural Labs, implementación de sistema de monitoreo Milestone. Apoyo de cuatro antenas con cámaras de alta definición para reconocimiento de patentes y rostros a larga distancia, sensores móviles. Producción de datos transmitidos en tiempo real al comando táctico del escuadrón de Gendarmería. Análisis de contingencias e información con generación de alarmas de situaciones críticas para trabajar en zonas específicas. Generación de Mapas de situaciones complejas y almacenamiento de datos para tareas de inteligencia criminal. Integración de toda la información con centros de datos. DSN EMPRESAS - BA TECNOLOGÍA"
//   },
//   {
//     "title": "SOFTWARE Y MODERNZACION PLANTA INDUSTRIAL ALUPLAST",
//     "client": "ALUPLAST SRL",
//     "year": "2018-2026",
//     "category": "Software",
//     "description": "Ejecución de modernización de Planta industrial e integración tecnológica: Desarrollo de software e-commerce. Integraciones asociadas para comercialización digital. Integración de red de datos. \nDSN EMPRESAS"
//   },
//   {
//     "title": "CCTV PLANTA INDUSTRIAL ALUPLAST",
//     "client": "ALUPLAST SRL",
//     "year": "2019-2026",
//     "category": "Infraestructura",
//     "description": "Parque de Maquinas, Infraestructura Planta industrial, segmentación lógica según necesidades operativas. Implementación e integración equipamiento y red CCTV IP, monitoreo y registro de eventos en planta Industrial. DSN EMPRESAS - BA TECNOLOGÍA"
//   },
//   {
//     "title": "SOFTWARE - MODERNIZACION E INFRESTRUCTURA PLANTA INDUSTRIAL FRIG. EL BRILLANTE",
//     "client": "EL BRILLANTE SRL",
//     "year": "2017-2023",
//     "category": "Software",
//     "description": "Desarrollo de Software especializado para PLANTA FRIGORIFICA, Sistema ERP, Actual desarrollo de Sistemas de video Analítico para control de Animales, Infraestructura Eléctrica de planta, Servicio de Radio enlaces / VHF - UHF, parque de maquinas, Servidores. \nDSN EMPRESAS"
//   },
//   {
//     "title": "DESARROLLO DE SW. Y MANT. CAMARA DE EXPORTADORES DEL CITRUS DEL NORESTE ARGENTINO",
//     "client": "CECNEA",
//     "year": "2013-2026",
//     "category": "Software",
//     "description": "Implementación y desarrollo  web, incorporación de herramientas de gestión, comunicación y soporte institucional. Sistema de streaming, videollamadas y tecnología VoIP, con funcionalidades de grabación y resguardo de video comunicaciones en servidores Linux y bajo plataforma Asterisk, garantizando disponibilidad, trazabilidad y soporte para reuniones y comunicaciones estratégicas del sector exportador. DSN EMPRESAS."
//   },
//   {
//     "title": "RED CCTV - SERVICIO STREAMING CAMARAS TN Y NOTICIERO 13",
//     "client": "ARTEAR CANAL 13",
//     "year": "2019-2023",
//     "category": "Infraestructura",
//     "description": "Configuración, mantenimiento y soporte técnico de cámaras CCTV con transmisión en vivo para TN y Noticiero 13, \nsobre distintos puntos turísticos del país. Puesta en servicio de cámaras IP, ajuste de parámetros de video, verificación de conectividad, mantenimiento preventivo y correctivo, y aseguramiento de la continuidad operativa del servicio de streaming para emisión de imágenes en tiempo real con fines periodísticos e informativos. DSN EMPRESAS."
//   },
//   {
//     "title": "OBRA PROTECCION CABEZAL DE TRANSMISION DE TV POR CABLE - ISP INTERNET - RADIO AM/FM",
//     "client": "CABLE FEDERAL",
//     "year": "2021-2022",
//     "category": "Infraestructura",
//     "description": "Obra de Protección de Cabezal de Transmisión – TV por Cable, ISP Internet y Radio AM/FM CABLE FEDERAL.\nSolucion de infraestructura crítica orientada a la protección integral del cabezal principal de transmisión y de la sala de racks para servicios de TV por Cable, Internet ISP, Radio AM/FM, streaming, TV satelital y canales de TV digital, garantizando continuidad operativa, resguardo del equipamiento y alta disponibilidad de los servicios. Provisión, instalación, configuración y puesta en marcha de sistema de respaldo energético compuesto por banco de baterías externo con UPS On Line de 40 kVA, integrado a un esquema de protección automática y tablero de transferencia, diseñado para operar ante cortes de suministro eléctrico y eventos de baja autonomía, con transferencia coordinada hacia grupo electrógeno diésel. Solución concebida para brindar protección eléctrica total sobre equipamiento sensible de transmisión, networking, servidores y sistemas asociados al cabezal principal, minimizando riesgos de daño, interrupciones de servicio y pérdidas de operación. Aseguramiento de disponibilidad 24/7, sosteniendo la continuidad de transmisión y prestación de servicios para una red superior a 20.000 abonados.\nDSN EMPRESAS."
//   },
//   {
//     "title": "AMPLIACIÓN RED DE DISTRIBUCION DE AGUA BARRIO CIPO",
//     "client": "ENHOSA -EDOS",
//     "year": "2021-2023",
//     "category": "Infraestructura",
//     "description": "Ejecución de la red para provisión de agua potable para el barrio Cipo, instalación de 868 metros de cañerías de PVC DN 90, 610 metros de cañerías de PVC DN 75, 185.90 metros de cañerías de PVC DN 63 y 146 conexiones domiciliarias. OBRA EJECUTADA AL 100%,  https://mapainversiones.obraspublicas.gob.ar/proyecto/perfilproyecto/1003116274\nARGENTINA CONTRUCCIONES CIVILES (GRUPO DSN Empresas)."
//   },
//   {
//     "title": "AMPLIACIÓN RED COLECTORA CLOACAL BARRIO CIPO",
//     "client": "ENHOSA -EDOS",
//     "year": "2021-2023",
//     "category": "Infraestructura",
//     "description": "Ejecución de la red de desagües cloacales para el barrio Cipo, Instalación de 1569,54 metros de cañerías de PVC cloacal DN 160, 13 bocas de registro y 232 conexiones domiciliarias. OBRA EJECUTADA AL 100%,  ARGENTINA CONTRUCCIONES CIVILES (GRUPO DSN Empresas) https://mapainversiones.obraspublicas.gob.ar/Proyecto/PerfilProyecto/1003116273\nARGENTINA CONTRUCCIONES CIVILES (GRUPO DSN Empresas)."
//   },
//   {
//     "title": "OFICINAS INSTITUTO DE ESTADÍSTICA Y REGISTRO DE LA INDUSTRIA DE LA CONSTRUCCIÓN",
//     "client": "IERIC",
//     "year": 2022,
//     "category": "Infraestructura",
//     "description": "Oficinas para el IERIC. Iluminación, refrigeración, Mobiliario, Señales débiles, CCTV, Control de accesos y puesta en marcha de red de datos e internet. DSN EMPRESAS"
//   },
//   {
//     "title": "S.E.T. SUBTERRANEA \nPARA 13,2/0,4-0,231 KV \nDE 500 KVA",
//     "client": "COOPERATIVA ELECTRICA DE CONCORDIA",
//     "year": 2021,
//     "category": "Infraestructura",
//     "description": "- PROYECTO Nº 9239 -SUBESTACIÓN TRANSFORMADORA DE DISTRIBUCIÓN (S.E.T.) PARA 13,2/0,4-0,231 KV DE 500 KVA. Extensión de dos líneas subterráneas trifásicas de media tensión (13,2 kV), el montaje de una subestación transformadora de distribución (S.E.T.) del tipo subterránea para 13,2/0,4-0,231 kV de 500 kVA en edificio de 14 PISOS, extensión de tres líneas subterráneas trifásicas de baja tensión y modificación de las líneas subterráneas y aéreas trifásicas de baja tensión extendidas sobre la fachada del edificio. \nDSN EMPRESAS - FIDEICOMISO PANORAMA XXI - SIME SRL"
//   },
//   {
//     "title": "OBRAS ELECTRICAS (RESUMEN)",
//     "client": "ENERSA",
//     "year": "2005-2023",
//     "category": "Infraestructura",
//     "description": "- Obras Civiles SET PI Pronunciamiento. (ENERSA)\n- Campo de Transformador N° 3 en ET Crespo. (ENERSA)\n- Adecuación de línea 33kV Autovía RN 18 -Tramo II. (ENERSA)\n- Montaje campo transformador N°2 en E.T. Nogoyá. (ENERSA)\n- Reguladores de tensión en LMT 33kV - Gualeguaychú - Ceibas. (ENERSA)\n- Torre de comunicaciones SET VIALE. (ENERSA)\n- Subterráneos de MT en SET Federación. (ENERSA)\n- LMT 33kV y SET 33-13,2 kV PI Pronunciamiento. (ENERSA)\n- Finalización ET 132kV –Villaguay. (ENERSA)\n- Adecuación ET Los Conquistadores y ET Chajarí en 33kV. (ENERSA)\n- Reguladores de Tensión – Gilbert. (ENERSA)\n- Construcción SET Camps. (ENERSA)\n- Subterráneo Gualeguay 2015. (ENERSA)\n- Bancos de Capacitores San José y Chajarí. (ENERSA)\n- Bancos de Capacitores de 33kV en Estaciones Transformadoras. (ENERSA)\n- Nuevos Distribuidores Subterráneos en 13.2Kv – Chajarí. (ENERSA)\n- Distribuidor San Anselmo (Colón). (ENERSA)\n- Construcción SET Provisoria Villa Elisa. (ENERSA)\n- Repotenciación LMT Chajarí - Mocoretá. (ENERSA)\n- Repotenciación SET Federación. (ENERSA)\n- Montaje en campo II SET Feliciano. (ENERSA)\n- Salidas Subterráneas en E.T. Colón. (ENERSA)\n- Desplazamiento Piq.33 Línea 33kV “Larroque” (ENERSA)\n- Conexión LAT en ET San Salvador. (ENERSA)\n- Bancos de Capacitares en Estaciones Transformadoras de 132kV y 33kV. (ENERSA)\n- Ejecución, Rep.técnica, dirección de obras, proyectos ejecutivos, compras, cómputos, presupuestos, ensayos y puesta en\nservicio de instalaciones de baja, media, alta y extra alta tensión - IME SRL Ing. a. Piñol - DSN EMPRESAS"
//   },
//   {
//     "title": "OBRAS ELECTRICAS LAMT",
//     "client": "COOPERATIVA ELECTRICA DE CONCORDIA",
//     "year": "2009-2023",
//     "category": "Infraestructura",
//     "description": "- Construcción de LAMT (33 kV) – Reforma Salida Nº 5. (Cooperativa Eléctrica de Concordia)\n- Construcción de LAMT (33 kV) – Reforma Salida Nº 6. (Cooperativa Eléctrica de Concordia)\n- Obras varias de Media Tensión para la Cooperativa Eléctrica de Concordia\n- Ejecución, Rep.técnica, dirección de obras, proyectos ejecutivos, compras, cómputos, presupuestos, ensayos y puesta en\nservicio de instalaciones de baja, media, alta y extra alta tensión - IME SRL Ing. a. Piñol - DSN EMPRESAS"
//   },
//   {
//     "title": "BARRIO PRIVADO SAINT THOMAS ",
//     "client": "SAINT THOMAS",
//     "year": 2018,
//     "category": "Infraestructura",
//     "description": "Actualización e Integración cctv y control de acceso. Obra completa de tendido de fibra óptica y conexión de todo el equipamiento y puesta en marcha. DSN EMPRESAS - BA TECNOLOGÍA"
//   },
//   {
//     "title": "MODERNIZACION GRUPO BERARDO AGROPECUARIA S.R.L.",
//     "client": "BERARDO AGRO S.R.L.",
//     "year": 2018,
//     "category": "Infraestructura",
//     "description": "Red de datos e integración CCTV para protección de activos, red de datos, datacenter y parque de maquinas \nDSN EMPRESAS - BA TECNOLOGÍA"
//   },
//   {
//     "title": "MODERNIZACION GRUPO APC",
//     "client": "GRUPO APC",
//     "year": 2017,
//     "category": "Infraestructura",
//     "description": "Red de datos CCTV - DSN EMPRESAS - BA TECNOLOGÍA"
//   },
//   {
//     "title": "TECNOLOGIA MOLINA&CIA",
//     "client": "MOLINA&CIA",
//     "year": 2017,
//     "category": "Infraestructura",
//     "description": "Red de datos, equipamiento, CCTV - DSN EMPRESAS - BA TECNOLOGÍA"
//   },
//   {
//     "title": "TECNOLOGIA AGROSEM S.R.L.",
//     "client": "AGROSEM S.R.L.",
//     "year": 2017,
//     "category": "Infraestructura",
//     "description": "Red de datos, equipamiento, CCTV - DSN EMPRESAS - BA TECNOLOGÍA"
//   }
// ]
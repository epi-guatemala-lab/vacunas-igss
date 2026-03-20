/**
 * Schema del formulario de Censo de Vacunación — Sarampión / SPR
 * Departamento de Medicina Preventiva — Sección de Epidemiología
 *
 * Cada campo mapea directamente a una columna de la hoja de cálculo.
 * Las páginas corresponden a las secciones del censo.
 */

export const formTitle = 'Censo de Vacunación — Sarampión / SPR'
export const formSubtitle = 'Departamento de Medicina Preventiva — Sección de Epidemiología'
export const institutionName = 'Instituto Guatemalteco de Seguridad Social'

export const pageLabels = {
  1: 'Datos del Trabajador',
  2: 'Ubicación Laboral',
  3: 'Vacunación y Antecedentes',
}

export const departamentosGuatemala = [
  'ALTA VERAPAZ', 'BAJA VERAPAZ', 'CHIMALTENANGO', 'CHIQUIMULA',
  'EL PROGRESO', 'ESCUINTLA', 'GUATEMALA', 'HUEHUETENANGO',
  'IZABAL', 'JALAPA', 'JUTIAPA', 'PETÉN',
  'QUETZALTENANGO', 'QUICHÉ', 'RETALHULEU', 'SACATEPÉQUEZ',
  'SAN MARCOS', 'SANTA ROSA', 'SOLOLÁ', 'SUCHITEPÉQUEZ',
  'TOTONICAPÁN', 'ZACAPA',
]

// Subgerencias oficiales del IGSS (organigrama diciembre 2024)
export const subgerencias = [
  'SUBGERENCIA ADMINISTRATIVA',
  'SUBGERENCIA FINANCIERA',
  'SUBGERENCIA DE PRESTACIONES EN SALUD',
  'SUBGERENCIA DE PRESTACIONES PECUNIARIAS',
  'SUBGERENCIA DE RECURSOS HUMANOS',
  'SUBGERENCIA DE TECNOLOGÍA',
  'SUBGERENCIA DE PLANIFICACIÓN Y DESARROLLO',
  'SUBGERENCIA DE INTEGRIDAD Y TRANSPARENCIA ADMINISTRATIVA',
  'OTRA',
]

// Direcciones oficiales del IGSS
export const direcciones = [
  'DIRECCIÓN DE RECAUDACIÓN',
  'DIRECCIÓN DE ANÁLISIS DE RIESGOS FINANCIEROS',
  'DIRECCIÓN TERAPÉUTICA CENTRAL',
  'DIRECCIÓN TÉCNICA DE LOGÍSTICA DE INSUMOS, MEDICAMENTOS Y EQUIPO MÉDICO',
  'DIRECCIÓN DE COOPERACIÓN Y RELACIONES INTERNACIONALES (DICORI)',
  'DIRECCIÓN DE INVESTIGACIÓN Y PROYECTOS TECNOLÓGICOS',
  'DIRECCIÓN DE DESARROLLO Y GESTIÓN DE SISTEMAS',
  'DIRECCIÓN DE TECNOLOGÍA Y SERVICIO',
  'OTRA',
]

// Departamentos administrativos del IGSS
export const departamentosIGSS = [
  // Subgerencia Administrativa
  'DEPARTAMENTO LEGAL',
  'DEPARTAMENTO DE ABASTECIMIENTOS',
  'DEPARTAMENTO DE SERVICIOS DE APOYO',
  'DEPARTAMENTO DE SERVICIOS CONTRATADOS',
  'DEPARTAMENTO DE COMUNICACIÓN SOCIAL Y RELACIONES PÚBLICAS',
  // Subgerencia Financiera
  'DEPARTAMENTO DE PRESUPUESTO',
  'DEPARTAMENTO DE CONTABILIDAD',
  'DEPARTAMENTO DE TESORERÍA',
  'DEPARTAMENTO DE INVERSIONES',
  'DEPARTAMENTO DE COBRO ADMINISTRATIVO',
  'DEPARTAMENTO DE COBRO JUDICIAL',
  'DEPARTAMENTO DE INSPECCIÓN PATRONAL',
  'DEPARTAMENTO DE REGISTRO DE PATRONOS Y TRABAJADORES',
  // Subgerencia Prestaciones en Salud
  'DEPARTAMENTO MÉDICO DE SERVICIOS CENTRALES',
  'DEPARTAMENTO MÉDICO DE SERVICIOS TÉCNICOS',
  'DEPARTAMENTO DE MEDICINA PREVENTIVA',
  // Subgerencia Prestaciones Pecuniarias
  'DEPARTAMENTO DE PRESTACIONES EN DINERO',
  'DEPARTAMENTO DE INVALIDEZ, VEJEZ Y SOBREVIVENCIA',
  'DEPARTAMENTO DE MEDICINA LEGAL Y EVALUACIÓN DE INCAPACIDADES',
  'DEPARTAMENTO DE TRABAJO SOCIAL',
  'COORDINADORA DE DELEGACIONES Y CAJAS DEPARTAMENTALES',
  // Subgerencia RRHH
  'DEPARTAMENTO DE GESTIÓN Y PLANEACIÓN DEL RECURSO HUMANO',
  'DEPARTAMENTO DE COMPENSACIONES Y BENEFICIOS',
  'DEPARTAMENTO JURÍDICO-LABORAL',
  'DEPARTAMENTO DE CAPACITACIÓN Y DESARROLLO',
  // Subgerencia Tecnología
  'DEPARTAMENTO DE GESTIÓN DE PROYECTOS TECNOLÓGICOS',
  'DEPARTAMENTO DE RIESGO, INVESTIGACIÓN Y GESTIÓN DEL CAMBIO TECNOLÓGICO',
  'DEPARTAMENTO DE ANÁLISIS Y DESARROLLO DE SISTEMAS',
  'DEPARTAMENTO DE CONTROL DE CALIDAD',
  'DEPARTAMENTO DE INFRAESTRUCTURA TECNOLÓGICA',
  'DEPARTAMENTO DE TELECOMUNICACIONES, CONECTIVIDAD Y SEGURIDAD',
  'DEPARTAMENTO DE SOPORTE TÉCNICO',
  // Subgerencia Planificación y Desarrollo
  'DEPARTAMENTO ACTUARIAL Y ESTADÍSTICO',
  'DEPARTAMENTO DE INFRAESTRUCTURA INSTITUCIONAL',
  'DEPARTAMENTO DE ORGANIZACIÓN Y MÉTODOS',
  'DEPARTAMENTO DE PLANIFICACIÓN',
  // Subgerencia Integridad
  'DEPARTAMENTO DE INVESTIGACIONES ESPECIALES',
  'DEPARTAMENTO DE CAMBIO INSTITUCIONAL',
  'DEPARTAMENTO DE SUPERVISIÓN',
  // Reportan a Gerencia
  'DEPARTAMENTO DE AUDITORÍA INTERNA',
  'DEPARTAMENTO DE AUDITORÍA DE SERVICIOS DE SALUD',
  'CENTRO DE ATENCIÓN AL AFILIADO (CATAFI)',
  'SECRETARÍA DE GERENCIA',
  'OTRO',
]

// Contraindicaciones para vacuna SRP/MMR (FDA + CDC/ACIP + WHO/PAHO)
export const contraindicaciones = [
  'CÁNCER / LEUCEMIA / LINFOMA',
  'VIH / SIDA (CD4 <200)',
  'INMUNOSUPRESIÓN CONGÉNITA O ADQUIRIDA',
  'TUBERCULOSIS ACTIVA NO TRATADA',
  'QUIMIOTERAPIA O RADIOTERAPIA ACTIVA',
  'CORTICOSTEROIDES SISTÉMICOS (≥20mg/día ≥14 días)',
  'TRASPLANTE DE ÓRGANO CON INMUNOSUPRESIÓN',
  'DESNUTRICIÓN SEVERA',
  'ALERGIA ANAFILÁCTICA A NEOMICINA O GELATINA',
  'ALERGIA SEVERA AL HUEVO (ANAFILAXIA)',
  'TROMBOCITOPENIA / PÚRPURA TROMBOCITOPÉNICA',
  'FIEBRE >38.5°C ACTUAL',
  'RECIBIÓ SANGRE O INMUNOGLOBULINAS EN ÚLTIMOS 3-11 MESES',
  'RECIBIÓ OTRA VACUNA VIVA EN ÚLTIMOS 28 DÍAS',
  'NINGUNA',
]

export const formFields = [
  // ═══════════════════════════════════════════════════
  // PÁGINA 1: DATOS DEL TRABAJADOR
  // ═══════════════════════════════════════════════════
  {
    id: 'nombre_completo',
    label: 'Nombre Completo',
    type: 'text',
    page: 1,
    required: true,
    placeholder: 'Nombre y apellidos completos',
    colSpan: 'full',
    validation: { minLength: 3, maxLength: 150 },
  },
  {
    id: 'edad',
    label: 'Edad (años)',
    type: 'number',
    page: 1,
    required: true,
    placeholder: '0',
    colSpan: 'half',
    validation: { min: 18, max: 80 },
  },
  {
    id: 'sexo',
    label: 'Sexo',
    type: 'radio',
    page: 1,
    required: true,
    options: ['M', 'F'],
    optionLabels: { M: 'Masculino', F: 'Femenino' },
    colSpan: 'half',
  },
  {
    id: 'cui',
    label: 'CUI (DPI)',
    type: 'text',
    page: 1,
    required: true,
    placeholder: '0000 00000 0000',
    helpText: 'Código Único de Identificación — 13 dígitos',
    colSpan: 'half',
    validation: { minLength: 13, maxLength: 16, pattern: '^[\\d\\s]{13,16}$', patternMessage: 'El CUI debe contener solo dígitos (13 dígitos)' },
  },
  {
    id: 'afiliacion',
    label: 'Número de Afiliación',
    type: 'text',
    page: 1,
    required: false,
    placeholder: 'Si tiene afiliación IGSS',
    colSpan: 'half',
  },
  {
    id: 'renglon',
    label: 'Renglón',
    type: 'select',
    page: 1,
    required: true,
    options: ['011', '022', 'OTRO'],
    colSpan: 'half',
  },
  {
    id: 'renglon_otro',
    label: 'Especifique renglón',
    type: 'text',
    page: 1,
    required: true,
    placeholder: 'Número de renglón',
    conditional: { dependsOn: 'renglon', showWhen: 'OTRO' },
    colSpan: 'half',
  },

  // ═══════════════════════════════════════════════════
  // PÁGINA 2: UBICACIÓN LABORAL
  // ═══════════════════════════════════════════════════
  {
    id: 'sede',
    label: 'Sede',
    type: 'select',
    page: 2,
    required: true,
    options: ['OFICINAS CENTRALES', 'TORRE CAFÉ', 'TEC', 'OTRA'],
    colSpan: 'half',
  },
  {
    id: 'sede_otra',
    label: 'Especifique sede',
    type: 'text',
    page: 2,
    required: true,
    placeholder: 'Nombre de la sede',
    conditional: { dependsOn: 'sede', showWhen: 'OTRA' },
    colSpan: 'half',
  },
  {
    id: 'subgerencia',
    label: 'Subgerencia',
    type: 'select',
    page: 2,
    required: true,
    options: subgerencias,
    searchable: true,
    colSpan: 'full',
  },
  {
    id: 'subgerencia_otra',
    label: 'Especifique subgerencia',
    type: 'text',
    page: 2,
    required: true,
    placeholder: 'Nombre de la subgerencia',
    conditional: { dependsOn: 'subgerencia', showWhen: 'OTRA' },
    colSpan: 'half',
  },
  {
    id: 'direccion_igss',
    label: 'Dirección',
    type: 'select',
    page: 2,
    required: false,
    options: direcciones,
    searchable: true,
    helpText: 'Si aplica a su unidad organizativa',
    colSpan: 'full',
  },
  {
    id: 'direccion_igss_otra',
    label: 'Especifique dirección',
    type: 'text',
    page: 2,
    required: true,
    placeholder: 'Nombre de la dirección',
    conditional: { dependsOn: 'direccion_igss', showWhen: 'OTRA' },
    colSpan: 'half',
  },
  {
    id: 'departamento_igss',
    label: 'Departamento',
    type: 'select',
    page: 2,
    required: true,
    options: departamentosIGSS,
    searchable: true,
    colSpan: 'full',
  },
  {
    id: 'departamento_igss_otro',
    label: 'Especifique departamento',
    type: 'text',
    page: 2,
    required: true,
    placeholder: 'Nombre del departamento',
    conditional: { dependsOn: 'departamento_igss', showWhen: 'OTRO' },
    colSpan: 'half',
  },
  {
    id: 'seccion',
    label: 'Sección',
    type: 'text',
    page: 2,
    required: false,
    placeholder: 'Sección donde labora',
    colSpan: 'half',
  },

  // ═══════════════════════════════════════════════════
  // PÁGINA 3: VACUNACIÓN Y ANTECEDENTES
  // ═══════════════════════════════════════════════════
  {
    id: 'vacunacion',
    label: '¿Se ha vacunado contra Sarampión (SPR/SR)?',
    type: 'radio',
    page: 3,
    required: true,
    options: ['SI', 'NO', 'NO SÉ'],
    colSpan: 'full',
  },
  {
    id: 'dispone_carnet',
    label: '¿Dispone de carné de vacunación?',
    type: 'radio',
    page: 3,
    required: true,
    options: ['SI', 'NO'],
    conditional: { dependsOn: 'vacunacion', showWhen: 'SI' },
    colSpan: 'full',
  },
  {
    id: 'numero_dosis',
    label: 'Número de Dosis SPR/SR',
    type: 'select',
    page: 3,
    required: true,
    options: ['1', '2', '3', 'DESCONOCIDO'],
    helpText: 'Número de dosis de vacuna SPR o SR recibidas',
    conditional: { dependsOn: 'vacunacion', showWhen: 'SI' },
    colSpan: 'half',
  },
  {
    id: 'fecha_ultima_dosis',
    label: 'Fecha de Última Dosis',
    type: 'date',
    page: 3,
    required: false,
    helpText: 'Fecha aproximada de la última dosis aplicada',
    conditional: { dependsOn: 'vacunacion', showWhen: 'SI' },
    colSpan: 'half',
    validation: { noFuture: true },
  },
  {
    id: 'diagnostico_sarampion',
    label: '¿Ha tenido diagnóstico de Sarampión?',
    type: 'radio',
    page: 3,
    required: true,
    options: ['SI', 'NO', 'NO SÉ'],
    colSpan: 'full',
  },
  {
    id: 'embarazada',
    label: '¿Se encuentra o cree estar embarazada?',
    type: 'radio',
    page: 3,
    required: true,
    options: ['SI', 'NO'],
    conditional: { dependsOn: 'sexo', showWhen: 'F' },
    colSpan: 'full',
  },
  {
    id: 'enfermedades_actuales',
    label: 'Enfermedades que padece actualmente',
    type: 'textarea',
    page: 3,
    required: false,
    placeholder: 'Describa cualquier enfermedad o condición médica actual',
    colSpan: 'full',
    validation: { maxLength: 500 },
  },
  {
    id: 'contraindicaciones',
    label: 'Antecedente de Contraindicaciones para Vacuna SPR',
    type: 'checkbox',
    page: 3,
    required: true,
    options: contraindicaciones,
    helpText: 'Seleccione todas las que apliquen. Marque "Ninguna" si no tiene contraindicaciones.',
    colSpan: 'full',
  },
  {
    id: 'observaciones',
    label: 'Observaciones',
    type: 'textarea',
    page: 3,
    required: false,
    placeholder: 'Observaciones adicionales',
    colSpan: 'full',
    validation: { maxLength: 1000 },
  },
]

// Campos que se agregan automáticamente al envío
export const autoFields = [
  'registro_id',
  'timestamp_envio',
  'usuario_dispositivo',
]

// Obtener el total de páginas
export const getTotalPages = () => {
  return Math.max(...formFields.map(f => f.page))
}

// Obtener campos de una página específica
export const getFieldsByPage = (page) => {
  return formFields.filter(f => f.page === page)
}

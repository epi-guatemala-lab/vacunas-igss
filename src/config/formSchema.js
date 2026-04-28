/**
 * Schema del formulario de Censo de Vacunación — Sarampión / SPR
 * Departamento de Medicina Preventiva — Sección de Epidemiología
 *
 * Cada campo mapea directamente a una columna de la hoja de cálculo.
 * Las páginas corresponden a las secciones del censo.
 */

import { getSubgerencias } from './igssOrganizacion.js'

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

// Contraindicaciones para vacuna SRP/MMR (FDA + CDC/ACIP + WHO/PAHO).
// Redactadas como preguntas claras para población general (no clínica).
export const contraindicaciones = [
  '¿Tiene cáncer, leucemia o linfoma?',
  '¿Vive con VIH o SIDA con defensas muy bajas (CD4 menor a 200)?',
  '¿Tiene defensas bajas por enfermedad o tratamiento (inmunosupresión)?',
  '¿Tiene tuberculosis activa sin tratamiento?',
  '¿Está recibiendo quimioterapia o radioterapia actualmente?',
  '¿Toma esteroides en pastillas o inyectados (como prednisona o dexametasona) en dosis altas por más de 2 semanas seguidas?',
  '¿Le hicieron un trasplante de órgano y toma medicamentos para evitar el rechazo?',
  '¿Le han diagnosticado desnutrición severa?',
  '¿Tiene alergia grave (anafilaxia) a neomicina o gelatina?',
  '¿Tiene alergia grave (anafilaxia) al huevo?',
  '¿Le han diagnosticado plaquetas bajas o púrpura trombocitopénica?',
  '¿Tiene fiebre alta en este momento (mayor a 38.5 °C)?',
  '¿Recibió transfusión de sangre o inmunoglobulinas en los últimos 3 a 11 meses?',
  '¿Recibió alguna vacuna viva en los últimos 28 días? Vacunas vivas comunes: SPR/MMR, varicela, fiebre amarilla, rotavirus, polio oral (gotas), BCG, fiebre tifoidea oral.',
  'Ninguna de las anteriores',
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
  {
    id: 'telefono',
    label: 'Teléfono',
    type: 'phone',
    page: 1,
    required: false,
    placeholder: '0000 0000',
    helpText: 'Número de teléfono para contacto',
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
    options: getSubgerencias(),
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
    options: ['NO APLICA'],
    searchable: true,
    helpText: 'Se actualiza según la subgerencia seleccionada',
    colSpan: 'full',
    dynamicOptions: { dependsOn: 'subgerencia', resolver: 'getDirecciones' },
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
    options: ['OTRO'],
    searchable: true,
    helpText: 'Se actualiza según la subgerencia y dirección seleccionadas',
    colSpan: 'full',
    dynamicOptions: { dependsOn: ['subgerencia', 'direccion_igss'], resolver: 'getDepartamentos' },
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
    type: 'select',
    page: 2,
    required: false,
    options: ['OTRA'],
    searchable: true,
    helpText: 'Se actualiza según el departamento seleccionado',
    colSpan: 'half',
    dynamicOptions: { dependsOn: ['subgerencia', 'direccion_igss', 'departamento_igss'], resolver: 'getSecciones' },
  },
  {
    id: 'seccion_otra',
    label: 'Especifique sección',
    type: 'text',
    page: 2,
    required: false,
    placeholder: 'Nombre de la sección',
    conditional: { dependsOn: 'seccion', showWhen: 'OTRA' },
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
    conditional: { dependsOn: 'dispone_carnet', showWhen: 'SI' },
    colSpan: 'half',
  },
  {
    id: 'fecha_ultima_dosis',
    label: 'Fecha de Última Dosis',
    type: 'date',
    page: 3,
    required: false,
    helpText: 'Fecha aproximada de la última dosis aplicada',
    conditional: { dependsOn: 'dispone_carnet', showWhen: 'SI' },
    colSpan: 'half',
    validation: { noFuture: true },
  },
  {
    id: 'diagnostico_sarampion',
    label: 'Ha sido diagnosticado con Sarampión',
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
    label: '¿Tiene alguno de estos antecedentes? Marque todas las que apliquen.',
    type: 'checkbox',
    page: 3,
    required: true,
    options: contraindicaciones,
    helpText: 'Si no tiene ninguna, marque "Ninguna de las anteriores".',
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

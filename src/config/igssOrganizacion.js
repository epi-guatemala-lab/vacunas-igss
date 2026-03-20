/**
 * Estructura Organizacional del IGSS — Organigrama Dic 2024
 * Cascading: Subgerencia → Dirección → Departamento → Sección
 */

export const IGSS_HIERARCHY = {
  'SUBGERENCIA ADMINISTRATIVA': {
    direcciones: {},
    departamentos: {
      'DEPARTAMENTO DE COMUNICACIÓN SOCIAL Y RELACIONES PÚBLICAS': { secciones: [] },
      'DEPARTAMENTO LEGAL': {
        secciones: ['Sección de Correspondencia y Archivo', 'Sección de Recopilación de Leyes']
      },
      'DEPARTAMENTO DE ABASTECIMIENTOS': { secciones: [] },
      'DEPARTAMENTO DE SERVICIOS DE APOYO': { secciones: ['Sección de Biblioteca'] },
      'DEPARTAMENTO DE SERVICIOS CONTRATADOS': { secciones: [] },
    },
  },
  'SUBGERENCIA FINANCIERA': {
    direcciones: {
      'DIRECCIÓN DE ANÁLISIS DE RIESGOS FINANCIEROS': { departamentos: {} },
      'DIRECCIÓN DE RECAUDACIÓN': { departamentos: {} },
    },
    departamentos: {
      'DEPARTAMENTO DE PRESUPUESTO': { secciones: [] },
      'DEPARTAMENTO DE CONTABILIDAD': { secciones: [] },
      'DEPARTAMENTO DE TESORERÍA': { secciones: [] },
      'DEPARTAMENTO DE INVERSIONES': { secciones: [] },
      'DEPARTAMENTO DE COBRO ADMINISTRATIVO': { secciones: [] },
      'DEPARTAMENTO DE COBRO JUDICIAL': { secciones: [] },
      'DEPARTAMENTO DE INSPECCIÓN PATRONAL': {
        secciones: [
          'Sección Metropolitana',
          'Sección de Coordinación Departamental',
          'Sección Departamental',
          'Sección de Fiscalización Electrónica',
        ]
      },
      'DEPARTAMENTO DE REGISTRO DE PATRONOS Y TRABAJADORES': { secciones: [] },
    },
  },
  'SUBGERENCIA DE PRESTACIONES EN SALUD': {
    direcciones: {
      'DIRECCIÓN TERAPÉUTICA CENTRAL': {
        departamentos: {
          'DEPARTAMENTO DE FARMACOTERAPIA': { secciones: [] },
          'DEPARTAMENTO DE FARMACOVIGILANCIA': { secciones: [] },
          'DEPARTAMENTO DE FARMACOECONOMÍA': { secciones: [] },
          'DEPARTAMENTO DE DISPOSITIVOS MÉDICOS': { secciones: [] },
        }
      },
      'DIRECCIÓN TÉCNICA DE LOGÍSTICA DE INSUMOS, MEDICAMENTOS Y EQUIPO MÉDICO': { departamentos: {} },
    },
    departamentos: {
      'DEPARTAMENTO MÉDICO DE SERVICIOS CENTRALES': { secciones: [] },
      'DEPARTAMENTO MÉDICO DE SERVICIOS TÉCNICOS': {
        secciones: [
          'Sección de Enfermería',
          'Sección de Registros Médicos y Bioestadística',
          'Sección de Nutrición',
          'Sección de Laboratorios y Patología',
          'Sección de Bancos de Sangre',
          'Sección de Radiología',
          'Sección de Asistencia Farmacéutica',
        ]
      },
      'DEPARTAMENTO DE MEDICINA PREVENTIVA': {
        secciones: [
          'Sección de Epidemiología',
          'Sección de Higiene Materno Infantil',
          'Sección de Seguridad e Higiene',
        ]
      },
    },
  },
  'SUBGERENCIA DE PRESTACIONES PECUNIARIAS': {
    direcciones: {},
    departamentos: {
      'DEPARTAMENTO DE PRESTACIONES EN DINERO': { secciones: [] },
      'DEPARTAMENTO DE INVALIDEZ, VEJEZ Y SOBREVIVENCIA': { secciones: [] },
      'DEPARTAMENTO DE MEDICINA LEGAL Y EVALUACIÓN DE INCAPACIDADES': { secciones: [] },
      'DEPARTAMENTO DE TRABAJO SOCIAL': { secciones: [] },
      'CENTRO DE ATENCIÓN AL AFILIADO (CATAFI)': { secciones: [] },
    },
  },
  'SUBGERENCIA DE RECURSOS HUMANOS': {
    direcciones: {},
    departamentos: {
      'DEPARTAMENTO DE GESTIÓN Y PLANEACIÓN DEL RECURSO HUMANO': { secciones: [] },
      'DEPARTAMENTO DE COMPENSACIONES Y BENEFICIOS': { secciones: [] },
      'DEPARTAMENTO JURÍDICO-LABORAL': { secciones: [] },
      'DEPARTAMENTO DE CAPACITACIÓN Y DESARROLLO': { secciones: [] },
    },
  },
  'SUBGERENCIA DE PLANIFICACIÓN Y DESARROLLO': {
    direcciones: {
      'DIRECCIÓN DE COOPERACIÓN Y RELACIONES INTERNACIONALES (DICORI)': { departamentos: {} },
    },
    departamentos: {
      'DEPARTAMENTO DE PLANIFICACIÓN': { secciones: [] },
      'DEPARTAMENTO ACTUARIAL Y ESTADÍSTICO': { secciones: [] },
      'DEPARTAMENTO DE ORGANIZACIÓN Y MÉTODOS': { secciones: [] },
      'DEPARTAMENTO DE INFRAESTRUCTURA INSTITUCIONAL': { secciones: [] },
    },
  },
  'SUBGERENCIA DE TECNOLOGÍA': {
    direcciones: {
      'DIRECCIÓN DE INVESTIGACIÓN Y PROYECTOS TECNOLÓGICOS': {
        departamentos: {
          'DEPARTAMENTO DE GESTIÓN DE PROYECTOS TECNOLÓGICOS': { secciones: [] },
          'DEPARTAMENTO DE RIESGO, INVESTIGACIÓN Y GESTIÓN DEL CAMBIO TECNOLÓGICO': { secciones: [] },
        }
      },
      'DIRECCIÓN DE DESARROLLO Y GESTIÓN DE SISTEMAS': {
        departamentos: {
          'DEPARTAMENTO DE ANÁLISIS Y DESARROLLO DE SISTEMAS': { secciones: [] },
          'DEPARTAMENTO DE CONTROL DE CALIDAD': { secciones: [] },
        }
      },
      'DIRECCIÓN DE TECNOLOGÍA Y SERVICIO': {
        departamentos: {
          'DEPARTAMENTO DE INFRAESTRUCTURA TECNOLÓGICA': { secciones: [] },
          'DEPARTAMENTO DE TELECOMUNICACIONES, CONECTIVIDAD Y SEGURIDAD': { secciones: [] },
          'DEPARTAMENTO DE SOPORTE TÉCNICO': { secciones: [] },
        }
      },
    },
    departamentos: {},
  },
  'SUBGERENCIA DE INTEGRIDAD Y TRANSPARENCIA ADMINISTRATIVA': {
    direcciones: {},
    departamentos: {
      'DEPARTAMENTO DE INVESTIGACIONES ESPECIALES': { secciones: [] },
      'DEPARTAMENTO DE CAMBIO INSTITUCIONAL': { secciones: [] },
      'DEPARTAMENTO DE SUPERVISIÓN': { secciones: [] },
    },
  },
  // Units reporting directly to Gerencia
  'GERENCIA (UNIDADES DIRECTAS)': {
    direcciones: {},
    departamentos: {
      'DEPARTAMENTO DE AUDITORÍA INTERNA': { secciones: [] },
      'DEPARTAMENTO DE AUDITORÍA DE SERVICIOS DE SALUD': { secciones: [] },
      'SECRETARÍA DE GERENCIA': { secciones: [] },
      'UNIDAD DE INFORMACIÓN PÚBLICA': { secciones: [] },
    },
  },
}

// Helper: get all subgerencias
export function getSubgerencias() {
  return [...Object.keys(IGSS_HIERARCHY), 'OTRA']
}

// Helper: get direcciones for a subgerencia
export function getDirecciones(subgerencia) {
  const sub = IGSS_HIERARCHY[subgerencia]
  if (!sub) return ['NO APLICA', 'OTRA']
  const dirs = Object.keys(sub.direcciones || {})
  return dirs.length > 0 ? [...dirs, 'NO APLICA', 'OTRA'] : ['NO APLICA', 'OTRA']
}

// Helper: get departamentos for a subgerencia + optional direccion
export function getDepartamentos(subgerencia, direccion) {
  const sub = IGSS_HIERARCHY[subgerencia]
  if (!sub) return ['OTRO']

  let deptos = []

  // Departamentos under the selected dirección
  if (direccion && direccion !== 'NO APLICA' && direccion !== 'OTRA') {
    const dir = (sub.direcciones || {})[direccion]
    if (dir && dir.departamentos) {
      deptos = [...deptos, ...Object.keys(dir.departamentos)]
    }
  }

  // Departamentos directly under the subgerencia
  if (sub.departamentos) {
    deptos = [...deptos, ...Object.keys(sub.departamentos)]
  }

  return deptos.length > 0 ? [...deptos, 'OTRO'] : ['OTRO']
}

// Helper: get secciones for a departamento (searches everywhere)
export function getSecciones(subgerencia, direccion, departamento) {
  const sub = IGSS_HIERARCHY[subgerencia]
  if (!sub || !departamento || departamento === 'OTRO') return ['OTRA']

  // Check in subgerencia's direct departamentos
  const directDepto = (sub.departamentos || {})[departamento]
  if (directDepto && directDepto.secciones && directDepto.secciones.length > 0) {
    return [...directDepto.secciones, 'OTRA']
  }

  // Check in dirección's departamentos
  if (direccion && direccion !== 'NO APLICA' && direccion !== 'OTRA') {
    const dir = (sub.direcciones || {})[direccion]
    if (dir) {
      const dirDepto = (dir.departamentos || {})[departamento]
      if (dirDepto && dirDepto.secciones && dirDepto.secciones.length > 0) {
        return [...dirDepto.secciones, 'OTRA']
      }
    }
  }

  return ['OTRA']
}

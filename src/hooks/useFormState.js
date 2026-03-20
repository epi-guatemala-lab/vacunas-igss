import { useState, useCallback, useEffect } from 'react'

const STORAGE_KEY = 'vacunas_form_data'
const SUBMITTED_KEY = 'vacunas_submitted_records'

/**
 * Hook para manejar el estado global del formulario
 * con persistencia en localStorage
 */
export function useFormState(initialData = {}) {
  const [formData, setFormData] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      return saved ? { ...initialData, ...JSON.parse(saved) } : initialData
    } catch {
      return initialData
    }
  })

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(formData))
    } catch {
      // localStorage lleno o no disponible
    }
  }, [formData])

  const updateField = useCallback((fieldId, value) => {
    setFormData(prev => ({
      ...prev,
      [fieldId]: value,
    }))
  }, [])

  const updateMultipleFields = useCallback((updates) => {
    setFormData(prev => ({
      ...prev,
      ...updates,
    }))
  }, [])

  const resetForm = useCallback(() => {
    setFormData({})
    localStorage.removeItem(STORAGE_KEY)
  }, [])

  /**
   * Verifica si un registro con el mismo CUI ya fue enviado
   * recientemente (últimos 7 días). Checks by CUI alone.
   */
  const isDuplicate = useCallback((cui) => {
    try {
      const records = JSON.parse(localStorage.getItem(SUBMITTED_KEY) || '[]')
      // Limpiar registros mayores a 7 días
      const sevenDays = 7 * 24 * 60 * 60 * 1000
      const recent = records.filter(r => Date.now() - r.timestamp < sevenDays)
      localStorage.setItem(SUBMITTED_KEY, JSON.stringify(recent))
      return recent.some(r => r.key === cui)
    } catch {
      return false
    }
  }, [])

  const markAsSubmitted = useCallback((cui) => {
    try {
      const records = JSON.parse(localStorage.getItem(SUBMITTED_KEY) || '[]')
      records.push({ key: cui, timestamp: Date.now() })
      localStorage.setItem(SUBMITTED_KEY, JSON.stringify(records))
    } catch {
      // ignore
    }
  }, [])

  const clearSubmitted = useCallback(() => {
    // No limpiar submitted records al crear nuevo formulario
    // solo limpiar los datos del formulario actual
  }, [])

  return {
    formData,
    updateField,
    updateMultipleFields,
    resetForm,
    isDuplicate,
    markAsSubmitted,
    clearSubmitted,
  }
}

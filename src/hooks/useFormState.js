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
   * recientemente (últimas 24 horas).
   */
  const isDuplicate = useCallback((cui, timestamp) => {
    try {
      const records = JSON.parse(localStorage.getItem(SUBMITTED_KEY) || '[]')
      const key = `${cui}_${timestamp}`
      // Limpiar registros mayores a 24 horas
      const recent = records.filter(r => Date.now() - r.timestamp < 86400000)
      localStorage.setItem(SUBMITTED_KEY, JSON.stringify(recent))
      return recent.some(r => r.key === key)
    } catch {
      return false
    }
  }, [])

  const markAsSubmitted = useCallback((cui, timestamp) => {
    try {
      const records = JSON.parse(localStorage.getItem(SUBMITTED_KEY) || '[]')
      const key = `${cui}_${timestamp}`
      records.push({ key, timestamp: Date.now() })
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

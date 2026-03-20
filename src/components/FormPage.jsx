import TextField from './fields/TextField.jsx'
import SelectField from './fields/SelectField.jsx'
import SearchableSelect from './fields/SearchableSelect.jsx'
import DateField from './fields/DateField.jsx'
import RadioField from './fields/RadioField.jsx'
import CheckboxField from './fields/CheckboxField.jsx'
import TextAreaField from './fields/TextAreaField.jsx'
import NumberField from './fields/NumberField.jsx'
import PhoneField from './fields/PhoneField.jsx'
import FileField from './fields/FileField.jsx'
import { getDirecciones, getDepartamentos, getSecciones } from '../config/igssOrganizacion.js'

// Dynamic option resolvers for cascading dropdowns
const dynamicResolvers = {
  getDirecciones: (formData) => getDirecciones(formData.subgerencia),
  getDepartamentos: (formData) => getDepartamentos(formData.subgerencia, formData.direccion_igss),
  getSecciones: (formData) => getSecciones(formData.subgerencia, formData.direccion_igss, formData.departamento_igss),
}

const fieldComponents = {
  text: TextField,
  email: TextField,
  select: SelectField,
  date: DateField,
  radio: RadioField,
  checkbox: CheckboxField,
  textarea: TextAreaField,
  number: NumberField,
  phone: PhoneField,
  file: FileField,
}

function getFieldComponent(field) {
  if (field.searchable && field.type === 'select') return SearchableSelect
  return fieldComponents[field.type]
}

export default function FormPage({ fields, formData, onFieldChange, errors, pageLabel }) {
  let currentSection = null

  return (
    <div className="page-enter">
      {/* Page title with decorative accent */}
      <div className="flex items-center gap-3 mb-6">
        <div className="w-1 h-8 rounded-full bg-gradient-to-b from-igss-700 to-igss-500" />
        <h2 className="text-lg font-extrabold text-igss-900 tracking-tight">
          {pageLabel}
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-5">
        {fields.map((field) => {
          const FieldComponent = getFieldComponent(field)
          if (!FieldComponent) return null

          // Resolve dynamic options for cascading dropdowns
          let resolvedField = field
          if (field.dynamicOptions && field.dynamicOptions.resolver) {
            const resolver = dynamicResolvers[field.dynamicOptions.resolver]
            if (resolver) {
              const computedOptions = resolver(formData)
              resolvedField = { ...field, options: computedOptions }
            }
          }

          const fieldErrors = errors[resolvedField.id] || []
          const hasError = fieldErrors.length > 0
          const isFullWidth = resolvedField.colSpan === 'full'

          // Section title
          let sectionEl = null
          if (resolvedField.sectionTitle && resolvedField.sectionTitle !== currentSection) {
            currentSection = resolvedField.sectionTitle
            sectionEl = (
              <div className="col-span-1 md:col-span-2 mt-4 mb-1">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-[2px] bg-igss-gold rounded-full" />
                  <h3 className="text-xs font-bold text-igss-brown uppercase tracking-[0.1em]">
                    {resolvedField.sectionTitle}
                  </h3>
                  <div className="flex-1 h-[1px] bg-gray-200" />
                </div>
              </div>
            )
          }

          return (
            <div
              key={resolvedField.id}
              className={`field-transition ${isFullWidth ? 'col-span-1 md:col-span-2' : ''}`}
            >
              {sectionEl}
              <label
                htmlFor={resolvedField.id}
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                {resolvedField.label}
                {resolvedField.required && (
                  <span className="text-igss-red ml-0.5 text-xs">*</span>
                )}
              </label>

              <FieldComponent
                field={resolvedField}
                value={formData[resolvedField.id]}
                onChange={onFieldChange}
                error={hasError}
              />

              {resolvedField.helpText && !hasError && (
                <p className="mt-1.5 text-[11px] text-gray-400 leading-snug">{resolvedField.helpText}</p>
              )}

              {hasError && (
                <div className="mt-1.5 slide-up">
                  {fieldErrors.map((err, i) => (
                    <p key={i} className="text-[11px] text-igss-red font-semibold flex items-center gap-1">
                      <svg className="w-3 h-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                      {err}
                    </p>
                  ))}
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

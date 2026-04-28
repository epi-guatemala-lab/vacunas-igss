// Opción de "ninguna" — al seleccionarla se deseleccionan las demás
// (mutuamente excluyente). Si se cambia el texto en formSchema, actualizar acá.
const NONE_OPTION = 'Ninguna de las anteriores'

export default function CheckboxField({ field, value, onChange, error }) {
  const options = field.options || []
  const selected = Array.isArray(value) ? value : value ? [value] : []

  const handleChange = (opt) => {
    if (opt === NONE_OPTION) {
      const newValue = selected.includes(NONE_OPTION) ? [] : [NONE_OPTION]
      onChange(field.id, newValue)
    } else {
      const withoutNone = selected.filter(v => v !== NONE_OPTION)
      const newValue = withoutNone.includes(opt)
        ? withoutNone.filter(v => v !== opt)
        : [...withoutNone, opt]
      onChange(field.id, newValue)
    }
  }

  return (
    <div className="flex flex-col gap-2">
      {options.map((opt) => (
        <label
          key={opt}
          className={`flex items-start gap-3 px-4 py-3 rounded-xl border-2 cursor-pointer transition-all duration-200 select-none ${
            selected.includes(opt)
              ? 'bg-igss-800 text-white border-igss-800 shadow-igss'
              : error
                ? 'bg-white border-igss-red/30 hover:bg-red-50/50'
                : 'bg-white border-gray-200 hover:border-igss-400 hover:bg-igss-50'
          }`}
        >
          <input
            type="checkbox"
            checked={selected.includes(opt)}
            onChange={() => handleChange(opt)}
            className="sr-only"
          />
          <div className={`mt-0.5 shrink-0 w-5 h-5 rounded border-2 flex items-center justify-center transition-all ${
            selected.includes(opt)
              ? 'border-white bg-white/20'
              : 'border-gray-300'
          }`}>
            {selected.includes(opt) && (
              <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            )}
          </div>
          <span className="text-sm font-medium leading-relaxed">{opt}</span>
        </label>
      ))}
    </div>
  )
}

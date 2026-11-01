export default function FieldInput({ field, value, onChange }) {
  if (field.options) {
    return (
      <select value={value} onChange={(e) => onChange(e.target.value)}>
        <option value="" disabled hidden />
        {field.options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
    );
  }
  return (
    <input
      type={field.type || 'text'}
      min={field.type === 'number' ? 0 : undefined}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}

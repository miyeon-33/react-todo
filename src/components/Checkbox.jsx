import React from 'react';

export default function Checkbox({
  label,
  checked,
  onChange,
  name,
  className,
}) {
  return (
    <label className={`checkbox ${className}`}>
      <input
        type="checkbox"
        className="sr-only"
        checked={checked}
        onChange={onChange}
        name={name}
      />
      <span className="line-clamp-2">{label}</span>
    </label>
  );
}

import React from "react";

const InputField = (props) => {
  const { label, name, type, value, updateForm, placeholder, className, accept } = props;
  return (
    <div className={className}>
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        value={value}
        name={name}
        placeholder={placeholder}
        onChange={updateForm}
        accept={accept}
        required
      />
    </div>
  );
};

export default InputField;

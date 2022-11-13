import React from "react";

const InputField = (props) => {
  const { label, name, type, value, updateForm } = props;
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        value={value}
        name={name}
        onChange={updateForm}
        required
      />
    </div>
  );
};

export default InputField;

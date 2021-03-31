import React from 'react';

const FormComponent = ({ placeholder, type, onChange, name, value }) => {
  return (
    <div>
      <input
        type={type ? type : 'text'}
        placeholder={placeholder}
        onChange={onChange}
        name={name}
        value={value}
      />
    </div>
  );
};

export default FormComponent;

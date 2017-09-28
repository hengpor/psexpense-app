import React from 'react';

const TextFieldGroup = ({ field, value, label, type }) => {
  return (
    <div className='form-group'>
      <input
        type={type}
        name={field}
        placeholder={label}
      />
    </div>  );
}

export default TextFieldGroup;

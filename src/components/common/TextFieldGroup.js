import React from 'react';
import PropTypes from 'prop-types';

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

TextFieldGroup.propTypes = {
  field: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
}

TextFieldGroup.defaultProps = {
  type: 'text'
}

export default TextFieldGroup;

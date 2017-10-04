import React from 'react';
import PropTypes from 'prop-types';


const InputPreview = ({ value, onChange }) => (
  <div>
    <input
      type="text"
      value={value}
      onChange={e => onChange(e.target.value)}
    />
  </div>
);

InputPreview.PropTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default InputPreview;

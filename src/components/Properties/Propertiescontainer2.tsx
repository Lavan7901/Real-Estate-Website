import React from 'react';

interface InputProps {
  label: string;
  placeholder: string;
}

interface SelectProps {
  label: string;
  option: string;
}

type Propertiescontainer2Props = InputProps | SelectProps;

const Propertiescontainer2: React.FC<Propertiescontainer2Props> = (props) => {
  if ('placeholder' in props) {
    // Render input for InputProps
    const { label, placeholder } = props as InputProps;
    return (
      <div className='properties1-box'>
        <div className='properties-input'>
          <label>{label}</label>
          <input className='field-name' type="text" placeholder={placeholder} />
        </div>
      </div>
    );
  } else {
    // Render select for SelectProps
    const { label, option } = props as SelectProps;
    return (
      <div className='properties1-box'>
        <div className='properties-select'>
          <label>{label}</label>
          <select className='select-values'>
            <option value={option}>{option}</option>
          </select>
        </div>
      </div>
    );
  }
};

export default Propertiescontainer2;

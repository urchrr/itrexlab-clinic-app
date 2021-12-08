import Select from 'react-select';
import React from 'react';
import SelectorStyles from './SelectorStyles';

const Selector = function ({ options, formik, name }) {
  return (
    <Select
      name={name}
      styles={SelectorStyles}
      options={options}
      value={
          options
            ? options.find(
              (option) => option.value
                        === formik.values[name],
            )
            : ''
        }
      onChange={({ value }) => formik.setFieldValue(name, value)}
      onBlur={() => formik.setFieldTouched(name, true)}
    />
  );
};

export default Selector;

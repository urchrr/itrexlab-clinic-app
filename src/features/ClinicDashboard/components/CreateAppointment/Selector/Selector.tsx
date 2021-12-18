import Select from 'react-select';
import React from 'react';
import { useFormikContext } from 'formik';
import { CreateAppointmentFormValues } from 'types/appointments';
import SelectorStyles from './SelectorStyles';

type OptionsType = {
  label: string;
  value: string;
};
type CustomSelectProps = {
  options: OptionsType[],
  name: 'occupation' | 'doctorID',
};

const Selector: React.FC<CustomSelectProps> = function ({ options, name }) {
  const {
    setFieldValue,
    values,
    setFieldTouched,
  } = useFormikContext<CreateAppointmentFormValues>();

  return (
    <Select
      name={name}
      styles={SelectorStyles}
      options={options}
      value={
          options
            ? options.find(
              (option) => option.value
                        === values[name],
            )
            : ''
        }
      onChange={({ value }:any) => setFieldValue(name, value)}
      onBlur={() => setFieldTouched(name, true)}
    />
  );
};

export default Selector;

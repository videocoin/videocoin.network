import React from 'react';
import { Input as BaseInput, FieldAction } from 'ui-kit';
import { useField } from 'formik';

const Input = ({ name, ...rest }: any) => {
  const [field, meta] = useField(name);
  const hasError = meta.touched ? Boolean(meta.error) : false;
  console.log(meta);
  return (
    <BaseInput
      {...field}
      {...rest}
      error={hasError}
      postfix={() =>
        hasError && (
          <FieldAction color="pink" icon="incomplete">
            {meta.error}
          </FieldAction>
        )
      }
    />
  );
};

export default Input;

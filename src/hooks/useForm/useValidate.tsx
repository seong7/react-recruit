import { MutableRefObject, useState } from 'react';
import { Options, RegisterOption, Values } from './index';
import { isRegex } from '../../utills';

export const useValidate = <K extends string>(
  valueRef: MutableRefObject<Values<K>>,
  optionRef: MutableRefObject<Options<K>>,
) => {
  const [errors, setErrors] = useState<ValidationError<K>>(
    {} as ValidationError<K>,
  );

  const validate = (key: K) => {
    const value = valueRef.current[key];
    const option = optionRef.current[key];

    if (option) {
      let isRequiredValid = option.required
        ? value !== '' || (Array.isArray(value) && !value.length)
        : true;
      let isPatternValid = option.pattern
        ? isRegex(option.pattern) && value.match(option.pattern) !== null
        : true;

      const isValid = isRequiredValid && isPatternValid;

      setErrors((prev) => {
        if (isValid) {
          return hasError(prev, key) ? removeError(prev, key) : prev;
        } else {
          return !hasError(prev, key) ? addError(prev, key) : prev;
        }
      });

      return isValid;
    }
  };

  return { validate, errors };
};

const hasError = <K extends string>(errors: ValidationError<K>, key: K) =>
  errors[key];

const addError = <K extends string>(errors: ValidationError<K>, key: K) => ({
  ...errors,
  [key]: true,
});

const removeError = <K extends string>(errors: ValidationError<K>, key: K) => {
  delete errors[key];
  return { ...errors };
};

type ValidationError<K extends string> = Record<K, boolean>;

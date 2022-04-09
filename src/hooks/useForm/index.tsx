import React, { BaseSyntheticEvent, useCallback, useRef } from 'react';
import { isObjectEmpty } from '../../utills';
import { useValidate } from './useValidate';

export const useForm = <K extends string>() => {
  const keys: K[] = [];
  const valueRef = useRef<Values<K>>({} as Values<K>);
  const optionRef = useRef<Options<K>>({} as Options<K>);

  const { validate, errors } = useValidate<K>(valueRef, optionRef);

  const register = (uniqueKey: K, option?: RegisterOption) => {
    if (valueRef.current[uniqueKey] === undefined) {
      valueRef.current = {
        ...valueRef.current,
        [uniqueKey]: '',
      };
      keys.push(uniqueKey);
    }
    if (optionRef.current[uniqueKey] === undefined) {
      optionRef.current = {
        ...optionRef.current,
        [uniqueKey]: option,
      };
    }
    return { onChange: changeHandler(uniqueKey) };
  };

  const changeHandler = useCallback(
    (key: K) => (e: BaseSyntheticEvent | undefined) => {
      if (e && e.currentTarget) {
        const inputValue = e.currentTarget.value;
        valueRef.current = {
          ...valueRef.current,
          [key]: inputValue,
        };
        validate(key);
      }
    },
    [validate],
  );

  const handleSubmit =
    (callback: () => void) => (e: BaseSyntheticEvent | undefined) => {
      if (e) {
        e.preventDefault && e.preventDefault();
      }

      if (isObjectEmpty(errors) && keys.every(validate)) {
        callback();
      }
    };

  const getValues = useCallback(() => {
    const valueCopied = JSON.parse(JSON.stringify(valueRef.current));
    return valueCopied as Readonly<Record<K, string>>;
  }, []);

  return { register, handleSubmit, getValues, errors };
};

export type RegisterOption = {
  required?: boolean;
  pattern?: RegExp;
};

export type Values<K extends string> = Record<K, string>;
export type Options<K extends string> = Record<K, RegisterOption>;

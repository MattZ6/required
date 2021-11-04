import { InputHTMLAttributes, useCallback, useEffect, useRef, useState } from 'react';
import { IconType } from 'react-icons';
import { useField } from '@unform/core';

import styles from './styles.module.scss';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  name: string;
  label: string;
  icon: IconType;
}

export function Input({ label, name, icon: Icon, ...rest }: InputProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const { fieldName, registerField, error, defaultValue } = useField(name);

  const [isFilled, setIsFilled] = useState(false);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });

    setIsFilled(!!String(inputRef.current?.value ?? '').length);
  }, [registerField, fieldName]);

  useEffect(() => {
    setIsFilled(!!inputRef.current?.value);
  }, [rest.disabled]);

  const handleInputBlur = useCallback(() => {
    setIsFilled(!!inputRef.current?.value);
  }, []);

  return (
    <div className={`${styles.wrapper} ${rest.disabled ? styles.disabled : ''}`}>
      <label
        className={
          `${styles.container} ${isFilled ? styles.filled : ''} ${rest.disabled ? styles.disabled : ''} ${!!error ? styles.withError : ''}`
        }
      >
        <small>{label}</small>
        <input
          ref={inputRef}
          defaultValue={defaultValue}
          name={name}
          onBlur={handleInputBlur}
          {...rest}
        />

        <Icon size={20} />
      </label>

      <div className={styles.error}>
        {error && <span>{error}</span>}
      </div>
    </div>
  );
}

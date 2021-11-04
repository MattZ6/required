import { InputHTMLAttributes, useMemo, useState } from 'react';
import { IconType } from 'react-icons';

import styles from './styles.module.scss';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  icon: IconType;
}

export function Input({ label, icon: Icon, ...rest }: InputProps) {
  const [value, setValue] = useState(rest.value);

  const error = '';

  const isFilled = useMemo(() => {
    return String(value ?? '').length > 0;
  }, [value]);

  return (
    <div className={`${styles.wrapper} ${rest.disabled ? styles.disabled : ''}`}>
      <label
        className={
          `${styles.container} ${isFilled ? styles.filled : ''} ${rest.disabled ? styles.disabled : ''} ${!!error ? styles.withError : ''}`
        }
      >
        <small>{label}</small>
        <input
          {...rest}
          onChange={event => setValue(event.target.value)}
        />

        <Icon size={20} />
      </label>

      <div className={styles.error}>
        {error && <span>{error}</span>}
      </div>
    </div>
  );
}

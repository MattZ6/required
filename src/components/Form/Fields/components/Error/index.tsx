import { FieldError } from 'react-hook-form';

import { FormFieldErrorStyles as Styles } from './styles';

type Props = {
  error?:FieldError;
}

export function FormFieldError({ error }: Props) {
  return (
    <Styles.Container>
      { error && <Styles.Error>{ error.message }</Styles.Error> }
    </Styles.Container>
  );
}

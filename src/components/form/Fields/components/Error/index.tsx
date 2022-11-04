import { useTranslations } from 'next-intl'
import { FieldError } from 'react-hook-form'

import { FormFieldErrorStyles as Styles } from './styles'

type Props = {
  error?: FieldError
}

export function FormFieldError({ error }: Props) {
  const t = useTranslations()

  return (
    <Styles.Container>
      {error && <Styles.Error>{t(error.message as any)}</Styles.Error>}
    </Styles.Container>
  )
}

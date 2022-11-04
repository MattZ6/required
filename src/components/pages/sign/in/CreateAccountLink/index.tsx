import { useTranslations } from 'next-intl'
import { useRouter } from 'next/router'

import { TextLink } from '@components/Link'

export function CreateAccountLink() {
  const { locale } = useRouter()

  const t = useTranslations('sign-in.footer')

  return (
    <TextLink to="/sign/up" locale={locale}>
      {t('create_account')}
    </TextLink>
  )
}

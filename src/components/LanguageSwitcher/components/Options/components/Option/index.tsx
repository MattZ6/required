import { useTranslations } from 'next-intl'

import { LanguageSwitcherFlagImage as Flag } from '@components/LanguageSwitcher/components'

import { LanguageSwitcherOptionSyles as Styles } from './styles'

type Props = {
  locale: string
}

export function LanguageSwitcherOption({ locale }: Props) {
  const t = useTranslations('common.locales')

  return (
    <Styles.Option value={locale}>
      <Flag locale={locale as any} width={22} height={16.5} />

      <Styles.Text>{t(locale as any)}</Styles.Text>
    </Styles.Option>
  )
}

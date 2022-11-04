import { useTranslations } from 'next-intl'
import { useRouter } from 'next/router'
import { MdKeyboardArrowDown } from 'react-icons/md'

import { LanguageSwitcherFlagImage as Flag } from '../Flag'
import { LanguageSwitcherTriggerStyles as Styles } from './styles'

export function LanguageSwitcherTrigger() {
  const t = useTranslations('common.locales')
  const { locale } = useRouter()

  return (
    <Styles.Trigger>
      <Flag locale={locale as any} width={24} height={18} />

      <Styles.Label>{t(locale as any)}</Styles.Label>

      <MdKeyboardArrowDown />
    </Styles.Trigger>
  )
}

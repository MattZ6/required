import { useTranslations } from 'next-intl'
import { MdSecurity } from 'react-icons/md'

import { Title } from '@components/Title'

import { HeaderTitleStyles as Styles } from './styles'

export function HeaderTitle() {
  const t = useTranslations('app')

  return (
    <Styles.Container>
      <MdSecurity size={28} />

      <Title as="h6">{t('title')}</Title>
    </Styles.Container>
  )
}

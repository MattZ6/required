import { useTranslations } from 'next-intl'

import { ProjectAuthor as Author } from './components'
import { ProjectStyles as Styles } from './styles'

export function Project() {
  const t = useTranslations('common.project')

  return (
    <Styles.Container>
      <Styles.Description>{t('description')}</Styles.Description>

      <Author />
    </Styles.Container>
  )
}

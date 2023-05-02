import { useTranslations } from 'next-intl'

import { withLocaleMessages } from '@utils/ssg/withLocaleMessages'

import { PageHeader } from '@components/pages/components'
import { PasswordResetForm } from '@components/pages/password/reset/Form'
import { CommonPageStyles as Styles } from '@components/pages/styles'
import { SEO } from '@components/SEO'

export default function PasswordResetPage() {
  const t = useTranslations('password-reset-page')

  return (
    <Styles.Page>
      <SEO
        title={t('title')}
        description={t('description')}
        icon={{ path: '/password-reset.png', type: 'image/png' }}
        image="/assets/seo/pages/password-reset.png"
      />

      <PageHeader
        title={t('title')}
        description={t('description')}
        backLinkUrl="/sign/in"
      />

      <PasswordResetForm />
    </Styles.Page>
  )
}

export const getStaticProps = withLocaleMessages(async () => {
  return {
    props: {},
  }
})

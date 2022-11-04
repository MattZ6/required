import { useTranslations } from 'next-intl'

import { withLocaleMessages } from '@utils/ssg/withLocaleMessages'

import { PageHeader } from '@components/pages/components'
import { UpdateProfileEmailForm } from '@components/pages/profile/email/Form'
import { CommonPageStyles as Styles } from '@components/pages/styles'
import { SEO } from '@components/SEO'

export default function UpdateProfileEmailPage() {
  const t = useTranslations('update-profile-email')

  return (
    <Styles.Page>
      <SEO
        title={t('title')}
        description={t('description')}
        icon={{ path: '/edit.png', type: 'image/png' }}
        image="/assets/seo/pages/edit.png"
      />

      <PageHeader
        title={t('title')}
        description={t('description')}
        backLinkUrl="/profile"
      />

      <UpdateProfileEmailForm />
    </Styles.Page>
  )
}

export const getStaticProps = withLocaleMessages(async () => {
  return {
    props: {},
  }
})

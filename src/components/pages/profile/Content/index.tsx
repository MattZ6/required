import { useTranslations } from 'next-intl'
import { MdOutlineEmojiEmotions, MdMailOutline, MdVpnKey } from 'react-icons/md'

import { GetProfileService } from '@services/user/profile/getProfile'

import { PropertyLink } from './components'
import { ProfileContentStyles as Styles } from './styles'

type Props = {
  profile: GetProfileService.Profile
}

export function ProfileContent({ profile }: Props) {
  const t = useTranslations('profile')

  return (
    <Styles.Container>
      <PropertyLink
        trailingIcon={MdOutlineEmojiEmotions}
        label={t('links.name.label')}
        value={profile.name}
        to="/profile/name"
      />

      <PropertyLink
        trailingIcon={MdMailOutline}
        label={t('links.email.label')}
        value={profile.email}
        to="/profile/email"
      />

      <PropertyLink
        trailingIcon={MdVpnKey}
        label={t('links.password.label')}
        value={t('links.password.text')}
        to="/profile/password"
      />
    </Styles.Container>
  )
}

import {
  MdOutlineEmojiEmotions,
  MdMailOutline,
  MdVpnKey,
} from 'react-icons/md';

import { useTranslation } from '@hooks/useTranslation';

import { PropertyLink } from './components';
import { ProfileContentStyles as Styles } from './styles';

export function ProfileContent() {
  const t = useTranslation('profile');

  return (
    <Styles.Container>
      <PropertyLink
        trailingIcon={MdOutlineEmojiEmotions}
        label={t('links.name.label')}
        value="Matheus Felipe Zanin"
        to="/profile/name"
      />

      <PropertyLink
        trailingIcon={MdMailOutline}
        label={t('links.email.label')}
        value="matt@email.com"
        to="/profile/email"
      />

      <PropertyLink
        trailingIcon={MdVpnKey}
        label={t('links.password.label')}
        value={t('links.password.text')}
        to="/profile/password"
      />
    </Styles.Container>
  );
}

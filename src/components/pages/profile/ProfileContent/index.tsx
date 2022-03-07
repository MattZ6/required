import {
  MdOutlineEmojiEmotions,
  MdMailOutline,
  MdVpnKey,
} from 'react-icons/md';

import { PropertyLink } from './components';
import { ProfileContentStyles as Styles } from './styles';

export function ProfileContent() {
  return (
    <Styles.Container>
      <PropertyLink
        trailingIcon={MdOutlineEmojiEmotions}
        label="Name"
        value="Matheus Felipe Zanin"
        to="/profile/name"
      />

      <PropertyLink
        trailingIcon={MdMailOutline}
        label="E-mail"
        value="matt@email.com"
        to="/profile/name"
      />

      <PropertyLink
        trailingIcon={MdVpnKey}
        label="Senha"
        value="Alterar minha senha"
        to="/profile/password"
      />
    </Styles.Container>
  );
}

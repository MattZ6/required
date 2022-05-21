import { useTranslations } from 'next-intl';

import { Text } from '@components/Text';
import { Title } from '@components/Title';

import { ProfileTitleStyles as Styles } from './styles';

export function ProfileTitle() {
  const t = useTranslations('profile');

  return (
    <Styles.Container>
      <Text>{t('label', { firstName: 'User' })}</Text>
      <Title as="h4">{t('title')}</Title>
    </Styles.Container>
  );
}

import { useTranslation } from '@hooks/useTranslation';

import { SEO } from '@components/SEO';
import { Text } from '@components/Text';
import { Title } from '@components/Title';

import { ProfileTitleStyles as Styles } from './styles';

export function ProfileTitle() {
  const t = useTranslation('profile');

  return (
    <Styles.Container>
      <SEO title={t('label', { firstName: 'User' })} description={t('title')} />

      <Text>{t('label', { firstName: 'User' })}</Text>
      <Title as="h4">{t('title')}</Title>
    </Styles.Container>
  );
}

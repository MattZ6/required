import { MdSecurity } from 'react-icons/md';

import { useTranslation } from '@hooks/useTranslation';

import { HeaderTitleStyles as Styles } from './styles';

import { Title } from '@components/Title';

export function HeaderTitle() {
  const t = useTranslation('app');

  return (
    <Styles.Container>
      <MdSecurity size={28} />

      <Title as="h6">{t('title')}</Title>
    </Styles.Container>
  );
}

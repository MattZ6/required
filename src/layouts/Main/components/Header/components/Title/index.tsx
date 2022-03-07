import { MdSecurity } from 'react-icons/md';

import { useTranslation } from '@hooks/useTranslation';

import { Title } from '@components/Title';

import { HeaderTitleStyles as Styles } from './styles';

export function HeaderTitle() {
  const t = useTranslation('app');

  return (
    <Styles.Container>
      <MdSecurity size={28} />

      <Title as="h6">{t('title')}</Title>
    </Styles.Container>
  );
}

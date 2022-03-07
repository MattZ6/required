import { useTranslation } from '@hooks/useTranslation';

import { ProjectAuthor as Author } from './components';
import { ProjectStyles as Styles } from './styles';

export function Project() {
  const t = useTranslation('common');

  return (
    <Styles.Container>
      <Styles.Description>{t('project.description')}</Styles.Description>

      <Author />
    </Styles.Container>
  );
}

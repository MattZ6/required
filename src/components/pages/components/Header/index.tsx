import { SEO } from '@components/SEO';
import { Text } from '@components/Text';
import { Title } from '@components/Title';

import { BackButton } from './components';
import { HeaderStyles as Styles } from './styles';

type PageHeaderProps = {
  title: string;
  description: string;
  backLinkUrl?: string;
};

export function PageHeader({
  title,
  description,
  backLinkUrl,
}: PageHeaderProps) {
  return (
    <Styles.Container>
      <SEO title={title} description={description} />

      <Styles.ButtonContainer>
        {backLinkUrl && <BackButton to={backLinkUrl} />}
      </Styles.ButtonContainer>

      <Title as="h4">{title}</Title>
      <Text as="p">{description}</Text>
    </Styles.Container>
  );
}

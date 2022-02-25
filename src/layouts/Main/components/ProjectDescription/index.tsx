import { ProjectDescriptionStyles as Styles } from './styles';

export function ProjectDescription() {
  return (
    <Styles.Container>
      <p>O projeto foi criado no intuito de </p>

      <Author />
    </Styles.Container>
  );
}

function Author() {
  return (
    <address>
      <strong>Matheus Felipe Zanin</strong>
    </address>
  );
}

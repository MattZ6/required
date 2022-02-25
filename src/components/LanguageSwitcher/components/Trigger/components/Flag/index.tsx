import { LanguageSwitcherTriggerFlagImageStyles as Styles } from './styles';

const FLAGS_MAP = {
  'en-US': {
    name: 'EUA flag',
    path: '/assets/icons/us.svg'
  },
  'pt-BR': {
    name: 'Brazilian flag',
    path: '/assets/icons/br.svg'
  },
}

type Props = {
  locale?: keyof typeof FLAGS_MAP;
}

export function LanguageSwitcherTriggerFlagImage({ locale }: Props) {
  if (!locale) {
    return null;
  }

  return (
    <Styles.Container>
      <Styles.Flag
        src={FLAGS_MAP[locale].path}
        alt={FLAGS_MAP[locale].name}
        width={28}
        height={21}
      />
    </Styles.Container>
  );
}

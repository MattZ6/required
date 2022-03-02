import { LanguageSwitcherFlagImageStyles as Styles } from './styles';

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
  width: number;
  height: number;
}

export function LanguageSwitcherFlagImage({ locale, width, height }: Props) {
  return (
    <Styles.Container
      style={{ width, height }}
    >
      {
        locale && (
          <Styles.Flag
            src={FLAGS_MAP[locale].path}
            alt={FLAGS_MAP[locale].name}
            width={width}
            height={height}
          />
        )
      }
    </Styles.Container>
  );
}

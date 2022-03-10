import { LoadingSpinnerStyles as Styles } from './styles';

export function LoadingSpinner() {
  return (
    <Styles.Svg viewBox="0 0 50 50">
      <Styles.Circle cx="25" cy="25" r="20" fill="none" strokeWidth="5" />
    </Styles.Svg>
  );
}

import { FormFieldLabelStyles as Styles } from './styles';

type Props = {
  label: string;
}

export function FormFieldLabel({ label }: Props) {
  return <Styles.Label>{ label }</Styles.Label>
}
